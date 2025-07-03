"use client";
import { useEffect, useState } from "react";
import { fetchEventsForPossession } from "@/lib/api";
import type { PuckEvent } from "@/data/eventTypes";

const RinkVisualizer = () => {
  const svg_width: number = 485;
  const svg_height: number = 486;
  const blueline_yaxis: number = 140;
  const goalline_yaxis: number = 418;
  const faceoff_dot_right: number[] = [355, 323];
  const faceoff_dot_left: number[] = [129, 323];
  const scale = 6;
  const xPx = (x: number) => (x / 100) * svg_width;
  const yPx = (y: number) => (y / 100) * svg_height;

  const [events, setEvents] = useState<PuckEvent[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEventsForPossession(1); // hardcoded for now
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events", err);
      }
    };

    loadEvents();
  }, []);

  return (
    <svg width={300} height={300} style={{ border: "1px solid #ccc" }}>
      <image href="/rink.png" x="0" y="0" width="300" height="300" />

      {events.map((e) => {
        const cx = "x_from" in e ? xPx(e.x_from) : 0;
        const cy = "y_from" in e && e.y_from !== null ? yPx(e.y_from) : 0;

        return (
          <circle key={e.id} cx={cx} cy={cy} r={6} fill="blue">
            <title>{`${e.event_type} by Player ${e.player_id} at ${e.time}`}</title>
          </circle>
        );
      })}
    </svg>
  );
};

export default RinkVisualizer;
