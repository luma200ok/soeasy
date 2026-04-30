import { Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getRecentReviews } from "@/lib/supabase/reviews";

export async function RecentReviewsWidget() {
  const reviews = await getRecentReviews(5);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-500" />
          최근 리뷰
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        {reviews.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-2">
            아직 리뷰가 없습니다.
          </p>
        ) : (
          reviews.map((review, index) => (
            <div key={review.id}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-blue-600">
                    {review.cityName}
                  </span>
                  <span className="text-xs text-slate-400">
                    {review.timeAgo}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                  &ldquo;{review.content}&rdquo;
                </p>
                <p className="text-xs text-slate-400">{review.author}</p>
              </div>
              {index < reviews.length - 1 && <Separator className="mt-3" />}
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
