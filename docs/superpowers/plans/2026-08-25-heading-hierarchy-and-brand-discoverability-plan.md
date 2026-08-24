# Heading Hierarchy & Brand Discoverability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Achieve 100/100 Agentic readiness score by restructuring the static HTML heading hierarchy (`H1` -> `H2` -> `H3` with 500+ text chars) on `src/components/HomePage.astro` and adding `WebSite` JSON-LD schema with brand discoverability metadata in `src/layouts/Layout.astro`.

**Architecture:**
- **Static HTML Structure (`src/components/HomePage.astro`)**: Update the `H1` tag to explicitly feature "Plus530 Adventure — Himalayan Expeditions & Self-Drive 4x4 Overland Journeys", add structured `H2` and `H3` sections with >500 characters of rich static prose directly in raw HTML.
- **Brand Discoverability & WebSite JSON-LD (`src/layouts/Layout.astro`)**: Include `WebSite` JSON-LD schema with brand alternate names, brand meta tags (`application-name`, `brand`), and `<link rel="alternate" type="text/markdown" href="/llms.txt" />`.
- **Verification Script (`scripts/verify-agentic.js`)**: Node.js validation script that parses `dist/index.html` to guarantee heading hierarchy (`H1` -> `H2` -> `H3`), >500 text characters, and JSON-LD schemas.

**Tech Stack:** Astro 4 (SSG), Node.js, JSON-LD Schema.org.

## Global Constraints

- Preserve all visual styling, layout boundaries, and user experience.
- Keep output mode `output: 'static'`.
- Target Issue: #37.

---

### Task 1: Update `HomePage.astro` Static Heading Hierarchy & Rich Text Content

**Files:**
- Modify: `src/components/HomePage.astro`

**Interfaces:**
- Consumes: Homepage structure.
- Produces: `H1` -> `H2` -> `H3` semantic static HTML hierarchy with >500 characters of raw text.

- [ ] **Step 1: Update `src/components/HomePage.astro`**

```astro
---
import Container from './ui/Container.astro';
import Card from './ui/Card.astro';
import Button from './ui/Button.astro';
import { getFeaturedAdventures, getAdventureUrl } from '../data/adventures';
import { WHATSAPP_COMMUNITY_URL } from '../data/config';
import { ArrowRight, Mountain, Users, Shield, Calendar, Compass, ShieldCheck } from '@lucide/astro';
import { getUpcomingBatchDates } from '../utils/dates';

const featuredAdventures = getFeaturedAdventures();
---

<div>
  {/* Top Banner - Trip to Bhutan is Live */}
  <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 animate-pulse"></div>
    <div class="relative z-10 flex items-center justify-center gap-3">
      <span class="inline-block w-2 h-2 bg-white rounded-full animate-bounce"></span>
      <span class="font-bold text-sm sm:text-base tracking-wide">
        🇧🇹 TRIP TO BHUTAN 2025 IS LIVE
      </span>
      <span class="inline-block w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
    </div>
    <a href="/car-tours/bhutan-overland" class="absolute inset-0 z-20" aria-label="View Bhutan adventure"></a>
  </div>

  {/* Hero Section */}
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/home-banner-video.mp4" type="video/mp4" />
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')"
      ></div>
    </video>
    <Container className="relative z-20 text-center text-white">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Plus530 Adventure — Himalayan Expeditions & Self-Drive 4x4 Overland Journeys
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
        Guided 4x4 convoy tours, high-altitude pass crossings, and luxury remote travel across South Asia.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/adventures"
          class="w-full sm:w-auto inline-flex items-center justify-center h-14 px-7 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <span>Explore Expeditions</span>
          <ArrowRight class="ml-2.5 h-5 w-5" />
        </a>

        <a
          href={WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center h-14 px-7 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <svg class="h-5 w-5 fill-current text-white mr-2.5 flex-shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Join WhatsApp Community</span>
        </a>

        <a
          href="/contact"
          class="w-full sm:w-auto inline-flex items-center justify-center h-14 px-7 bg-white/10 backdrop-blur-md border-2 border-white/80 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <span>Get in Touch</span>
        </a>
      </div>
    </Container>
  </section>

  {/* Structured Overview Section for Search & AI Agents */}
  <section class="py-16 bg-white border-b border-gray-100">
    <Container>
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Guided Overland Expeditions & 4x4 Convoy Travel</h2>
        <p class="text-gray-700 text-lg leading-relaxed mb-8">
          Plus530 Adventure specializes in curated 4x4 self-drive overland expeditions and high-altitude mountain pass journeys across Bhutan, Nepal, Upper Mustang, Ladakh, Spiti Valley, Rajasthan, Northeast India, and the Western Ghats. Each expedition features dedicated lead support vehicles, satellite and radio communications, high-altitude medical equipment with supplemental oxygen, professional mechanics, and luxury boutique accommodations.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Self-Drive 4x4 Convoys</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Navigate remote mountain passes and off-road trails in your own vehicle or equipped 4x4 rentals, backed by lead logistics and spotters.
            </p>
          </div>
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">High-Altitude Motorcycling</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Conquer Umling La (19,024 ft) and Khardung La on Royal Enfield Himalayan 450 bikes with full luggage chase vehicle support.
            </p>
          </div>
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Luxury Estate Trails</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Explore private coffee and tea estate off-road trails in Sakleshpur & Chikmagalur with luxury 4-star resort accommodations.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>

  {/* Featured Adventures */}
  <section class="py-20 bg-cream-50">
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Himalayan Expeditions</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Embark on extraordinary journeys to the world's most stunning destinations
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredAdventures.map((adventure) => {
          const upcoming = getUpcomingBatchDates(adventure.nextBatchDates);
          return (
            <a href={getAdventureUrl(adventure)}>

              <Card hover className="h-full">
                <div class="relative h-64">
                  <div
                    class="absolute inset-0 bg-cover bg-center"
                    style={`background-image: url('${adventure.image || adventure.backgroundImage}')`}
                  ></div>
                  <div class="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {adventure.duration}
                  </div>
                  {upcoming.length > 0 && (
                    <div class="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/10 shadow-md">
                      <Calendar class="w-3.5 h-3.5 text-orange-400" />
                      <span>Next: {upcoming[0]}</span>
                    </div>
                  )}
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{adventure.title}</h3>
                  <p class="text-gray-600 mb-4">{adventure.description}</p>
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-2xl font-bold text-orange-600">{adventure.price}</span>
                      <span class="text-xs text-gray-500 block">per person (Double Sharing)</span>
                    </div>
                    <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {adventure.difficulty}
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </Container>
  </section>

  {/* Why Choose Us */}
  <section class="py-20 bg-white">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Plus530 Adventure?</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          We craft unforgettable overland experiences with safety, comfort, and luxury at the forefront
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mountain class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-bold mb-2">Expert Routes</h3>
          <p class="text-gray-600">Carefully curated trails through private estates & mountain passes.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-bold mb-2">Lead & Support</h3>
          <p class="text-gray-600">Lead support vehicle with recovery gear & spotters on standby.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-bold mb-2">Convoy Community</h3>
          <p class="text-gray-600">Connect with like-minded overlanders and self-drive enthusiasts.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-bold mb-2">Seamless Booking</h3>
          <p class="text-gray-600">4-Star luxury resort stays and hassle-free expedition coordination.</p>
        </div>
      </div>
    </Container>
  </section>
</div>
```

- [ ] **Step 2: Build & verify HTML hierarchy**

Run: `pnpm build`
Expected: Build succeeds.

- [ ] **Step 3: Commit Task 1**

```bash
git add src/components/HomePage.astro
git commit -m "feat: restructure homepage static HTML heading hierarchy and expand prose text (#37)"
```

---

### Task 2: Add WebSite JSON-LD Schema & Brand Metadata to `Layout.astro`

**Files:**
- Modify: `src/layouts/Layout.astro`

**Interfaces:**
- Consumes: Brand discoverability signals.
- Produces: `WebSite` JSON-LD schema, brand alternate names, and discoverability meta tags.

- [ ] **Step 1: Update `src/layouts/Layout.astro`**

```astro
---
import '../styles/globals.css';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const {
  title = "Plus530 Adventure | Himalayan Expeditions & Overland Trips",
  description = "Join Plus530 Adventure for luxury Himalayan overland expeditions, self-drive 4x4 trips, and high-altitude mountain journeys across Bhutan, Nepal, Ladakh, and Western Ghats.",
  image = "/images/adventures/bhutan-car-convoy.jpg"
} = Astro.props;

const siteUrl = "https://plus530adventure.com";
const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={Astro.url.href} />
    <link rel="sitemap" href="/sitemap-index.xml" />
    <link rel="alternate" type="text/markdown" href="/llms.txt" title="Plus530 Adventure LLM Context" />

    <!-- Brand Discoverability Metadata -->
    <meta name="application-name" content="Plus530 Adventure" />
    <meta name="apple-mobile-web-app-title" content="Plus530 Adventure" />
    <meta name="brand" content="Plus530 Adventure" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={Astro.url.href} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={fullImageUrl} />
    <meta property="og:site_name" content="Plus530 Adventure" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={Astro.url.href} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={fullImageUrl} />

    <!-- WebSite JSON-LD Schema for Search & Brand Discoverability -->
    <script type="application/ld+json" is:inline set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://plus530adventure.com/#website",
      "url": "https://plus530adventure.com",
      "name": "Plus530 Adventure",
      "alternateName": ["Plus530", "Plus 530 Adventure"],
      "description": "Premium Himalayan overlanding, self-drive 4x4 expedition, and guided motorcycle tour company.",
      "publisher": {
        "@type": "Organization",
        "name": "Plus530 Adventure",
        "url": "https://plus530adventure.com",
        "logo": "https://plus530adventure.com/logo.png"
      }
    })} />

    <!-- Organization & TravelAgency JSON-LD Schema for Search & LLMs -->
    <script type="application/ld+json" is:inline set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["Organization", "TravelAgency"],
      "name": "Plus530 Adventure",
      "url": "https://plus530adventure.com",
      "logo": "https://plus530adventure.com/logo.png",
      "description": "Premium Himalayan overlanding, self-drive 4x4 expedition, and guided motorcycle tour company running curated convoy trips across Bhutan, Nepal, Upper Mustang, Ladakh, Spiti Valley, Rajasthan, and Western Ghats.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Karnataka",
        "addressLocality": "Bengaluru"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "expeditions@plus530adventure.com",
        "url": "https://plus530adventure.com/contact"
      },
      "sameAs": [
        "https://chat.whatsapp.com/CloTTI8qWW286dzvlbGAZW"
      ],
      "areaServed": ["India", "Bhutan", "Nepal"],
      "knowsAbout": [
        "Overland Expeditions",
        "4x4 Self-Drive Convoy",
        "Himalayan Travel",
        "High Altitude Off-Roading",
        "Motorcycle Tours"
      ]
    })} />

    {/* Microsoft Clarity Analytics Script */}
    <script type="text/javascript" is:inline>
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "y0oc9mtkb3");
    </script>
  </head>
  <body class="antialiased font-sans min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 2: Commit Task 2**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add WebSite JSON-LD schema and brand discoverability meta tags (#37)"
```

---

### Task 3: Automated Build Verification & Test Script

**Files:**
- Create: `scripts/verify-agentic.js`

**Interfaces:**
- Consumes: `dist/index.html` build artifact.
- Produces: Automated verification report for heading hierarchy, text length, and JSON-LD schemas.

- [ ] **Step 1: Create `scripts/verify-agentic.js`**

```javascript
import fs from 'fs';
import path from 'path';

const htmlPath = path.resolve('dist/index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('Error: dist/index.html does not exist. Run pnpm build first.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// 1. Verify H1 tag
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
if (!h1Match) {
  console.error('FAIL: No <h1> tag found in dist/index.html');
  process.exit(1);
}
console.log('PASS: <h1> found:', h1Match[1].replace(/<[^>]+>/g, '').trim());

// 2. Verify H2 and H3 tags
const h2Matches = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
const h3Matches = html.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || [];
if (h2Matches.length === 0 || h3Matches.length === 0) {
  console.error(`FAIL: Missing heading hierarchy. Found ${h2Matches.length} H2 tags and ${h3Matches.length} H3 tags.`);
  process.exit(1);
}
console.log(`PASS: Found ${h2Matches.length} H2 tags and ${h3Matches.length} H3 tags.`);

// 3. Verify static raw text length (>500 chars)
const textContent = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                        .replace(/<style[\s\S]*?<\/style>/gi, '')
                        .replace(/<[^>]+>/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();

console.log(`PASS: Raw static HTML text length: ${textContent.length} characters.`);
if (textContent.length < 500) {
  console.error('FAIL: Static HTML text length is under 500 characters.');
  process.exit(1);
}

// 4. Verify JSON-LD schemas
if (!html.includes('"WebSite"') || !html.includes('"Organization"')) {
  console.error('FAIL: Missing WebSite or Organization JSON-LD schema.');
  process.exit(1);
}
console.log('PASS: WebSite and Organization JSON-LD schemas verified.');

console.log('\nAll Agentic Verification Checks Passed Successfully!');
```

- [ ] **Step 2: Run verification script**

Run: `pnpm build && node scripts/verify-agentic.js`
Expected: `All Agentic Verification Checks Passed Successfully!`

- [ ] **Step 3: Commit Task 3 & Deploy**

```bash
git add scripts/verify-agentic.js
git commit -m "test: add automated agentic verification script (#37)"
gh issue close 37 --comment "Heading hierarchy (H1 -> H2 -> H3 with >500 text chars), WebSite JSON-LD schema, and brand discoverability meta tags implemented."
```
