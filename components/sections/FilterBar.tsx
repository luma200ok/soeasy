"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 이전 방식(prop 기반)과의 하위 호환을 위해 타입 유지
export interface FilterState {
  budget: string;
  region: string;
  environment: string;
  season: string;
}

const BUDGET_LABELS: Record<string, string> = {
  all: "전체 예산",
  under100: "100만원 미만",
  "100to200": "100~200만원",
  over200: "200만원 이상",
};

const REGION_LABELS: Record<string, string> = {
  all: "전체 지역",
  수도권: "수도권",
  경상도: "경상도",
  전라도: "전라도",
  강원도: "강원도",
  제주도: "제주도",
  충청도: "충청도",
};

const ENVIRONMENT_LABELS: Record<string, string> = {
  all: "전체 환경",
  자연친화: "자연친화",
  도심선호: "도심선호",
  카페작업: "카페작업",
  "코워킹 필수": "코워킹 필수",
};

const SEASON_LABELS: Record<string, string> = {
  all: "전체 계절",
  봄: "🌸 봄",
  여름: "☀️ 여름",
  가을: "🍂 가을",
  겨울: "❄️ 겨울",
};

export function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const budget = searchParams.get("budget") ?? "all";
  const region = searchParams.get("region") ?? "all";
  const environment = searchParams.get("environment") ?? "all";
  const season = searchParams.get("season") ?? "all";

  function handleFilterChange(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="sticky top-16 z-30 bg-white border-b border-slate-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
        <Select
          value={budget}
          onValueChange={(v) => v && handleFilterChange("budget", v)}
        >
          <SelectTrigger className="w-[130px] h-8 text-sm">
            <SelectValue>{BUDGET_LABELS[budget] ?? "예산"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체 예산</SelectItem>
            <SelectItem value="under100">100만원 미만</SelectItem>
            <SelectItem value="100to200">100~200만원</SelectItem>
            <SelectItem value="over200">200만원 이상</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={region}
          onValueChange={(v) => v && handleFilterChange("region", v)}
        >
          <SelectTrigger className="w-[110px] h-8 text-sm">
            <SelectValue>{REGION_LABELS[region] ?? "지역"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체 지역</SelectItem>
            <SelectItem value="수도권">수도권</SelectItem>
            <SelectItem value="경상도">경상도</SelectItem>
            <SelectItem value="전라도">전라도</SelectItem>
            <SelectItem value="강원도">강원도</SelectItem>
            <SelectItem value="제주도">제주도</SelectItem>
            <SelectItem value="충청도">충청도</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={environment}
          onValueChange={(v) => v && handleFilterChange("environment", v)}
        >
          <SelectTrigger className="w-[120px] h-8 text-sm">
            <SelectValue>
              {ENVIRONMENT_LABELS[environment] ?? "환경"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체 환경</SelectItem>
            <SelectItem value="자연친화">자연친화</SelectItem>
            <SelectItem value="도심선호">도심선호</SelectItem>
            <SelectItem value="카페작업">카페작업</SelectItem>
            <SelectItem value="코워킹 필수">코워킹 필수</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={season}
          onValueChange={(v) => v && handleFilterChange("season", v)}
        >
          <SelectTrigger className="w-[110px] h-8 text-sm">
            <SelectValue>{SEASON_LABELS[season] ?? "최고계절"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체 계절</SelectItem>
            <SelectItem value="봄">🌸 봄</SelectItem>
            <SelectItem value="여름">☀️ 여름</SelectItem>
            <SelectItem value="가을">🍂 가을</SelectItem>
            <SelectItem value="겨울">❄️ 겨울</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
