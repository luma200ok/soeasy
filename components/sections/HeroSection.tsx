import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative bg-[#0A0A0A] text-[#F7F3ED] px-4 py-24 md:py-36 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[rgba(201,168,76,0.3)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-[rgba(201,168,76,0.3)]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.05)] to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
        {/* 상단 레이블 */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#C9A84C] opacity-60" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] font-light">
            한국 디지털 노마드 도시 랭킹
          </span>
          <div className="w-8 h-px bg-[#C9A84C] opacity-60" />
        </div>

        {/* 메인 헤드라인 */}
        <div className="flex flex-col gap-3">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight tracking-wide text-[#F7F3ED]">
            한국에서 노마드로
          </h1>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight tracking-wide">
            <span className="italic text-[#C9A84C]">살기 좋은</span> 도시를
          </h1>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight tracking-wide text-[#F7F3ED]">
            찾아보세요
          </h1>
        </div>

        {/* 골드 구분선 */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A84C] opacity-60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C] opacity-40" />
        </div>

        {/* 서브 텍스트 */}
        <p className="text-sm tracking-[0.08em] text-[#8A8070] font-light">
          실거주자들이 직접 평가한 생생한 데이터
        </p>

        {/* 검색창 */}
        <div className="w-full max-w-xl flex gap-0">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5040]" />
            <Input
              placeholder="도시 이름으로 검색..."
              className="pl-12 bg-[#111111] border border-[rgba(201,168,76,0.3)] border-r-0 text-[#F7F3ED] placeholder:text-[#3A3028] focus-visible:ring-0 focus-visible:border-[#C9A84C] h-12 rounded-none text-sm tracking-wide"
              readOnly
            />
          </div>
          <a
            href="#cities"
            className="inline-flex h-12 items-center justify-center bg-[#C9A84C] px-6 text-xs font-medium tracking-[0.15em] uppercase text-[#0A0A0A] transition-all hover:bg-[#E2C97E] shrink-0 whitespace-nowrap"
          >
            탐색하기
          </a>
        </div>

        {/* 통계 배지 */}
        <div className="flex flex-wrap justify-center gap-8 mt-2">
          {[
            { label: "전국 도시", value: "20+" },
            { label: "실거주자 평가", value: "2,400+" },
            { label: "무료 이용", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#C9A84C]">
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#5A5040]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
