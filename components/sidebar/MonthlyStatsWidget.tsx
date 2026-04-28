import { BarChart3, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MonthlyStatsWidget() {
  return (
    <Card className="shadow-none border-gray-100">
      <CardHeader className="pb-3">
        <CardTitle className="text-xs font-medium text-gray-500 flex items-center gap-2 uppercase tracking-wide">
          <BarChart3 className="w-3.5 h-3.5 text-gray-400" />
          이번 달 통계
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <TrendingUp className="w-3.5 h-3.5 text-gray-300" />
            <span>신규 평가</span>
          </div>
          <span className="text-sm font-medium text-gray-700">+247건</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Users className="w-3.5 h-3.5 text-gray-300" />
            <span>신규 가입자</span>
          </div>
          <span className="text-sm font-medium text-gray-700">+89명</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1 mt-1">
          <div className="bg-gray-400 h-1 rounded-full" style={{ width: "68%" }} />
        </div>
        <p className="text-xs text-gray-300">월간 목표 달성률 68%</p>
      </CardContent>
    </Card>
  );
}
