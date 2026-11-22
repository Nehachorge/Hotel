# Tamhini Valley Retreat — Official Website

> **Tagline:** *Your Gateway to Tamhini*  
> **Location:** Nive, Tamhini, Mulshi, Pune, Maharashtra, India  
> **Contact / WhatsApp:** +91 9022142586  

A modern, fast, and authentic nature stay, hotel, and restaurant frontend website built with semantic HTML5, pure CSS3, and vanilla JavaScript. Designed specifically to convey the tranquility, monsoon mist, and warm hospitality of the Sahyadri mountains.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [How to Run Locally](#1-how-to-run-locally)
4. [How to Replace Images](#2-how-to-replace-images)
5. [How to Change Phone Number & WhatsApp](#3-how-to-change-phone-number--whatsapp)
6. [How to Change Email Address](#4-how-to-change-email-address)
7. [How to Change Google Maps Link / Location](#5-how-to-change-google-maps-link--location)
8. [How to Add Actual Room Prices](#6-how-to-add-actual-room-prices)
9. [How to Add Real Customer Reviews](#7-how-to-add-real-customer-reviews)
10. [How to Update Social Media Links](#8-how-to-update-social-media-links)
11. [How to Deploy Using GitHub (Free GitHub Pages)](#9-how-to-deploy-using-github-free-github-pages)
12. [How to Deploy Using Vercel (Free 1-Click Hosting)](#10-how-to-deploy-using-vercel-free-1-click-hosting)

---

## Project Overview

- **Design Style:** Modern Sahyadri Nature Retreat
- **Colors:** Deep Forest Green (`#1b3b2b`), Warm Cream (`#fdfbf7`), Muted Earthy Gold (`#c29b38`), Dark Charcoal (`#202623`), Clean White (`#ffffff`)
- **Typography:** *Cormorant Garamond* (headings) & *Inter* (body text) via Google Fonts
- **Pages Included:**
  - `index.html` — Homepage with hero, 5 core features, rooms showcase, restaurant highlights, monsoon section, local attractions, custom escape packages, interactive WhatsApp booking generator, gallery preview, verified review placeholders, route guidance, and contact info.
  - `rooms.html` — In-depth accommodation catalog for Standard Room, Deluxe Room, Valley View Room, Family Room, and Private Cottage, with amenities and stay guidelines.
  - `restaurant.html` — Authentic Maharashtrian dining guide, regional sample categories (Breakfast, Specialities, Vegetarian, Non-Vegetarian, Tea & Snacks, Monsoon Specials) and kitchen inquiry actions.
  - `experiences.html` — Sahyadri monsoon experiences, waterfalls, scenic drives, walking trails, bonfires, and target audience segments (Pune/Mumbai weekenders, bikers, families, trekking groups).
  - `explore.html` — Detailed regional sightseeing guide to Tamhini Ghat, Kundalika Valley, Savlya Ghat, Tamhini Waterfalls, Mulshi Dam, and Sahyadri trails, complete with monsoon travel safety advisories.
  - `gallery.html` — Filterable responsive masonry gallery (All, Rooms, Restaurant, Nature, Food, Property, Experiences) with full lightbox navigation (keyboard ESC/arrow controls, touch support, image counter).
  - `contact.html` — Direct call, WhatsApp reservation, directions, inquiry form, and turn-by-turn driving advice from Pune and Mumbai.
  - `robots.txt` & `sitemap.xml` — Complete search engine optimization files.

---

## Folder Structure

```
Hotel/ (or Tamhini-Valley-Retreat/)
│
├── index.html            # Main Landing Page
├── rooms.html            # Accommodations & Cottage Details
├── restaurant.html       # Maharashtrian Cuisine & Dining
├── experiences.html      # Sahyadri & Monsoon Experiences
├── explore.html          # Tamhini Ghat & Sightseeing Guide
├── gallery.html          # Interactive Photo Gallery & Lightbox
├── contact.html          # Contact, Directions & Booking
│
├── css/
│   └── style.css         # Complete CSS Design System & Responsive Tokens
│
├── js/
│   └── script.js         # Mobile Menu, Sticky Nav, Lightbox, WhatsApp Generator
│
├── images/
│   ├── README.md         # Image Guidelines
│   ├── hero/             # Drop hero panoramic shots here
│   ├── rooms/            # Drop room & cottage photos here
│   ├── restaurant/       # Drop dining & thali photos here
│   ├── nature/           # Drop waterfalls, ghats & outdoor photos here
│   └── gallery/          # Drop gallery showcase photos here
│
├── robots.txt            # Search Engine Crawling Instructions
├── sitemap.xml           # XML Sitemap of all 7 Pages
└── README.md             # Documentation & Customization Guide
```

---

## 1. How to Run Locally

You do not need any frameworks or build steps. Any modern browser works out of the box.

### Option A: Direct Open in Browser
Double-click `index.html` in your file explorer to open it in Chrome, Edge, Safari, or Firefox.

### Option B: Using VS Code / Antigravity Live Server
If you use the **Live Server** extension, right-click `index.html` and click **"Open with Live Server"**.

### Option C: Using Node.js `npx serve`
Run the following in your terminal:
```bash
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## 2. How to Replace Images

All image elements in the HTML files are clearly labeled with:
```html
<!-- TEMPORARY IMAGE - REPLACE WITH PROPERTY PHOTO -->
```

To replace an Unsplash image with your real property photo:
1. Place your photograph inside the appropriate `images/` subfolder (e.g. `images/rooms/deluxe-room.jpg`).
2. Open the respective `.html` file (e.g. `rooms.html`).
3. Replace the `src` attribute:
   ```html
   <!-- Before: -->
   <img src="https://images.unsplash.com/..." alt="...">

   <!-- After: -->
   <img src="images/rooms/deluxe-room.jpg" alt="Deluxe Room at Tamhini Valley Retreat">
   ```
4. Save the file and refresh your browser.

---

## 3. How to Change Phone Number & WhatsApp

The phone number is controlled in **`js/script.js`** using a single configuration variable:

```javascript
// Open js/script.js:
const CONFIG = {
  phone: "9022142586", // <- Update your 10-digit Indian mobile number here
  countryCode: "91",
  email: "YOUR_EMAIL",
  ...
};
```
Whenever a guest fills out the booking form, this variable is automatically used to format and send the WhatsApp booking message to `https://wa.me/91<YOUR_PHONE>`.

In addition, replace any hardcoded `tel:+919022142586` or `9022142586` text in the HTML files using your text editor's Find & Replace tool.

---

## 4. How to Change Email Address

1. In `js/script.js`, change:
   ```javascript
   email: "contact@tamhinivalleyretreat.com", // update from "YOUR_EMAIL"
   ```
2. In the HTML files (`index.html`, `contact.html`, etc.), search for `YOUR_EMAIL` and replace it with your actual business email address.

---

## 5. How to Change Google Maps Link / Location

When you register your property on Google Business Profile / Google Maps:
1. Open Google Maps and search for your property.
2. Click **Share** &rarr; **Copy link**.
3. In `js/script.js`, update:
   ```javascript
   googleMapsUrl: "https://maps.app.goo.gl/YourExactPropertyLink",
   ```
4. Search for the placeholder map query in the HTML files:
   `https://www.google.com/maps/search/?api=1&query=Nive%2C%20Tamhini%2C%20Mulshi%2C%20Pune%2C%20Maharashtra`
   and replace it with your direct link.

---

## 6. How to Add Actual Room Prices

Currently, all room cards display:
```html
<span class="room-price-val">Price on request</span>
```
When your seasonal or launch pricing is ready:
1. Open `index.html` and `rooms.html`.
2. Locate the room card (e.g. `Standard Room`).
3. Update the price element:
   ```html
   <div class="room-price-info">
     <span class="room-price-label">Starting From</span>
     <span class="room-price-val">&#8377; 2,500 <small style="font-size:0.75rem; font-weight:normal;">/ night</small></span>
   </div>
   ```

---

## 7. How to Add Real Customer Reviews

In `index.html`, under the `#reviews` section, replace the placeholder cards:

```html
<!-- Replace this placeholder card: -->
<div class="review-placeholder-card">
  <p class="review-placeholder-quote">“Guest reviews will appear here.”</p>
  <span class="review-placeholder-badge">Upcoming Review</span>
</div>

<!-- With a verified guest review: -->
<div class="feature-card" style="text-align: left; padding: 2rem;">
  <div style="color: var(--accent-gold); margin-bottom: 0.5rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
  <p style="font-style: italic; font-size: 0.95rem; margin-bottom: 1rem;">
    "Spent a weekend here during peak monsoon. The misty valley views from the room were breathtaking, and the hot pithla bhakri and chai were outstanding!"
  </p>
  <strong style="color: var(--primary-dark); font-size: 0.9rem;">- Sameer & Neha, Pune</strong>
</div>
```

---

## 8. How to Update Social Media Links

In `index.html`, `rooms.html`, `restaurant.html`, `experiences.html`, `explore.html`, `gallery.html`, and `contact.html`:
Find the social icon links in the footer:
```html
<a href="#" class="social-link" aria-label="Follow Tamhini Valley Retreat on Instagram">
```
Replace `#` with your live page URL, for example:
```html
<a href="https://instagram.com/tamhinivalleyretreat" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
```

---

## 9. How to Deploy Using GitHub (Free GitHub Pages)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Launch Tamhini Valley Retreat website"
   ```
2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repo `hotel` or `tamhini-valley-retreat`.
   - Leave it **Public**.
3. **Push your code**:
   ```bash
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - In your repository, click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Branch**, select `main` and root `/`.
   - Click **Save**.
   - Your website will be live in ~60 seconds at `https://<YOUR-GITHUB-USERNAME>.github.io/<REPO-NAME>/`.

---

## 10. How to Deploy Using Vercel (Free 1-Click Hosting)

1. Sign up or log into [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your GitHub repository (`hotel` or `tamhini-valley-retreat`).
4. Keep the Framework Preset as **"Other"** (Root Directory `./`).
5. Click **"Deploy"**.
6. In ~15 seconds, Vercel gives you an instant SSL-secured production URL (e.g. `https://tamhini-valley-retreat.vercel.app`).
7. **Custom Domain (Optional & Free):** In Vercel Project Settings &rarr; Domains, you can add your custom domain (e.g. `tamhinivalleyretreat.com`).

---

## License & Copyright

&copy; 2026 Tamhini Valley Retreat. All rights reserved.  
Location: Nive, Tamhini, Mulshi, Pune, Maharashtra, India.
