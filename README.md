# Malenga Consulting website

Corporate website for Malenga Consulting. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Motion,
Lucide icons, React Hook Form + Zod, and Resend or SMTP for enquiry email.

## Local setup

Requires Node.js 20.9 or later.

```bash
npm install --legacy-peer-deps   # the flag works around an optional peer-dependency conflict in @hookform/resolvers
cp .env.example .env.local        # then fill in the values (see below)
npm run dev                       # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npx tsc --noEmit`.

## Project structure

```
src/
  app/                 Routes: /, /about, /services, /services/[slug], /industries, /contact,
                       /api/contact, sitemap, robots, Open Graph image, 404 and error pages
  components/
    layout/            Header (desktop + mobile nav), Footer
    home/              Homepage sections
    contact/           Enquiry form
    ui/                Container/Section, Button, Reveal (motion), Wordmark, PageHero, CtaBand
  content/             All copy and company data, kept separate from components (CMS-ready)
    site.ts            Name, URLs, contact details, WhatsApp number
    services.ts        The five divisions: offerings, challenges, support, audiences, related
    company.ts         Navigation, values, approach, industries, About copy
  lib/                 seo.ts (metadata + JSON-LD), contact-schema.ts (shared Zod schema),
                       mailer.ts (Resend/SMTP), rate-limit.ts
```

Design tokens (colours) live at the top of `src/app/globals.css`. Fonts are Geist and Newsreader via `next/font`.

## Enquiry form and email

`POST /api/contact` validates with the same Zod schema as the browser, then sends the enquiry to
`CONTACT_TO_EMAIL`. It returns success only after the provider accepts the message; otherwise the user sees an error
with direct contact details. Spam controls: hidden honeypot field, minimum fill time, same-origin check, per-IP rate
limit (in-memory, so best-effort on serverless), body size limit, and header-injection-safe email construction.

Choose one provider in the environment:

- **Resend:** set `RESEND_API_KEY`; `CONTACT_FROM_EMAIL` must be on a domain verified in Resend.
- **SMTP:** leave `RESEND_API_KEY` empty and set `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`.

Without either configured, the form reports that it is temporarily unavailable and nothing is sent.

## Deployment (Vercel)

1. Push the project to a Git repository and import it in Vercel (framework preset: Next.js).
2. Set Install Command to `npm install --legacy-peer-deps`.
3. Add the environment variables from `.env.example` for Production (and Preview if wanted).
4. Deploy, then attach `www.malengaconsulting.co.za` under Project → Domains.
5. Submit `https://www.malengaconsulting.co.za/sitemap.xml` in Google Search Console.

## Before launch

Still needed from the client: email credentials (see `.env.example`), the Founder & CEO's name
(`src/content/team.ts`), the group team photo (`public/team/team.jpg`), and confirmation of the official brand
colours. Photography is from Unsplash (see `public/photos/SOURCES.md`); replace it with the client's own when
available.
