import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.2)] bg-[#0A0A0A] mt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 골드 구분선 */}
        <div className="gold-divider mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.2em] text-[#C9A84C] uppercase">
              SoEasy
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#5A5040]">
              Digital Nomad Korea
            </span>
          </div>

          <nav className="flex items-center gap-6 text-[10px] tracking-[0.15em] uppercase text-[#5A5040]">
            <Link href="#" className="hover:text-[#C9A84C] transition-colors duration-300">
              서비스 소개
            </Link>
            <span className="text-[#2A2520]">|</span>
            <Link href="#" className="hover:text-[#C9A84C] transition-colors duration-300">
              이용약관
            </Link>
            <span className="text-[#2A2520]">|</span>
            <Link href="#" className="hover:text-[#C9A84C] transition-colors duration-300">
              개인정보처리방침
            </Link>
          </nav>

          <p className="text-[10px] tracking-[0.1em] text-[#3A3028]">
            © 2026 SoEasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
