"use client";

import { useState } from "react";
import { X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomCTABar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <span>지금 내 도시를 평가해보세요</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            size="sm"
            className="bg-gray-900 hover:bg-gray-700 text-white font-normal rounded-md"
          >
            참여하기
          </Button>
          <button
            onClick={() => setVisible(false)}
            className="p-1 rounded hover:bg-gray-100 transition-colors text-gray-400"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
