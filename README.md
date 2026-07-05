# Ember & Oak — Coffee Shop Landing Page

A single-page demo site for a fictional Edinburgh coffee house, built as a
template for real coffee shop clients. Dark espresso-and-gold theme, a video
hero, animated sections, and a Google Maps location card that opens straight
into Apple Maps or Google Maps depending on the visitor's device.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · React Icons

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). That's it. No environment
variables or API keys required, since the map uses a keyless Google Maps
embed.

To build for production:

```bash
npm run build
npm start
```

---

## Project Structure

```
coffee-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Fonts (Playfair Display + Manrope) and page metadata
│   │   ├── page.tsx          # Assembles every section, in order
│   │   └── globals.css       # Color tokens, Tailwind theme, global styles
│   ├── components/
│   │   ├── sections/         # One file per page section (see below)
│   │   └── ui/                # Reusable pieces: Button, SectionHeading, MenuToggle
│   ├── animations/
│   │   └── variants.ts       # Every Framer Motion variant used across the site
│   ├── data/
│   │   ├── menu.ts           # The 3 menu items shown in "The Signature Pour"
│   │   └── testimonials.ts   # The 5 testimonial cards
│   └── types/
│       └── index.ts          # Shared TypeScript interfaces
└── public/
    ├── video/hero.mp4        # Hero background video (compressed, no audio)
    └── images/
        ├── hero-poster.jpg   # Poster frame shown before the video loads
        ├── about-barista.jpg
        ├── menu/             # espresso.jpg, latte.jpg, cappuccino.jpg
        └── avatars/          # avatar-1.jpg … avatar-5.jpg
```

Sections render in this order (edit in `src/app/page.tsx`):

**Hero → Menu Highlights → About → Location → Testimonials → Newsletter → Footer**

---

## Making This Your Own

### 1. Shop name, copy, and contact details
Text lives directly inside each file in `src/components/sections/`. There's
no CMS or config layer. Search for the string you want to change and edit
it in place. The address, phone number, and hours are set near the top of
`Location.tsx` and reused in `Footer.tsx`.

### 2. Menu items
Edit `src/data/menu.ts`. Each item takes a name, origin, description, price,
and an image path. Swap in real photos at `public/images/menu/` (any
filename. Just update the `image` field to match) and the menu grid updates
automatically, no changes needed in `MenuHighlights.tsx` itself.

### 3. Testimonials
Edit `src/data/testimonials.ts`. Same pattern — name, location, quote,
star rating (1–5), and an avatar path. Drop square photos into
`public/images/avatars/` (roughly 400×400px works well; they're cropped to a
circle).

### 4. Hero video
Replace `public/video/hero.mp4` with your own clip. Keep it reasonably
compressed. The current file is ~800KB, 1080p, no audio, so it loads fast
on mobile. A rough recipe if you have `ffmpeg`:

```bash
ffmpeg -i your-video.mp4 -vf "scale=1920:-2" -crf 28 -preset slow -an -movflags +faststart public/video/hero.mp4
```

Then regenerate the poster frame (the still image shown while the video
loads):

```bash
ffmpeg -i public/video/hero.mp4 -vf "select=eq(n\,0)" -vframes 1 public/images/hero-poster.jpg
```

### 5. Location & map
In `src/components/sections/Location.tsx`, update the `address` constant at
the top of the file. The Google Maps embed and the "open in Maps" link both
derive from that one string, so you only need to change it once. On
iPhone/iPad/Mac, tapping the map opens Apple Maps instead of Google Maps
automatically.

### 6. Colors and fonts
This project uses Tailwind's CSS-based
theming. All color tokens (`bg-ink`, `text-ember`, `bg-linen`, etc.) and font
variables are defined in `src/app/globals.css` under `:root` and `@theme
inline`. Change a hex value there and it updates everywhere that token is
used.

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` — swap
`Playfair_Display` or `Manrope` for different Google Fonts if needed.

### 7. Animations
Every Framer Motion variant (fade-ins, stagger, the ember particle drift,
etc.) lives in `src/animations/variants.ts`. Import from there rather than
defining new variants inline, so the whole site's motion stays consistent.

---

## Notes

- **No backend.** The newsletter form and "Book a Table" button are UI only
  — wire them up to your email provider / booking system of choice.
- **No API keys needed.** The Google Maps embed uses the keyless
  `google.com/maps?...&output=embed` URL, which is fine for demo and small
  business use but has no SLA for high-traffic production use, consider
  the official Google Maps Embed API with a key instead.
- **Accessibility:** animations respect `prefers-reduced-motion`, and
  interactive elements have `aria-label`s where their purpose isn't obvious
  from visible text.
- **Placeholder content:** stats (customer count, rating), phone number, and
  hours are illustrative. Update them before shipping to a real client.