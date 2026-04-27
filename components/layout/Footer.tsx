import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <MapPin className="w-4 h-4" />
            SoEasy
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-700 transition-colors">
              서비스 소개
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="#" className="hover:text-slate-700 transition-colors">
              이용약관
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="#" className="hover:text-slate-700 transition-colors">
              개인정보처리방침
            </Link>
          </nav>
          <p className="text-xs text-slate-400">© 2026 SoEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
