import { BarChart3, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MonthlyStatsWidget() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-green-500" />
          이번 달 통계
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
            <span>신규 평가</span>
          </div>
          <span className="text-sm font-bold text-green-600">+247건</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Users className="w-3.5 h-3.5 text-purple-500" />
            <span>신규 가입자</span>
          </div>
          <span className="text-sm font-bold text-green-600">+89명</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "68%" }} />
        </div>
        <p className="text-xs text-slate-400">월간 목표 달성률 68%</p>
      </CardContent>
    </Card>
  );
}
