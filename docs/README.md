# Synapse Website Architecture & Content Blueprint

## 1. Brand Structure Overview

**Brand Name:** Synapse (Synapse Tech)

**Core Philosophy:**  
*"We create digital solutions that drive growth and build systems for tomorrow."*

Synapse operates as one unified brand with two clearly separated experiential worlds. The website functions on a **single codebase** and **domain**, but users intentionally choose which world they enter. Each world possesses its own tone, navigation priorities, and calls-to-action (CTAs) while sharing a common foundation.

- **Synapse Studio:** Client-focused services.
- **Synapse Systems:** Product- and platform-focused systems.

---

## 2. Entry Point: The Home Experience (World Selector)

### Purpose
The homepage is **neutral, visionary, and immersive**. It is designed to establish Synapse as a serious digital builder without intimidating clients or underselling the systems side. It allows visitors to self-select their intent.

### Key Characteristics
- Highly animated / 3D-driven
- Minimal text
- Strong atmosphere and motion
- No pricing, no metrics, no sales pressure

### Primary Messaging
- **Main Headline:** "We create digital solutions that drive growth and build systems for tomorrow."
- **Subtext:** "Businesses, platforms, and ideas designed with intention."

### World Selection Interface
After the hero section, users are presented with two equal options. This decision determines the navigation structure, CTA language, content emphasis, and tone.

1. **Enter Synapse Studio** (Clients)
2. **Enter Synapse Systems** (Products)

> **Note:** Users can switch worlds at any time.

---

## 3. Shared Foundation

These elements apply to both worlds to ensure brand consistency.

### Shared Pages / Systems
- **About** (Single Shared Page)
- Brand visuals
- Core values
- Legal / Meta
- Footer

### The Shared 'About' Page
**Purpose:** Explains who Synapse is, why it exists, and the philosophy behind building both services and systems.

**Strategy:** It does not pitch services or products directly. Instead, it establishes credibility and long-term vision.

---

## 4. World 1: Synapse Studio (Client Side)

### Identity
- **Tagline:** "Creating digital experiences that drive business growth."
- **Tone:** Clear, Friendly, Outcome-focused, Reassuring.
- **Core Emotional Message:** "We help you grow."

### Constraints (What is explicitly NOT shown)
- Platform impact numbers
- Investor language
- Large-scale systems details
- Future roadmaps

**Goal:** This side must feel approachable and client-first.

### Navigation Structure

#### Services
Intro focused on growth, clear categories, simple explanations.
- **CTAs:** "Get your website", "Let's build your idea"

#### Portfolio
Proof of capability without overwhelm. Focus on results and business outcomes. Avoids internal system projects.

#### Pricing / Get a Quote
High-level guidance (ranges/packages) to remove uncertainty.
- **CTA:** "Book a free consultation"

#### Contact
Human, direct, and welcoming.
- **CTAs:** "Book a free consultation", "Let's build your idea"

#### World Switch (Subtle)
"Explore our systems →"

---

## 5. World 2: Synapse Systems (Product Side)

### Identity
- **Tagline:** "We don't just build software, we build systems."
- **Tone:** Visionary, Honest, Long-term, Builder-focused.
- **Core Emotional Message:** "We're building something bigger."

### Navigation Structure

#### Our Systems
Presents all platforms (live, beta, or building).
- **Content:** Problem, Solution, Target Audience, Status, Impact
- **CTAs:** "Join the beta", "Follow our journey"

#### Impact
Demonstrates systems are real, used, and growing. Focuses on honest metrics and early wins to build trust without exaggeration.

#### Roadmap
Shows direction, not promises. Covers what is building, planned, or being explored to reinforce long-term intent.

#### Collaborate / Invest
Invites aligned partners, not random money.
- **CTAs:** "Partner with us", "Follow our journey"
- **Constraint:** No aggressive fundraising language

#### About
(Shared)

#### World Switch
"Need client services instead? → Synapse Studio"

---

## 6. Interconnection Logic

- Both worlds live under one brand
- Both worlds share one About page
- Navigation adapts based on world selection
- CTAs never conflict across worlds
- Users can switch worlds intentionally

**The Balance:** Client users never feel priced out. System users never feel constrained.

---

## 7. Animation & Experience Guidance

| Page Level | Animation Level |
|------------|----------------|
| **Home** | Heavy 3D / Motion |
| **World Landing Pages** | Light motion |
| **Deep Pages** | Minimal animation |
| **Performance** | Always prioritized |

**Principle:** The animation supports the story; it never becomes the story.

---

## 8. Final Positioning Statement

Synapse is **not** a web agency.  
Synapse is **not** just a product studio.

**Synapse is a digital systems company that builds for clients today and platforms for tomorrow.**

---

## Implementation Details

- **Tech Stack:** Next.js
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (for home), CSS transitions (for pages)
- **3D:** React Three Fiber (for home world selector)
- **Theme:** next-themes (dark/light mode support)

### File Structure
```
src/
├── app/
│   ├── page.tsx           # Home (World Selector)
│   ├── studio/            # Studio World
│   │   ├── page.tsx       # Studio Landing
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── pricing/
│   │   └── contact/
│   ├── systems/           # Systems World
│   │   ├── page.tsx       # Systems Landing
│   │   ├── products/
│   │   ├── impact/
│   │   └── roadmap/
│   └── about/             # Shared About Page
└── components/
    ├── layout/            # Navbar, Footer
    ├── studio/            # Studio-specific components
    ├── systems/           # Systems-specific components
    ├── 3d/                # 3D components for home
    └── ui/                # Shared UI components
```

