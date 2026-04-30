export type BudgetFilter = "under100" | "100to200" | "over200";
export type RegionFilter = "수도권" | "경상도" | "전라도" | "강원도" | "제주도" | "충청도";
export type EnvironmentFilter = "자연친화" | "도심선호" | "카페작업" | "코워킹 필수";
export type SeasonFilter = "봄" | "여름" | "가을" | "겨울";
export type LikeType = "like" | "dislike";

export interface Spot {
  name: string;
  category: "카페" | "코워킹" | "명소";
  description: string;
}

export interface MonthlyCostDetail {
  housing: number;
  food: number;
  transport: number;
  etc: number;
}

export interface City {
  id: number;
  name: string;
  province: string;
  monthlyCost: number;
  imageUrl: string;
  budget: BudgetFilter;
  region: RegionFilter;
  environments: EnvironmentFilter[];
  bestSeasons: SeasonFilter[];
  likes: number;
  dislikes: number;
  description: string;
  spots: Spot[];
  monthlyCostDetail: MonthlyCostDetail;
}

export interface CityFilters {
  budget?: BudgetFilter | "all";
  region?: RegionFilter | "all";
  environment?: EnvironmentFilter | "all";
  season?: SeasonFilter | "all";
}
