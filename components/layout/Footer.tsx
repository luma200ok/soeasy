import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[oklch(0.82_0.04_100)] bg-[oklch(0.93_0.018_85)] mt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[oklch(0.38_0.14_145)] font-bold">
            <Leaf className="w-4 h-4" />
            SoEasy
          </div>
          <nav className="flex items-center gap-6 text-sm text-[oklch(0.50_0.03_75)]">
            <Link href="#" className="hover:text-[oklch(0.35_0.12_145)] transition-colors">
              서비스 소개
            </Link>
            <span className="text-[oklch(0.75_0.02_85)]">|</span>
            <Link href="#" className="hover:text-[oklch(0.35_0.12_145)] transition-colors">
              이용약관
            </Link>
            <span className="text-[oklch(0.75_0.02_85)]">|</span>
            <Link href="#" className="hover:text-[oklch(0.35_0.12_145)] transition-colors">
              개인정보처리방침
            </Link>
          </nav>
          <p className="text-xs text-[oklch(0.60_0.02_80)]">© 2026 SoEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
