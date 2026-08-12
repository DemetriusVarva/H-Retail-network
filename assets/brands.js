/* H-Retail-network — brand configuration.
   One object per firm, keyed by GET-param id (?id=kazar).
   Colours come from the `branding` sheet; hero/message are pain-aware.
   `feature` drives the personalised "Twoja sprawa" card + Reklamacja screen. */
window.BRANDS = {
  ochnik: {
    name: "OCHNIK", domain: "ochnik.com", loyalty: "Klub Klienta",
    primary: "#BA1D2F", accent: "#1A1A1A", dark: "#111111", neutral: "#E5E7EB", ctaText: "#FFFFFF",
    font: "Inter",
    hero: "Odzież, bagaż i akcesoria najwyższej jakości",
    message: "Klub Klienta, punkty i pełna oferta premium — w aplikacji.",
    cta: "Dołącz do Klubu", tier: "Premium", points: 1840, nextTier: "VIP", toNext: 660,
    feature: { type: "reklamacja", code: "RMA-2041", title: "Reklamacja — kurtka puchowa",
      status: "W ocenie", sla: "Termin ustawowy: 8 dni", pct: 55,
      desc: "Zdjęcia dodane. Każdy etap i decyzja — przejrzyste, bez maili w próżnię." }
  },
  duka: {
    name: "DUKA", domain: "duka.com", loyalty: "DUKA Klub",
    primary: "#C21B26", accent: "#332222", dark: "#262020", neutral: "#E8E8E8", ctaText: "#FFFFFF",
    font: "Montserrat",
    hero: "Wyjątkowe produkty do domu i kuchni",
    message: "Zwroty, status zamówienia i pomoc — bez dzwonienia na infolinię.",
    cta: "Sprawdź kolekcję", tier: "Srebrny", points: 640, nextTier: "Złoty", toNext: 360,
    feature: { type: "zwrot", code: "ZW-1187", title: "Zwrot — serwis obiadowy NORD",
      status: "Środki w drodze", sla: "Zwrot: 2 dni robocze", pct: 80,
      desc: "Pełny status zwrotu i płatności tutaj — infolinia niepotrzebna." }
  },
  lancerto: {
    name: "LANCERTO", domain: "lancerto.com", loyalty: "Lancerto Club",
    primary: "#1A1A1A", accent: "#C8102E", dark: "#111111", neutral: "#D6D7D8", ctaText: "#FFFFFF",
    font: "Albert Sans",
    hero: "Życie to podróż na własnych zasadach",
    message: "Moda męska szyta na miarę — i klub, który Cię docenia.",
    cta: "Zapisz się", tier: "Club", points: 1220, nextTier: "Club+", toNext: 780,
    feature: { type: "reklamacja", code: "RMA-3310", title: "Reklamacja — golf, stójka",
      status: "Przyjęta", sla: "Termin ustawowy: 11 dni", pct: 40,
      desc: "Zgłoszenie z metryką produktu — bez tłumaczeń przez telefon." }
  },
  giacomo: {
    name: "Giacomo Conti", domain: "giacomo.pl", loyalty: "Giacomo Club",
    primary: "#2F3C4C", accent: "#C79A3B", dark: "#212529", neutral: "#E2E6E9", ctaText: "#FFFFFF",
    font: "Open Sans",
    hero: "Elegancka moda męska od Giacomo Conti",
    message: "Rezerwuj w salonie i śledź zamówienie — koniec z anulacjami.",
    cta: "Zapisz się do newslettera", tier: "Silver", points: 910, nextTier: "Gold", toNext: 590,
    feature: { type: "rezerwacja", code: "REZ-7742", title: "Rezerwacja w salonie — marynarka",
      status: "Potwierdzony stan", sla: "Odbiór do: 3 dni", pct: 100,
      desc: "Realny stan magazynu potwierdzony — zamówienie nie zniknie po dniach." }
  },
  solar: {
    name: "SOLAR", domain: "solar.com.pl", loyalty: "KLUB SOLAR",
    primary: "#1A1818", accent: "#E0334A", dark: "#000000", neutral: "#E6E5E5", ctaText: "#FFFFFF",
    font: "Montserrat",
    hero: "Polska marka modowa premium",
    message: "KLUB SOLAR i SOLAREPAIR — korzyści i naprawy w aplikacji.",
    cta: "Dołącz do Klubu SOLAR", tier: "SOLAR", points: 1550, nextTier: "SOLAR+", toNext: 450,
    feature: { type: "reklamacja", code: "SR-0912", title: "SOLAREPAIR — naprawa spódnicy",
      status: "W realizacji", sla: "Gotowe za: 6 dni", pct: 60,
      desc: "Zgłoszenie naprawy zamiast odrzuconej reklamacji — status na żywo." }
  },
  diverse: {
    name: "DIVERSE", domain: "diverse.pl", loyalty: "Diverse Club",
    primary: "#DC2626", accent: "#0D0D0D", dark: "#0D0D0D", neutral: "#EEEEEE", ctaText: "#FFFFFF",
    font: "Inter",
    hero: "Polska marka casual & streetwear",
    message: "Realny stan magazynu i szybkie zwroty — bez anulowanych zamówień.",
    cta: "Dołącz do Diverse", tier: "Member", points: 730, nextTier: "Insider", toNext: 270,
    feature: { type: "rezerwacja", code: "ZAM-5521", title: "Zamówienie — bluza + spodnie",
      status: "Stan potwierdzony", sla: "Wysyłka: dziś", pct: 100,
      desc: "Dostępność potwierdzona w czasie rzeczywistym — bez faktur korygujących." }
  },
  venezia: {
    name: "VENEZIA", domain: "venezia.pl", loyalty: "Klub VENEZIA",
    primary: "#1A1A1A", accent: "#B8946C", dark: "#212121", neutral: "#D2BCA4", ctaText: "#1A1A1A",
    font: "Montserrat",
    hero: "Elegancja, klasyka i minimalizm",
    message: "Karta stałego klienta, reklamacje i zwroty — w jednej aplikacji.",
    cta: "Dołącz do klubu VENEZIA", tier: "Klasyk", points: 980, nextTier: "Prestige", toNext: 520,
    feature: { type: "reklamacja", code: "RMA-2280", title: "Reklamacja — kozaki zimowe",
      status: "W ocenie", sla: "Termin ustawowy: 9 dni", pct: 45,
      desc: "Zgłoszenie ze zdjęciami i dowodem zakupu — decyzja z uzasadnieniem." }
  },
  kazar: {
    name: "KAZAR", domain: "kazar.com", loyalty: "#KAZARLOVERS",
    primary: "#222529", accent: "#8C0100", dark: "#1E1E1E", neutral: "#F2F0EC", ctaText: "#FFFFFF",
    font: "Manrope",
    hero: "Buty, torebki i akcesoria skórzane premium",
    message: "#KAZARLOVERS — przejrzyste reklamacje i kontakt bez czekania.",
    cta: "Dołącz do świata Kazar", tier: "Gold", points: 2140, nextTier: "Platinum", toNext: 860,
    feature: { type: "reklamacja", code: "RMA-1902", title: "Reklamacja — pasek skórzany",
      status: "W ocenie", sla: "Termin ustawowy: 7 dni", pct: 50,
      desc: "Pełna specyfikacja materiału w zgłoszeniu — koniec sporów o skórę." }
  },
  wojas: {
    name: "WOJAS", domain: "wojas.pl", loyalty: "Premium Club",
    primary: "#D80000", accent: "#11265D", dark: "#111111", neutral: "#EEEEEE", ctaText: "#FFFFFF",
    font: "Inter",
    hero: "Obuwie skórzane — polski producent od 1990",
    message: "Premium Club, status reklamacji i zwrot w salonie — w telefonie.",
    cta: "Odbierz 10% rabatu", tier: "Premium", points: 1360, nextTier: "Premium+", toNext: 640,
    feature: { type: "reklamacja", code: "RMA-4471", title: "Reklamacja — obcas, model Tatry",
      status: "Przyjęta", sla: "Termin ustawowy: 10 dni", pct: 35,
      desc: "Zdjęcia wady + status. Zwrot do salonu jednym kliknięciem." }
  },
  monnari: {
    name: "MONNARI", domain: "monnari.com.pl", loyalty: "Monnari Club",
    primary: "#E41F26", accent: "#343A40", dark: "#232323", neutral: "#E9ECEF", ctaText: "#FFFFFF",
    font: "Raleway",
    hero: "Jesteśmy różne, jesteśmy piękne",
    message: "Jeden klub dla Monnari, Quiosque, Femestage i 51015 — i realny kontakt.",
    cta: "Zapisz się i odbierz rabat", tier: "Club", points: 1180, nextTier: "Club VIP", toNext: 820,
    feature: { type: "reklamacja", code: "RMA-2765", title: "Reklamacja — torebka, przetarcia",
      status: "W ocenie", sla: "Termin ustawowy: 9 dni", pct: 50,
      desc: "Czat zamiast infolinii — odpowiedź bez 45 minut oczekiwania." }
  },
  rylko: {
    name: "RYŁKO", domain: "rylko.com", loyalty: "Ryłko Club",
    primary: "#1F1F1F", accent: "#8A6D3B", dark: "#333333", neutral: "#E3E3E3", ctaText: "#FFFFFF",
    font: "Poppins",
    hero: "Skórzane obuwie i galanteria — 60+ lat tradycji",
    message: "Reklamacja z terminem i statusem — bez czekania po ustawowym terminie.",
    cta: "Dołącz do klubu", tier: "Klasyk", points: 1020, nextTier: "Prestige", toNext: 480,
    feature: { type: "reklamacja", code: "RMA-1188", title: "Reklamacja — mokasyny, farbowanie",
      status: "W ocenie", sla: "Termin ustawowy: 6 dni", pct: 65,
      desc: "Licznik terminu ustawowego widoczny — decyzja zawsze w czasie." }
  },
  kubota: {
    name: "KUBOTA", domain: "kubotastore.pl", loyalty: "#kubotafriends",
    primary: "#2060D4", accent: "#CF2E2E", dark: "#030A15", neutral: "#E9E6ED", ctaText: "#FFFFFF",
    font: "Inter",
    hero: "Kultowa polska marka uwielbiana przez Polaków",
    message: "#kubotafriends — personalizacja, drop-y i status zamówienia w apce.",
    cta: "Dołącz do #kubotafriends", tier: "Friend", points: 760, nextTier: "Superfan", toNext: 240,
    feature: { type: "drop", code: "DROP-08", title: "Drop: nowe klapki — Summer '26",
      status: "Powiadomimy Cię", sla: "Start: piątek 10:00", pct: 100,
      desc: "Zapis na drop + personalizacja z logo. Push zamiast szukania." }
  },
  homeyou: {
    name: "home&you", domain: "home-you.com", loyalty: "Karta Stałego Klienta",
    primary: "#141414", accent: "#BB0029", dark: "#141414", neutral: "#F4F4F4", ctaText: "#FFFFFF",
    font: "Montserrat",
    hero: "Najpiękniejsze dodatki do domu i mieszkania",
    message: "Karta stałego klienta, darmowe zwroty i karty podarunkowe w apce.",
    cta: "Odbierz 10% rabatu", tier: "Klub", points: 890, nextTier: "Klub+", toNext: 610,
    feature: { type: "zwrot", code: "ZW-2210", title: "Zwrot — obraz dekoracyjny",
      status: "Zaakceptowany", sla: "Zwrot: 3 dni robocze", pct: 75,
      desc: "Darmowa etykieta zwrotna + saldo karty podarunkowej w profilu." }
  },
  wittchen: {
    name: "WITTCHEN", domain: "wittchen.com", loyalty: "Wittchen Club",
    primary: "#121212", accent: "#B49759", dark: "#121212", neutral: "#E5EBEE", ctaText: "#121212",
    font: "Noto Sans",
    hero: "Klasyka w nowoczesnym wydaniu",
    message: "350 000+ opinii, gwarancja i klub — i lepszy serwis salonowy.",
    cta: "Zapisz się i zyskaj -10%", tier: "Gold", points: 1720, nextTier: "Platinum", toNext: 780,
    feature: { type: "gwarancja", code: "GW-5540", title: "Rejestracja gwarancji — walizka",
      status: "Aktywna", sla: "Gwarancja: 5 lat", pct: 100,
      desc: "Gwarancja i historia w telefonie — obsługa zna Cię, zanim wejdziesz." }
  },
  homla: {
    name: "HOMLA", domain: "homla.com.pl", loyalty: "Program Homla",
    primary: "#098D78", accent: "#866A5C", dark: "#2A2E31", neutral: "#F4F4F4", ctaText: "#FFFFFF",
    font: "Lato",
    hero: "Stwórz salon, który otula spokojem",
    message: "Spójne ceny online i w salonie, program lojalnościowy i szybka pomoc.",
    cta: "Dołącz do programu", tier: "Dom", points: 640, nextTier: "Dom+", toNext: 360,
    feature: { type: "omnichannel", code: "ZAM-3391", title: "Odbiór w salonie — zestaw ceramiki",
      status: "Gotowe do odbioru", sla: "Salon: Kielce, al. Solidarności", pct: 100,
      desc: "Ta sama cena i konto online i w salonie — jeden spójny Homla." }
  },
  _generic: {
    name: "Twoja Marka", domain: "", loyalty: "Klub Lojalnościowy",
    primary: "#2B2D42", accent: "#EF8354", dark: "#1B1C2A", neutral: "#EDEDED", ctaText: "#FFFFFF",
    font: "Inter",
    hero: "Twój sklep i klub — teraz w telefonie",
    message: "Lojalność, zwroty, reklamacje i status zamówienia — w jednej aplikacji.",
    cta: "Dołącz do Klubu", tier: "Klub", points: 1000, nextTier: "Klub+", toNext: 500,
    feature: { type: "reklamacja", code: "RMA-0001", title: "Reklamacja — z pełnym statusem",
      status: "W ocenie", sla: "Termin ustawowy: 9 dni", pct: 50,
      desc: "Zdjęcia, licznik terminu i decyzja z uzasadnieniem — pełna przejrzystość." }
  }
};
