import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// NEXT_PUBLIC_SITE_URL: 커스텀 도메인 확정 후 설정
// VERCEL_URL: Vercel이 자동 주입 (배포 URL)
// fallback: 로컬 개발
const ALLOWED_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${ALLOWED_ORIGIN}/login?error=auth_callback_failed`);
    }
  }

  return NextResponse.redirect(`${ALLOWED_ORIGIN}/`);
}
