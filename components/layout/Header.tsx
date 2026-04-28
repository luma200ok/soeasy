import Link from "next/link";
import { MapPin } from "lucide-react";

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md"
      style={{
        background: "rgba(10, 10, 15, 0.85)",
        borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl neon-text-pink">
              <MapPin className="w-5 h-5" style={{ color: "var(--neon-pink)", filter: "drop-shadow(0 0 6px rgba(255,45,120,0.8))" }} />
              SoEasy
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#cities"
                className="text-sm transition-colors"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--neon-blue)";
                  (e.target as HTMLElement).style.textShadow = "0 0 8px rgba(0,212,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--muted-foreground)";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                도시 목록
              </Link>
              <Link
                href="#"
                className="text-sm transition-colors"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--neon-blue)";
                  (e.target as HTMLElement).style.textShadow = "0 0 8px rgba(0,212,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--muted-foreground)";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                커뮤니티
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="neon-btn-blue text-sm px-4 py-1.5 rounded-md font-medium"
            >
              로그인
            </button>
            <button
              className="neon-btn-pink text-sm px-4 py-1.5 rounded-md font-semibold"
            >
              시작하기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
