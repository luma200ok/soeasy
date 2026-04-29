"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LikeDislikeButtonProps {
  likes: number;
  dislikes: number;
}

export function LikeDislikeButton({ likes, dislikes }: LikeDislikeButtonProps) {
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
