import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            SoEasy
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-gray-700 transition-colors">
              서비스 소개
            </Link>
            <span className="text-gray-200">|</span>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              이용약관
            </Link>
            <span className="text-gray-200">|</span>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              개인정보처리방침
            </Link>
          </nav>
          <p className="text-xs text-gray-300">© 2026 SoEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
