"use client";

import { useState } from "react";
import { X, MapPin } from "lucide-react";

export function BottomCTABar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-[rgba(201,168,76,0.3)] px-4 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#8A8070]">
          <MapPin className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
          <span>지금 내 도시를 평가해보세요</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="px-6 py-2 text-[10px] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E2C97E] transition-all duration-300 font-medium">
            참여하기
          </button>
          <button
            onClick={() => setVisible(false)}
            className="p-1.5 text-[#3A3028] hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="닫기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
