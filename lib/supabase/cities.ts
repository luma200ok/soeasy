import { createClient } from "@/utils/supabase/server";
import type {
  BudgetFilter,
  City,
  CityFilters,
  EnvironmentFilter,
  LikeType,
  MonthlyCostDetail,
  RegionFilter,
  SeasonFilter,
  Spot,
} from "@/lib/city-types";

type CityRow = {
  id: number;
  name: string;
  province: string;
  region: RegionFilter;
  budget: BudgetFilter;
  monthly_cost: number;
  image_url: string;
  description: string;
  city_cost_details: MonthlyCostDetail | MonthlyCostDetail[] | null;
  city_environments: { environment: EnvironmentFilter }[] | null;
  city_seasons: { season: SeasonFilter }[] | null;
  city_spots: Array<{
    id: number;
    name: string;
    category: Spot["category"];
    description: string;
    sort_order: number;
  }> | null;
};

type LikeRow = {
  city_id: number;
  user_id: string;
  type: LikeType;
};

const CITY_SELECT = `
  id,
  name,
  province,
  region,
  budget,
  monthly_cost,
  image_url,
  description,
  city_cost_details (
    housing,
    food,
    transport,
    etc
  ),
  city_environments (
    environment
  ),
  city_seasons (
    season
  ),
  city_spots (
    id,
    name,
    category,
    description,
    sort_order
  )
`;

export const DEFAULT_CITY_FILTERS: CityFilters = {
  budget: "all",
  region: "all",
  environment: "all",
  season: "all",
};

const FILTER_VALUES = {
  budget: ["all", "under100", "100to200", "over200"],
  region: ["all", "수도권", "경상도", "전라도", "강원도", "제주도", "충청도"],
  environment: ["all", "자연친화", "도심선호", "카페작업", "코워킹 필수"],
  season: ["all", "봄", "여름", "가을", "겨울"],
} satisfies Record<keyof CityFilters, readonly string[]>;

export function normalizeCityFilters(searchParams: Record<string, string | string[] | undefined>): CityFilters {
  return {
    budget: normalizeSingle("budget", searchParams.budget, DEFAULT_CITY_FILTERS.budget),
    region: normalizeSingle("region", searchParams.region, DEFAULT_CITY_FILTERS.region),
    environment: normalizeSingle("environment", searchParams.environment, DEFAULT_CITY_FILTERS.environment),
    season: normalizeSingle("season", searchParams.season, DEFAULT_CITY_FILTERS.season),
  } as CityFilters;
}

export async function getCities(filters: CityFilters = DEFAULT_CITY_FILTERS, userId?: string): Promise<City[]> {
  const supabase = await createClient();
  let query = supabase.from("cities").select(CITY_SELECT);

  if (filters.budget !== "all") {
    query = query.eq("budget", filters.budget);
  }

  if (filters.region !== "all") {
    query = query.eq("region", filters.region);
  }

  const { data, error } = await query.order("id", { ascending: true });
  if (error) throw error;

  const rows = (data ?? []) as unknown as CityRow[];
  const likes = await getLikeRows(rows.map((row) => row.id));

  return rows
    .map((row) => mapCity(row, likes, userId))
    .filter((city) => filters.environment === "all" || city.environments.includes(filters.environment))
    .filter((city) => filters.season === "all" || city.bestSeasons.includes(filters.season))
    .sort((a, b) => b.likes - a.likes || a.id - b.id);
}

export async function getCityById(id: number, userId?: string): Promise<City | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("cities")
    .select(CITY_SELECT)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  const likes = await getLikeRows([id]);
  return mapCity(data as unknown as CityRow, likes, userId);
}

export async function getRelatedCities(city: City, userId?: string): Promise<City[]> {
  const cities = await getCities(DEFAULT_CITY_FILTERS, userId);

  return cities
    .filter((candidate) => candidate.id !== city.id)
    .filter(
      (candidate) =>
        candidate.region === city.region ||
        candidate.environments.some((environment) => city.environments.includes(environment))
    )
    .slice(0, 3);
}

function normalizeSingle<T extends keyof CityFilters>(
  key: T,
  value: string | string[] | undefined,
  fallback: CityFilters[T]
): CityFilters[T] {
  const candidate = Array.isArray(value) ? value[0] : value;
  return FILTER_VALUES[key].includes(candidate ?? "") ? (candidate as CityFilters[T]) : fallback;
}

async function getLikeRows(cityIds: number[]): Promise<LikeRow[]> {
  if (cityIds.length === 0) return [];

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("city_likes")
    .select("city_id, user_id, type")
    .in("city_id", cityIds);

  if (error) throw error;
  return (data ?? []) as unknown as LikeRow[];
}

function mapCity(row: CityRow, likeRows: LikeRow[], userId?: string): City {
  const cost = firstRelated(row.city_cost_details) ?? {
    housing: 0,
    food: 0,
    transport: 0,
    etc: 0,
  };

  const cityLikes = likeRows.filter((like) => like.city_id === row.id);
  const userLike = userId ? cityLikes.find((like) => like.user_id === userId)?.type ?? null : null;

  return {
    id: row.id,
    name: row.name,
    province: row.province,
    monthlyCost: row.monthly_cost,
    imageUrl: row.image_url,
    budget: row.budget,
    region: row.region,
    environments: (row.city_environments ?? []).map((item) => item.environment),
    bestSeasons: (row.city_seasons ?? []).map((item) => item.season),
    likes: cityLikes.filter((like) => like.type === "like").length,
    dislikes: cityLikes.filter((like) => like.type === "dislike").length,
    userLike,
    description: row.description,
    spots: (row.city_spots ?? [])
      .slice()
      .sort((a, b) => a.sort_order - b.sort_order || a.id - b.id)
      .map((spot) => ({
        id: spot.id,
        name: spot.name,
        category: spot.category,
        description: spot.description,
      })),
    monthlyCostDetail: {
      housing: cost.housing,
      food: cost.food,
      transport: cost.transport,
      etc: cost.etc,
    },
  };
}

function firstRelated<T>(value: T | T[] | null | undefined): T | null {
  if (!value) return null;
  return Array.isArray(value) ? value[0] ?? null : value;
}
