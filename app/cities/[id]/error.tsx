"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CityDetailError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
      <AlertCircle className="w-12 h-12 text-red-400" />
      <h2 className="text-xl font-semibold text-slate-800">페이지를 불러오지 못했어요</h2>
      <p className="text-sm text-slate-500 text-center">
        일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
      </p>
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => router.push("/cities")}>
          목록으로
        </Button>
        <Button onClick={reset}>다시 시도</Button>
      </div>
    </div>
  );
}
