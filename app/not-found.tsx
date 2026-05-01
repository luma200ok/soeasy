import Link from "next/link";
import { MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
      <MapPin className="w-12 h-12 text-slate-300" />
      <h2 className="text-xl font-semibold text-slate-800">페이지를 찾을 수 없어요</h2>
      <p className="text-sm text-slate-500 text-center">
        요청하신 페이지가 존재하지 않습니다.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
