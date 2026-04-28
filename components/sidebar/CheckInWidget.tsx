import { MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockCheckInMembers } from "@/lib/mock-data";

export function CheckInWidget() {
  return (
    <div
      className="rounded-lg p-4"
      style={{
        background: "var(--cyber-surface)",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.05)",
      }}
    >
      <h3
        className="text-sm font-semibold flex items-center gap-2 mb-3"
        style={{ color: "#e2e8f0" }}
      >
        <MapPin
          className="w-4 h-4"
          style={{ color: "var(--neon-blue)", filter: "drop-shadow(0 0 4px rgba(0,212,255,0.7))" }}
        />
        지금 체크인
      </h3>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {mockCheckInMembers.slice(0, 4).map((member) => (
            <Avatar
              key={member.id}
              className="w-8 h-8"
              style={{ border: "2px solid rgba(0, 212, 255, 0.4)" }}
            >
              <AvatarImage src={member.avatar} alt={`멤버 ${member.id}`} />
              <AvatarFallback
                className="text-xs"
                style={{ background: "rgba(0,212,255,0.15)", color: "var(--neon-blue)" }}
              >
                {member.id}
              </AvatarFallback>
            </Avatar>
          ))}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
            style={{
              background: "rgba(191, 95, 255, 0.15)",
              border: "2px solid rgba(191, 95, 255, 0.4)",
              color: "var(--neon-purple)",
            }}
          >
            +8
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>
            멤버 12명
          </p>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            현재 체크인 중
          </p>
        </div>
      </div>
    </div>
  );
}
