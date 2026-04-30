import { createClient } from "@/utils/supabase/server";
import type { CheckInMember, Review } from "@/lib/city-types";

type ReviewRow = {
  id: string;
  city_id: number;
  user_id: string | null;
  content: string;
  created_at: string;
  cities: {
    name: string;
  } | null;
};

const REVIEW_SELECT = `
  id,
  city_id,
  user_id,
  content,
  created_at,
  cities (
    name
  )
`;

export async function getReviewsByCity(cityId: number): Promise<Review[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("reviews")
    .select(REVIEW_SELECT)
    .eq("city_id", cityId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return ((data ?? []) as unknown as ReviewRow[]).map(mapReview);
}

export async function getRecentReviews(limit = 5): Promise<Review[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("reviews")
    .select(REVIEW_SELECT)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return ((data ?? []) as unknown as ReviewRow[]).map(mapReview);
}

export async function getRecentCheckInMembers(limit = 4): Promise<CheckInMember[]> {
  const reviews = await getRecentReviews(limit);

  return reviews.map((review, index) => ({
    id: review.id,
    city: review.cityName,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(review.id || String(index + 1))}`,
  }));
}

export async function createReview(cityId: number, userId: string, content: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase
    .from("reviews")
    .insert({
      city_id: cityId,
      user_id: userId,
      content,
    });

  if (error) throw error;
}

function mapReview(row: ReviewRow): Review {
  return {
    id: row.id,
    cityId: row.city_id,
    cityName: row.cities?.name ?? "알 수 없는 도시",
    content: row.content,
    author: row.user_id ? `@${row.user_id.slice(0, 8)}` : "@soeasy",
    timeAgo: formatTimeAgo(row.created_at),
    createdAt: row.created_at,
  };
}

function formatTimeAgo(value: string): string {
  const date = new Date(value);
  const diffSeconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));

  if (diffSeconds < 60) return "방금 전";

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}분 전`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}일 전`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks}주 전`;

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
