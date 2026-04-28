import { Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockCheckInMembers } from "@/lib/mock-data";

export function CheckInWidget() {
  return (
    <Card className="bg-[oklch(0.99_0.006_80)] border-[oklch(0.87_0.025_80)] rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-[oklch(0.30_0.04_70)] flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[oklch(0.45_0.14_145)]" />
          지금 체크인
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {mockCheckInMembers.slice(0, 4).map((member) => (
              <Avatar key={member.id} className="w-8 h-8 border-2 border-[oklch(0.97_0.015_95)]">
                <AvatarImage src={member.avatar} alt={`멤버 ${member.id}`} />
                <AvatarFallback className="text-xs bg-[oklch(0.88_0.05_105)] text-[oklch(0.35_0.12_145)]">
                  {member.id}
                </AvatarFallback>
              </Avatar>
            ))}
            <div className="w-8 h-8 rounded-full bg-[oklch(0.92_0.025_80)] border-2 border-[oklch(0.97_0.015_95)] flex items-center justify-center text-xs text-[oklch(0.50_0.03_75)] font-medium">
              +8
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[oklch(0.25_0.03_65)]">멤버 12명</p>
            <p className="text-xs text-[oklch(0.55_0.03_75)]">현재 체크인 중</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
