import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockCheckInMembers } from "@/lib/mock-data";

export function CheckInWidget() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          지금 체크인
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {mockCheckInMembers.slice(0, 4).map((member) => (
              <Avatar key={member.id} className="w-8 h-8 border-2 border-white">
                <AvatarImage src={member.avatar} alt={`멤버 ${member.id}`} />
                <AvatarFallback className="text-xs bg-blue-100 text-blue-600">
                  {member.id}
                </AvatarFallback>
              </Avatar>
            ))}
            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs text-slate-500 font-medium">
              +8
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">멤버 12명</p>
            <p className="text-xs text-slate-500">현재 체크인 중</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
