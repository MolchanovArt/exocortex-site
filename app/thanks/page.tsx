import Link from "next/link";

export default function Thanks() {
  return (
    <main style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 560, padding: 24 }}>
        <h1>Thank you!</h1>
        <p style={{ opacity: 0.8, marginTop: 12 }}>
          You&apos;re on the waitlist. We&apos;ll be in touch soon.
        </p>
        <Link href="/" style={{ textDecoration: "underline", marginTop: 24, display: "inline-block" }}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
