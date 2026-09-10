# Packhelp Redesign — Sitemap

Ten dokument mapuje strony tego repo na realną strukturę **packhelp.co.uk**
(stan na 2026-07-31, wyciągnięte z live nawigacji/megamenu/stopki). Cel: gdy
dostaję prompt o nową stronę, sprawdzam tu, czy ma odpowiednik na żywym
sajcie (→ adaptuję realne copy/strukturę) czy jest to koncepcja specyficzna
dla redesignu (→ wymyślam sam, zgodnie z `CLAUDE.md`).

Status: **Built** (istnieje w repo) / **Planned** (jest na live sajcie, nie
zbudowane jeszcze) / **New concept** (istnieje w repo, ale nie ma
bezpośredniego odpowiednika na packhelp.co.uk — redesign świadomie
konsoliduje/upraszcza).

---

## 1. Zbudowane strony i ich odpowiedniki na live sajcie

| Plik w repo | Live URL / odpowiednik | Uwagi |
|---|---|---|
| `index.html` | `/` | Strona główna |
| `packaging.html` | `/packaging/` | Katalog/shop kategorii opakowań |
| `sample-packs.html` | `/packaging/samples/`, `/app/sample-packs/` | Wybór próbek, cart-flow |
| `deals.html` | `/deals/` | Karuzela/strona promocji |
| `case-studies.html` | `/case-studies/` | Lista case studies |
| `case-study-hemp-juice.html` | `/case-study/hemp-juice-dietary-supplement-packaging/` | Pojedynczy case study |
| `case-study-oase.html` | `/inspiration/oase-hair-vitamins/` | Pojedynczy case study |
| `contact.html` | `/contact/` | Kontakt |
| `get-a-quote.html` | `/packhelp-brief-v2/` | "Brief"/wycena — na live sajcie to formularz brief, nie osobny "get a quote" |
| `build-your-box.html` | — | **New concept**, patrz sekcja 3 |
| `industries.html` | `/packaging/?industry=X` (filtr, nie osobna strona) | **New concept**, patrz sekcja 3 |
| `press.html` | `/press/` | Press kit, wzmianki medialne wg lat, fakty firmowe (zbudowane 2026-07-31, copy zaadaptowane z live strony) |
| `impressum.html` | `/impressum/` | Dane firmy, adres, kontakt, godziny pracy — proste karty label/value, bez zdjęć (zbudowane 2026-07-31, copy zaadaptowane z live strony) |
| `custom-mailer-box.html` | `/p/custom-mailer-box/custom/` | Pierwsza strona produktowa (PDP) w repo — hero z opcjami (material-card swatches, print/production pills, quantity ladder z build-your-box.html), specyfikacja, rich description, showcase gallery, FAQ (8 realnych pytań), cross-sell. Copy wyciągnięte z żywego `packhelp.com/en-us/p/custom-mailer-box/custom/` (przez jina.ai reader — packhelp.co.uk geo-redirectuje na PL mirror przy zapytaniach z tej sieci) + PL JSON (`zapakuj.to`, ProductPageApp astro-island props) przetłumaczony dla brakujących sekcji (FAQ, rich description). Wszystkie zdjęcia to `.ph-media` placeholdery na wyraźną prośbę użytkownika, mimo że realne CDN URL-e były dostępne. CTA-y kierują do `build-your-box.html` (konfigurator) zamiast duplikować jego logikę (zbudowane 2026-08-03). |
| `sample-pack.html` | — | **New concept**, patrz sekcja 3 |
| `large-companies.html` | `/large-companies/` | Landing dla klientów enterprise/kontraktowych. Strona istnieje na live sajcie, ale copy **nie** jest z niej zaadaptowane — powstało z zewnętrznej makiety (Claude artifact „Sales Touch") dostarczonej przez użytkownika i przełożonej na nasz design system, tak samo jak `q4-packaging.html`. Patrz sekcja 3 po listę decyzji translacyjnych. |

## 2. Planned — realne strony/sekcje z packhelp.co.uk, jeszcze nie zbudowane

Uporządkowane wg głównego menu. Gdy dostanę prompt pasujący do jednej z tych
pozycji, traktuję to jako "ma żywy odpowiednik" — szukam realnego copy na
podanym URL zamiast wymyślać od zera.

### Packaging (katalog, `/packaging/...`)
- Boxes: Mailer Boxes, Shipping Boxes, Product Boxes (Folding Cartons, Rigid
  Boxes) — `/packaging/boxes/...`
- Packaging Tubes: Tube Boxes, Mailing Tubes — `/packaging/packaging-tubes/...`
- Mailing Bags: Poly Mailers, Paper Mailing Bags — `/packaging/mailers/...`
- Product Bags: Zip Lock Bags, Drawstring Bags — `/packaging/product-bags/...`
- Carrier Bags: Paper Bags, Cotton Carrier Bags — `/packaging/bags/...`
- Accessories: Tissue & Wrapping Paper, Fillers, Tapes, Labels, Stickers,
  Other — `/packaging/packaging-accessories/...`
- Pouches — `/packaging/packaging-pouches/`
- Envelopes: Cardboard, Padded — `/packaging/envelopes/...`
- Food Packaging: Pizza Boxes, Cups and Cup Accessories —
  `/packaging/food-packaging/...`
- Containers: Bottles, Jars — `/packaging/containers/...`
- Bundles/Sets — `/packaging/sets/`

### Merchandise (`/merchandise/...`) — cała gałąź jeszcze nie zbudowana w repo
- Clothing (T-shirts, Hoodies, Sweatshirts, Jackets, Shirts, Fleece, Vests,
  Headwear)
- Office Supplies (Pens, Notebooks)
- Travel Accessories (Sunglasses, Towels)
- Tech Accessories (Powerbanks)
- Drinkware (Bottles, Tumblers, Mugs)
- Home Accessories (Candles)
- Bags (Tote Bags, Backpacks, Sports Bags, Laptop Pouches)
- Merchandise Packaging, Sets
- Named bundles: Onboarding Workday Starter Pack, Event Gift Pack, Onboarding
  Essentials Pack (`/b/<slug>/custom/`)

### Solutions / platforma (`/...`)
- Small and Medium Companies — `/small-medium-companies/`
- Marketplaces — `/marketplaces/`
- 3PL & Fulfillments — `/3pl-fullfilment/`
- Design Services — `/design-services/`
- Sourcing Services — `/sourcing-services/`
- Warehousing Services — `/warehousing-services/`
- Flexible Payments — `/payments/`

### Inne planned
- Packaging Ideas / Inspirations — `/packaging-ideas/`
- Design Showcase / Packaging Templates — `/design-showcase/`
- Blog — `/blog/`
- Help Center — `/help/` (+ podstrony typu return policy)
- Sustainability Hub — `/sustainability-2/`, Progress Reports, Supply Chain,
  Eco Badge
- Wholesale Packaging — `/large-companies/` (alias, zbudowane jako `large-companies.html`)
- Sign In — `/auth/login/`
- Pozostałe case studies: Kuyichi, Psi Bufet, Your KAYA, Fluus, XLASH
- Prawne: Terms of Service, Privacy Policy, Whistleblowing Policy

## 3. New concept — strony redesignu bez odpowiednika na live sajcie

- **`build-your-box.html`** — dedykowany, pełnoekranowy konfigurator z 3D
  preview. Live sajt robi customizację inline na stronie produktu (overlay),
  nie jako osobny multi-step flow. To świadoma decyzja redesignu, nie błąd
  mapowania — nie szukaj dla tej strony "oryginału" do adaptacji.
- **`industries.html`** — live sajt nie ma osobnej strony "industries", tylko
  filtruje katalog przez `?industry=X` (Apparel & Fashion, E-commerce,
  Electronics, Food & Drinks, Gifting, Health & Beauty, Home & Décor, HR,
  Marketing & PR, Retail). Redesign konsoliduje to w dedykowany hub — przy
  rozbudowie tej strony trzymaj się tej listy branż jako źródła prawdy dla
  nazw/kolejności.
- **`q4-packaging.html`** — kampanijny landing page "lock in Q4/Black
  Friday–Christmas packaging now", zbudowany na bazie zewnętrznego
  mobile-first wireframe (Claude artifact) dostarczonego przez użytkownika,
  przełożony na nasz design system. Nie ma odpowiednika na packhelp.co.uk —
  jednorazowy brief/lead-gen flow, nie katalogowa podstrona. Nawigacja:
  wariant uproszczony (`#ph-nav-simple`), bez breadcrumb, bez pełnej
  `.site-footer` (własna, lekka stopka logo+tagline+godziny+CTA, ten sam
  wzorzec co `get-a-quote.html`/`build-your-box.html` dla stron
  zadaniowych). Jedyna ciemna sekcja na stronie to case study Lovato
  Candles (pkt 2.1 guideline — "dokładnie jedna sekcja z ciemnym tłem");
  oryginalny wireframe miał też nasyconą niebieską kartę-callout w sekcji
  ryzyka, przełożoną na jasny `--color-bg-accent-subtle`, żeby nie złamać
  tej zasady. Layout celowo wąski (`max-width: 720px`) nawet na desktopie —
  strona zoptymalizowana pod mobile (95% ruchu wg brief), nie pod pełną
  szerokość 1280px.
- **`large-companies.html`** — landing dla klientów kontraktowych/
  enterprise ("Sales Touch"). Ma odpowiednik na live sajcie
  (`/large-companies/`), ale zbudowany został z zewnętrznej makiety
  dostarczonej przez użytkownika, nie z live copy — dlatego decyzje
  translacyjne są tu warte zapisania, tak jak przy `q4-packaging.html`:
  makieta miała własny system wizualny (kraft + granat, dwa kroje z
  szeryfowym Source Serif, ostre rogi, cztery ciemne sekcje), a strona
  odtwarza jej **strukturę i logikę**, nie jej styl. Konkretnie: jeden krój
  (ABC Favorit), białe tło, jedna ciemna sekcja na całą stronę (pkt 2.1
  guideline) przypisana do case studies — hero, formularz i stopka, które w
  makiecie też były ciemne, wróciły na biel; ilustracje SVG konstrukcji
  opakowań zastąpione prawdziwymi zdjęciami produktów z `assets/packaging/`
  (pkt 2.5); zakładki problemów to `.toggle-switch` z osobną listą per tab
  (pkt 5.2.1); formularz to trzykrokowa karta kwalifikująca **przed**
  pytaniem o kontakt (wolumen ≤5 000 szt. → miękkie przekierowanie do
  `build-your-box.html`, >50 000 szt./>20 SKU/>3 rynki → kolejka
  priorytetowa) — inna rola niż pełnoekranowy flow `get-a-quote.html`, więc
  osobny komponent, nie duplikat tamtego. Nawigacja: wariant pełny, bo to
  strona ofertowa zachęcająca do eksploracji katalogu, nie zamknięty flow.

  **Stan po przebudowie (2026-09-10)** — powyższy akapit opisuje pierwszą
  wersję i część jego ustaleń już nie obowiązuje. Aktualnie: strona jest
  **ciemna domyślnie**, z przełącznikiem trybu jasnego spod trybika (lokalne
  tokeny w `html:not(.theme-light)`, patrz guideline 5.7) — czyli wyjątek od
  reguły „jedna ciemna sekcja" z pkt 2.1, świadomy i ograniczony do tej
  strony. Formularz jest **jednokrokowy**, wtopiony w sekcję FAQ. Dwie
  sekcje mają po trzy warianty układu przełączane trybikiem
  („How we solve it": rows / pinned scroll / split list; „Sound familiar?":
  tabela / taby / split grid), domyślnie split list i split grid. Doszły:
  animowana sekwencja wejścia (ekran z globusem cobe jako opcja, domyślnie
  wyłączona), dwa pełnoszerokościowe pasy ze zdjęciem i paralaksą, panel
  administracyjny **odwzorowany kodem** zamiast zrzutu PNG (cztery zakładki,
  scenka z kursorem) oraz cztery karty-makiety nakładane na zdjęcia w liście
  split. Wzorce opisane w guideline 5.7, snippety w `COMPONENT_SNIPPETS.md`
  5.7, pułapki implementacyjne w guideline 10.
- **`sample-pack.html`** — dedykowana strona produktowa (PDP) dla "Sample
  Pack" — jednego, uniwersalnego produktu próbek obejmującego wszystkie
  kategorie (materiały/print/wykończenia), a nie osobnej strony próbek per
  produkt jak na live sajcie (`/p/<product>/samples/`). Zbudowana na
  podstawie zrzutu ekranu takiej właśnie strony ("Custom Mailer Box
  samples") dostarczonego przez użytkownika, ale przełożona 1:1 na
  komponenty i klasy `.pp-*` z `product_page.html` (breadcrumb, sticky
  gallery, `.pp-usps`, `.pp-cta`/`.pp-info-rows`), żeby strona layoutowo
  czytała się jako część tej samej rodziny PDP, zamiast kopiować własny
  system komponentów ze zrzutu. Jedyny nowy komponent to `.pp-sample-row`
  (thumbnail/collage + tytuł + opis + przycisk "Edit") — promować do
  `components.css`, jeśli pojawi się druga strona, która go potrzebuje.
  Cena i limit próbek (£4.50/próbka, do 8 sztuk) wzięte wprost z
  istniejącego `sample-packs.html` (ta sama zmienna `UNIT_PRICE`/
  `MAX_SAMPLES` w jego skrypcie) — ten produkt nie ma stałej ceny, więc
  CTA "Choose your samples" prowadzi do `sample-packs.html` (tam żyje
  faktyczny wybór próbek/koszyk), zamiast duplikować logikę wyboru czy
  udawać fałszywy "Add to cart" z niewłaściwą, stałą ceną.

## 4. Jak z tego korzystać przy nowym prompcie

1. Sprawdź, czy proszona strona/sekcja pasuje do wiersza w sekcji 1 (już
   zbudowana — edytuj, nie duplikuj) albo sekcji 2 (Planned — ma żywy
   odpowiednik, więc najpierw sprawdź treść pod podanym URL-em na
   packhelp.co.uk i adaptuj).
2. Jeśli nic nie pasuje — to nowa koncepcja jak w sekcji 3. Wymyśl copy sam
   (ton: sekcja 2.4 `PAGE_BUILDING_GUIDELINE.md`), zbuduj z komponentów z
   `COMPONENT_SNIPPETS.md`, i dopisz wiersz do tego pliku, żeby mapa
   zostawała aktualna.
