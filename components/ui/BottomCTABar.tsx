"use client";

import { useState } from "react";
import { X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomCTABar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[oklch(0.35_0.12_145)] to-[oklch(0.42_0.12_130)] text-white px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Leaf className="w-4 h-4 shrink-0 text-[oklch(0.80_0.12_110)]" />
          <span>지금 내 도시를 평가해보세요</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            size="sm"
            variant="secondary"
            className="bg-[oklch(0.75_0.14_105)] text-[oklch(0.22_0.06_130)] hover:bg-[oklch(0.80_0.12_105)] font-semibold rounded-xl border-0 shadow-md"
          >
            참여하기
          </Button>
          <button
            onClick={() => setVisible(false)}
            className="p-1 rounded-lg hover:bg-white/15 transition-colors"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
