"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { createReview } from "@/lib/supabase/reviews";

export async function createReviewAction(
  cityId: number,
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const content = formData.get("content")?.toString().trim() ?? "";
  if (!content) {
    return { error: "내용을 입력해 주세요." };
  }
  if (content.length > 500) {
    return { error: "리뷰는 500자 이내로 작성해 주세요." };
  }

  const author =
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "익명";

  const { error } = await createReview(cityId, user.id, author, content);
  if (error) {
    return { error: "리뷰 등록에 실패했습니다. 다시 시도해 주세요." };
  }

  revalidatePath(`/cities/${cityId}`);
  return { error: null };
}
