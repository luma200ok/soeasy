import { Suspense } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FilterBar } from "@/components/sections/FilterBar";
import { CityGridSection } from "@/components/sections/CityGridSection";
import { CheckInWidget } from "@/components/sidebar/CheckInWidget";
import { RecentReviewsWidget } from "@/components/sidebar/RecentReviewsWidget";
import { MonthlyStatsWidget } from "@/components/sidebar/MonthlyStatsWidget";
import { getCities } from "@/lib/supabase/cities";

interface HomePageProps {
  searchParams: Promise<{
    budget?: string;
    region?: string;
    environment?: string;
    season?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;

  const cities = await getCities({
    budget: params.budget,
    region: params.region,
    environment: params.environment,
    season: params.season,
  });

  return (
    <>
      <HeroSection />

      <section id="cities" className="scroll-mt-16">
        <Suspense>
          <FilterBar />
        </Suspense>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <CityGridSection
                key={`${params.budget}-${params.region}-${params.environment}-${params.season}`}
                cities={cities}
              />
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
