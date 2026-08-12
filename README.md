# H-Retail-network — brandowalny prototyp aplikacji retail

Klikalny prototyp mobilnej aplikacji lojalnościowo-serwisowej dla polskich sieci
retail (moda, obuwie, akcesoria, home). Jeden kod, **dynamiczny branding** przez
parametr GET.

## Jak to działa

Otwórz `index.html?id=<firma>` — motyw (kolory, font, hero, CTA) ładuje się z
`assets/brands.js`. Nieznane / puste `id` → wariant **generic**.

```
…/?id=kazar     → Kazar (grafit + głęboka czerwień)
…/?id=wojas     → Wojas (czerwień + granat)
…/?id=homla     → Homla (turkus)
…/               → generic
```

## Struktura

| Plik | Rola |
|------|------|
| `index.html` | rama telefonu + przełącznik marki (demo) |
| `assets/brands.js` | konfiguracja marek (15 + generic) |
| `assets/app.js` | silnik motywu + ekrany + nawigacja |
| `assets/styles.css` | styl iOS, sterowany zmiennymi CSS |

Prototyp odpowiada na realne bóle z badania: odrzucone reklamacje (status + SLA),
zepsute zwroty/refundacje, niedostępny kontakt, rozjazd online↔salon.

*Dane demonstracyjne. Appricotsoft — Unison delivery.*
