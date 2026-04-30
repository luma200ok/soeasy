"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { toggleCityLikeAction } from "@/app/actions/city-likes";
import type { LikeType } from "@/lib/city-types";

interface LikeDislikeButtonProps {
  cityId: number;
  initialLikes: number;
  initialDislikes: number;
  initialValue?: LikeType | null;
}

export function LikeDislikeButton({
  cityId,
  initialLikes,
  initialDislikes,
  initialValue = null,
}: LikeDislikeButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [currentValue, setCurrentValue] = useState<LikeType | null>(initialValue);
  const [currentLikes, setCurrentLikes] = useState(initialLikes);
  const [currentDislikes, setCurrentDislikes] = useState(initialDislikes);

  function handleToggle(e: React.MouseEvent, type: LikeType) {
    e.preventDefault();
    e.stopPropagation();

    const previousValue = currentValue;
    const previousLikes = currentLikes;
    const previousDislikes = currentDislikes;
    const nextValue = currentValue === type ? null : type;

    setCurrentValue(nextValue);
    setCurrentLikes((prev) => prev + optimisticDelta("like", currentValue, nextValue));
    setCurrentDislikes((prev) => prev + optimisticDelta("dislike", currentValue, nextValue));

    startTransition(async () => {
      const result = await toggleCityLikeAction(cityId, type);

      if (!result.ok) {
        setCurrentValue(previousValue);
        setCurrentLikes(previousLikes);
        setCurrentDislikes(previousDislikes);

        if (result.reason === "AUTH_REQUIRED") {
          router.push("/login");
        }
        return;
      }

      setCurrentValue(result.userLike);
      setCurrentLikes(result.likes);
      setCurrentDislikes(result.dislikes);
    });
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={(e) => handleToggle(e, "like")}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors",
          currentValue === "like" ? "text-blue-500" : "text-slate-400 hover:text-blue-400"
        )}
        aria-label="좋아요"
      >
        <ThumbsUp className="w-3.5 h-3.5" />
        <span>{currentLikes}</span>
      </button>
      <button
        onClick={(e) => handleToggle(e, "dislike")}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors",
          currentValue === "dislike" ? "text-red-500" : "text-slate-400 hover:text-red-400"
        )}
        aria-label="싫어요"
      >
        <ThumbsDown className="w-3.5 h-3.5" />
        <span>{currentDislikes}</span>
      </button>
    </div>
  );
}

function optimisticDelta(target: LikeType, previous: LikeType | null, next: LikeType | null): number {
  if (previous === target && next !== target) return -1;
  if (previous !== target && next === target) return 1;
  return 0;
}
