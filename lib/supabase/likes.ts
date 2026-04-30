import { createClient } from "@/utils/supabase/server";
import type { LikeType } from "@/lib/city-types";

export interface CityLikeCounts {
  likes: number;
  dislikes: number;
}

export async function getLikeStatus(cityId: number, userId: string): Promise<LikeType | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("city_likes")
    .select("type")
    .eq("city_id", cityId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  return (data?.type as LikeType | undefined) ?? null;
}

export async function toggleLike(cityId: number, userId: string, type: LikeType): Promise<LikeType | null> {
  const supabase = await createClient();
  const current = await getLikeStatus(cityId, userId);

  if (current === type) {
    const { error } = await supabase
      .from("city_likes")
      .delete()
      .eq("city_id", cityId)
      .eq("user_id", userId);

    if (error) throw error;
    return null;
  }

  if (current) {
    const { error } = await supabase
      .from("city_likes")
      .update({ type })
      .eq("city_id", cityId)
      .eq("user_id", userId);

    if (error) throw error;
    return type;
  }

  const { error } = await supabase
    .from("city_likes")
    .insert({ city_id: cityId, user_id: userId, type });

  if (error) throw error;
  return type;
}

export async function getCityLikeCounts(cityId: number): Promise<CityLikeCounts> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("city_likes")
    .select("type")
    .eq("city_id", cityId);

  if (error) throw error;

  return {
    likes: (data ?? []).filter((row) => row.type === "like").length,
    dislikes: (data ?? []).filter((row) => row.type === "dislike").length,
  };
}
