import { Flame } from "lucide-react";
import { mockReviews } from "@/lib/mock-data";

export function RecentReviewsWidget() {
  return (
    <div className="bg-[#111111] border border-[rgba(201,168,76,0.2)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A8070]">최근 리뷰</span>
      </div>
      <div className="h-px bg-gradient-to-r from-[rgba(201,168,76,0.3)] to-transparent mb-4" />
      <div className="flex flex-col gap-4">
        {mockReviews.map((review, index) => (
          <div key={review.id}>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C]">{review.cityName}</span>
                <span className="text-[10px] text-[#3A3028]">{review.timeAgo}</span>
              </div>
              <p className="text-xs text-[#6A6050] leading-relaxed line-clamp-2 font-light">
                &ldquo;{review.content}&rdquo;
              </p>
              <p className="text-[10px] tracking-wide text-[#3A3028]">{review.author}</p>
            </div>
            {index < mockReviews.length - 1 && (
              <div className="h-px bg-[rgba(201,168,76,0.1)] mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
