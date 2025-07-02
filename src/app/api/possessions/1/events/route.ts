import { NextRequest } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const possessionId = params.id;

  try {
    const result = await pool.query(
      `
      SELECT 
        e.*, 
        p.name AS player_name, 
        tp.name AS target_player_name
      FROM puck_events e
      LEFT JOIN players p ON e.player_id = p.id
      LEFT JOIN players tp ON e.target_player_id = tp.id
      WHERE e.possession_id = $1
      ORDER BY e.time ASC;
      `,
      [possessionId]
    );

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch puck events", details: err }),
      { status: 500 }
    );
  }
}
