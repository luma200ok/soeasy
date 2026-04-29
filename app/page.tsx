"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FilterBar, type FilterState } from "@/components/sections/FilterBar";
import { CityGridSection } from "@/components/sections/CityGridSection";
import { CheckInWidget } from "@/components/sidebar/CheckInWidget";
import { RecentReviewsWidget } from "@/components/sidebar/RecentReviewsWidget";
import { MonthlyStatsWidget } from "@/components/sidebar/MonthlyStatsWidget";
import { mockCities } from "@/lib/mock-data";

const DEFAULT_FILTERS: FilterState = {
  budget: "all",
  region: "all",
  environment: "all",
  season: "all",
};

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  function handleFilterChange(key: keyof FilterState, value: string) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  const filteredCities = mockCities
    .slice()
    .sort((a, b) => b.likes - a.likes)
    .filter((city) => filters.budget === "all" || city.budget === filters.budget)
    .filter((city) => filters.region === "all" || city.region === filters.region)
    .filter((city) => filters.environment === "all" || city.environments.includes(filters.environment as never))
    .filter((city) => filters.season === "all" || city.bestSeasons.includes(filters.season as never));

  return (
    <>
      <HeroSection />

      <section id="cities" className="scroll-mt-16">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <CityGridSection cities={filteredCities} />
            </div>

            <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
              <CheckInWidget />
              <RecentReviewsWidget />
              <MonthlyStatsWidget />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
