import Link from "next/link";

export default function Updates() {
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
            <h1>Updates</h1>
            <p className="lead" style={{ marginTop: 12 }}>
              Progress, milestones, and what&apos;s next.
            </p>
            <div style={{ marginTop: 32 }}>
              <div className="card" style={{ marginBottom: 18 }}>
                <h3>Building the MVP</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 6 }}>
                  We&apos;re currently building the core modules: 2nd Brain integration, Composer-0,
                  context retrieval, and task processing. Early waitlist members will get access
                  to private builds.
                </p>
              </div>
              <div className="card" style={{ marginBottom: 18 }}>
                <h3>What&apos;s coming</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 6 }}>
                  Beta will include the agent marketplace, improved retrieval, and pipeline
                  templates. Public launch will open the module ecosystem and SDK.
                </p>
              </div>
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

