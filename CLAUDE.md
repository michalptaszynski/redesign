# Packhelp Redesign — instrukcje projektu

Przed zbudowaniem lub edycją jakiejkolwiek strony/sekcji w tym repo przeczytaj
[`PAGE_BUILDING_GUIDELINE.md`](PAGE_BUILDING_GUIDELINE.md). Mapuje on intencję
("chcę sekcję X", "potrzebuję kroku konfiguratora do wyboru Y") na konkretny
komponent, wariant przycisku, wzorzec karty i odstęp między sekcjami — na
podstawie analizy `index.html`, `build-your-box.html`, `packaging.html` i
`sample-packs.html`.

Trzymaj się kanonicznych rekomendacji z tego pliku (m.in. sekcja 8 — znane
niespójności prototypu i ich zalecane rozwiązanie, np. rozmiar H2 czy domyślna
widoczność `.section-badge`) zamiast bezrefleksyjnie kopiować niespójności ze
starych sekcji do nowych.

To static HTML/CSS/JS prototype — bez build toolingu. `tokens.css`, `base.css`,
`components.css` to warstwa design tokenów/atomów wspólna dla wszystkich stron;
layout specyficzny dla sekcji zostaje inline w `<style>` danej strony, dopóki nie
powtórzy się na więcej niż jednej stronie (wtedy dopiero awansuje do
`components.css`).

**Nawigacja to jeden komponent — `nav-header.js` — nigdy nie buduj jej od nowa
inline na stronie.** Każda strona, która potrzebuje topbara, dostaje wyłącznie
placeholder(y) + `<script src="nav-header.js"></script>`; markup i style
nawigacji edytujesz tylko w `nav-header.js` / `components.css` (sekcja "Top
nav"), zmiana propaguje się automatycznie wszędzie. Ma dwa warianty:

- **Pełna** (sticky bar + nav-wrapper z megamenu, search, CTA) — na
  `index.html`, `packaging.html`, `build-your-box.html`, `sample-packs.html`.
  Placeholdery: `<div id="ph-sticky-bar"></div>` i `<div id="ph-nav-wrapper"></div>`.
- **Uproszczona** (samo wycentrowane logo, bez linków/megamenu) — na stronach
  typu "flow"/checkout, gdzie nawigacja ma nie rozpraszać, np. `get-a-quote.html`.
  Placeholder: `<div id="ph-nav-simple"></div>`.

Nowa strona dostaje jeden z tych wariantów (nigdy oba naraz, nigdy własny,
ręcznie sklejony header) — wybór zależy od tego, czy strona jest
marketingowa/katalogowa (pełna) czy zadaniowa/flow (uproszczona).
