export interface City {
  id: number;
  rank: number;
  name: string;
  province: string;
  score: number;
  monthlyCost: number;
  internet: number;
  weatherEmoji: string;
  temp: number;
  coworking: number;
  imageUrl: string;
}

export const mockCities: City[] = [
  {
    id: 1,
    rank: 1,
    name: "제주시",
    province: "제주도",
    score: 4.5,
    monthlyCost: 98,
    internet: 500,
    weatherEmoji: "⛅",
    temp: 16,
    coworking: 8,
    imageUrl: "https://picsum.photos/seed/jeju/400/240",
  },
  {
    id: 2,
    rank: 2,
    name: "부산",
    province: "경상남도",
    score: 4.2,
    monthlyCost: 112,
    internet: 600,
    weatherEmoji: "🌤",
    temp: 18,
    coworking: 15,
    imageUrl: "https://picsum.photos/seed/busan/400/240",
  },
  {
    id: 3,
    rank: 3,
    name: "강릉",
    province: "강원도",
    score: 4.0,
    monthlyCost: 87,
    internet: 200,
    weatherEmoji: "🌧",
    temp: 14,
    coworking: 3,
    imageUrl: "https://picsum.photos/seed/gangneung/400/240",
  },
  {
    id: 4,
    rank: 4,
    name: "전주",
    province: "전라북도",
    score: 3.9,
    monthlyCost: 82,
    internet: 400,
    weatherEmoji: "☀️",
    temp: 17,
    coworking: 6,
    imageUrl: "https://picsum.photos/seed/jeonju/400/240",
  },
  {
    id: 5,
    rank: 5,
    name: "춘천",
    province: "강원도",
    score: 3.8,
    monthlyCost: 79,
    internet: 300,
    weatherEmoji: "🌤",
    temp: 13,
    coworking: 4,
    imageUrl: "https://picsum.photos/seed/chuncheon/400/240",
  },
  {
    id: 6,
    rank: 6,
    name: "대전",
    province: "대전광역시",
    score: 3.7,
    monthlyCost: 95,
    internet: 500,
    weatherEmoji: "⛅",
    temp: 16,
    coworking: 11,
    imageUrl: "https://picsum.photos/seed/daejeon/400/240",
  },
  {
    id: 7,
    rank: 7,
    name: "경주",
    province: "경상북도",
    score: 3.6,
    monthlyCost: 75,
    internet: 250,
    weatherEmoji: "☀️",
    temp: 19,
    coworking: 5,
    imageUrl: "https://picsum.photos/seed/gyeongju/400/240",
  },
  {
    id: 8,
    rank: 8,
    name: "속초",
    province: "강원도",
    score: 3.5,
    monthlyCost: 88,
    internet: 150,
    weatherEmoji: "🌊",
    temp: 12,
    coworking: 2,
    imageUrl: "https://picsum.photos/seed/sokcho/400/240",
  },
  {
    id: 9,
    rank: 9,
    name: "여수",
    province: "전라남도",
    score: 3.4,
    monthlyCost: 84,
    internet: 180,
    weatherEmoji: "🌤",
    temp: 17,
    coworking: 3,
    imageUrl: "https://picsum.photos/seed/yeosu/400/240",
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
