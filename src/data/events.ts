// src/data/events.ts
import { PuckEvent } from "@/components/RinkVisualizer";

const puckEvents: PuckEvent[] = [
  {
    id: 1,
    possession_id: 101,
    event_type: "zoneEntry",
    x: 10,
    y: 50,
    player: "Player A",
    time: "12:31",
  },
  {
    id: 2,
    possession_id: 101,
    event_type: "stickhandle",
    x: 30,
    y: 55,
    player: "Player A",
    time: "12:34",
  },
  {
    id: 3,
    possession_id: 101,
    event_type: "pass",
    x: 45,
    y: 60,
    player: "Player A",
    target_player: "Player B",
    result: "complete",
    time: "12:36",
  },
  {
    id: 4,
    possession_id: 101,
    event_type: "shot",
    x: 85,
    y: 40,
    player: "Player B",
    result: "goal",
    time: "12:39",
  },
];

export default puckEvents;
