# Packhelp Redesign — mapa realnych treści

Katalog prawdziwych wpisów z **packhelp.com** dla trzech typów treści obsługiwanych przez
wspólny szablon artykułu (`_article-template.html`, guideline §5.9): blog, inspirations,
case studies. Powstał po to, żeby budując listingi i kolejne wpisy nie wymyślać tytułów,
dat, autorów ani zdjęć — wszystko poniżej jest ściągnięte z żywego serwisu.

**Pobrane:** 2026-09-23. **Źródła:** `sitemap_index.xml` (`post-sitemap.xml`,
`inspiracja-sitemap.xml`, `case-study-sitemap.xml`) + listingi + strony poszczególnych
wpisów. **Dane maszynowe:** [`content-map.json`](content-map.json) — ten sam zestaw z
pełnymi URL-ami zdjęć, opisami i `lede`, do generowania stron.

| Typ | Live listing | Wpisów na live | Zmapowanych tutaj |
|---|---|---|---|
| Blog | `/blog/` | 270 | 12 najnowszych |
| Inspirations | `/inspirations/` | 94 | 12 najnowszych |
| Case studies | `/case-studies/` | 24 | 24 — **komplet** |

Uwaga do URL-i: pojedyncze wpisy żyją pod `/blog/<slug>/`, `/inspiration/<slug>/`
(liczba pojedyncza!) i `/case-study/<slug>/`, ale listingi to `/blog/`, `/inspirations/`
i `/case-studies/`. Nasz `inspiration-oase.html` trzyma się wzorca pojedynczego wpisu.

---

## 1. Blog — 12 najnowszych

Blog jest jedynym typem z realnym autorem, datą publikacji i czasem czytania na stronie —
i to jedyny typ, który w naszym szablonie dostaje `.art-byline`.

| Opublikowany | Tytuł | Autor | Czas | Slug |
|---|---|---|---|---|
| 25 August 2026 | What to Do When You Run Out of Packaging or Your Supplier Is Late | Sylwia Rozalska | 5 min read | [`what-to-do-when-you-run-out-of-packaging-or-your-supplier-is-late`](https://packhelp.com/blog/what-to-do-when-you-run-out-of-packaging-or-your-supplier-is-late/) |
| 25 August 2026 | How to Choose a Packaging Supplier for Q4 | Sylwia Rozalska | 6 min read | [`how-to-choose-a-packaging-supplier-for-q4`](https://packhelp.com/blog/how-to-choose-a-packaging-supplier-for-q4/) |
| 24 August 2026 | Q4 2026 Packaging Checklist: How to Get Your Store Ready for Peak Sea… | Sylwia Rozalska | 4 min read | [`q4-packaging-checklist`](https://packhelp.com/blog/q4-packaging-checklist/) |
| 24 August 2026 | 10 Q4 Packaging Mistakes to Avoid Before Peak Season | Sylwia Rozalska | 6 min read | [`10-q4-packaging-mistakes-to-avoid-before-peak-season`](https://packhelp.com/blog/10-q4-packaging-mistakes-to-avoid-before-peak-season/) |
| 20 August 2026 | Introducing Branded Merchandise at Packhelp | Konrad Kwiatkowski | 5 min read | [`introducing-branded-merchandise`](https://packhelp.com/blog/introducing-branded-merchandise/) |
| 11 February 2026 | Packhelp x InPost: Together, we’re revolutionising e-commerce packagi… | Karolina Bednarczyk | 10 min read | [`packhelp-x-inpost-together-were-revolutionising-e-commerce-packaging-standards`](https://packhelp.com/blog/packhelp-x-inpost-together-were-revolutionising-e-commerce-packaging-standards/) |
| 26 September 2025 | Holiday Gift Guide: Unique Gifts from Packhelp’s Clients | Maciej Woźniczko | 5 min read | [`holiday-gift-guide-unique-gifts-from-packhelps-clients`](https://packhelp.com/blog/holiday-gift-guide-unique-gifts-from-packhelps-clients/) |
| 21 August 2025 | Discover the new level of Mailer Box personalisation | Adam Fabirkiewicz | 5 min read | [`new-level-of-mailer-box-personalisation`](https://packhelp.com/blog/new-level-of-mailer-box-personalisation/) |
| 1 October 2023 | How To Design Great Board Game Packaging | Karolina Bednarczyk | 5 min read | [`board-game-packaging`](https://packhelp.com/blog/board-game-packaging/) |
| 6 June 2023 | Ideas for sunglasses packaging and other tricky retail items | Adam Fabirkiewicz | 5 min read | [`sunglasses-packaging`](https://packhelp.com/blog/sunglasses-packaging/) |
| 31 August 2020 | Get an instant quote on your custom packaging | Karolina Bednarczyk | 5 min read | [`instant-quote-on-custom-packaging`](https://packhelp.com/blog/instant-quote-on-custom-packaging/) |
| 31 March 2020 | The Packhelp Wallet – The New Way To Save On Your Packaging Supplies | Maciej Woźniczko | 5 min read | [`packhelp-wallet`](https://packhelp.com/blog/packhelp-wallet/) |

**Kategorie bloga na live** (chipsy filtrujące nad listingiem — gotowa taksonomia, gdyby
listing bloga miał powstać):
- Covid-19 Updates
- Customer Stories
- Discover insights about e-commerce
- Marketing & sprzedaż
- Marketing Tips
- Packaging Design
- Packhelp news
- Podcast
- Pro
- Quarterly updates

Dwie z nich są zaśmiecone (`Marketing & sprzedaż` po polsku na angielskim sajcie,
`Covid-19 Updates` martwe od lat), ale `blog.html` pokazuje pełną jedenastkę — tak jak live.

**Kategoria pojedynczego wpisu siedzi w jego JSON-LD (`articleSection`)**, nie w
breadcrumbie, nie w klasach `<body>` i nie w linku do `/category/`. Z naszych 12 wpisów:
Discover insights about e-commerce — 4, Marketing Tips — 2, Packhelp news — 2,
Packaging Design — 2, Marketing & sprzedaż — 1. Osiem wpisów ma dodatkowo workowe „Other",
którego nie ma na liście chipów, więc go ignorujemy. Pięć kategorii (Covid-19 Updates,
Customer Stories, Podcast, Pro, Quarterly updates) nie ma u nas żadnego wpisu.

---

## 2. Inspirations — 12 najnowszych

Krótkie historie marek: jedno zdjęcie wiodące, kilka akapitów, brak autora i brak liczb.
W szablonie to wariant bez `.art-byline` i bez `.art-highlights`.

| Zaktualizowane | Tytuł | Slug |
|---|---|---|
| 2025-06-26 | Luxury and sustainable packaging by Gucci | [`gucci-packaging`](https://packhelp.com/inspiration/gucci-packaging/) |
| 2025-05-08 | Two piece product boxes for a baby brand : Buva Boutique | [`buva-boutique`](https://packhelp.com/inspiration/buva-boutique/) |
| 2025-05-08 | Custom paper cans: The Studio Halbuki Story | [`studio-halbuki`](https://packhelp.com/inspiration/studio-halbuki/) |
| 2025-03-27 | Sleeved mailer boxes for fashion brand packaging: Aleksandra Kołodziej | [`aleksandra-kolodziej-from-model-to-fashion-designer-and-brand-owner`](https://packhelp.com/inspiration/aleksandra-kolodziej-from-model-to-fashion-designer-and-brand-owner/) |
| 2024-10-30 | Designing Christmas Packaging: John Masters Organics | [`john-masters-organics`](https://packhelp.com/inspiration/john-masters-organics/) |
| 2024-09-04 | Organic cosmetics packaging: Beloved Shop | [`beloved-shop`](https://packhelp.com/inspiration/beloved-shop/) |
| 2024-09-04 | Sustainable Food Packaging: Brâam | [`braam`](https://packhelp.com/inspiration/braam/) |
| 2024-09-04 | Custom packaging for Graphic design: Will Mower Design | [`will-mower-design`](https://packhelp.com/inspiration/will-mower-design/) |
| 2024-09-04 | Jewelry packaging: Nāramne | [`naramne`](https://packhelp.com/inspiration/naramne/) |
| 2024-09-04 | Designer Product Boxes: Mr Blackman’s | [`mr-blackmans`](https://packhelp.com/inspiration/mr-blackmans/) |
| 2024-09-04 | Designing funky product boxes: Happy Socks | [`happy-socks`](https://packhelp.com/inspiration/happy-socks/) |
| 2024-09-04 | Product boxes for classy cosmetic packaging: Loella | [`loella-cosmetics`](https://packhelp.com/inspiration/loella-cosmetics/) |

**Czego tu nie ma:** pole `badge` na live ma na każdej stronie wartość „Event" — to zepsuta
taksonomia, nie kategoria. Nie kopiuj jej. Widget z użytymi produktami jest doklejany
JS-em, więc nie da się go wyciągnąć statycznie.

---

## 3. Case studies — komplet (24)

Jedyny typ z twardymi danymi: pola faktograficzne (Industry / Location / Business model)
i mierzalne wyniki. Kolumna **moduły** mówi, których bloków naszego szablonu dany wpis
faktycznie potrzebuje.

| Data | Tytuł | Fakty na live | Moduły | Slug |
|---|---|---|---|---|
| 2025-08-21 | How Beztrosko Used Custom Packaging to Boost Sales at a Fair by almos… | — | `.art-callouts` `.art-product-strip` | [`how-beztrosko-used-limited-edition-packaging-to-fair-boost-sales-by-almost-80`](https://packhelp.com/case-study/how-beztrosko-used-limited-edition-packaging-to-fair-boost-sales-by-almost-80/) |
| 2025-02-04 | How Pao Gin elevated their brand with premium hot-stamped packaging | — | `.art-callouts` `.art-product-strip` `.art-split-lists` | [`hot-stamped-packaging`](https://packhelp.com/case-study/hot-stamped-packaging/) |
| 2025-01-30 | How Packhelp helped Sord Elevate Men’s Cosmetics Industry from idea t… | — | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`sord-cosmetics-packaging`](https://packhelp.com/case-study/sord-cosmetics-packaging/) |
| 2024-11-22 | From Bean to Box: HAYB's Recipe for Advent Calendar Success | — | `.art-callouts` `.art-product-strip` `.art-split-lists` | [`advent-calendar`](https://packhelp.com/case-study/advent-calendar/) |
| 2024-08-08 | Custom Ice Cream Cups for Passione Gelateria in Warsaw | — | `.art-product-strip` | [`custom-ice-cream-cups-for-passione`](https://packhelp.com/case-study/custom-ice-cream-cups-for-passione/) |
| 2024-06-28 | Douze: Portabale and aesthetic packaging | — | `.art-callouts` `.art-product-strip` | [`douze-drink`](https://packhelp.com/case-study/douze-drink/) |
| 2024-04-17 | How packaging improvements helped fashion brand Tropicfeel reduce the… | Industry: FASHION, Location: SPAIN | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`tropicfeel`](https://packhelp.com/case-study/tropicfeel/) |
| 2024-03-29 | How Packhelp helped Pizza Week manage bespoke packaging delivery for … | — | `.art-callouts` `.art-product-strip` | [`streamlining-pizza-week-with-smart-packaging-solutions`](https://packhelp.com/case-study/streamlining-pizza-week-with-smart-packaging-solutions/) |
| 2024-03-29 | La Bomba: Bespoke packaging for every occasion | — | `.art-callouts` `.art-split-lists` | [`la-bomba`](https://packhelp.com/case-study/la-bomba/) |
| 2024-03-12 | How Packhelp supported Kuyichi in introducing a more circular approac… | Industry: FASHION, Location: THE NETHERLANDS | `.art-highlights` `.art-product-strip` `.art-split-lists` | [`kuyichi`](https://packhelp.com/case-study/kuyichi/) |
| 2024-03-11 | How Fluus trusts bespoke packaging from Packhelp to deliver their rev… | Industry: SUSTAINABLE HYGIENE PRODUCTS, Location: U… | `.art-callouts` `.art-product-strip` `.art-split-lists` | [`fluus`](https://packhelp.com/case-study/fluus/) |
| 2024-02-23 | The Seam: Welcome to the culture of care | Industry: FASHION, Location: UK | `.art-product-strip` | [`the-seam`](https://packhelp.com/case-study/the-seam/) |
| 2024-02-12 | Signed, Sealed, Delicious: How Browniegod Delivers Perfect Bakes with… | Industry: BAKED GOODS, Location: UNITED KINGDOM | `.art-callouts` `.art-product-strip` `.art-split-lists` | [`browniegod`](https://packhelp.com/case-study/browniegod/) |
| 2024-02-07 | Djuce: Crafting a greener wine experience with smart packaging | Industry: BEVERAGES, Location: GERMANY | `.art-callouts` `.art-product-strip` `.art-split-lists` | [`djuce`](https://packhelp.com/case-study/djuce/) |
| 2023-12-18 | Xlash España made the switch to sustainable packaging and reduced its… | Industry: Cosmetics, Location: Seville, Spain, Busi… | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`xlash-cosmetics-packaging`](https://packhelp.com/case-study/xlash-cosmetics-packaging/) |
| 2023-11-22 | How speciality coffee brand Wakuli saved 7% in packaging costs with P… | Industry: SPECIALITY COFFEE, Location: THE NETHERLA… | `.art-callouts` `.art-product-strip` `.art-split-lists` | [`wakuli`](https://packhelp.com/case-study/wakuli/) |
| 2023-11-16 | Mushroom-based Packaging: IKEA's Concept of A Sustainable Supply Chai… | — | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`ikea-global-supply-chain-case-study`](https://packhelp.com/case-study/ikea-global-supply-chain-case-study/) |
| 2023-11-16 | Biotika - a Polish D2C producer of candles - improved their shipping … | Industry: Candles, Localization: Poland, Business M… | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`how-the-d2c-producer-of-candles-biotika-improved-shipping-strategy`](https://packhelp.com/case-study/how-the-d2c-producer-of-candles-biotika-improved-shipping-strategy/) |
| 2023-11-16 | How Hemp Juice stayed true to its eco-mission and lowered its packagi… | Industry: CBD oils, Location: Warsaw, Poland, Busin… | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`hemp-juice-dietary-supplement-packaging`](https://packhelp.com/case-study/hemp-juice-dietary-supplement-packaging/) |
| 2023-11-16 | How Your KAYA kept it real and their cash flow in check with a reusab… | Industry: HEALTH & BEAUTY, Location: WARSAW, POLAND… | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`your-kaya-multiple-use-gift-set-box`](https://packhelp.com/case-study/your-kaya-multiple-use-gift-set-box/) |
| 2023-11-16 | How the merging of Packhelp's quality and Inuru's tech led to a futur… | Industry: BEVERAGES, Location: FRANCE | `.art-highlights` `.art-product-strip` | [`cattier-label-redesign`](https://packhelp.com/case-study/cattier-label-redesign/) |
| 2023-11-16 | Developing insulated shipping boxes | — | `.art-callouts` `.art-highlights` `.art-split-lists` | [`insulated-shipping-boxes-psi-bufet-case-study`](https://packhelp.com/case-study/insulated-shipping-boxes-psi-bufet-case-study/) |
| 2023-11-16 | How the telecom start-up Raylo decreased their packaging costs by 11% | Industry: TELECOMS, Location: LONDON, Recent Fundin… | `.art-callouts` `.art-highlights` `.art-product-strip` `.art-split-lists` | [`raylo-packaging-optimization`](https://packhelp.com/case-study/raylo-packaging-optimization/) |
| 2023-11-16 | Lovato stayed on top of bumper growth and slashed their average unit … | Industry: Scented Candles, Location: Cork, Ireland,… | `.art-callouts` `.art-highlights` `.art-split-lists` | [`lovato-candle-packaging`](https://packhelp.com/case-study/lovato-candle-packaging/) |

**14 z 24 ma jakiekolwiek pola faktograficzne, a tylko 6 ma komplet trzech**
(Industry/Location/Business model) — reszta ma je puste już na live, więc przy budowie `.art-meta` dla nich trzeba albo zejść do trzech pól, albo
pominąć aside z metadanymi.

### Martwe kafle na `case-studies.html` mają już prawdziwe cele

Hub ma 8 kafli z `href="#"`, których tytuły pochodzą z tego samego listingu. Mapowanie
1:1, do podmiany przy budowie:

| Kafel na hubie | Prawdziwy wpis |
|---|---|
| Beztrosko | [`/case-study/how-beztrosko-used-limited-edition-packaging-to-fair-boost-sales-by-almost-80/`](https://packhelp.com/case-study/how-beztrosko-used-limited-edition-packaging-to-fair-boost-sales-by-almost-80/) |
| Pao Gin | [`/case-study/hot-stamped-packaging/`](https://packhelp.com/case-study/hot-stamped-packaging/) |
| Sord | [`/case-study/sord-cosmetics-packaging/`](https://packhelp.com/case-study/sord-cosmetics-packaging/) |
| HAYB Advent calendar | [`/case-study/advent-calendar/`](https://packhelp.com/case-study/advent-calendar/) |
| Passione (ice cream) | [`/case-study/custom-ice-cream-cups-for-passione/`](https://packhelp.com/case-study/custom-ice-cream-cups-for-passione/) |
| Douze | [`/case-study/douze-drink/`](https://packhelp.com/case-study/douze-drink/) |
| Raylo | [`/case-study/raylo-packaging-optimization/`](https://packhelp.com/case-study/raylo-packaging-optimization/) |
| Xlash | [`/case-study/xlash-cosmetics-packaging/`](https://packhelp.com/case-study/xlash-cosmetics-packaging/) |

---

## Gdzie to już jest podlinkowane

| Strona w repo | Co pokazuje |
|---|---|
| [`case-studies.html`](case-studies.html) | komplet 24 case studies + Oase — **każdy prowadzi do pełnej strony w repo** |
| `case-study-<slug>.html` | 24 zbudowanych case studies z przeniesioną treścią i modułami |
| [`blog.html`](blog.html) | 12 wpisów: najnowszy jako wyróżniony, 11 w siatce. **Każdy prowadzi do pełnej strony w repo** (`blog-<slug>.html`) |
| `blog-<slug>.html` | 12 zbudowanych wpisów z przeniesioną treścią — akapity, nagłówki, listy, zdjęcia i linki wewnętrzne z żywych postów |

Blog i case studies są już w całości lokalne — żadna karta na tych dwóch hubach nie
wychodzi na packhelp.com. Mechanizm kart wychodzących (`target="_blank" rel="noopener"` +
marker `↗` z `.hub-card-ext`) zostaje w `listing.css` na przyszłość, np. dla inspirations. Wzorzec obu hubów opisuje guideline §5.11, style siedzą w `listing.css`.

**Inspirations to jedyny typ bez własnego listingu i bez zbudowanych stron** — 12 zmapowanych
wpisów czeka, a w nawigacji pozycja „Inspirations" nadal prowadzi do `#`. Jedyny zbudowany
wpis tego typu to `inspiration-oase.html`, podpięty pod hub case studies.

---

## Jak to mapuje się na nasz szablon

| Pole z live | Trafia w |
|---|---|
| `og:title` / H1 | `.art-title` |
| `meta description` | `.art-subheading` (blog, inspiration) albo opis na kaflu listingu |
| `og:image` | `.art-hero-media` oraz miniatura w `.art-related` / listingu |
| autor + data + czas czytania (tylko blog) | `.art-byline` |
| Industry / Location / Business model (tylko case study) | `.art-meta` w `.art-aside` |
| `content-bnw` (Challenge/Solution) | `.art-split-lists` |
| `display-hgl` | `.art-highlights` |
| `grid-ftr` / `content-grd` | `.art-callouts` |
| `content-csn` | `.art-product-strip` |
| nagłówki H2 wpisu | `.art-heading` (pigułka) + `.art-statement` pod nią |

**Czego live nie daje i trzeba napisać samemu:** zdania-nagłówka pod pigułką sekcji
(§5.9 wymaga go przy każdym `.art-heading`) — na live H2 są zwykłymi nagłówkami, więc przy
przenoszeniu treści pierwsze zdanie sekcji trzeba podnieść, tak jak zrobiliśmy to na
`inspiration-oase.html` i `blog-mailer-box-personalisation.html`.

