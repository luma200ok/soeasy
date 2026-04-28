import Link from "next/link";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[oklch(0.82_0.04_100)] bg-[oklch(0.97_0.015_95)]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[oklch(0.38_0.14_145)]">
              <Leaf className="w-5 h-5" />
              SoEasy
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#cities"
                className="text-sm text-[oklch(0.40_0.05_80)] hover:text-[oklch(0.35_0.12_145)] transition-colors font-medium"
              >
                도시 목록
              </Link>
              <Link
                href="#"
                className="text-sm text-[oklch(0.40_0.05_80)] hover:text-[oklch(0.35_0.12_145)] transition-colors font-medium"
              >
                커뮤니티
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-[oklch(0.40_0.05_80)] hover:text-[oklch(0.35_0.12_145)] hover:bg-[oklch(0.88_0.05_105)]">
              로그인
            </Button>
            <Button size="sm" className="bg-[oklch(0.42_0.12_145)] hover:bg-[oklch(0.36_0.12_145)] text-white rounded-xl shadow-sm">
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
