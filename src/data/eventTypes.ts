type BasePuckEvent = {
  id: number;
  event_type: "zoneEntry" | "pass" | "shot" | "contestedPuck";
  time: string;
  possession_id: number;
  player_id: number;
};

type ZoneEntryEvent = BasePuckEvent & {
  event_type: "zoneEntry";
  x_from: number;
  entry_method: "stickhandle" | "dump";
};

type PassEvent = BasePuckEvent & {
  event_type: "pass";
  x_from: number;
  y_from: number;
  x_to: number;
  y_to: number;
  result: "complete" | "incomplete";
  target_player_id: number;
};

type ShotEvent = BasePuckEvent & {
  event_type: "shot";
  x_from: number;
  y_from: number;
  target_area:
    | "stick-top"
    | "stick-mid"
    | "stick-btm"
    | "glove-top"
    | "glove-mid"
    | "glove-btm"
    | "5-hole";
  result: "goal" | "saved" | "missed";
  rebound: boolean;
};

type ContestedPuckEvent = BasePuckEvent & {
  event_type: "contestedPuck";
  x_from: number;
  y_from: number;
  result: "win" | "loss";
};

export type PuckEvent =
  | ZoneEntryEvent
  | PassEvent
  | ShotEvent
  | ContestedPuckEvent;
