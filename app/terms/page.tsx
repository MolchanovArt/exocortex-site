import Link from "next/link";

export default function Terms() {
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
            <h1>Terms of Service</h1>
            <p className="lead" style={{ marginTop: 12 }}>
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <div style={{ marginTop: 32 }}>
              <h2>Acceptance</h2>
              <p>
                By using Exocortex, you agree to these terms. If you don&apos;t agree, don&apos;t use the
                service.
              </p>
              <h2 style={{ marginTop: 24 }}>Service description</h2>
              <p>
                Exocortex is a personal AI orchestrator that helps you manage tasks, integrate
                with your 2nd Brain, and coordinate AI agents. The service is provided &quot;as is&quot;
                and may change without notice.
              </p>
              <h2 style={{ marginTop: 24 }}>User responsibilities</h2>
              <p>
                You&apos;re responsible for your use of the service and any content you create or
                share. Don&apos;t use Exocortex for illegal purposes or to violate others&apos; rights.
              </p>
              <h2 style={{ marginTop: 24 }}>Limitations</h2>
              <p>
                We&apos;re not liable for any damages arising from your use of the service. The service
                may be unavailable at times for maintenance or updates.
              </p>
              <h2 style={{ marginTop: 24 }}>Changes</h2>
              <p>
                We may update these terms. Continued use after changes means you accept the new
                terms.
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

