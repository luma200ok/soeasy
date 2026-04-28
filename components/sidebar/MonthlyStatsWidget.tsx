import { BarChart3, TrendingUp, Users } from "lucide-react";

export function MonthlyStatsWidget() {
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
        <BarChart3
          className="w-4 h-4"
          style={{ color: "var(--neon-green)", filter: "drop-shadow(0 0 4px rgba(0,255,170,0.6))" }}
        />
        이번 달 통계
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
            <TrendingUp
              className="w-3.5 h-3.5"
              style={{ color: "var(--neon-blue)", filter: "drop-shadow(0 0 3px rgba(0,212,255,0.6))" }}
            />
            <span>신규 평가</span>
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--neon-green)", textShadow: "0 0 8px rgba(0,255,170,0.5)" }}
          >
            +247건
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
            <Users
              className="w-3.5 h-3.5"
              style={{ color: "var(--neon-purple)", filter: "drop-shadow(0 0 3px rgba(191,95,255,0.6))" }}
            />
            <span>신규 가입자</span>
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--neon-green)", textShadow: "0 0 8px rgba(0,255,170,0.5)" }}
          >
            +89명
          </span>
        </div>
        <div
          className="w-full rounded-full h-1.5 mt-1 overflow-hidden"
          style={{ background: "rgba(0, 212, 255, 0.1)" }}
        >
          <div
            className="h-1.5 rounded-full"
            style={{
              width: "68%",
              background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple))",
              boxShadow: "0 0 8px rgba(0, 212, 255, 0.6)",
            }}
          />
        </div>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          월간 목표 달성률 68%
        </p>
      </div>
    </div>
  );
}
