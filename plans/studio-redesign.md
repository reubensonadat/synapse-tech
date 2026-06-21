# Studio Page Redesign — Match About Page Caliber

## Goal
Redesign `/studio` and `/studio/work` to match the About page's editorial design DNA. Replace templated "badge + heading + card grid" patterns with intentional, asymmetric, glassmorphic layouts.

## Design Language (from About page)
- **Layout:** Left-aligned editorial, NOT centered templates
- **Section labels:** `01 — SERVICES` gradient text, uppercase tracking-wider
- **Cards:** Glassmorphism — `bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl`
- **Lists:** Left-border accent (`border-l-2 pl-6`), NOT icon-in-box
- **Numbers:** Large decorative `text-4xl font-bold opacity-20` as section markers
- **Background:** Fixed gradient orbs (primary + systems) at low opacity
- **Icons:** Heroicons (`@heroicons/react/24/outline`) — NOT lucide-react
- **Motion:** Minimal. Layout and typography carry the weight.

## Studio Page Sections

### 1. Hero (left-aligned editorial)
- Fixed background orbs (same as About)
- Left-aligned, max-w-5xl
- "We build digital experiences that [gradient]drive growth.[/gradient]"
- Subtext + two CTAs (Start a Project, View Pricing)
- NO centered badge — use inline numbered label

### 2. Stats Strip (glassmorphic bar)
- 4 stats in a glass card row
- Large gradient numbers

### 3. Capabilities (numbered editorial list)
- Section label: "01 — CAPABILITIES"
- Left-aligned heading
- Services as a 2-column grid of glassmorphic cards
- Each card: large faded number (01-06) + title + description + Heroicon
- Hover: border-primary/50 + lift

### 4. Process (asymmetric grid — like About's mission section)
- Section label: "02 — PROCESS"
- Left side: heading + intro text
- Right side: numbered process steps with left-border accents

### 5. Why Synapse (gradient story card — like About's story section)
- Full-width gradient card (from-primary-soft to-systems-soft)
- 3-4 differentiators inline, NOT separate cards

### 6. CTA (world CTA cards — like About's world CTAs)
- Large p-12 cards with hover glow
- "Start a Project" + "View Pricing"

## Icon Migration
- Replace ALL lucide-react imports with @heroicons/react/24/outline
- Studio page icons: CodeBracketIcon, DevicePhoneMobileIcon, etc. (already Heroicons in services data)
- CTA arrows: ChevronRightIcon (Heroicons)

## Files to Modify
1. `src/app/studio/page.tsx` — Full redesign
2. `src/app/studio/work/page.tsx` — Apply same design DNA
3. Verify no lucide-react imports remain in Studio pages
