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
    <Card className="relative overflow-hidden group cursor-pointer transition-all duration-200 hover:border-gray-300 p-0 shadow-none border-gray-100">
      <div className="relative h-44 w-full">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className="absolute top-3 left-3 bg-black/50 text-white border-0 text-xs font-normal px-2 py-0.5">
          #{city.rank}
        </Badge>
        <HeartButton />
      </div>

      <CardContent className="pt-4 pb-4 px-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">{city.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{city.province}</p>
          </div>
          <div className="flex items-center gap-0.5 text-gray-500 text-xs font-medium shrink-0">
            <span>★</span>
            <span>{city.score.toFixed(1)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400 font-medium">₩</span>
            <span>{city.monthlyCost}만/월</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-gray-300" />
            <span>{city.internet}Mbps</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>{city.weatherEmoji}</span>
            <span>{city.temp}°C</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-gray-300" />
            <span>코워킹 {city.coworking}곳</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
