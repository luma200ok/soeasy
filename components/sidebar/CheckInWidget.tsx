import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockCheckInMembers } from "@/lib/mock-data";

export function CheckInWidget() {
  return (
    <Card className="shadow-none border-gray-100">
      <CardHeader className="pb-3">
        <CardTitle className="text-xs font-medium text-gray-500 flex items-center gap-2 uppercase tracking-wide">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          지금 체크인
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {mockCheckInMembers.slice(0, 4).map((member) => (
              <Avatar key={member.id} className="w-7 h-7 border-2 border-white">
                <AvatarImage src={member.avatar} alt={`멤버 ${member.id}`} />
                <AvatarFallback className="text-xs bg-gray-100 text-gray-500">
                  {member.id}
                </AvatarFallback>
              </Avatar>
            ))}
            <div className="w-7 h-7 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-xs text-gray-400 font-medium">
              +8
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">멤버 12명</p>
            <p className="text-xs text-gray-400">현재 체크인 중</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
