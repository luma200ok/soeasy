"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setLiked((prev) => !prev);
      }}
      className={cn(
        "absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:scale-110",
        liked ? "text-[oklch(0.55_0.22_25)]" : "text-[oklch(0.60_0.04_80)]"
      )}
      aria-label="찜하기"
    >
      <Heart className={cn("w-4 h-4", liked && "fill-red-500")} />
    </button>
  );
}
