import { Sprout, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MonthlyStatsWidget() {
  return (
    <Card className="bg-[oklch(0.99_0.006_80)] border-[oklch(0.87_0.025_80)] rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-[oklch(0.30_0.04_70)] flex items-center gap-2">
          <Sprout className="w-4 h-4 text-[oklch(0.45_0.14_145)]" />
          이번 달 통계
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[oklch(0.42_0.04_75)]">
            <TrendingUp className="w-3.5 h-3.5 text-[oklch(0.50_0.12_200)]" />
            <span>신규 평가</span>
          </div>
          <span className="text-sm font-bold text-[oklch(0.42_0.12_145)]">+247건</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[oklch(0.42_0.04_75)]">
            <Users className="w-3.5 h-3.5 text-[oklch(0.55_0.10_280)]" />
            <span>신규 가입자</span>
          </div>
          <span className="text-sm font-bold text-[oklch(0.42_0.12_145)]">+89명</span>
        </div>
        <div className="w-full bg-[oklch(0.90_0.025_85)] rounded-full h-2 mt-1">
          <div
            className="bg-gradient-to-r from-[oklch(0.42_0.12_145)] to-[oklch(0.60_0.14_110)] h-2 rounded-full transition-all"
            style={{ width: "68%" }}
          />
        </div>
        <p className="text-xs text-[oklch(0.58_0.03_75)]">월간 목표 달성률 68%</p>
      </CardContent>
    </Card>
  );
}
