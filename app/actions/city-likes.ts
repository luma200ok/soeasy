"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { getCityLikeCounts, toggleLike } from "@/lib/supabase/likes";
import type { LikeType } from "@/lib/city-types";

export type ToggleCityLikeResult =
  | {
      ok: true;
      userLike: LikeType | null;
      likes: number;
      dislikes: number;
    }
  | {
      ok: false;
      reason: "AUTH_REQUIRED" | "INVALID_CITY" | "UNKNOWN";
    };

export async function toggleCityLikeAction(cityId: number, type: LikeType): Promise<ToggleCityLikeResult> {
  if (!Number.isInteger(cityId) || cityId <= 0) {
    return { ok: false, reason: "INVALID_CITY" };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { ok: false, reason: "AUTH_REQUIRED" };
  }

  try {
    const userLike = await toggleLike(cityId, user.id, type);
    const counts = await getCityLikeCounts(cityId);

    revalidatePath("/");
    revalidatePath(`/cities/${cityId}`);

    return {
      ok: true,
      userLike,
      likes: counts.likes,
      dislikes: counts.dislikes,
    };
  } catch {
    return { ok: false, reason: "UNKNOWN" };
  }
}
