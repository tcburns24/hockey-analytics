// src/lib/api.ts
import axios from "axios";
import { PuckEvent } from "@/data/eventTypes";

export async function fetchEventsForPossession(
  possessionId: number
): Promise<PuckEvent[]> {
  const res = await axios.get<PuckEvent[]>(
    `/api/possessions/${possessionId}/events`
  );
  return res.data;
}
