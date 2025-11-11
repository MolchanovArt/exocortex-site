# Exocortex — Website Context

**Brand:** Exocortex (product), Exocore (engine).  
**Domain (current):** https://exocore.cx  
**Goal:** Crisp landing + waitlist → early users.

## Architecture
- Next.js App Router
- Pages: `/` (landing), `/thanks`, `/manifesto`, `/updates`, `/privacy`, `/terms`
- Assets in `/public` (og.png, favicon.ico, apple-touch-icon.png)
- Formspree waitlist form with `_redirect` → `/thanks`
- Analytics: Plausible (exocore.cx)
- SEO: next-sitemap; robots.txt + sitemap.xml
- Optional: Framer Motion for subtle animations

## Copy anchors
- H1: “From goals → tasks → agents → results”
- Sub: external brain, intent → context → agents → outcomes.
- Sections: Features / How it works / Modules / Use cases / Roadmap / Join

## Open tasks
- Insert real Formspree endpoint
- Add pages (thanks/manifesto/updates/privacy/terms)
- Enable Plausible
- Add `next-sitemap`
- Choose email provider (Zoho or Google) and add MX/SPF/DKIM/DMARC