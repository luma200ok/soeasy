import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[oklch(0.28_0.08_145)] via-[oklch(0.35_0.10_130)] to-[oklch(0.45_0.12_105)] text-white px-4 py-20 md:py-28">
      {/* 유기적인 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[oklch(0.55_0.12_130)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[oklch(0.60_0.10_90)]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.40_0.08_155)]/15 blur-2xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-[oklch(0.82_0.10_105)] text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full">
          <span className="text-xl">🌿</span>
          <span>한국 디지털 노마드 도시 랭킹</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
          한국에서 노마드로 살기 좋은
          <br />
          도시를 찾아보세요
        </h1>

        <p className="text-lg text-[oklch(0.88_0.04_100)]">
          실거주자들이 직접 평가한 생생한 데이터
        </p>

        <div className="w-full max-w-xl flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.70_0.04_100)]" />
            <Input
              placeholder="도시 이름으로 검색..."
              className="pl-10 bg-white/15 border-white/25 text-white placeholder:text-[oklch(0.75_0.03_100)] focus-visible:ring-[oklch(0.70_0.12_130)] h-11 rounded-xl backdrop-blur-sm"
              readOnly
            />
          </div>
          <a
            href="#cities"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[oklch(0.68_0.15_105)] px-5 text-sm font-semibold text-[oklch(0.20_0.05_130)] transition-all hover:bg-[oklch(0.72_0.14_105)] hover:shadow-lg shrink-0 whitespace-nowrap shadow-md"
          >
            지금 시작하기 →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Badge
            variant="secondary"
            className="bg-white/12 text-white border-white/25 hover:bg-white/12 text-sm px-3 py-1 rounded-full"
          >
            🌱 전국 20+ 도시
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/12 text-white border-white/25 hover:bg-white/12 text-sm px-3 py-1 rounded-full"
          >
            🏡 실거주자 평가
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/12 text-white border-white/25 hover:bg-white/12 text-sm px-3 py-1 rounded-full"
          >
            ✨ 무료 이용
          </Badge>
        </div>
      </div>
    </section>
  );
}
