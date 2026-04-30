import { HeroSection } from "@/components/sections/HeroSection";
import { FilterBar } from "@/components/sections/FilterBar";
import { CityGridSection } from "@/components/sections/CityGridSection";
import { CheckInWidget } from "@/components/sidebar/CheckInWidget";
import { RecentReviewsWidget } from "@/components/sidebar/RecentReviewsWidget";
import { MonthlyStatsWidget } from "@/components/sidebar/MonthlyStatsWidget";
import { createClient } from "@/utils/supabase/server";
import { getCities, normalizeCityFilters } from "@/lib/supabase/cities";
import { getRecentCheckInMembers, getRecentReviews } from "@/lib/supabase/reviews";

interface HomePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const filters = normalizeCityFilters(await searchParams);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const [cities, recentReviews, checkInMembers] = await Promise.all([
    getCities(filters, user?.id),
    getRecentReviews(5),
    getRecentCheckInMembers(4),
  ]);
  const filterKey = Object.values(filters).join("-");

  return (
    <>
      <HeroSection />

      <section id="cities" className="scroll-mt-16">
        <FilterBar filters={filters} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <CityGridSection key={filterKey} cities={cities} />
            </div>

            <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
              <CheckInWidget members={checkInMembers} />
              <RecentReviewsWidget reviews={recentReviews} />
              <MonthlyStatsWidget />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
