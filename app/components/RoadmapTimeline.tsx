// components/RoadmapTimeline.tsx

type Item = { title: string; desc: string; status?: "done" | "active" | "next" | "future" };

export default function RoadmapTimeline({ items, caption }: { items: Item[]; caption?: string }) {
  return (
    <figure className="timeline" aria-label="Roadmap timeline">
      <ol className="timeline-list">
        {items.map((it, i) => (
          <li key={i} className={`card timeline-item ${it.status ?? "future"}`}>
            <div className="dot" aria-hidden />
            <h3 style={{ margin: "0 0 6px" }}>{it.title}</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>{it.desc}</p>
          </li>
        ))}
      </ol>
      {caption ? <figcaption className="timeline-caption">{caption}</figcaption> : null}
    </figure>
  );
}

