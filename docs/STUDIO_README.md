# World 1: Synapse Studio (Client Side)

**Identity:** 
- **Tagline:** Creating digital experiences that drive business growth.
- **Tone:** Clear, Friendly, Outcome-focused, Reassuring.
- **Visuals:** White backgrounds, Black text, Primary Purple CTAs. Professional and safe.

## Navigation Structure
- Services
- Portfolio
- Pricing / Get a Quote
- Contact
- *Switch:* "Explore our systems →"

## Content Migration (from src/data)

### 1. Services Page
**Goal:** Explain result-oriented services.
**Source:** `src/data/services.json`

**Service List:**
1.  **Website Development**
    *   *Short:* Custom websites built with modern technologies to ensure fast loading, responsive design, and excellent user experience.
    *   *Details:* We build fast, responsive websites that help businesses convert visitors into customers. Packages range from single-page brochure sites to full e-commerce platforms.
2.  **Content Creation**
    *   *Short:* Short-form video, brand photography, and social assets for businesses to grow their online presence (brand-focused, not influencer content).
    *   *Details:* Brand-focused content: product shots, short promos, testimonial clips, and social banners that match your website and branding.
3.  **Graphic Design**
    *   *Short:* Brand graphics, banners, and promotional assets (GH₵100 per design).
    *   *Details:* One-off graphics: logos, banners, social posts, ad creatives. For bulk or custom work we provide a quote.
4.  **PowerPoint Presentations**
    *   *Short:* High-quality branded pitch decks and presentations (quote-based).
    *   *Details:* Slide design depends on count and style. Provide your brief and we deliver a custom quote.
5.  **Website Maintenance**
    *   *Short:* Updates, security checks and performance optimizations (quote-based).
    *   *Details:* Maintenance pricing depends on site size and complexity; contact us for a tailored package.

### 2. Portfolio Page
**Goal:** Show proof of capability.
**Source:** `src/data/portfolio.json`

**Items:**
1.  **Restaurant Website**
    *   *Subtitle:* Modern website with online menu & reservation
    *   *Tech:* HTML/CSS, JavaScript, Responsive
    *   *Category:* Website
2.  **Business Website**
    *   *Subtitle:* Consulting site with lead-generation forms
    *   *Tech:* Corporate, Lead Generation
    *   *Category:* Website

### 3. Pricing / Get a Quote Page
**Goal:** Remove uncertainty.
**Source:** `src/data/pricing.json`

**Website Packages:**
*   **Basic ($600 - $1500)**
    *   Up to 3 pages, Responsive, Contact form, Basic SEO, Static site.
*   **Standard ($1500 - $5000) [Popular]**
    *   Up to 10 pages, Advanced SEO, CMS/Blog, Analytics, Domain included.
*   **Premium ($5000 - $99k)**
    *   Unlimited pages, Branding kit, eCommerce, AI Chatbot, Multi-language.

**Content Packages:**
*   **Basic ($600 - $800):** 1 short video, 3-4 photos.
*   **Standard ($1200 - $1500):** 3 videos, 6-8 photos.
*   **Premium ($2800 - $3200):** 5 videos, 10+ photos, Strategy session.

**Bundle Discounts:**
*   Basic Bundle: Save $100
*   Standard Bundle: Save $200
*   Premium Bundle: Save $300

### 4. Testimonials (for Home/Services)
**Source:** `src/data/testimonials.json`
*   "Synap Tech created an amazing website for our restaurant. Bookings increased by 40%." - John Davis
*   "The e-commerce website built by Synap Tech doubled our sales since launch." - Sarah Miller

### 5. Contact Page
**Goal:** Convert interest into conversation.
**Primary CTAs:**
- "Book a free consultation"
- "Let’s build your idea"
**Contact Info:**
- **Email:** synaptech25@gmail.com
- **Phone:** +233 54 813 5853
- **WhatsApp:** +233 54 813 5853

### 6. Company Information (About Us)
**Source:** `src/components/pages/About.jsx`

**Story:**
"Synap Tech began with a simple idea — that technology should empower creativity, not complicate it. Founded by young innovators with a passion for design, communication, and digital problem-solving, we help brands grow through thoughtful design and purposeful execution."

**Mission:**
To simplify digital experiences while helping individuals and businesses communicate their value through technology.

**Vision:**
To become Ghana's leading provider of creative, AI-powered digital solutions for small businesses and entrepreneurs.

**Core Values:**
1.  **Innovation and creativity:** We push boundaries and explore new possibilities to deliver unique solutions.
2.  **Integrity and transparency:** We believe in honest communication and ethical business practices.
3.  **Client success above all:** Your success is our success. We're committed to delivering results that exceed expectations.
4.  **Continuous learning and growth:** We stay updated with the latest trends and technologies to provide cutting-edge solutions.

**Our Process:**
1.  **Discovery:** Understanding your needs.
2.  **Design:** Creating the blueprint.
3.  **Development:** Bringing ideas to life.
4.  **Launch:** Going live with your project.

### 7. Why Choose Synap Tech (Key Selling Points)
**Source:** `src/components/pages/Home.jsx`
- **100% customized designs:** Unique designs tailored to your brand and business goals.
- **Timely delivery and reliable support:** We respect your time and deliver on schedule.
- **Affordable packages:** Flexible pricing options that fit your budget.
- **Modern tools & automation:** We leverage the latest technologies to streamline workflows.

### 8. Legal Pages Content
**Source:** `src/components/pages/Privacy.jsx` & `Terms.jsx`

**Privacy Policy Key Points:**
- Data used only for communication/service delivery.
- No sharing/selling to third parties.
- Collects: Name, email, phone, message.
- Rights: Access, update, or delete personal info.
- Contact: synaptech25@gmail.com

**Terms of Service Key Points:**
- **Project Timelines/Costs:** Confirmed after consultation.
- **Payment:** 50% deposit to begin, balance upon completion.
- **Intellectual Property:** Materials remain Synap Tech's property until full payment. Rights transfer to client upon payment.
- **Approval:** Client approval required before launch.
- **Liability:** Synap Tech not liable for indirect damages.


