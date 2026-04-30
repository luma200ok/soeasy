"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { toggleLike } from "@/lib/supabase/likes";

export async function toggleLikeAction(
  cityId: number,
  type: "like" | "dislike"
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  await toggleLike(cityId, user.id, type);
  revalidatePath("/");
  revalidatePath(`/cities/${cityId}`);
}
