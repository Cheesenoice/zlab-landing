# ZLAB React landing

Next.js App Router, React + TypeScript, Tailwind CSS v4, local shadcn-style Button/Accordion composition with Radix Slot/Accordion/Dialog, Motion, Lucide. Google fonts are self-hosted by next/font at build.

Run from this folder:
- `node node_modules/next/dist/bin/next dev --hostname 127.0.0.1 --port 3000`
- `node node_modules/next/dist/bin/next build`
- Static export: `out/` (no LMS or form backend).

The npm scripts are provided; this Windows machine's npm shell resolution may fail on the quoted node shim, so direct Node commands above are reliable.

Facts retained from project research. Public achievement posters and logo retained. `study-campaign.png` is an original AI-generated campaign image, labelled as such, not a real classroom photo. Original retained in Codex generated_images. No fabricated teacher credentials, success rates, testimonials, fees or guarantees.

References: Nutlope Hallmark cloned in ../vendor/hallmark; EF https://www.ef.com/wwen/ for audience-led program navigation; British Council https://englishonline.britishcouncil.org/ for goal explanations. No competitor assets copied.

Verification: Next production build and TypeScript passed; browser viewport checks 320/360/390/430/768/1280 with no horizontal overflow. Radix menu, poster modal, keyboard FAQ checked. Hallmark static lint: initial Floor findings corrected; numerous Reflex warnings remain for preserving client-approved colorful cards, labels, typography and optical spacing. Hallmark automated render tier unavailable (puppeteer-core absent); CUA browser QA used instead. Full Hallmark certification is not claimed.

Expanded after VUS/ILA/YOLA reference review: interactive 3-program pathways (including arrow-key tab navigation), three original reading articles in Radix dialogs, second labelled AI campaign photograph. WebP campaign assets ~97/122 KB. Production build passed; browser QA confirmed tab changes, reading dialog open/close and no horizontal overflow at 320/390/430/768/1280. Full reference notes: ../research/vus-ila-yola-review.md.

Mobile motion polish: CSS-only subtle icon wiggle, sticker rocking and 5px horizontal letter drift. Reuses existing IntersectionObserver + visibility/pause controller; no new dependency or image. Sticky mobile header; native horizontal course tabs; reading dialog becomes bottom sheet with sticky 48px close control. Reduced-motion browser check confirmed animation-name:none for all sampled decorative elements. Browser viewport requests 320–1280 (actual CSS widths 291–1164 due browser zoom) showed no document overflow. Reading open/close and pathway selection verified. Build passed. Screenshot: ../research/mobile-reading-polish.png.
