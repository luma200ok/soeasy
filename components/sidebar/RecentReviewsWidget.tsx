import { MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockReviews } from "@/lib/mock-data";

export function RecentReviewsWidget() {
  return (
    <Card className="bg-[oklch(0.99_0.006_80)] border-[oklch(0.87_0.025_80)] rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-[oklch(0.30_0.04_70)] flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-[oklch(0.60_0.12_55)]" />
          최근 리뷰
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        {mockReviews.map((review, index) => (
          <div key={review.id}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-[oklch(0.40_0.12_145)]">{review.cityName}</span>
                <span className="text-xs text-[oklch(0.60_0.02_80)]">{review.timeAgo}</span>
              </div>
              <p className="text-xs text-[oklch(0.32_0.03_65)] leading-relaxed line-clamp-2">
                &ldquo;{review.content}&rdquo;
              </p>
              <p className="text-xs text-[oklch(0.60_0.02_80)]">{review.author}</p>
            </div>
            {index < mockReviews.length - 1 && <Separator className="mt-3 bg-[oklch(0.87_0.025_80)]" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
