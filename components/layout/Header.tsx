import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-1.5 font-semibold text-lg text-gray-900 tracking-tight">
              <MapPin className="w-4 h-4 text-gray-500" />
              SoEasy
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#cities"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                도시 목록
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                커뮤니티
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900 font-normal">
              로그인
            </Button>
            <Button size="sm" className="bg-gray-900 hover:bg-gray-700 text-white font-normal rounded-md">
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
