

# ART SOFTWARES — Premium Dark Trading Platform

## Design System
- Background: #0A0A0A deep black
- Text: #FFFFFF / #CCCCCC
- Accents/borders: #666666, #999999, #BBBBBB
- Glassmorphism with heavy blur (backdrop-blur-xl) on all cards, navbar, modals
- Custom CSS cursor with glow effect + magnetic hover interactions
- Floating grey orbs as ambient background particles

## Structure (5 sections, SPA with JS navigation)

### Navbar (fixed, glassmorphic)
- Logo: "ART SOFTWARES" gradient text (white→grey)
- Menu: HOME | BOTS | RESULTS | DEVELOPER HISTORY | CONTACT
- Right: Binance ID placeholder display
- Heavy blur background

### 1. HOME (Hero)
- Full-screen hero with blur background
- Title: "ART SOFTWARES" + subtitle "Elite AI Trading Signals & Bots"
- Tagline: "Precision. Profit. Power."
- CTA: "Browse Bots" + "View Results"
- Trust badges section below

### 2. BOTS
- Grid of 5 glassmorphic bot cards with magnetic hover
- Cards: ARTRIX AI ($120), TWJ LIVE SIGNAL ($100), TWJ FUTURE SIGNAL ($80), VELTRIX SIGNALS ($60), RESULTS CHECKER ($30)
- Each has name, price, description, "Buy Now" button
- Buy Now → full-screen payment modal with Binance ID copy, transaction ID input, submit proof, success animation

### 3. RESULTS
- Dashboard-style layout
- Performance bars (grey/white only)
- Stats: Win Rate, Profit %, Total Signals
- Testimonial cards in glass style

### 4. DEVELOPER HISTORY
- About ARTRIX timeline
- Grey vertical timeline of achievements
- "From Dhaka to Global Markets" narrative
- Professional, mysterious vibe

### 5. CONTACT (modal-based)
- Contact form in glassmorphic modal

### Global Features
- Custom glowing cursor (white circle + grey glow, scales on hover)
- Floating grey particle orbs in background (canvas-based)
- Smooth page transitions
- Magnetic hover + scale + blur lift on all interactive elements
- Fully responsive
- Footer with copyright + quick links

## Implementation
- Index.tsx as main component with all sections
- Custom cursor via CSS + JS mouse tracking
- Canvas for background particles
- State-based page navigation (no router needed for sections)
- Payment modal with copy-to-clipboard + success animation

