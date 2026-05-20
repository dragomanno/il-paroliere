/**
 * /api/og — Dynamic OG image generator for Il Paroliere lemma pages
 *
 * Usage:
 *   /api/og?lemma=resilienza&def=Capacità+di+un+sistema...
 *
 * Returns a 1200×630 PNG rendered via next/og (Satori).
 * Falls back gracefully if params are missing.
 *
 * Phase 3+ — wire up in generateMetadata() of /parola/[lemma]/page.tsx
 */

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const lemma = searchParams.get("lemma") ?? "Il Paroliere";
  const def   = searchParams.get("def")   ?? "Definizioni aperte, lingua viva.";
  // partOfSpeech optional — shown as small tag above the lemma
  const pos   = searchParams.get("pos")   ?? "";

  // Truncate definition to keep layout clean
  const MAX_DEF = 120;
  const defShort = def.length > MAX_DEF ? def.slice(0, MAX_DEF).trimEnd() + "…" : def;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#111111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Card */}
        <div
          style={{
            width: "1056px",      // 1200 - 2*72
            height: "510px",      // 630 - 2*60
            background: "#181818",
            borderRadius: "18px",
            border: "1px solid #2a2a2a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Accent bar lime */}
          <div
            style={{
              position: "absolute",
              top: "1px",
              left: "1px",
              width: "5px",
              height: "508px",
              background: "#b8dc16",
              borderRadius: "2px",
            }}
          />

          {/* Content area */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              paddingLeft: "72px",
              paddingRight: "64px",
              paddingTop: "56px",
              gap: "0px",
            }}
          >
            {/* Pennino icon + brand name */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "36px" }}>
              {/* Simplified nib mark */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#1a1a1a",
                  borderRadius: "50%",
                  border: "2px solid #2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Lime diamond — abstracted nib tip */}
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    background: "#b8dc16",
                    transform: "rotate(45deg)",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#b8b3a7",
                  letterSpacing: "-0.02em",
                }}
              >
                Il Paroliere
              </span>
            </div>

            {/* Part of speech tag */}
            {pos && (
              <span
                style={{
                  fontSize: "16px",
                  color: "#b8b3a7",
                  background: "#222222",
                  border: "1px solid #2a2a2a",
                  borderRadius: "4px",
                  padding: "2px 10px",
                  width: "fit-content",
                  marginBottom: "16px",
                  letterSpacing: "0.04em",
                  textTransform: "lowercase",
                }}
              >
                {pos}
              </span>
            )}

            {/* Lemma — hero text */}
            <div
              style={{
                fontSize: lemma.length > 14 ? "72px" : "96px",
                fontWeight: "700",
                color: "#f7f3e8",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "24px",
              }}
            >
              {lemma}
            </div>

            {/* Short definition */}
            <div
              style={{
                fontSize: "26px",
                color: "#b8b3a7",
                lineHeight: 1.45,
                maxWidth: "860px",
              }}
            >
              {defShort}
            </div>
          </div>

          {/* Footer row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #2a2a2a",
              padding: "18px 36px 18px 72px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#b8b3a7" }}>
              ilparoliere.online  ·  a cura di Pistakkio®
            </span>
            <span style={{ fontSize: "16px", color: "#b8dc16", fontWeight: "700" }}>
              open source · CC BY-SA 4.0
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
