"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CityCard } from "@/components/cards/CityCard";
import type { City } from "@/lib/mock-data";

const PAGE_SIZE = 6;

interface CityGridSectionProps {
  cities: City[];
}

export function CityGridSection({ cities }: CityGridSectionProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [cities]);

  const visibleCities = cities.slice(0, visibleCount);
  const hasMore = visibleCount < cities.length;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-slate-900">도시 리스트</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {visibleCities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            className="w-full max-w-xs text-slate-600 border-slate-300 hover:bg-slate-50"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            더 보기 <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
