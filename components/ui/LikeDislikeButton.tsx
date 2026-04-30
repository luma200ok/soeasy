"use client";

import { useState, useOptimistic, useTransition } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { toggleLikeAction } from "@/app/actions/likes";

interface LikeDislikeButtonProps {
  likes: number;
  dislikes: number;
  cityId?: number;
  initialStatus?: "like" | "dislike" | null;
}

type LikeState = {
  likes: number;
  dislikes: number;
  status: "like" | "dislike" | null;
};

// cityId 없는 경우 — 순수 로컬 상태 (하위 호환)
function PureLikeDislikeButton({
  likes,
  dislikes,
}: {
  likes: number;
  dislikes: number;
}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [currentDislikes, setCurrentDislikes] = useState(dislikes);

  function handleLike(e: React.MouseEvent) {
    e.preventDefault();
    if (liked) {
      setLiked(false);
      setCurrentLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setCurrentLikes((prev) => prev + 1);
      if (disliked) {
        setDisliked(false);
        setCurrentDislikes((prev) => prev - 1);
      }
    }
  }

  function handleDislike(e: React.MouseEvent) {
    e.preventDefault();
    if (disliked) {
      setDisliked(false);
      setCurrentDislikes((prev) => prev - 1);
    } else {
      setDisliked(true);
      setCurrentDislikes((prev) => prev + 1);
      if (liked) {
        setLiked(false);
        setCurrentLikes((prev) => prev - 1);
      }
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleLike}
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors",
          liked ? "text-blue-500" : "text-slate-400 hover:text-blue-400"
        )}
        aria-label="좋아요"
      >
        <ThumbsUp className="w-3.5 h-3.5" />
        <span>{currentLikes}</span>
      </button>
      <button
        onClick={handleDislike}
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors",
          disliked ? "text-red-500" : "text-slate-400 hover:text-red-400"
        )}
        aria-label="싫어요"
      >
        <ThumbsDown className="w-3.5 h-3.5" />
        <span>{currentDislikes}</span>
      </button>
    </div>
  );
}

export function LikeDislikeButton({
  likes,
  dislikes,
  cityId,
  initialStatus = null,
}: LikeDislikeButtonProps) {
  const [isPending, startTransition] = useTransition();

  const [optimistic, setOptimistic] = useOptimistic<
    LikeState,
    "like" | "dislike"
  >({ likes, dislikes, status: initialStatus }, (state, type) => {
    if (state.status === type) {
      // 같은 타입 재클릭 → 취소
      return {
        likes: type === "like" ? state.likes - 1 : state.likes,
        dislikes: type === "dislike" ? state.dislikes - 1 : state.dislikes,
        status: null,
      };
    }
    // 다른 타입으로 전환
    return {
      likes:
        type === "like"
          ? state.likes + 1
          : state.status === "like"
            ? state.likes - 1
            : state.likes,
      dislikes:
        type === "dislike"
          ? state.dislikes + 1
          : state.status === "dislike"
            ? state.dislikes - 1
            : state.dislikes,
      status: type,
    };
  });

  if (!cityId) {
    return <PureLikeDislikeButton likes={likes} dislikes={dislikes} />;
  }

  function handleToggle(e: React.MouseEvent, type: "like" | "dislike") {
    e.preventDefault();
    startTransition(async () => {
      setOptimistic(type);
      await toggleLikeAction(cityId!, type);
    });
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={(e) => handleToggle(e, "like")}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors disabled:opacity-60",
          optimistic.status === "like"
            ? "text-blue-500"
            : "text-slate-400 hover:text-blue-400"
        )}
        aria-label="좋아요"
      >
        <ThumbsUp className="w-3.5 h-3.5" />
        <span>{optimistic.likes}</span>
      </button>
      <button
        onClick={(e) => handleToggle(e, "dislike")}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors disabled:opacity-60",
          optimistic.status === "dislike"
            ? "text-red-500"
            : "text-slate-400 hover:text-red-400"
        )}
        aria-label="싫어요"
      >
        <ThumbsDown className="w-3.5 h-3.5" />
        <span>{optimistic.dislikes}</span>
      </button>
    </div>
  );
}
