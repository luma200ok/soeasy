import { createClient } from "@/utils/supabase/server";

export interface Review {
  id: string;
  cityName: string;
  content: string;
  author: string;
  timeAgo: string;
}

export async function getReviewsByCity(cityId: number): Promise<Review[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("reviews")
    .select("id, content, author, created_at")
    .eq("city_id", cityId)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return data.map((r) => ({
    id: r.id,
    cityName: "",
    content: r.content,
    author: r.author ?? "익명",
    timeAgo: formatTimeAgo(r.created_at),
  }));
}

export async function getRecentReviews(limit = 5): Promise<Review[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("reviews")
    .select("id, content, author, created_at, cities(name)")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  return data.map((r) => ({
    id: r.id,
    cityName: (r.cities as unknown as { name: string } | null)?.name ?? "",
    content: r.content,
    author: r.author ?? "익명",
    timeAgo: formatTimeAgo(r.created_at),
  }));
}

export async function createReview(
  cityId: number,
  userId: string,
  author: string,
  content: string
): Promise<{ error: string | null }> {
  const supabase = await createClient();
  const { error } = await supabase
    .from("reviews")
    .insert({ city_id: cityId, user_id: userId, author, content });

  return { error: error?.message ?? null };
}

function formatTimeAgo(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "방금 전";
  if (diffMins < 60) return `${diffMins}분 전`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}일 전`;
  return `${Math.floor(diffDays / 7)}주 전`;
}
