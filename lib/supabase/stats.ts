import { createClient } from "@/utils/supabase/server";

export interface SiteStats {
  reviewsThisMonth: number;
  totalCities: number;
  totalReviews: number;
}

export async function getSiteStats(): Promise<SiteStats> {
  const supabase = await createClient();

  const now = new Date();
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const [monthlyReviewsResult, totalCitiesResult, totalReviewsResult] = await Promise.all([
    supabase
      .from("reviews")
      .select("id", { count: "exact", head: true })
      .gte("created_at", firstOfMonth),
    supabase
      .from("cities")
      .select("id", { count: "exact", head: true }),
    supabase
      .from("reviews")
      .select("id", { count: "exact", head: true }),
  ]);

  return {
    reviewsThisMonth: monthlyReviewsResult.count ?? 0,
    totalCities: totalCitiesResult.count ?? 0,
    totalReviews: totalReviewsResult.count ?? 0,
  };
}
