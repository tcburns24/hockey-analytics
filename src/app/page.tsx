import RinkVisualizer from "@/components/RinkVisualizer";

export default function HomePage() {
  const rinkStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    border: "1px solid lime",
  };
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Hockey Possession Visualizer</h1>
      <p>Showing one offensive possession (mock data)</p>
      <div className="rink-container" style={rinkStyle}>
        <RinkVisualizer />
      </div>
    </main>
  );
}
