Synapse Tech: Strategic Business & Pricing Architecture

1. High-Level Business Logic

Synapse Tech operates as a hybrid entity to maximize student leverage (low cost) while projecting agency authority (high value).

Division A: Synapse Systems (The "Credibility Engine")

Purpose: Internal Ventures & Proof of Concept.

Function: Builds and runs proprietary profitable systems (e.g., Yes Chef, Campus Guide).

Role in Sales: These are not sold directly as "products" but are displayed to prove technical competence. "We don't just build websites; we build businesses. Here are ours."

Division B: Synapse Studio (The "Service Engine")

Purpose: Client Services & Cash Flow.

Function: Delivers creative and technical solutions to external clients.

Key Innovation: Bundling "Studio" services (Content, Design, Video) with "Web" development to justify higher prices and differentiate from freelance coders.

2. Pricing Architecture (The "Toggle" Strategy)

The pricing page will feature a primary Toggle Switch to separate "Identity" from "Functionality." This prevents price anchoring confusion (comparing a cheap blog to an expensive app).

Category A: Brand Websites (Identity)

Target: Portfolios, Corporate Profiles, NGOs, Law Firms.

Value Proposition: "Get found, look professional, build trust."

Technical Complexity: Low. Static content, contact forms.

Tier Name

Basic (Starter)

Standard (Professional)

Premium (Enterprise)

Price Range

GH₵ 2,500 - 3,500

GH₵ 4,000 - 5,500

GH₵ 7,000+

Ideal Client

Personal Brands, Students, Solopreneurs.

Small Businesses, Shops, NGOs.

Established Companies, Luxury Brands.

Core Features

• 1-3 Static Pages



• Contact Form (Email)



• Mobile Responsive



• 1 Month Free Support

• 5-8 Pages



• Blog / News Section



• SEO Optimization



• Google Maps Integration

• Unlimited Pages



• Motion Graphics / Video Intro



• Professional Copywriting



• Custom Animations

Monthly Maint.

GH₵ 100 (Hosting/Security)

GH₵ 150 (Content Updates)

GH₵ 300 (Priority Support)

Category B: Business Applications (Systems)

Target: Restaurants, Retail Shops, Booking Agencies, Service Providers.

Value Proposition: "Automate operations, manage data, sell directly."

Technical Complexity: High. Dynamic data, PWA, User Logic.

Tier Name

Basic App (The Order Taker)

Standard App (The Manager)

Premium App (The Full System)

Price Range

GH₵ 4,500 - 5,500

GH₵ 6,500 - 8,500

Custom Quote

Tech Stack

Next.js + Google Sheets (Raw)

Next.js + Admin Dash + Sheets

Next.js + Supabase/Firebase

Delivery Format

PWA (Installable)

PWA (Installable)

PWA (Installable)

User Experience

Customer orders via App -> WhatsApp. Data logs to Sheet.

Customer orders -> Admin Panel. Owner views charts/stats.

Full User Accounts, Real-time Sync, Inventory Logic.

Data Management

Owner edits prices/items directly in Google Sheets.

Owner uses Web Dashboard (Read) & Sheets (Write).

Owner uses full Web Admin Panel (Read/Write).

Monthly Maint.

GH₵ 200 (Server/Sheet API)

GH₵ 300 (Analytics Reports)

GH₵ 500+ (Database Costs)

3. Technical Strategy: The "Live Data Engine"

The Problem

Clients fear complex "Admin Panels" and expensive databases. The development team is still mastering SQL/NoSQL environments.

The Solution: Google Sheets as "CMS"

For Basic and Standard Apps, utilize Google Sheets as the primary database.

Implementation Workflow

Frontend (Next.js): Fetches data from Google Sheets via API (e.g., google-spreadsheet npm package or AppScript JSON exposure).

Logic:

Read: Website displays Menu Items/Prices from the Sheet.

Write: Orders are sent via WhatsApp (Client Side) + Logged to Sheet via AppScript (Server Side).

Validation: AppScript checks payment notifications (e.g., Paystack Webhook) before logging to Sheet.

Client Pitch: "We give you a Live Data Sheet. You want to change a price? Just open Excel on your phone. No need to log into a complicated website."

4. Development Workflow: The "Base Code" Model

To maintain profitability, Synapse Tech will not build from scratch for every client.

Develop "Base One":

A complete, generic Restaurant Ordering System (PWA).

Features: Menu grid, Cart, WhatsApp Checkout, Google Sheet Connection.

The "Customization" Layer (For Sales):

When selling to a new client, clone "Base One."

Config: Update theme.js (Colors, Fonts).

Assets: Replace Logo and Hero Images.

Data: Connect to a fresh Google Sheet specific to that client.

Result: High-quality, tested code delivered in days, not months.

5. Sales & Presentation Strategy

Naming Conventions

Avoid: "Website" (for apps). Use "System", "Platform", or "Digital Tool".

Avoid: "Makeshift Backend". Use "Cloud-Synced Spreadsheet" or "Live Data Engine".

The Portfolio Pitch

Create a new section titled "Live Systems".

Content: Do not just show screenshots. Show GIFs/Videos.

Action: Show a user clicking "Order" -> Show the WhatsApp message appearing -> Show the Google Sheet updating automatically.

Message: "We build systems that work while you sleep."

The Maintenance Hook

Websites: Maintenance covers "Hosting & Security."

Apps: Maintenance covers "API Connections & Analytics."

Pitch: "Google changes their security keys often. The monthly fee ensures your Sheet always talks to your Website correctly."