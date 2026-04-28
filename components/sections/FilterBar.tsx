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
    <div className="sticky top-16 z-30 bg-[#0A0A0A] border-b border-[rgba(201,168,76,0.2)] px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Select value={region} onValueChange={onChange(setRegion)}>
            <SelectTrigger className="w-[110px] h-8 text-xs tracking-wide bg-[#111111] border-[rgba(201,168,76,0.25)] text-[#8A8070] hover:border-[rgba(201,168,76,0.5)] rounded-none">
              <SelectValue placeholder="지역" />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-[rgba(201,168,76,0.25)] rounded-none">
              <SelectItem value="all" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">전체 지역</SelectItem>
              <SelectItem value="capital" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">수도권</SelectItem>
              <SelectItem value="chungcheong" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">충청</SelectItem>
              <SelectItem value="honam" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">호남</SelectItem>
              <SelectItem value="yeongnam" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">영남</SelectItem>
              <SelectItem value="gangwon" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">강원</SelectItem>
              <SelectItem value="jeju" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">제주</SelectItem>
            </SelectContent>
          </Select>

          <Select value={cost} onValueChange={onChange(setCost)}>
            <SelectTrigger className="w-[120px] h-8 text-xs tracking-wide bg-[#111111] border-[rgba(201,168,76,0.25)] text-[#8A8070] hover:border-[rgba(201,168,76,0.5)] rounded-none">
              <SelectValue placeholder="월 생활비" />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-[rgba(201,168,76,0.25)] rounded-none">
              <SelectItem value="all" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">전체 생활비</SelectItem>
              <SelectItem value="under80" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">~80만원</SelectItem>
              <SelectItem value="80to120" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">80~120만원</SelectItem>
              <SelectItem value="over120" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">120만원~</SelectItem>
            </SelectContent>
          </Select>

          <Select value={internet} onValueChange={onChange(setInternet)}>
            <SelectTrigger className="w-[130px] h-8 text-xs tracking-wide bg-[#111111] border-[rgba(201,168,76,0.25)] text-[#8A8070] hover:border-[rgba(201,168,76,0.5)] rounded-none">
              <SelectValue placeholder="인터넷 속도" />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-[rgba(201,168,76,0.25)] rounded-none">
              <SelectItem value="all" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">전체</SelectItem>
              <SelectItem value="100" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">100Mbps+</SelectItem>
              <SelectItem value="300" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">300Mbps+</SelectItem>
              <SelectItem value="500" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">500Mbps+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={coworking} onValueChange={onChange(setCoworking)}>
            <SelectTrigger className="w-[110px] h-8 text-xs tracking-wide bg-[#111111] border-[rgba(201,168,76,0.25)] text-[#8A8070] hover:border-[rgba(201,168,76,0.5)] rounded-none">
              <SelectValue placeholder="코워킹" />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-[rgba(201,168,76,0.25)] rounded-none">
              <SelectItem value="all" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">전체</SelectItem>
              <SelectItem value="yes" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">있음</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#5A5040] tracking-wide">
          <span className="shrink-0">정렬</span>
          <Select value={sort} onValueChange={onChange(setSort)}>
            <SelectTrigger className="w-[160px] h-8 text-xs tracking-wide bg-[#111111] border-[rgba(201,168,76,0.25)] text-[#8A8070] hover:border-[rgba(201,168,76,0.5)] rounded-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-[rgba(201,168,76,0.25)] rounded-none">
              <SelectItem value="score" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">노마드스코어 높은 순</SelectItem>
              <SelectItem value="cost" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">생활비 낮은 순</SelectItem>
              <SelectItem value="recent" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">최근 평가 많은 순</SelectItem>
              <SelectItem value="internet" className="text-xs text-[#8A8070] focus:bg-[#1A1A1A] focus:text-[#C9A84C]">인터넷 빠른 순</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
