import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
              <MapPin className="w-5 h-5" />
              SoEasy
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#cities"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                도시 목록
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                커뮤니티
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-slate-600">
                로그인
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                시작하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
