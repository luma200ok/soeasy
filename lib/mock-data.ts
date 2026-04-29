// ─── Filter Type Exports ───────────────────────────────────────────────────
export type BudgetFilter = 'under100' | '100to200' | 'over200';
export type RegionFilter = '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도';
export type EnvironmentFilter = '자연친화' | '도심선호' | '카페작업' | '코워킹 필수';
export type SeasonFilter = '봄' | '여름' | '가을' | '겨울';

// ─── City Interface ────────────────────────────────────────────────────────
export interface City {
  id: number;
  name: string;
  province: string;
  monthlyCost: number;
  imageUrl: string;
  budget: BudgetFilter;
  region: RegionFilter;
  environments: EnvironmentFilter[];
  bestSeasons: SeasonFilter[];
  likes: number;
  dislikes: number;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────
export const mockCities: City[] = [
  {
    id: 1,
    name: "제주시",
    province: "제주도",
    monthlyCost: 98,
    imageUrl: "https://picsum.photos/seed/jeju/400/240",
    budget: 'under100',
    region: '제주도',
    environments: ['자연친화', '카페작업'],
    bestSeasons: ['봄', '가을'],
    likes: 142,
    dislikes: 8,
  },
  {
    id: 2,
    name: "부산",
    province: "경상남도",
    monthlyCost: 112,
    imageUrl: "https://picsum.photos/seed/busan/400/240",
    budget: '100to200',
    region: '경상도',
    environments: ['도심선호', '코워킹 필수'],
    bestSeasons: ['여름', '가을'],
    likes: 118,
    dislikes: 12,
  },
  {
    id: 3,
    name: "강릉",
    province: "강원도",
    monthlyCost: 87,
    imageUrl: "https://picsum.photos/seed/gangneung/400/240",
    budget: 'under100',
    region: '강원도',
    environments: ['자연친화', '카페작업'],
    bestSeasons: ['여름'],
    likes: 95,
    dislikes: 15,
  },
  {
    id: 4,
    name: "전주",
    province: "전라북도",
    monthlyCost: 82,
    imageUrl: "https://picsum.photos/seed/jeonju/400/240",
    budget: 'under100',
    region: '전라도',
    environments: ['자연친화', '카페작업'],
    bestSeasons: ['봄', '가을'],
    likes: 87,
    dislikes: 10,
  },
  {
    id: 5,
    name: "춘천",
    province: "강원도",
    monthlyCost: 79,
    imageUrl: "https://picsum.photos/seed/chuncheon/400/240",
    budget: 'under100',
    region: '강원도',
    environments: ['자연친화'],
    bestSeasons: ['봄', '여름'],
    likes: 72,
    dislikes: 18,
  },
  {
    id: 6,
    name: "대전",
    province: "대전광역시",
    monthlyCost: 95,
    imageUrl: "https://picsum.photos/seed/daejeon/400/240",
    budget: 'under100',
    region: '충청도',
    environments: ['도심선호', '코워킹 필수'],
    bestSeasons: ['봄', '가을'],
    likes: 64,
    dislikes: 9,
  },
  {
    id: 7,
    name: "경주",
    province: "경상북도",
    monthlyCost: 75,
    imageUrl: "https://picsum.photos/seed/gyeongju/400/240",
    budget: 'under100',
    region: '경상도',
    environments: ['자연친화', '카페작업'],
    bestSeasons: ['봄', '가을', '겨울'],
    likes: 55,
    dislikes: 20,
  },
  {
    id: 8,
    name: "속초",
    province: "강원도",
    monthlyCost: 88,
    imageUrl: "https://picsum.photos/seed/sokcho/400/240",
    budget: 'under100',
    region: '강원도',
    environments: ['자연친화'],
    bestSeasons: ['여름', '겨울'],
    likes: 48,
    dislikes: 22,
  },
  {
    id: 9,
    name: "여수",
    province: "전라남도",
    monthlyCost: 84,
    imageUrl: "https://picsum.photos/seed/yeosu/400/240",
    budget: 'under100',
    region: '전라도',
    environments: ['자연친화', '카페작업'],
    bestSeasons: ['여름'],
    likes: 41,
    dislikes: 14,
  },
];

export const mockReviews = [
  {
    id: 1,
    cityName: "제주시",
    content: "카페 퀄리티가 진짜 서울 못지않아요. 인터넷도 빠름!",
    author: "@nomad_kim",
    timeAgo: "5분 전",
  },
  {
    id: 2,
    cityName: "부산",
    content: "해운대 근처 코워킹 스페이스 가성비 최고입니다",
    author: "@freelancer_park",
    timeAgo: "23분 전",
  },
  {
    id: 3,
    cityName: "전주",
    content: "한옥마을 근처 카페에서 작업하면 집중 잘 돼요",
    author: "@remote_lee",
    timeAgo: "1시간 전",
  },
];

export const mockCheckInMembers = [
  { id: 1, city: "제주시", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" },
  { id: 2, city: "부산", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2" },
  { id: 3, city: "강릉", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3" },
  { id: 4, city: "전주", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4" },
  { id: 5, city: "제주시", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5" },
];
