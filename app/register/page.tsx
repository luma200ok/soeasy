import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* 로고 */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl text-blue-600">
            <MapPin className="w-6 h-6" />
            SoEasy
          </Link>
          <p className="mt-2 text-slate-500 text-sm">도시 생활의 모든 것을 한 곳에서</p>
        </div>

        {/* 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h1 className="text-xl font-semibold text-slate-900 mb-6">회원가입</h1>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="nickname" className="text-sm font-medium text-slate-700">
                닉네임
              </label>
              <Input
                id="nickname"
                type="text"
                placeholder="사용할 닉네임을 입력하세요"
                className="h-10"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                이메일
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="h-10"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                비밀번호
              </label>
              <Input
                id="password"
                type="password"
                placeholder="8자 이상 입력하세요"
                className="h-10"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="passwordConfirm" className="text-sm font-medium text-slate-700">
                비밀번호 확인
              </label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                className="h-10"
              />
            </div>

            <p className="text-xs text-slate-400 pt-1">
              가입 시{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                이용약관
              </Link>{" "}
              및{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                개인정보처리방침
              </Link>
              에 동의하는 것으로 간주합니다.
            </p>

            <Button
              type="submit"
              className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg mt-2"
            >
              가입하기
            </Button>
          </form>

          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-slate-400">또는</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-10 mt-4 border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google로 계속하기
          </Button>

          <p className="mt-6 text-center text-sm text-slate-500">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
