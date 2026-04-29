"use client";

import { notFound, useRouter } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { mockCities, mockReviews } from "@/lib/mock-data";
import { LikeDislikeButton } from "@/components/ui/LikeDislikeButton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CityCard } from "@/components/cards/CityCard";

const BUDGET_LABEL: Record<string, string> = {
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

const SPOT_BADGE: Record<string, string> = {
  카페: "bg-emerald-100 text-emerald-700",
  코워킹: "bg-blue-100 text-blue-700",
  명소: "bg-orange-100 text-orange-700",
};

const COST_LABELS: Record<string, string> = {
  housing: "숙박",
  food: "식비",
  transport: "교통",
  etc: "기타",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CityDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();

  const city = mockCities.find((c) => c.id === Number(id));
  if (!city) notFound();

  const reviews = mockReviews.filter((r) => r.cityName === city.name);

  const relatedCities = mockCities
    .filter((c) => c.id !== city.id)
    .filter(
      (c) =>
        c.region === city.region ||
        c.environments.some((env) => city.environments.includes(env))
    )
    .slice(0, 3);

  const costEntries = Object.entries(city.monthlyCostDetail) as [
    keyof typeof city.monthlyCostDetail,
    number
  ][];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 히어로 이미지 */}
      <div className="relative h-72 w-full">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* 뒤로 가기 */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          뒤로
        </button>

        {/* 도시명 오버레이 */}
        <div className="absolute bottom-5 left-5">
          <h1 className="text-3xl font-bold text-white leading-tight">{city.name}</h1>
          <p className="text-white/80 text-sm mt-1">{city.province}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">
        {/* 기본 정보 + 좋아요 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <dl className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
              <div>
                <dt className="text-slate-400 text-xs mb-0.5">예산</dt>
                <dd className="font-semibold text-slate-800">{BUDGET_LABEL[city.budget]}</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs mb-0.5">지역</dt>
                <dd className="font-semibold text-slate-800">{city.region}</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs mb-0.5">환경</dt>
                <dd className="font-semibold text-slate-800">{city.environments.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs mb-0.5">최고계절</dt>
                <dd className="font-semibold text-slate-800">
                  {city.bestSeasons.map((s) => `${SEASON_EMOJI[s]}${s}`).join(" ")}
                </dd>
              </div>
            </dl>
            <LikeDislikeButton likes={city.likes} dislikes={city.dislikes} />
          </div>
        </section>

        {/* 도시 소개 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">도시 소개</h2>
          <p className="text-slate-600 leading-relaxed text-sm">{city.description}</p>
        </section>

        <Separator />

        {/* 주요 명소 & 카페 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">주요 명소 & 카페</h2>
          <ul className="flex flex-col gap-4">
            {city.spots.map((spot, i) => (
              <li key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${SPOT_BADGE[spot.category]}`}
                  >
                    {spot.category}
                  </span>
                  <span className="font-semibold text-slate-800 text-sm">{spot.name}</span>
                </div>
                <p className="text-xs text-slate-500 pl-1">{spot.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        {/* 월 생활비 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">월 예상 생활비</h2>
          <p className="text-3xl font-bold text-slate-900 mb-5">
            {city.monthlyCost}
            <span className="text-base font-normal text-slate-500 ml-1">만원</span>
          </p>
          <ul className="flex flex-col gap-3">
            {costEntries.map(([key, amount]) => {
              const pct = Math.round((amount / city.monthlyCost) * 100);
              return (
                <li key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{COST_LABELS[key]}</span>
                    <span className="font-medium text-slate-800">{amount}만원</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <Separator />

        {/* 유저 리뷰 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">노마드 후기</h2>
          {reviews.length === 0 ? (
            <p className="text-sm text-slate-400 text-center py-6">아직 후기가 없습니다.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {reviews.map((review) => (
                <li key={review.id} className="flex flex-col gap-1">
                  <p className="text-sm text-slate-700 leading-relaxed">"{review.content}"</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-medium text-slate-500">{review.author}</span>
                    <span>·</span>
                    <span>{review.timeAgo}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <Separator />

        {/* 연관 도시 추천 */}
        {relatedCities.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">비슷한 도시</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedCities.map((c) => (
                <CityCard key={c.id} city={c} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
