// components/HowDiagram.tsx

export default function HowDiagram() {
  const nodes = [
    ["Intent", "Understand the objective & DoD"],
    ["Context", "Pull from 2nd Brain & web"],
    ["Compose", "Plan agent pipeline (Composer-0)"],
    ["Execute", "Run steps & capture artifacts"],
    ["Schedule", "Book time that actually fits"],
    ["Review", "Feedback → faster next loop"],
  ];

  return (
    <div className="diagram-flow" role="img" aria-label="Intent to outcome flow">
      {nodes.map(([t, d], i) => (
        <div className="diagram-node" key={t}>
          <div className="node-title">{t}</div>
          <div className="node-desc">{d}</div>
          {i < nodes.length - 1 ? <div className="diagram-arrow" aria-hidden>→</div> : null}
        </div>
      ))}
    </div>
  );
}

