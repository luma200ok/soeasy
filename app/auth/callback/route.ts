import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
