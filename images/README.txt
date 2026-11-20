Ryoko Pro — images folder
=========================

Drop your six image files into this folder using these exact filenames.
The page references these and nothing else.

File                       Used where                                 Declared size
-------------------------  -----------------------------------------  --------------
ryoko-pro-wifi.webp        Boarding-pass hero, right-hand stub (LCP)  900 x 1200
ryoko-pro.webp             "A Ryoko Pro in the hand" + site icon      1000 x 750
ryoko-pro-review-1.webp    Reviews, first row                         600 x 800
ryoko-pro-review-2.webp    Reviews, second row (image on the right)   600 x 800
ryoko-pro-review-3.webp    Reviews, third row                         600 x 800
ryoko-pro-guarantee.webp   "Guarantee, returns and warranty"          1000 x 750

Notes
-----

1. IMAGES SIZE TO THEMSELVES. Every slot uses height:auto with a max-height
   cap, so your file keeps its own proportions. Nothing is letterboxed into
   blank bands, and nothing grows large enough to swallow the fold.

2. The "Declared size" column is what index.html states in each img tag's
   width and height attributes. Those attributes reserve the right space
   before the file downloads, which is what holds cumulative layout shift at
   zero. If your real files are a noticeably different shape, send me the
   actual pixel dimensions and I will update the six attributes.

3. The three review screenshots alternate left and right down the page
   rather than sitting in a row, so they do not need to match each other in
   shape. Any reasonable screenshot proportion works.

4. ryoko-pro-wifi.webp is the Largest Contentful Paint image and sits in the
   tear-off stub of the boarding-pass panel. It is preloaded with
   fetchpriority="high", so it is the one file worth compressing hardest —
   aim for under 90 KB. The other five are lazy-loaded.

5. This page is LIGHT, on a pale silver-green (#f4f6f3), and the hero stub
   sits on that same tone. Product shots cut out on white or on a
   transparent background will sit on it cleanly. If your files are cut out
   on black, say so and I will put a panel behind them.

6. NO FAVICON WAS SUPPLIED, so ryoko-pro.webp doubles as the browser-tab and
   home-screen icon (declared in index.html and manifest.json). If you have
   a square logo — 512 x 512 PNG is ideal — send it and I will switch to it.

7. Keep the .webp extensions. These filenames appear in index.html,
   sitemap.xml, manifest.json and the Open Graph / Twitter meta tags, so
   renaming one means editing four files.

8. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
