# Rodriguez HVAC Mechanical — Website

React 18 + Vite 5 + Tailwind CSS 3. Hash-based pages (`#repair`, `#about-us` …), so no server rewrites are needed.

## Project layout

```
index.html                 SEO tags, Open Graph, schema.org JSON-LD, Google Fonts
package.json               dependencies + scripts (dev / build / preview)
vite.config.js  tailwind.config.js  postcss.config.js  vercel.json
public/
  images/logo.png          your logo (white/gold, transparent)
  images/service-map.jpg   service-area map (cropped from your screenshot)
  images/technician.jpg    <- NOT INCLUDED: add your original photo with this exact name
  images/gauge.jpg         <- NOT INCLUDED: add your original photo with this exact name
  favicon-32.png, apple-touch-icon.png, icon-192/512.png, og-image.jpg, site.webmanifest, robots.txt
src/
  main.jsx                 entry
  index.css                Tailwind + approved base styles
  config/site.js           PHONE / EMAIL / HOUSECALL PRO URL / FACEBOOK / INSTAGRAM  <- edit here
  components/              App, Home, ui (Panel, Title, Logo, Photo), icons, Sections (zones, options, rates, badges),
                           Extras (Find Your Price + Comfort/benefits section), ServiceMap, Mobile (hamburger menu, sticky Call/Book bar, map lightbox),
                           BookingModal, SubPage, BookLink
```

Until `technician.jpg` / `gauge.jpg` exist, the site shows labelled placeholders in those spots.
The moment you add the files they appear automatically — no code change.

## Things you will want to edit (all in `src/config/site.js`)

* `hcpToken` / `hcpOrgName` — your Housecall Pro online-booking widget (already filled in from your embed code). Every Book Appointment button opens it, and your deposit is collected there. If the widget can't load, the built-in request form opens instead.
* `depositNotice` — the deposit line shown near the Book buttons (50% deposit, credited toward the repair). Set it to `''` to hide it.
* `bookingUrl` — optional; if you fill it in, buttons link to that page instead of the widget. Paste your Housecall Pro online-booking link. Empty = the built-in request form opens.
* `facebookUrl`, `instagramUrl` — your real page links (empty = icon shows, no link).

## Run on a computer (optional)

```
npm install
npm run dev       # live preview
npm run build     # production build into /dist
```

---

# Deploy using only an iPad + Safari

## Part 1 — Put the files on GitHub

1. Safari → **github.com** → sign in (or create a free account).
2. Tap **+** (top right) → **New repository**. Name it `rodriguez-hvac-site`, keep it **Private** or Public, tap **Create repository**.
3. Get the project onto your iPad: open the `rodriguez-hvac-site.zip` you downloaded in the **Files** app and tap it once — iPadOS unzips it into a folder.

**Method A (fastest) — drag the folder in:**
4. On the new empty repo page tap **uploading an existing file**.
5. Open the **Files** app in Split View next to Safari (swipe up for the Dock, drag Files to the side of the screen).
6. Press and hold the unzipped folder's *contents* (select everything inside: `index.html`, `package.json`, `src`, `public`, and the rest), then drag them onto the GitHub upload area. Folders keep their structure.
7. Wait for the upload bars to finish, then tap **Commit changes**.

**Method B (most reliable) — upload the zip and unzip it in the cloud:**
4. On the new repo page tap **uploading an existing file** and upload the single `rodriguez-hvac-site.zip` file. Tap **Commit changes**.
5. In the repo tap **Code** → **Codespaces** tab → **Create codespace on main** (free monthly allowance). A coding window opens in Safari.
6. In its **Terminal** type these lines one at a time, pressing return after each:
   ```
   unzip -o rodriguez-hvac-site.zip -d tmp && cp -r tmp/rodriguez-hvac-site/. . && rm -rf tmp rodriguez-hvac-site.zip
   git add -A
   git commit -m "Add website files"
   git push
   ```
7. Back on github.com refresh the repo: you should see `index.html`, `package.json`, `src`, `public` at the top level (not inside another folder).

## Part 2 — Deploy on Vercel

1. Safari → **vercel.com** → **Sign Up** → **Continue with GitHub** and allow access to the repository.
2. Tap **Add New… → Project**, find `rodriguez-hvac-site`, tap **Import**.
3. Vercel detects **Vite** automatically. Leave Build Command `npm run build` and Output Directory `dist`. Tap **Deploy**.
4. After about a minute you get a live address such as `rodriguez-hvac-site.vercel.app`.
5. Your own domain: **Project → Settings → Domains → Add**, then follow the DNS instructions at your domain registrar.

## Part 3 — Making changes later (all from Safari)

* **Booking link / social links:** GitHub → `src` → `config` → `site.js` → pencil icon → edit the quotes → **Commit changes**. Vercel redeploys automatically in about a minute.
* **Add your photos:** GitHub → `public` → `images` → **Add file → Upload files** → upload `technician.jpg` and `gauge.jpg` (exact names) → **Commit changes**.
* **Page copy for Repair / About / Reviews / Financing etc.:** edit the `pages` list in `src/components/SubPage.js`.

---

## Service-area map

The map is a live map (Leaflet + OpenStreetMap, loaded from unpkg.com / tile.openstreetmap.org) with every city from your four zones shown as a dot in its zone color, plus a soft colored halo for each zone's coverage. City positions are approximate city centers set in `src/components/ServiceMap.js` (`CITY_PTS`). If the map can't load (no internet or blocked), the page shows your original map image instead (`public/images/service-map.jpg`), so nothing breaks. Map data © OpenStreetMap contributors (attribution is shown on the map).
