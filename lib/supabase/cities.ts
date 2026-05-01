import { createClient } from "@/utils/supabase/server";
import type {
  City,
  BudgetFilter,
  RegionFilter,
  EnvironmentFilter,
  SeasonFilter,
} from "@/lib/mock-data";

export interface CityFilters {
  budget?: string;
  region?: string;
  environment?: string;
  season?: string;
}

export async function getCities(filters: CityFilters = {}): Promise<City[]> {
  const supabase = await createClient();

  let citiesQuery = supabase.from("cities").select("*");
  if (filters.budget && filters.budget !== "all") {
    citiesQuery = citiesQuery.eq("budget", filters.budget);
  }
  if (filters.region && filters.region !== "all") {
    citiesQuery = citiesQuery.eq("region", filters.region);
  }

  const { data: cities, error } = await citiesQuery;
  if (error || !cities || cities.length === 0) return [];

  const cityIds = cities.map((c) => c.id);

  const [environmentsResult, seasonsResult, likesResult] = await Promise.all([
    supabase
      .from("city_environments")
      .select("city_id, environment")
      .in("city_id", cityIds),
    supabase
      .from("city_seasons")
      .select("city_id, season")
      .in("city_id", cityIds),
    supabase
      .from("city_likes")
      .select("city_id, type")
      .in("city_id", cityIds),
  ]);

  const environments = environmentsResult.data ?? [];
  const seasons = seasonsResult.data ?? [];
  const likesData = likesResult.data ?? [];

  let result: City[] = cities.map((city) => {
    const cityEnvironments = environments
      .filter((e) => e.city_id === city.id)
      .map((e) => e.environment) as EnvironmentFilter[];
    const citySeasons = seasons
      .filter((s) => s.city_id === city.id)
      .map((s) => s.season) as SeasonFilter[];
    const cityLikes = likesData.filter(
      (l) => l.city_id === city.id && l.type === "like"
    ).length;
    const cityDislikes = likesData.filter(
      (l) => l.city_id === city.id && l.type === "dislike"
    ).length;

    return {
      id: city.id,
      name: city.name,
      province: city.province,
      monthlyCost: city.monthly_cost,
      imageUrl: city.image_url,
      budget: city.budget as BudgetFilter,
      region: city.region as RegionFilter,
      environments: cityEnvironments,
      bestSeasons: citySeasons,
      likes: cityLikes,
      dislikes: cityDislikes,
      description: city.description,
      spots: [],
      monthlyCostDetail: { housing: 0, food: 0, transport: 0, etc: 0 },
    };
  });

  // environment / season 필터는 별도 테이블이므로 메모리에서 처리
  if (filters.environment && filters.environment !== "all") {
    result = result.filter((c) =>
      c.environments.includes(filters.environment as EnvironmentFilter)
    );
  }
  if (filters.season && filters.season !== "all") {
    result = result.filter((c) =>
      c.bestSeasons.includes(filters.season as SeasonFilter)
    );
  }

  return result.sort((a, b) => b.likes - a.likes);
}

export async function getCityById(id: number): Promise<City | null> {
  const supabase = await createClient();

  const [
    cityResult,
    environmentsResult,
    seasonsResult,
    spotsResult,
    costResult,
    likesResult,
  ] = await Promise.all([
    supabase.from("cities").select("*").eq("id", id).single(),
    supabase
      .from("city_environments")
      .select("environment")
      .eq("city_id", id),
    supabase.from("city_seasons").select("season").eq("city_id", id),
    supabase
      .from("city_spots")
      .select("name, category, description")
      .eq("city_id", id),
    supabase.from("city_cost_details").select("*").eq("city_id", id).single(),
    supabase.from("city_likes").select("type").eq("city_id", id),
  ]);

  if (cityResult.error || !cityResult.data) return null;

  const city = cityResult.data;
  const environments =
    (environmentsResult.data?.map((e) => e.environment) as EnvironmentFilter[]) ??
    [];
  const seasons =
    (seasonsResult.data?.map((s) => s.season) as SeasonFilter[]) ?? [];
  const spots = (spotsResult.data ?? []) as City["spots"];
  const cost = costResult.data;
  const likesData = likesResult.data ?? [];
  const cityLikes = likesData.filter((l) => l.type === "like").length;
  const cityDislikes = likesData.filter((l) => l.type === "dislike").length;

  return {
    id: city.id,
    name: city.name,
    province: city.province,
    monthlyCost: city.monthly_cost,
    imageUrl: city.image_url,
    budget: city.budget as BudgetFilter,
    region: city.region as RegionFilter,
    environments,
    bestSeasons: seasons,
    likes: cityLikes,
    dislikes: cityDislikes,
    description: city.description,
    spots,
    monthlyCostDetail: cost
      ? {
          housing: cost.housing,
          food: cost.food,
          transport: cost.transport,
          etc: cost.etc,
        }
      : { housing: 0, food: 0, transport: 0, etc: 0 },
  };
}

export async function getRelatedCities(
  cityId: number,
  region: string,
  environments: string[]
): Promise<City[]> {
  const supabase = await createClient();

  const { data: cities, error } = await supabase
    .from("cities")
    .select("*")
    .neq("id", cityId);

  if (error || !cities || cities.length === 0) return [];

  const cityIds = cities.map((c) => c.id);

  const [environmentsResult, seasonsResult, likesResult] = await Promise.all([
    supabase
      .from("city_environments")
      .select("city_id, environment")
      .in("city_id", cityIds),
    supabase
      .from("city_seasons")
      .select("city_id, season")
      .in("city_id", cityIds),
    supabase
      .from("city_likes")
      .select("city_id, type")
      .in("city_id", cityIds),
  ]);

  const environmentsData = environmentsResult.data ?? [];
  const seasonsData = seasonsResult.data ?? [];
  const likesData = likesResult.data ?? [];

  const mapped: City[] = cities.map((city) => ({
    id: city.id,
    name: city.name,
    province: city.province,
    monthlyCost: city.monthly_cost,
    imageUrl: city.image_url,
    budget: city.budget as BudgetFilter,
    region: city.region as RegionFilter,
    environments: environmentsData
      .filter((e) => e.city_id === city.id)
      .map((e) => e.environment) as EnvironmentFilter[],
    bestSeasons: seasonsData
      .filter((s) => s.city_id === city.id)
      .map((s) => s.season) as SeasonFilter[],
    likes: likesData.filter((l) => l.city_id === city.id && l.type === "like").length,
    dislikes: likesData.filter((l) => l.city_id === city.id && l.type === "dislike").length,
    description: city.description,
    spots: [],
    monthlyCostDetail: { housing: 0, food: 0, transport: 0, etc: 0 },
  }));

  return mapped
    .filter(
      (c) =>
        c.region === region ||
        c.environments.some((env) => environments.includes(env))
    )
    .slice(0, 3);
}
