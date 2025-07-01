// src/components/RinkVisualizer.tsx
"use client";

type PuckEvent = {
  id: number;
  possession_id: number;
  event_type: string;
  x: number;
  y: number;
  player: string;
  target_player?: string;
  result?: string;
  time: string;
};

import puckEvents from "@/data/events";

const RinkVisualizer = () => {
  const scale = 6;
  const xPx = (x: number) => (x / 100) * 300;
  const yPx = (y: number) => (y / 100) * 270; // stops just above goal line

  return (
    <svg width={507} height={501} style={{ border: "1px solid #ccc" }}>
      <image href="/rink.png" x="0" y="0" width="507" height="501" />

      {puckEvents.map((e: PuckEvent) => (
        <circle
          key={e.id}
          cx={xPx(e.x)}
          cy={yPx(e.y)}
          r={7}
          fill={e.event_type === "shot" ? "orange" : "green"}
        >
          <title>{`${e.event_type} by ${e.player} at ${e.time}`}</title>
        </circle>
      ))}

      {puckEvents.slice(0, -1).map((curr: PuckEvent, i: number) => {
        const next = puckEvents[i + 1];
        return (
          <line
            key={`line-${curr.id}`}
            x1={curr.x * scale}
            y1={curr.y * scale}
            x2={next.x * scale}
            y2={next.y * scale}
            stroke="black"
            strokeWidth={2}
          />
        );
      })}
    </svg>
  );
};

export default RinkVisualizer;
