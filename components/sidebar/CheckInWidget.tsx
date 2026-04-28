import { MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockCheckInMembers } from "@/lib/mock-data";

export function CheckInWidget() {
  return (
    <div className="bg-[#111111] border border-[rgba(201,168,76,0.2)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A8070]">지금 체크인</span>
      </div>
      <div className="h-px bg-gradient-to-r from-[rgba(201,168,76,0.3)] to-transparent mb-4" />
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {mockCheckInMembers.slice(0, 4).map((member) => (
            <Avatar key={member.id} className="w-7 h-7 border border-[rgba(201,168,76,0.3)]">
              <AvatarImage src={member.avatar} alt={`멤버 ${member.id}`} />
              <AvatarFallback className="text-[10px] bg-[#1A1A1A] text-[#C9A84C]">
                {member.id}
              </AvatarFallback>
            </Avatar>
          ))}
          <div className="w-7 h-7 rounded-full bg-[#1A1A1A] border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[10px] text-[#C9A84C]">
            +8
          </div>
        </div>
        <div>
          <p className="text-sm font-light text-[#F7F3ED] tracking-wide">멤버 12명</p>
          <p className="text-[10px] tracking-[0.1em] text-[#5A5040]">현재 체크인 중</p>
        </div>
      </div>
    </div>
  );
}
