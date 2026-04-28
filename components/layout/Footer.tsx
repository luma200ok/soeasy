import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-16 pb-20"
      style={{
        background: "var(--cyber-surface)",
        borderTop: "1px solid rgba(0, 212, 255, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold neon-text-pink">
            <MapPin
              className="w-4 h-4"
              style={{ filter: "drop-shadow(0 0 6px rgba(255,45,120,0.8))" }}
            />
            SoEasy
          </div>
          <nav className="flex items-center gap-6 text-sm" style={{ color: "var(--muted-foreground)" }}>
            <Link href="#" className="hover:text-[var(--neon-blue)] transition-colors">
              서비스 소개
            </Link>
            <span style={{ color: "rgba(0,212,255,0.2)" }}>|</span>
            <Link href="#" className="hover:text-[var(--neon-blue)] transition-colors">
              이용약관
            </Link>
            <span style={{ color: "rgba(0,212,255,0.2)" }}>|</span>
            <Link href="#" className="hover:text-[var(--neon-blue)] transition-colors">
              개인정보처리방침
            </Link>
          </nav>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            © 2026 SoEasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
