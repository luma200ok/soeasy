import { ChevronDown } from "lucide-react";
import { CityCard } from "@/components/cards/CityCard";
import type { City } from "@/lib/mock-data";

interface CityGridSectionProps {
  cities: City[];
}

export function CityGridSection({ cities }: CityGridSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button className="flex items-center gap-2 px-10 py-3 text-[10px] tracking-[0.2em] uppercase text-[#8A8070] border border-[rgba(201,168,76,0.25)] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C] transition-all duration-300">
          더 보기 <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
