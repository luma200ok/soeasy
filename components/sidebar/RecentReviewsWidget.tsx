import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockReviews } from "@/lib/mock-data";

export function RecentReviewsWidget() {
  return (
    <Card className="shadow-none border-gray-100">
      <CardHeader className="pb-3">
        <CardTitle className="text-xs font-medium text-gray-500 flex items-center gap-2 uppercase tracking-wide">
          <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
          최근 리뷰
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        {mockReviews.map((review, index) => (
          <div key={review.id}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-gray-700">{review.cityName}</span>
                <span className="text-xs text-gray-300">{review.timeAgo}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                &ldquo;{review.content}&rdquo;
              </p>
              <p className="text-xs text-gray-300">{review.author}</p>
            </div>
            {index < mockReviews.length - 1 && <Separator className="mt-3 bg-gray-50" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
