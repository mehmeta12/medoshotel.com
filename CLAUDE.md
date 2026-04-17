# Medos Hotel Website — Project Context

> **Canlı tutulur:** Her kod değişikliğinden sonra bu dosya güncellenir.  
> Son güncelleme: 2026-04-17

---

## Project Overview

**Live URL:** https://www.medoshotel.com  
**Type:** Static HTML website — no CMS, no build pipeline, no package manager, no framework  
**Business:** Medos Beach Hotel — family-friendly beachfront hotel in Güzelçamlı, Kuşadası, Aydın, Turkey  
**Target Audience:** Turkish and international tourists (Kuşadası / Ephesus region)

---

## Technology Stack

| Layer | Technology |
|---|---|
| Markup | Static HTML5 |
| Styling | Custom CSS — `css/style.css` + `css/additions.css` |
| JS | Vanilla JS — `js/i18n.js`, `js/layout.js`, `js/main.js`, `js/chatbot.js` |
| Analytics | Google Tag Manager (`GTM-WHNJZ96W`) |
| Fonts | Google Fonts — **Kanit** (300/400/500/600/700) |
| Hosting | Static file serving |
| Languages | Turkish (primary), English |

---

## Brand Identity

| Token | Value |
|---|---|
| Primary color | `#00b1c9` (teal) — Pantone 3125 C |
| Secondary color | `#13508b` (navy blue) — Pantone 7686 C |
| CSS vars | `--clr-primary`, `--clr-secondary` |
| Main font | **Kanit** (Google Fonts) — headings + body |
| Logo | `img/logo.png` — circular teal "M" + "medos HOTEL" wordmark |
| Logo (white) | `img/logo-white.png` — used in footer |
| Slogan TR | "HER MEVSİM SİZİNLE" |
| Slogan EN | "FOR YOUR SEASONS" |
| Tone | Calm, nature-focused, family-friendly |
| Social | `@MedosHotel` — Facebook, Instagram, YouTube |

---

## Site Structure

```
/                                        → index.html (Home)
/standart_oda.html                       → Standard Room detail
/aile_oda.html                           → Family Room detail
/aile_suit.html                        → Family Suite detail  (URL ≠ name; "Aile Süiti")
/hakkimizda.html                         → About
/iletisim.html                           → Contact
/ulasim.html                             → Getting Here (transport methods + map)
/booking.html                            → Reservation page
/sanal_gezinti.html                      → Virtual Tour (iframe → sanal_tur/index.htm)
/sanal_tur/                              → TDVPlayer tabanlı 360° tur paketi (26 panorama); fonts.css Kanit override içerir; locale/tr.txt etiketler TR; Deluxe Oda gizlendi, Junior Süit → Aile Süiti
/blog.html                               → Blog listing page
/kusadasi-gezilecek-yerler.html          → Blog post 1: Kuşadası'nda Gezilecek Yerler (2026)
/efes_antik_kenti.html                   → Attraction: Ephesus
/meryem_ana_evi.html                     → Attraction: House of Virgin Mary
/sirince_koyu.html                       → Attraction: Şirince Village
/dilek_yarim_adasi_milli_park.html       → Attraction: Dilek Peninsula
/zeus_magarasi.html                      → Attraction: Zeus Cave
/guvercin_ada_kalesi.html                → Attraction: Pigeon Island Castle
/docs/                                   → PDF documents (KVKK, legal forms) — Türkçe karakter yok, URL-encode gerekmez
```

---

## Hotel Capacity

- **49 rooms**, **150 bed** capacity total

---

## Rooms

| Room (TR) | Room (EN) | URL | Key Features |
|---|---|---|---|
| Standart Oda | Standard Room | `standart_oda.html` | 21 m², **2–3 kişi**, deniz/kısmı deniz/Milli Park/bahçe manzarası; TRP hariç 2×tek veya 1×çift yatak; TRP: 1çift+1tek veya 3×tek; klima, makyaj masası, dolaplar, Fransız balkon, banyo+tuvalet, saç kurutma makinesi, uydu TV, minibar, buklet malzemeleri, terlik, laminant zemin |
| Aile Odası | Family Room | `aile_oda.html` | 45 m², **3–5 kişi**, **Bahçe ve Dağ Manzarası**, bağlantılı 2 yatak odası; ana oda: tek/çift yatak, 2. oda: 2–3 tek kişilik yatak; klima, makyaj masası, dolaplar, Fransız balkon, banyo+tuvalet, saç kurutma makinesi, uydu TV, minibar, buklet malzemeleri, terlik, laminant zemin; sidebar görseli: room-2.jpg |
| Aile Süiti | Family Suite | `aile_suit.html` | **75 m²**, **4–6 kişi** (+ek yatakla 7), **Bahçe ve Deniz Manzaralı**, bağlantılı 2 yatak odası + salon; ana oda: tek/çift yatak, 2. oda: 3 tek kişilik yatak; klima, makyaj masası, dolaplar, Fransız balkon, banyo+tuvalet, saç kurutma makinesi, uydu TV, minibar, buklet malzemeleri, terlik |

**Kaldırılan özellikler:** Kasa (tüm oda tiplerinde yok edildi)

---

## Hotel Amenities

`HİZMETLER` bölümü — 8 servis kartı:

| Amenity (TR) | Amenity (EN) | Notlar |
|---|---|---|
| Yetişkin Havuzu | Adult Pool | **70 m² alan, 140 cm derinlik** (2024'te yenilendi) |
| Çocuk Havuzu | Children's Pool | **16 m² alan, 40 cm derinlik** |
| Ücretsiz WiFi | Free WiFi | Tüm otel ve ortak alanlarda |
| Restoran | Restaurant | Lidya Restaurant |
| Bar | Bar | Havuz başı / iskele barı |
| Snack Bar | Snack Bar | Havuz başı atıştırmalık servisi |
| Tekne Turu | Boat Tour | Dilek Yarımadası koylarına rehberli tur |
| Yat Kiralama | Yacht Rental | Dilek Yarımadası koylarına özel yat kiralama |

---

## Nearby Attractions

`Gezilecek Yerler` bölümü — 6 kart (2 satır × 3), hover overlay ile tıklanabilir:

| Attraction (TR) | Mesafe | Detail Page |
|---|---|---|
| Efes Antik Kenti | 30 km | `efes_antik_kenti.html` |
| Meryem Ana Evi | 35 km | `meryem_ana_evi.html` |
| Şirince Köyü | 49 km | `sirince_koyu.html` |
| Dilek Yarımadası Milli Parkı | 2 km | `dilek_yarim_adasi_milli_park.html` |
| Zeus Mağarası | 1 km | `zeus_magarasi.html` |
| Güvercin Ada Kalesi | ~5 km | `guvercin_ada_kalesi.html` |

**Not:** Gezilecek yerler alt sayfalarında `<h2 class="section-title">` başlıkları kaldırıldı.

---

## Homepage Section Order (index.html)

| # | Bölüm | İçerik |
|---|---|---|
| 1 | Hero | Video arka plan (`video/hero.mp4`, poster: `img/hero-poster.jpg`) + "Medos Hotel'e Hoşgeldiniz" + "Oteli Keşfet" butonu (tek buton, Rezervasyon Yap kaldırıldı) |
| 2 | Hakkımızda | Mozaik görsel düzeni (Otel_Genel_1.png ana, Otel_Genel_2.png + Sevgi Plaj.jpg yan) + metin |
| 3 | Odalar | 3 kart tek satırda, büyük görsel, hover overlay "Daha fazlası için tıklayın", tıklama detay sayfasına gider |
| 4 | Hizmetler | 8 servis kartı |
| 5 | Gezilecek Yerler | 6 kart (Odalar ile aynı hover pattern) |
| 6 | Fotoğraf Albümü | 14 görsel slider (Album_0 – Album_15, Album_11 ve Album_12 hariç), ilerleme çubuğu + sayaç |

---

## Navigation (layout.js — buildHeader)

**Desktop sırası:**
1. Ana Sayfa
2. Odalar ▾ (dropdown: Standart Oda, Aile Odası, Aile Süiti)
3. Gezilecek Yerler ▾ (dropdown: 6 çekim noktası)
4. Sanal Tur
5. Hakkımızda
6. Ulaşım
7. İletişim
8. Blog
9. Dil seçici (TR / EN)

**Mobil:** hamburger menü (`.hamburger` → `.top-bun`, `.patty`, `.bottom-bun`)

---

## Footer (layout.js — buildFooter)

3 sütunlu grid, yükseklik belgeler sütununa göre hizalanır:

| Sütun | İçerik |
|---|---|
| 1 — İletişim | Logo, adres, telefon, e-posta, sosyal medya ikonları |
| 2 — Belgeler | 4 PDF bağlantısı (Çerez, Aydınlatma, KVKK, Veri Sahibi) |
| 3 — Belgeler | 4 PDF bağlantısı (Sürdürülebilirlik Raporu, Köşesi, Tür Eylem Planı, Belgesi) |

**Footer altı:** © yıl + logo (sol) · "Decigent tarafından geliştirilmiştir" (sağ)

**Belgeler (docs/ klasörü) — güncel dosya adları (Türkçe karakter yok):**
```
docs/Medos_Hotel_Cerez_Politikasi.pdf
docs/Medos_Hotel_Aydinlatma_Metni.pdf
docs/Medos_Hotel_Kisisel_Verilerin_Korunmasi.pdf
docs/Medos_Hotel_Veri_Sahibi_Basvuru_Formu.pdf
docs/Medos_Hotel_Surdurulebilirlik_Raporu_2025.pdf
docs/Medos_Hotel_Surdurulelebilirlik_Kösesi.pdf  (ö URL-encoded: K%C3%B6sesi)
docs/Aydın_ili_Tur_Eylem_Plan.pdf  (ı URL-encoded: Ayd%C4%B1n)
docs/Medos_Hotel_Surdurulebilirlik_Belgesi.pdf
```

---

## Fixed CTAs (layout.js — buildFooter)

`.alt_butonlar` — ekranın **sağ altına** sabit, her zaman görünür (scroll'dan bağımsız):

| Sıra | Buton | Renk | Aksiyon |
|---|---|---|---|
| 1 (üst) | Asistanınız / Your Assistant | lacivert (`--clr-secondary`) | `window.MedosChat.toggle()` |
| 2 (orta) | 0256 645 07 40 | teal (`--clr-primary`) | `tel:+902566450740` |
| 3 (alt) | Rezervasyon Yap / Book Now | lacivert (`--clr-secondary`) | `booking.html` |

- 3 buton tek kolon, eşit genişlik (`min-width: 190px`) ve yükseklik (`height: 48px`)
- Orta buton (Ara) farklı renk — görsel ayrışım için
- `.alt_butonlar` asla kaldırılmaz — birincil dönüşüm elementi

---

## Chatbot Widget (js/chatbot.js)

- Self-contained, `layout.js inject()` tarafından tüm sayfalara otomatik yüklenir
- Toggle butonu `chatbot.js`'te gizli (`display:none`) — tetikleyici `.alt_butonlar`'daki "Asistanınız" butonu
- Public API: `window.MedosChat.toggle()`, `.open()`, `.close()`
- Chatbox pozisyonu: sağ alt, `.alt_butonlar`'ın **üzerinde** (`bottom: calc(1.75rem + env(safe-area-inset-bottom,0px) + 185px)`)
- Dil: `window.MEDOS.lang` ile senkronize; TR/EN select içinde de değiştirilebilir
- Statik hosting fallback: `/api/chat` yoksa `LOCAL_FAQ` keyword eşleşmesi kullanılır
- WhatsApp: `+90 541 646 17 86`

---

## Cookie Banner (layout.js — buildCookieBanner)

- Ekranın sol altına sabit, `localStorage` ile kalıcı (`medos_cookie_consent` key)
- 800ms gecikme ile gösterilir, Kabul Et / Reddet ile kapanır
- Çerez Politikası PDF'ine bağlantı içerir

---

## Gallery Slider (index.html + js/main.js)

- **14 görsel** (Album_11 ve Album_12 çıkarıldı) — dosya adlarında Türkçe karakter yok:
  `Album_0_Giris.jpg`, `Album_1_Havuz.png`, `Album_2_Ustten.png`, `Album_3_Ustten.jpg`,
  `Album_4_Bina.JPG`, `Album_5_Panaromik.jpg`, `Album_6_Sahil.JPG`, `Album_7_Lobi1.jpg`,
  `Album_8_Restoran.jpg`, `Album_9_Plaj.jpeg`, `Album_10_iskele.JPG`,
  `Album_13_Lobi.jpg`, `Album_14_Restoran.jpg`, `Album_15_Oturma_Alan.jpg`
- İlk 3 görsel `loading="eager"`, geri kalanlar `loading="lazy"`
- Görsel formatı: **1600 × 900 px (16:9)** önerilir; CSS `aspect-ratio: 16/9; object-fit: cover`
- Noktalar gizli (`display: none`); yerine ilerleme çubuğu (`.slider-progress-fill`) + sayaç (`.slider-counter`)
- Otomatik geçiş: 4500ms, swipe + klavye ok desteği

---

## Page Hero Görselleri

- **Alt sayfalar (genel):** `data-bg="img/page_hero.png"`
- **Hakkımızda:** `data-bg="img/Otel_Genel_1.png"`
- `data-bg` pattern kullanılır — inline `style="background-image:..."` yazılmaz

---

## JS Modules

### js/i18n.js
- `window.MEDOS.t(key)` — çeviri döndürür
- `window.MEDOS.lang` — aktif dil (`'tr'` | `'en'`)
- `window.MEDOS.setLang(lang)` — dil değiştirir, DOM'u günceller
- `data-i18n` → `textContent`, `data-i18n-html` → `innerHTML`

### js/layout.js
- `buildHeader()` → header HTML
- `buildFooter()` → footer + `.alt_butonlar` HTML
- `buildCookieBanner()` → çerez banner HTML
- `inject()` → DOM'a ekler, `data-bg` arka planları ayarlar, `initNav()` + `initCookieBanner()` çağırır; `js/chatbot.js`'i dinamik olarak yükler
- `data-bg="img/..."` pattern: inline style yerine JS ile `style.backgroundImage` set edilir

### js/main.js
- `initSlider()` — 14 görsel, ilerleme çubuğu + sayaç güncelleme dahil
- `initReveal()` — IntersectionObserver ile scroll animasyonu (`.room-card`, `.service-card`, `.attraction-card`, `.about-img`, `.stat`)

### js/chatbot.js
- Self-contained chatbot widget — kendi HTML+CSS'ini body'e enjekte eder
- `window.MedosChat` public API'si ile dışarıdan kontrol edilir

---

## Key CSS Patterns (css/style.css)

```css
/* Oda/çekim kartları — hover overlay */
.room-img-wrap, .attraction-img-wrap { position: relative; aspect-ratio: 3/4 veya 4/3; }
.room-hover-overlay { position: absolute; inset: 0; opacity: 0; transition: opacity .35s; }
.room-card:hover .room-hover-overlay { opacity: 1; }

/* Frosted glass badge */
.room-badge { -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }

/* Fixed CTAs — 3 buton tek kolon, sağ alt */
.alt_butonlar { position: fixed; bottom: calc(1.75rem + env(safe-area-inset-bottom,0px)); right: calc(1.5rem + env(safe-area-inset-right,0px)); flex-direction: column; }
.alt-btn { min-width: 190px; border-radius: var(--radius-full); }
.alt-btn--chat    { background: var(--clr-secondary); border: none; cursor: pointer; }
.alt-btn--call    { background: var(--clr-primary); }
.alt-btn--booking { background: var(--clr-secondary); }

/* Footer grid — yükseklik belgeler sütununa göre */
@media (min-width: 768px) {
  .footer-cols { align-items: stretch; }
  .footer-map-wrap { aspect-ratio: unset; height: 100%; min-height: 160px; }
}
```

---

## Contact Details

- **Phone:** 0256 645 07 40
- **Email:** info@medoshotel.com
- **Address:** Zeus Cumhuriyet Sk No: 5, Güzelçamlı Mh., 09430 Kuşadası, Aydın, Turkey

---

## Legal / Compliance

- KVKK belgeleri `docs/` klasöründe — dosya adlarında Türkçe karakter yok
- Çerez banner aktif ve işlevsel (`localStorage` ile kalıcı)
- JSON-LD `Hotel` schema `index.html` `<head>`'inde mevcut
- Oda sayfalarında `HotelRoom` JSON-LD schema mevcut

---

## Development Rules

- **Statik HTML** — build pipeline, package manager, framework yok
- **Her değişiklikten sonra CLAUDE.md güncelle**
- Tüm içerik iki dilli: TR (birincil) + EN — her yeni metin `i18n.js`'e eklenmeli
- `data-bg` kullan, inline `style="background-image:..."` yazma
- `backdrop-filter` kullanırken `-webkit-backdrop-filter` önce gelir
- PDF bağlantıları: `docs/` klasörü, dosya adlarında Türkçe karakter yok
- Mobil breakpoint: `1150px`
- `.alt_butonlar` asla kaldırılmaz — birincil dönüşüm elementi
- Yeni sayfa eklenirse: `layout.js` navigasyonuna + `i18n.js`'e eklenmeli
- Çoklu paragraf içerik: `data-i18n-html` kullan (innerHTML), `data-i18n` değil (textContent)
