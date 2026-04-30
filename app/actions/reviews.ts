"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { createReview } from "@/lib/supabase/reviews";

export async function createReviewAction(formData: FormData): Promise<void> {
  const cityId = Number(formData.get("cityId"));
  const content = String(formData.get("content") ?? "").trim();

  if (!Number.isInteger(cityId) || cityId <= 0 || content.length === 0) {
    return;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  await createReview(cityId, user.id, content.slice(0, 500));
  revalidatePath(`/cities/${cityId}`);
}
