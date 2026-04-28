import Image from "next/image";
import { Wifi, Building2 } from "lucide-react";
import { HeartButton } from "@/components/ui/HeartButton";
import type { City } from "@/lib/mock-data";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <div className="relative overflow-hidden group cursor-pointer bg-[#111111] border border-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.5)] transition-all duration-400 hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)]">
      {/* 이미지 영역 */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* 랭크 배지 */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] bg-[#0A0A0A]/80 px-2 py-1 border border-[rgba(201,168,76,0.4)]">
            No.{city.rank}
          </span>
        </div>
        <HeartButton />
        {/* 하단 그라데이션 오버레이 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="px-5 pt-4 pb-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#F7F3ED] leading-tight tracking-wide">
              {city.name}
            </h3>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5040] mt-0.5">{city.province}</p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[#C9A84C] text-lg font-light font-[family-name:var(--font-cormorant)]">
              {city.score.toFixed(1)}
            </span>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#5A5040]">score</span>
          </div>
        </div>

        {/* 골드 구분선 */}
        <div className="h-px bg-gradient-to-r from-[rgba(201,168,76,0.3)] to-transparent mb-4" />

        <div className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-xs text-[#6A6050]">
          <div className="flex items-center gap-2">
            <span className="text-[#C9A84C] text-xs">₩</span>
            <span className="tracking-wide">{city.monthlyCost}만/월</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-3 h-3 text-[#8A6E32]" />
            <span className="tracking-wide">{city.internet}Mbps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{city.weatherEmoji}</span>
            <span className="tracking-wide">{city.temp}°C</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-3 h-3 text-[#8A6E32]" />
            <span className="tracking-wide">코워킹 {city.coworking}곳</span>
          </div>
        </div>
      </div>
    </div>
  );
}
