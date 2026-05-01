import { BarChart3, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSiteStats } from "@/lib/supabase/stats";

export async function MonthlyStatsWidget() {
  const stats = await getSiteStats();

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-green-500" />
          사이트 통계
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
            <span>이번 달 리뷰</span>
          </div>
          <span className="text-sm font-bold text-green-600">
            +{stats.reviewsThisMonth}건
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-purple-500" />
            <span>등록된 도시</span>
          </div>
          <span className="text-sm font-bold text-slate-700">
            {stats.totalCities}개
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <BarChart3 className="w-3.5 h-3.5 text-orange-500" />
            <span>전체 리뷰</span>
          </div>
          <span className="text-sm font-bold text-slate-700">
            {stats.totalReviews}건
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
