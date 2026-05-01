import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SoEasy — 한국 디지털 노마드 도시 랭킹";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 64,
              lineHeight: 1,
            }}
          >
            🗺️
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            SoEasy
          </div>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.9)",
            fontWeight: 500,
            marginBottom: 16,
          }}
        >
          한국 디지털 노마드 도시 랭킹
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          인터넷 · 카페 · 물가 · 교통 조건으로 나에게 맞는 도시를 찾아보세요
        </div>
      </div>
    ),
    size
  );
}
