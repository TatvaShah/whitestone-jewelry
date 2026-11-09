# Mapping a lead into site.config.ts (premium kit)

Premium kit: showcase demos only (not the daily prospect pipeline). Never use it for daily demos or to rebuild backlog sites; those stay on the standard kit at `/workspace/claudaura-prospects/starter`.
Everything below works like the standard kit, plus the premium fields in "Premium extras" at the end.

Lead entries in `leads/<date>.json` look like:
`business_name, instagram_handle, instagram_url, category, city_area, order_booking_links[], phone, email, tiktok_url, google_listing_url, slug, role`.

| Config field | Source |
| - | - |
| `name` | `business_name` exactly as styled on IG |
| `tagline` | One sentence: what they make plus `city_area`. From the IG bio when possible |
| `category` | Short form of `category`, e.g. "Custom cakes", "Filipino home cooking", "Event florals" |
| `schemaType` | Bakery (cakes, desserts), FoodEstablishment (home food, caterers), Florist, BeautySalon, else LocalBusiness |
| `area` | `city_area` plus ", ON" |
| `siteUrl` | `https://` plus the domain in `.site-domain` (new-site.sh picks a free vercel.app name, since `<slug>.vercel.app` can belong to a stranger) |
| `theme.preset` | See "Which preset" below |
| `theme.colors.accent` | Optional, the main brand color from the logo |
| `logo` | `/images/logo.png` (IG profile picture, PNG or JPG) |
| `hero.headline` and `subhead` | Short benefit line plus how ordering works. No invented claims |
| `hero.primaryCta` | Optional override. Default follows the preset: service presets use "DM to book", or "Book now" to the first `order.links` entry; food presets use "Order by Instagram DM" |
| `hero.images` | 1 to 3 strongest post photos (`full` variant needs one wide or tall photo with room for text) |
| `highlights` | 3 or 4 short true facts: "Made to order", "Halal", "Pickup in Brampton", "Orders by DM" |
| `about.body` | 1 or 2 paragraphs from the bio and captions. Skip if nothing real to say |
| `menu` | See "Menu and services" below. Items and prices only from captions, story highlights, or menus posted on IG |
| `gallery.items` | 6 to 12 post photos with short captions and the post URL in `href` |
| `reels.items` | Optional mp4 copies of reels with poster images |
| `instagram.handle` | `instagram_handle` without the @ |
| `instagram.embeds` | 1 to 3 post or reel URLs (https://www.instagram.com/p/CODE/) |
| `order.dmMessage` | "Hi <name>! I would like to order..." plus blank lines for date, quantity, pickup or delivery |
| `order.links` | Each `order_booking_links` entry as `{ label, href }` (order form, Uber Eats, booking page) |
| `order.note` | Lead time or deposit rules, only if posted |
| `reviews.items` | Only real reviews from `google_listing_url` or tagged posts, with source. Else leave `[]` |
| `faq` | 2 to 4 answers built from known facts only |
| `contact.email`, `contact.phone` | `email`, `phone` from the lead or IG bio |
| `contact.address`, `contact.hours` | Only if public (storefront or Google listing). Home businesses: leave empty |
| `contact.socials` | `tiktok_url`, Facebook, Linktree, `google_listing_url` as `{ label, href }` |
| `seo.title` | "<name> \| <category> in <city>" |
| `seo.description` | 140 to 160 characters: what, where, how to order |
| `seo.keywords` | 3 to 5 phrases like "custom cakes Mississauga" |
| `seo.ogPhoto` | `/images/og-photo.jpg` (480x630 PNG or JPG). Used for the static share image `public/og.jpg`, made by `npm run og` (publish.sh runs it). Keep `siteUrl` set to the live domain so og:image is absolute |

Leave anything unknown empty. Empty sections disappear, and that is better than invented content.

## Non-food businesses (salons, nails, barbers, services)
Service presets (`salon-chic`, `barber-bold`, `barber-bold-light`) already default the hero primary CTA to "DM to book". If `order.links` has a booking page (Setmore, Square, Booksy), put it first: the hero button becomes "Book now" and links there. Food presets keep "Order by Instagram DM". The header DM button defaults to "DM to book" on those same presets (else "DM to order"). Explicit `hero.primaryCta` and `order.headerCtaLabel` always win over these defaults.

Still set the other labels so nothing reads like a bakery: `menu.label: "Services"`, `order.label: "How to book"`, `contact.title: "Contact"` (or "Contact and booking"). `schemaType` BeautySalon or HairSalon.

## Which preset

Premium presets (more whitespace, larger type). The standard preset names still work.

| Business | `theme.preset` | Fonts (headings / body) | Look |
| - | - | - | - |
| Burger, smash, chicken, pizza, taco, casual food counters | `restaurant-luxe` | Anton uppercase / Outfit | warm paper, ink, burnt orange |
| Same, with moody or night photos, or a dark logo | `restaurant-luxe-dark` | Anton uppercase / Outfit | charcoal, bone, ember orange |
| Cakes, cupcakes, cookies, dessert tables | `bakery-luxe` | Playfair Display / Outfit | cream and rose |
| Caterers, party trays, event food | `catering-luxe` | DM Serif Display / Outfit, name in script | paper, deep wine |
| Hair and beauty salons, spas, makeup | `salon-luxe` | Cormorant Garamond / Jost | stone and bronze |
| Nails, lashes, brows | `nails-lash-luxe` | Playfair Display / Outfit | blush, round corners |
| Florists, wedding and event florals | `floral-luxe` | Cormorant / Jost, name in script | ivory, moss, dusty rose |
| Barbers with bright photos | `barber-luxe` | Anton uppercase / Inter | paper, ink, tobacco |
| Barbers with dark photos or logo | `barber-luxe-dark` | Anton uppercase / Inter | black, bone, brass |

Restaurant presets: the hero button is "Order online" to the first `order.links` entry, else "Call to order" when there is a phone, else the DM button. Service presets (salon, nails, barber) default to "DM to book" or "Book now". Override `theme.colors.accent` with the logo colour if obvious. Never use a swashy serif for headings.

## Menu and services

Use the same `menu` block for food menus and for service lists.

```ts
menu: {
  label: "Menu",          // "Services" for salons and barbers
  title: "What we make",
  intro: "Optional line",
  variant: "list",        // "list" for text menus and services, "cards" when items have photos
  layout: "tabs",         // "tabs" when 3 or more categories, else leave out ("stacked")
  showPrices: true,       // false hides every price on the page
  priceNote: "Message us for a quote", // shown only when showPrices is false
  groups: [
    {
      title: "Canapes",
      note: "Minimum 16 per item",      // optional, shown as a small badge
      items: [
        { name: "Paneer tikka", description: "Mint chutney", veg: true, price: "$3" },
        { name: "Chicken biryani", dietary: ["halal", "spicy"] },
        { name: "Skin fade", price: "$35", duration: "45 min", tag: "Most booked" },
      ],
    },
  ],
  footnote: "Optional small print",
},
```

Item fields: `name` (required), `description`, `price` (free text: "$35", "From $65", "$3 each"), `duration` (services), `veg: true`, `dietary` (any of `veg`, `vegan`, `halal`, `gf`, `spicy`, `nonveg`; a legend appears automatically), `tag`, `image` (cards), `href` (IG post).

With prices: prices were posted on IG. Put them on each item and leave `showPrices` out.
Without prices: prices were never posted, or the business quotes by DM. Leave `price` off every item (never guess one), or set `showPrices: false` to hide any that exist, and add a `priceNote` like "Message us for pricing on your date and guest count."
Services (salons, barbers): `label: "Services"`, `variant: "list"`, one group per service type (Cuts, Beard, Nails, Lashes), `duration` when posted, and a note such as "Price on consultation" for custom work.
Old configs with only `title`, `variant`, `groups` and `footnote` keep working unchanged.

Restaurants: one group per menu category (Burgers, Chicken, Sides, Shakes), `variant: "list"` for the menu board look (dotted leaders to the price), or `"cards"` when every item has a good photo. Use `layout: "tabs"` for 5 or more categories. Copy prices exactly as the business posts them (menu photo, Uber Eats, website) and leave them off when unknown.

## Premium extras

```ts
motion: { enabled: true, smoothScroll: true, intensity: "subtle", pin: true }, // all optional, these are the defaults
hero: { variant: "editorial", depth: false, ... },  // editorial = big type, tall photo, small overlapping photo
about: { statement: "One true line that fills in word by word on scroll.", ... },
gallery: { layout: "strip", items: [...] },          // strip (pinned sideways scroll on desktop, swipe on phones) or masonry
theme: { preset: "restaurant-luxe-dark", pattern: "checker" },  // optional thin checkerboard bands; only when the brand really uses checkers
order: { preferLinks: true, links: [{ label: "Order on Uber Eats", href: "..." }], ... }, // links[0] becomes the header and main order button; use when the brief names a primary order link
```

* `motion.enabled: false` turns every animation off. Visitors with "reduce motion" set in their OS always get no motion, whatever the config says.
* `motion.intensity: "medium"` is stronger parallax. Keep `"subtle"` unless Tatva asks.
* `motion.pin: false` turns off the pinned gallery. It only pins on screens 1024px and wider; phones always swipe.
* `hero.depth: true` adds a CSS 3D photo stack (needs 2 or more hero images). **Off by default.** It loads after the page is idle and in view, never on Save-Data or reduce motion, and the static photo stays as the fallback. Never blocks first paint.
* The strip gallery needs 4 or more photos; with fewer it falls back to masonry.

## Photos: real first, stock only for gaps

1. Real photos from the business (IG posts, Google listing photos the owner posted, their website) go in `public/images/`. Always prefer these.
2. If you still have fewer than about 8 good photos, top up with stock:
   Run `npm run stock` with a query such as "smash burger", a minimum count, or an exact count. Optional flags cover orientation, a commercial licence, and a dry run. See the script header for the flag names.
   Sources: Unsplash when `UNSPLASH_ACCESS_KEY` is set, Pexels when `PEXELS_API_KEY` is set, else Openverse with no key (CC0 and public domain only by default).
3. Photos are saved to `public/images/stock/` (never hotlinked) and credits go into `stock.config.ts`. Use them in `site.config.ts` with `import { stock } from "@/stock.config";` and `image: { ...stock("openverse-ab12cd34.jpg"), alt: "Write a true alt" }`.
4. Look at every stock photo before using it: it must match what the business actually sells (no sushi on a burger site), and never pass stock off as their food in a caption. Delete unused entries from `stock.config.ts`.
5. The footer adds a small credit line for every stock photo the page uses.

## Images

Put photos in `public/images` at full resolution (up to about 2400 px wide is plenty). `npm run build` runs `scripts/optimize-images.mjs` first, which makes the static WebP and AVIF sizes in `public/images/_opt` and `lib/image-manifest.json`; commit both. Never re-enable Vercel Image Optimization. Gallery tiles read their width and height from the manifest when the config omits them.
