import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <Button
          variant="outline"
          className="w-full max-w-xs text-[oklch(0.40_0.08_145)] border-[oklch(0.75_0.08_130)] hover:bg-[oklch(0.88_0.05_105)] hover:border-[oklch(0.55_0.12_145)] rounded-xl transition-all"
        >
          더 보기 <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
