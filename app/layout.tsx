import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://exocore.cx"),
  title: {
    default: "Exocortex — Personal AI Orchestrator",
    template: "%s · Exocore",
  },
  description:
    "From intent to results: intent → context → agent composition → execution. Powered by a 2nd Brain and multi-agent orchestration.",
  openGraph: {
    type: "website",
    url: "https://exocore.cx",
    siteName: "Exocortex",
    title: "Exocortex — Personal AI Orchestrator",
    description:
      "Your personal exocortex: understand intent, pull context, orchestrate agents, deliver outcomes.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exocortex — Personal AI Orchestrator",
    description:
      "Think → compose → execute. Your external brain for real work.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico" } // fallback
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: { canonical: "https://exocore.cx" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en">
      <body>
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
        {children}
      </body>
    </html>
  );
}