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
        "absolute top-3 right-3 z-10 p-2 bg-[#0A0A0A]/70 border border-[rgba(201,168,76,0.3)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,76,0.7)]",
        liked ? "text-[#C9A84C]" : "text-[#5A5040]"
      )}
      aria-label="찜하기"
    >
      <Heart className={cn("w-3.5 h-3.5", liked && "fill-[#C9A84C]")} />
    </button>
  );
}
