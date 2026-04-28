import { BarChart3, TrendingUp, Users } from "lucide-react";

export function MonthlyStatsWidget() {
  return (
    <div className="bg-[#111111] border border-[rgba(201,168,76,0.2)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A8070]">이번 달 통계</span>
      </div>
      <div className="h-px bg-gradient-to-r from-[rgba(201,168,76,0.3)] to-transparent mb-4" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#6A6050]">
            <TrendingUp className="w-3 h-3 text-[#8A6E32]" />
            <span className="tracking-wide">신규 평가</span>
          </div>
          <span className="font-[family-name:var(--font-cormorant)] text-base text-[#C9A84C] font-light">
            +247
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#6A6050]">
            <Users className="w-3 h-3 text-[#8A6E32]" />
            <span className="tracking-wide">신규 가입자</span>
          </div>
          <span className="font-[family-name:var(--font-cormorant)] text-base text-[#C9A84C] font-light">
            +89
          </span>
        </div>

        {/* 프로그레스 바 */}
        <div className="mt-2">
          <div className="w-full bg-[#1A1A1A] h-px">
            <div
              className="h-px bg-gradient-to-r from-[#C9A84C] to-[#E2C97E]"
              style={{ width: "68%" }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-[10px] tracking-[0.1em] text-[#3A3028]">월간 목표 달성률</span>
            <span className="text-[10px] tracking-[0.1em] text-[#C9A84C]">68%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
