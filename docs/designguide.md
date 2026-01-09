# Synapse Brand Identity System

## 1. Brand Personality & Ethos

**Anchor:** Intelligent. Calm Confidence.

Before colors or visuals, the Synapse identity is defined by a specific mindset. It is visionary without being loud, and precise without being flashy. We embody the mindset of a builder—quietly powerful technology, avoiding startup hype.

**Core Traits:** Visionary, Precise, Builder Mindset.

**The Vibe:** "Think: quietly powerful tech, not startup hype."

---

## 2. Core Color Palette

### Primary Purple (Synapse Core)
The identity anchor. Deep, smart, and premium—never playful.

- **Hex:** `#6D28D9`
- **RGB:** 109, 40, 217
- **Usage:** Primary buttons, active states, accent lines, 3D light glows, highlighting key words in headings.

### Deep Black (Foundation)
Authority and cinematic focus. Not pure black, to avoid harsh contrast.

- **Hex:** `#0B0B0F`
- **RGB:** 11, 11, 15
- **Usage:** Backgrounds, hero sections, systems pages, 3D scenes, footers.

### Pure White (Clarity Layer)
Readability, balance, and trust. The space where clients feel safe.

- **Hex:** `#FFFFFF`
- **Usage:** Text on dark backgrounds, cards, client-side pages, forms, white space.

---

## 3. Secondary & Supporting Colors

### Soft Gray (UI Neutral)
Structure without distraction.

- **Hex:** `#A1A1AA`
- **Purpose:** Dividers, secondary text, helper text, labels, borders, inactive nav items.

### Dark Slate (Elevated Surfaces)
Depth for dark environments.

- **Hex:** `#151521`
- **Purpose:** Cards on dark backgrounds, modals, panels, 3D floor planes.

### Purple Glow (Motion / 3D Only)
Energy and futurism. Use sparingly.

- **Hex:** `#A78BFA`
- **Purpose:** Glow effects, hover states, particle highlights, 3D accent lighting.

> [!CAUTION]
> Never use Purple Glow as a base color. It should only be used for accents and effects.

---

## 4. Contextual Usage: Two Worlds

The Synapse brand adapts based on the viewer's context.

### Synapse Studio (Client Side)

**Feeling:** Clean, Welcoming, Professional.

**Visuals:**
- White backgrounds
- Black text
- Primary Purple CTAs
- White cards with soft gray borders
- Minimal, smooth, subtle animations

**Goal:** Clients should think, "This is professional and safe."

### Synapse Systems (Product Side)

**Feeling:** Deep, Cinematic, Ambitious.

**Visuals:**
- Deep Black backgrounds
- White text
- Primary Purple highlights
- Dark Slate cards
- Bold, spatial, 3D-driven animations

**Goal:** System viewers should think, "These people are building serious things."

---

## 5. Typography

### Primary Font: Space Grotesk
Modern, Technical, System-friendly.

- **Role:** Headings
- **Usage:** Headlines, section titles, navigation
- **Why:** Works beautifully with purple; feels technical yet approachable

### Secondary Font: Inter
Neutral, Professional, Extremely Readable.

- **Role:** Body
- **Usage:** Body text, forms, long content

---

## 6. UI Components: Buttons & CTAs

### Primary CTA
- **Background:** `#6D28D9` (Primary Purple)
- **Text:** `#FFFFFF`
- **Border Radius:** 10–14px
- **Hover State:** Slight glow (`#A78BFA`) + Micro-scale up (1.02x)

### Secondary CTA
- **Background:** Transparent
- **Border:** 1px solid `#6D28D9`
- **Text:** `#6D28D9`

---

## 7. Visual Direction

### Logo Usage
- **Preference:** Wordmark SYNAPSE
- **Style:** All caps, wide letter spacing
- **Colorways:** Purple on black; Black or purple on white
- **Optional Iconography:** Neural node, connected dots, or an abstract "S" made of points

### 3D & Motion (Homepage)
- **Environment:** Black
- **Lighting:** Purple light sources
- **Elements:** Floating nodes/lines, subtle parallax
- **Movement:** Slow, intentional camera movement. Nothing fast or chaotic
- **Narrative Support:** "We don't just build software; we build systems."

---

## 8. Anti-Patterns (What NOT to do)

☒ No bright gradients everywhere  
☒ No neon overload  
☒ No excessive color palettes (stick to the core)  
☒ No playful fonts  
☒ No startup clichés  

**Mantra:** Restraint = Power

---

## Summary

**Synapse looks like:**
- A company that thinks long-term
- A builder of systems
- A serious but creative mind
- A calm, confident digital force

---

## Design Pattern Examples (From Studio Mockup)

### Hero Section
- Large, elegant serif/modern headline with purple accent words
- Subdued secondary text in gray
- Primary purple CTA button with arrow icon
- Secondary text link with arrow
- Clean white background with generous spacing
- Stats/metrics card with subtle shadow and rounded corners

### Service Cards
- White background with subtle border
- Icon in top-left (colored circle background)
- Service title in bold
- Brief description in gray text
- "Get your project" link in purple with arrow
- Consistent padding and border radius (12-16px)

### Section Headers
- Uppercase small text in gray for category/section label
- Large heading below in black
- Right-aligned "See all" link with arrow in some sections

### Visual Hierarchy
- Generous white space between sections
- Clear separation with padding (80-120px vertical spacing)
- Consistent horizontal padding (responsive container)
- Scannable layout with clear visual blocks

---

## 9. Studio Design Patterns

### Enhanced Gradient Header (Standard Pattern)

**This pattern should be used on ALL Studio page headers** to create a consistent, sophisticated visual identity.

#### Light Mode Gradient
```css
bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40
```

#### Dark Mode Gradient
```css
bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81]
```

#### Grid Overlay
- **Size:** 3rem × 3rem
- **Color:** `#7c3aed45` (purple with 45 opacity)
- **Mask:** Radial gradient ellipse (70% coverage with soft fade)
- **Opacity:** Light mode 0.25, Dark mode 0.15

#### Ambient Glow Spots
Two circular blur effects at opposite corners:
- **Size:** 96 × 96 (w-96 h-96)
- **Blur:** 100px  
- **Colors:** Purple-400/20 and Sky-400/20
- **Blend modes:**
  - Light: `mix-blend-multiply`
  - Dark: `mix-blend-screen`
- **Animation:** One spot has slow pulse (8s cycle)

#### Animated Badge
- Pulsing purple dot indicator
- Section label (e.g., "Studio Services")
- Glassmorphism effect with `backdrop-blur-sm`
- Hover scale animation (`hover:scale-105`)

#### Text Treatment
- **Headline:** Gradient text clipping
  - Light: `from-slate-900 via-indigo-800 to-slate-900`
  - Dark: `from-white via-indigo-100 to-purple-200`
- **Subtext:** 
  - Light: `text-slate-600`
  - Dark: `text-slate-400`

### Service Icons (HeroIcons)

**Important:** ALL service icons must use **@heroicons/react** (not Lucide React)

| Service | Icon Component | Import |
|---------|---------------|--------|
| Website Development | `CodeBracketIcon` | `@heroicons/react/24/outline` |
| Content Creation | `PencilSquareIcon` | `@heroicons/react/24/outline` |
| Graphic Design | `SwatchIcon` | `@heroicons/react/24/outline` |
| PowerPoint Presentations | `PresentationChartLineIcon` | `@heroicons/react/24/outline` |
| Website Maintenance | `Cog6ToothIcon` | `@heroicons/react/24/outline` |
| Intelligent Automation | `CommandLineIcon` | `@heroicons/react/24/outline` |

**Icon Styling:**
- Direct purple coloring: `text-synapse-main`
- No background containers
- Hover animation: `group-hover:scale-110`
- Size range: `w-10 h-10` to `w-16 h-16` depending on context

### Implementation Template

```tsx
{/* Enhanced Gradient Header */}
<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
    {/* Background Layer */}
    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81] dark:opacity-100 opacity-0 transition-opacity duration-700" />
    </div>

    {/* Grid Overlay */}
    <div 
        className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 dark:opacity-[0.15] opacity-[0.25]"
        style={{
            backgroundImage: `linear-gradient(to right, #7c3aed45 1px, transparent 1px), linear-gradient(to bottom, #7c3aed45 1px, transparent 1px)`,
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
        }}
    />

    {/* Ambient Glow Spots */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/10 dark:opacity-40 animate-pulse-slow" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/10 dark:opacity-40" />

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-purple-200 dark:border-white/10 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase text-purple-700 dark:text-purple-300">
                {section_label}
            </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                {headline_text}
            </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed dark:text-slate-400 text-slate-600">
            {description}
        </p>
    </div>
</section>
```

**Required CSS:**
```css
@layer utilities {
  .animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}
```

### Pages Using This Pattern

- ✅ `/studio/services` - Services overview page
- 🔲 `/studio` - Studio home page (to be implemented)
- 🔲 `/studio/portfolio` - Portfolio page (to be implemented)
- 🔲 `/studio/pricing` - Pricing page (to be implemented)
- 🔲 `/studio/contact` - Contact page (to be implemented)
