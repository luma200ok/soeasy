import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LikeDislikeButton } from "@/components/ui/LikeDislikeButton";
import type { City, BudgetFilter } from "@/lib/mock-data";

interface CityCardProps {
  city: City;
}

const BUDGET_LABEL: Record<BudgetFilter, string> = {
  under100: "100만원 미만",
  "100to200": "100~200만원",
  over200: "200만원 이상",
};

const SEASON_EMOJI: Record<string, string> = {
  봄: "🌸",
  여름: "☀️",
  가을: "🍂",
  겨울: "❄️",
};

export function CityCard({ city }: CityCardProps) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 p-0">
      <div className="relative h-44 w-full">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="pt-4 pb-4 px-4">
        <div className="mb-3">
          <h3 className="font-bold text-slate-900 text-base leading-tight">{city.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{city.province}</p>
        </div>

        <dl className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-slate-600 mb-3">
          <div>
            <dt className="text-slate-400 mb-0.5">예산</dt>
            <dd className="font-medium text-slate-700">{BUDGET_LABEL[city.budget]}</dd>
          </div>
          <div>
            <dt className="text-slate-400 mb-0.5">지역</dt>
            <dd className="font-medium text-slate-700">{city.region}</dd>
          </div>
          <div>
            <dt className="text-slate-400 mb-0.5">환경</dt>
            <dd className="font-medium text-slate-700">{city.environments.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-slate-400 mb-0.5">최고계절</dt>
            <dd className="font-medium text-slate-700">
              {city.bestSeasons.map((s) => `${SEASON_EMOJI[s]}${s}`).join(" ")}
            </dd>
          </div>
        </dl>

        <LikeDislikeButton likes={city.likes} dislikes={city.dislikes} />
      </CardContent>
    </Card>
  );
}
