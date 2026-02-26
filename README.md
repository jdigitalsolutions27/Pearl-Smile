# PearlSmile Dental Clinic

Ultra-premium, trust-first dental clinic website + mini patient experience platform built with:

- Next.js App Router + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style UI components (Tabs, Dialog, Accordion, Sheet, Toast, Skeleton, Badge, Tooltip)
- Lucide icons
- React Hook Form + Zod
- Embla Carousel

## 1) Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
```

## 2) Project Structure

```text
/app
  page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  booking/page.tsx
  team/page.tsx
  gallery/page.tsx
  reviews/page.tsx
  pricing/page.tsx
  patient-guide/page.tsx
  faq/page.tsx
  forms/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  contact/page.tsx
  api/bookings/route.ts
/components
/data
/lib
```

## 3) Edit Clinic Content

Everything is data-driven. Update these files:

- `data/business.ts`: clinic name, address, phone, map URL, hours, social links, hero/support images
- `data/services.ts`: services (slug, category, overview, steps, aftercare, FAQs, images, price ranges)
- `data/dentists.ts`: team profiles, specialties, schedule
- `data/testimonials.ts`: review quotes and ratings
- `data/patientStories.ts`: story cards
- `data/faqs.ts`: FAQ accordion content
- `data/gallery.ts`: smile gallery images and categories
- `data/blog.ts`: blog posts and article content
- `data/pricing.ts`: transparent ranges, packages, disclaimers
- `data/symptoms.ts`: symptom checker recommendations
- `data/patientGuide.ts`: patient onboarding/checklists/reminders

## 4) Replace Images

All external image URLs are stored in `/data`.

1. Replace image URLs in the relevant data file.
2. If you use a new image host, add its domain in `/next.config.mjs`.
3. Keep the home hero image high quality for the best premium first impression.

## 5) Replace Contact + Map + WhatsApp

Update `data/business.ts`:

- `phoneDisplay`, `phoneRaw`, `whatsappRaw`
- `address`, `city`
- `mapEmbedUrl`, `mapDirectionsUrl`
- `email`, `hours`

## 6) Booking Flow (Mock API)

- Multi-step booking form: `components/booking/booking-form.tsx`
- API route (mock in-memory store): `app/api/bookings/route.ts`
- Includes:
  - reference number generation
  - WhatsApp prefilled follow-up message
  - `.ics` calendar download

## 7) Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`
5. Output: default `.next`
6. Deploy.

After deploy, update `baseUrl` in `lib/seo.ts` to your production domain.
