import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative text-white px-4 py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0d001f 40%, #001228 70%, #0a0a0f 100%)",
      }}
    >
      {/* 배경 글로우 오브 */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[80px]"
          style={{ background: "var(--neon-pink)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[80px]"
          style={{ background: "var(--neon-blue)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-[60px]"
          style={{ background: "var(--neon-purple)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <div
          className="flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full"
          style={{
            color: "var(--neon-blue)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            background: "rgba(0, 212, 255, 0.07)",
            textShadow: "0 0 10px rgba(0,212,255,0.5)",
          }}
        >
          <span className="text-xl">🗺️</span>
          <span>한국 디지털 노마드 도시 랭킹</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          <span
            style={{
              background: "linear-gradient(90deg, var(--neon-pink), var(--neon-blue), var(--neon-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(255,45,120,0.3))",
            }}
          >
            한국에서 노마드로 살기 좋은
          </span>
          <br />
          <span className="text-white">도시를 찾아보세요</span>
        </h1>

        <p
          className="text-lg"
          style={{ color: "rgba(226, 232, 240, 0.7)" }}
        >
          실거주자들이 직접 평가한 생생한 데이터
        </p>

        <div className="w-full max-w-xl flex gap-2">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "var(--neon-blue)", filter: "drop-shadow(0 0 4px rgba(0,212,255,0.7))" }}
            />
            <input
              placeholder="도시 이름으로 검색..."
              readOnly
              className="w-full h-11 pl-10 pr-4 rounded-md text-sm"
              style={{
                background: "rgba(0, 212, 255, 0.08)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                color: "#e2e8f0",
                outline: "none",
                boxShadow: "0 0 10px rgba(0, 212, 255, 0.1)",
              }}
            />
          </div>
          <a
            href="#cities"
            className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white transition-all shrink-0 whitespace-nowrap neon-btn-pink"
          >
            지금 시작하기 →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {["✅ 전국 20+ 도시", "✅ 실거주자 평가", "✅ 무료 이용"].map((text) => (
            <span
              key={text}
              className="text-sm px-4 py-1.5 rounded-full"
              style={{
                color: "rgba(226, 232, 240, 0.8)",
                border: "1px solid rgba(191, 95, 255, 0.3)",
                background: "rgba(191, 95, 255, 0.08)",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
