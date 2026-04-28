import { Flame } from "lucide-react";
import { mockReviews } from "@/lib/mock-data";

export function RecentReviewsWidget() {
  return (
    <div
      className="rounded-lg p-4"
      style={{
        background: "var(--cyber-surface)",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.05)",
      }}
    >
      <h3
        className="text-sm font-semibold flex items-center gap-2 mb-3"
        style={{ color: "#e2e8f0" }}
      >
        <Flame
          className="w-4 h-4"
          style={{ color: "var(--neon-pink)", filter: "drop-shadow(0 0 4px rgba(255,45,120,0.7))" }}
        />
        최근 리뷰
      </h3>
      <div className="flex flex-col gap-3">
        {mockReviews.map((review, index) => (
          <div key={review.id}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--neon-blue)", textShadow: "0 0 6px rgba(0,212,255,0.5)" }}
                >
                  {review.cityName}
                </span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {review.timeAgo}
                </span>
              </div>
              <p
                className="text-xs leading-relaxed line-clamp-2"
                style={{ color: "rgba(226, 232, 240, 0.75)" }}
              >
                &ldquo;{review.content}&rdquo;
              </p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {review.author}
              </p>
            </div>
            {index < mockReviews.length - 1 && (
              <div
                className="mt-3"
                style={{ height: "1px", background: "rgba(0, 212, 255, 0.1)" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
