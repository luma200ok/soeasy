import { ChevronDown } from "lucide-react";
import { CityCard } from "@/components/cards/CityCard";
import type { City } from "@/lib/mock-data";

interface CityGridSectionProps {
  cities: City[];
}

export function CityGridSection({ cities }: CityGridSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button
          className="w-full max-w-xs flex items-center justify-center gap-2 h-10 rounded-md text-sm font-medium transition-all neon-btn-blue"
        >
          더 보기 <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
