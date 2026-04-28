import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="bg-white border-b border-gray-100 px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
        <p className="text-xs text-gray-400 tracking-widest uppercase">한국 디지털 노마드 도시 랭킹</p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
          한국에서 노마드로 살기 좋은
          <br />
          도시를 찾아보세요
        </h1>

        <p className="text-base text-gray-400">
          실거주자들이 직접 평가한 생생한 데이터
        </p>

        <div className="w-full max-w-lg flex gap-2 mt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <Input
              placeholder="도시 이름으로 검색..."
              className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-300 focus-visible:ring-gray-300 h-10"
              readOnly
            />
          </div>
          <a
            href="#cities"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-900 bg-gray-900 px-5 text-sm font-medium text-white transition-colors hover:bg-gray-700 shrink-0 whitespace-nowrap"
          >
            시작하기
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-1">
          <span className="text-xs text-gray-400">전국 20+ 도시</span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400">실거주자 평가</span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400">무료 이용</span>
        </div>
      </div>
    </section>
  );
}
