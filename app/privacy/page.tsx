import Link from "next/link";

export default function Privacy() {
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
            <h1>Privacy Policy</h1>
            <p className="lead" style={{ marginTop: 12 }}>
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <div style={{ marginTop: 32 }}>
              <h2>Data collection</h2>
              <p>
                We collect only what&apos;s necessary to provide the service: email addresses for
                waitlist signups, usage data for product improvement, and connection data for
                integrations you explicitly enable.
              </p>
              <h2 style={{ marginTop: 24 }}>Data storage</h2>
              <p>
                Your data is stored securely. We use industry-standard encryption and access
                controls. You can request deletion of your data at any time.
              </p>
              <h2 style={{ marginTop: 24 }}>Third-party services</h2>
              <p>
                We use Plausible Analytics (privacy-friendly, no cookies) and Formspree for
                waitlist forms. We don&apos;t sell your data to third parties.
              </p>
              <h2 style={{ marginTop: 24 }}>Your rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. Contact us
                at <a href="mailto:info@exocore.cx">info@exocore.cx</a> to exercise these rights.
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

