"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterBar() {
  const [region, setRegion] = useState("all");
  const [cost, setCost] = useState("all");
  const [internet, setInternet] = useState("all");
  const [coworking, setCoworking] = useState("all");
  const [sort, setSort] = useState("score");

  const onChange = (setter: (v: string) => void) => (value: string | null) => {
    if (value !== null) setter(value);
  };

  return (
    <div className="sticky top-14 z-30 bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Select value={region} onValueChange={onChange(setRegion)}>
            <SelectTrigger className="w-[110px] h-8 text-sm">
              <SelectValue placeholder="지역" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 지역</SelectItem>
              <SelectItem value="capital">수도권</SelectItem>
              <SelectItem value="chungcheong">충청</SelectItem>
              <SelectItem value="honam">호남</SelectItem>
              <SelectItem value="yeongnam">영남</SelectItem>
              <SelectItem value="gangwon">강원</SelectItem>
              <SelectItem value="jeju">제주</SelectItem>
            </SelectContent>
          </Select>

          <Select value={cost} onValueChange={onChange(setCost)}>
            <SelectTrigger className="w-[120px] h-8 text-sm">
              <SelectValue placeholder="월 생활비" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 생활비</SelectItem>
              <SelectItem value="under80">~80만원</SelectItem>
              <SelectItem value="80to120">80~120만원</SelectItem>
              <SelectItem value="over120">120만원~</SelectItem>
            </SelectContent>
          </Select>

          <Select value={internet} onValueChange={onChange(setInternet)}>
            <SelectTrigger className="w-[130px] h-8 text-sm">
              <SelectValue placeholder="인터넷 속도" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="100">100Mbps+</SelectItem>
              <SelectItem value="300">300Mbps+</SelectItem>
              <SelectItem value="500">500Mbps+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={coworking} onValueChange={onChange(setCoworking)}>
            <SelectTrigger className="w-[110px] h-8 text-sm">
              <SelectValue placeholder="코워킹" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="yes">있음</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="shrink-0">정렬:</span>
          <Select value={sort} onValueChange={onChange(setSort)}>
            <SelectTrigger className="w-[150px] h-8 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">노마드스코어 높은 순</SelectItem>
              <SelectItem value="cost">생활비 낮은 순</SelectItem>
              <SelectItem value="recent">최근 평가 많은 순</SelectItem>
              <SelectItem value="internet">인터넷 빠른 순</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
