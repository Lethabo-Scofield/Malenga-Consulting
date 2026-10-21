import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Malenga Consulting: We Turn Ideas Into Reality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06133f",
          color: "#f6f5f1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={460} height={100} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>We Turn Ideas Into Reality.</div>
          <div style={{ width: 96, height: 4, background: "#d5b32e", marginTop: 32 }} />
          <div style={{ fontSize: 26, marginTop: 24, color: "#d5b32e" }}>Strategy · Innovation · Implementation</div>
        </div>
      </div>
    ),
    size,
  );
}
