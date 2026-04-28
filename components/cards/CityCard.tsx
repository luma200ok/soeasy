import Image from "next/image";
import { Wifi, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartButton } from "@/components/ui/HeartButton";
import type { City } from "@/lib/mock-data";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[oklch(0.42_0.12_145)]/15 hover:-translate-y-1.5 p-0 bg-[oklch(0.99_0.006_80)] border-[oklch(0.87_0.025_80)] rounded-2xl">
      <div className="relative h-44 w-full">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* 자연스러운 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.20_0.05_130)]/40 via-transparent to-transparent" />
        <Badge className="absolute top-3 left-3 bg-[oklch(0.25_0.08_145)]/75 backdrop-blur-sm text-white border-0 text-xs font-bold px-2 py-0.5 rounded-lg">
          #{city.rank}
        </Badge>
        <HeartButton />
      </div>

      <CardContent className="pt-4 pb-4 px-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-[oklch(0.22_0.02_60)] text-base leading-tight">{city.name}</h3>
            <p className="text-xs text-[oklch(0.55_0.03_75)] mt-0.5">{city.province}</p>
          </div>
          <div className="flex items-center gap-1 text-[oklch(0.65_0.15_65)] text-sm font-semibold shrink-0">
            <span>★</span>
            <span>{city.score.toFixed(1)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-[oklch(0.42_0.04_75)]">
          <div className="flex items-center gap-1.5">
            <span className="text-[oklch(0.45_0.14_145)] font-semibold">₩</span>
            <span>{city.monthlyCost}만/월</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-[oklch(0.50_0.12_200)]" />
            <span>{city.internet}Mbps</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>{city.weatherEmoji}</span>
            <span>{city.temp}°C</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[oklch(0.62_0.06_80)]" />
            <span>코워킹 {city.coworking}곳</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
