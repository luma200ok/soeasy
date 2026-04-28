import Image from "next/image";
import { Wifi, Building2 } from "lucide-react";
import { HeartButton } from "@/components/ui/HeartButton";
import type { City } from "@/lib/mock-data";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer cyber-card rounded-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* 이미지 오버레이 */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.85) 100%)" }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded"
          style={{
            background: "rgba(255, 45, 120, 0.85)",
            color: "#fff",
            border: "1px solid rgba(255,45,120,0.6)",
            boxShadow: "0 0 10px rgba(255,45,120,0.5)",
          }}
        >
          #{city.rank}
        </span>
        <HeartButton />
      </div>

      <div className="pt-4 pb-4 px-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="font-bold text-base leading-tight"
              style={{ color: "#e2e8f0" }}
            >
              {city.name}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
              {city.province}
            </p>
          </div>
          <div
            className="flex items-center gap-1 text-sm font-semibold shrink-0"
            style={{
              color: "var(--neon-pink)",
              textShadow: "0 0 8px rgba(255,45,120,0.6)",
            }}
          >
            <span>★</span>
            <span>{city.score.toFixed(1)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
          <div className="flex items-center gap-1.5">
            <span
              className="font-semibold"
              style={{ color: "var(--neon-green)", textShadow: "0 0 6px rgba(0,255,170,0.5)" }}
            >
              ₩
            </span>
            <span>{city.monthlyCost}만/월</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi
              className="w-3.5 h-3.5"
              style={{ color: "var(--neon-blue)", filter: "drop-shadow(0 0 4px rgba(0,212,255,0.6))" }}
            />
            <span>{city.internet}Mbps</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>{city.weatherEmoji}</span>
            <span>{city.temp}°C</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2
              className="w-3.5 h-3.5"
              style={{ color: "var(--neon-purple)", filter: "drop-shadow(0 0 4px rgba(191,95,255,0.5))" }}
            />
            <span>코워킹 {city.coworking}곳</span>
          </div>
        </div>
      </div>
    </div>
  );
}
