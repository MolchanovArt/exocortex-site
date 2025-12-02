import Link from "next/link";

export default function Manifesto() {
  return (
    <>
      <nav className="nav">
        <div className="container row">
          <Link className="logo" href="/" aria-label="Exocortex home">
            Exocortex
          </Link>
        </div>
      </nav>
      <main className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h1>Manifesto</h1>
            <p className="lead" style={{ marginTop: 12 }}>
              Our principles for building a personal AI orchestrator.
            </p>
            <div style={{ marginTop: 32 }}>
              <h2>Intent over commands</h2>
              <p>
                You shouldn&apos;t need to learn a new language to work with AI. Express what you want
                to achieve, and the system figures out the steps.
              </p>
              <h2 style={{ marginTop: 24 }}>Context is king</h2>
              <p>
                Your 2nd Brain — notes, files, knowledge graph — is your competitive advantage.
                Exocortex connects to it, doesn&apos;t replace it.
              </p>
              <h2 style={{ marginTop: 24 }}>Transparency, not magic</h2>
              <p>
                Every decision is logged. Every step is visible. You can inspect, adjust, and learn
                from what the system does.
              </p>
              <h2 style={{ marginTop: 24 }}>Privacy by design</h2>
              <p>
                Local-first mindset. You choose what to connect. No data hoarding. No surveillance.
              </p>
              <h2 style={{ marginTop: 24 }}>Composability</h2>
              <p>
                Modules and agents plug together. Build your own workflows. Share what works.
              </p>
            </div>
            <p style={{ marginTop: 48, color: "var(--muted)" }}>
              <Link href="/">← Back to home</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

