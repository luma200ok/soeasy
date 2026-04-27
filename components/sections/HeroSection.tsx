import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-blue-300 text-sm font-medium">
          <span className="text-xl">🗺️</span>
          <span>한국 디지털 노마드 도시 랭킹</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          한국에서 노마드로 살기 좋은
          <br />
          도시를 찾아보세요
        </h1>

        <p className="text-lg text-slate-300">
          실거주자들이 직접 평가한 생생한 데이터
        </p>

        <div className="w-full max-w-xl flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="도시 이름으로 검색..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-blue-400 h-11"
              readOnly
            />
          </div>
          <a
            href="#cities"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-400 shrink-0 whitespace-nowrap"
          >
            지금 시작하기 →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 hover:bg-white/10 text-sm px-3 py-1"
          >
            ✅ 전국 20+ 도시
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 hover:bg-white/10 text-sm px-3 py-1"
          >
            ✅ 실거주자 평가
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 hover:bg-white/10 text-sm px-3 py-1"
          >
            ✅ 무료 이용
          </Badge>
        </div>
      </div>
    </section>
  );
}
