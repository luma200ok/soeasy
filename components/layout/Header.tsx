import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[rgba(201,168,76,0.2)] bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 group">
              <span
                className="font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.2em] text-[#C9A84C] uppercase"
              >
                SoEasy
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#cities"
                className="text-xs tracking-[0.15em] uppercase text-[#8A8070] hover:text-[#C9A84C] transition-colors duration-300"
              >
                도시 목록
              </Link>
              <Link
                href="#"
                className="text-xs tracking-[0.15em] uppercase text-[#8A8070] hover:text-[#C9A84C] transition-colors duration-300"
              >
                커뮤니티
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs tracking-[0.1em] uppercase text-[#8A8070] hover:text-[#C9A84C] hover:bg-transparent"
            >
              로그인
            </Button>
            <Button
              size="sm"
              className="text-xs tracking-[0.1em] uppercase bg-transparent border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 rounded-none px-5"
            >
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
