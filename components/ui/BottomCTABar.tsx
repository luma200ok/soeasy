"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export function BottomCTABar() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) setVisible(true);
    });
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>지금 내 도시를 평가해보세요</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
            onClick={() => router.push("/login?redirect=/cities")}
          >
            참여하기
          </Button>
          <button
            onClick={() => setVisible(false)}
            className="p-1 rounded hover:bg-blue-700 transition-colors"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
