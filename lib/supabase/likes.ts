import { createClient } from "@/utils/supabase/server";

export async function getLikeStatus(
  cityId: number,
  userId: string
): Promise<"like" | "dislike" | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("city_likes")
    .select("type")
    .eq("city_id", cityId)
    .eq("user_id", userId)
    .single();

  return (data?.type as "like" | "dislike") ?? null;
}

export async function getCityLikeCounts(
  cityId: number
): Promise<{ likes: number; dislikes: number }> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("city_likes")
    .select("type")
    .eq("city_id", cityId);

  if (!data) return { likes: 0, dislikes: 0 };

  return {
    likes: data.filter((l) => l.type === "like").length,
    dislikes: data.filter((l) => l.type === "dislike").length,
  };
}

export async function toggleLike(
  cityId: number,
  userId: string,
  type: "like" | "dislike"
): Promise<void> {
  const supabase = await createClient();

  const { data: existing } = await supabase
    .from("city_likes")
    .select("id, type")
    .eq("city_id", cityId)
    .eq("user_id", userId)
    .single();

  if (existing) {
    if (existing.type === type) {
      // 같은 타입 재클릭 → 취소
      const { error } = await supabase
        .from("city_likes")
        .delete()
        .eq("id", existing.id);
      if (error) throw new Error(`Failed to delete like: ${error.message}`);
    } else {
      // 다른 타입 → 변경: UPDATE 대신 DELETE + INSERT 사용
      // (RLS 정책에 UPDATE 허용이 없을 수 있으므로 INSERT/DELETE 정책만으로 동작)
      const { error: delError } = await supabase
        .from("city_likes")
        .delete()
        .eq("id", existing.id);
      if (delError) throw new Error(`Failed to delete like: ${delError.message}`);
      const { error: insError } = await supabase
        .from("city_likes")
        .insert({ city_id: cityId, user_id: userId, type });
      if (insError) throw new Error(`Failed to insert like: ${insError.message}`);
    }
  } else {
    // 신규 투표
    const { error } = await supabase
      .from("city_likes")
      .insert({ city_id: cityId, user_id: userId, type });
    if (error) throw new Error(`Failed to insert like: ${error.message}`);
  }
}
