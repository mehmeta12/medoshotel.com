/* ═══════════════════════════════════════════════════════════════════════
   Medos Hotel — i18n.js
   Bilingual TR / EN system
   Language detection: localStorage → IP (ipapi.co) → browser lang → TR
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const LANG_KEY = 'medos_lang';

  /* ──────────────────── Translation strings ──────────────────────────── */
  const T = {
    tr: {
      /* Site */
      'site.name': 'Medos Hotel',
      'site.tagline': 'Güzelçamlı, Kuşadası · Ege',

      /* Nav */
      'nav.home': 'Ana Sayfa',
      'nav.rooms': 'Odalar',
      'nav.rooms.standard': 'Standart Oda',
      'nav.rooms.family': 'Aile Odası',
      'nav.rooms.suite': 'Aile Süiti',
      'nav.virtual_tour': 'Sanal Tur',
      'nav.places': 'Gezilecek Yerler',
      'nav.places.ephesus': 'Efes Antik Kenti',
      'nav.places.virgin_mary': 'Meryem Ana Evi',
      'nav.places.sirince': 'Şirince Köyü',
      'nav.places.dilek': 'Dilek Yarımadası',
      'nav.places.zeus': 'Zeus Mağarası',
      'nav.places.pigeon': 'Güvercin Ada Kalesi',
      'nav.about': 'Hakkımızda',
      'nav.transport': 'Ulaşım',
      'nav.contact': 'İletişim',

      /* Footer */
      'footer.quicklinks': 'Hızlı Bağlantılar',
      'footer.contact_title': 'İletişim',
      'footer.location': 'Konum',
      'footer.view_map': 'Haritada Görüntüle',
      'footer.address': 'Zeus Cumhuriyet Sk No: 5, Güzelçamlı Mh., 09430 Kuşadası, Aydın',
      'footer.copyright': 'Tüm hakları saklıdır.',
      'footer.developed_by': 'Tarafından geliştirilmiştir:',
      'footer.documents': 'Dokümanlar',
      'footer.cookie_policy': 'Çerez Politikası',
      'footer.privacy_notice': 'Aydınlatma Metni',
      'footer.kvkk_text': 'KVKK Metni',
      'footer.data_request': 'Veri Talep Formu',
      'footer.sustainability_report': 'Sürdürülebilirlik Raporu',
      'footer.sustainability_corner': 'Sürdürülebilirlik Köşesi',
      'footer.species_action_plan': 'Aydın İli Tür Eylem Planı',
      'footer.sustainability_cert': 'Sürdürülebilir Turizm Belgesi',

      /* Reviews */
      'reviews.heading':  'Misafir Yorumları',
      'reviews.count':    'Google yorumu',
      'reviews.view_all': 'Tüm Yorumları Gör →',

      /* Alt butonlar */
      'cta.chat': 'Asistanınız',
      'cta.call': 'Ara',
      'cta.book': 'Rezervasyon',

      /* Common buttons */
      'btn.detail': 'Detay',
      'btn.book': 'Rezervasyon Yap',
      'btn.explore': 'Oteli Keşfet',
      'btn.learn_more': 'Daha Fazla Bilgi',
      'btn.back_home': 'Ana Sayfaya Dön',
      'btn.send': 'Gönder',
      'btn.map': 'Haritada Görüntüle',

      /* Breadcrumb */
      'breadcrumb.home': 'Ana Sayfa',
      'breadcrumb.rooms': 'Odalar',
      'breadcrumb.places': 'Gezilecek Yerler',

      /* ── Index: Hero ── */
      'hero.eyebrow': 'Güzelçamlı · Kuşadası · Ege',
      'hero.title': 'Medos Hotel\'e Hoşgeldiniz',

      /* ── Index: About ── */
      'about.label': 'Biz Kimiz',
      'about.title': 'Medos Hotel',
      'about.p1': 'Kuşadası\'nın incisi Güzelçamlı\'da, masmavi Ege\'nin kıyısında yer alan Medos Hotel; konuklarına unutulmaz bir tatil deneyimi sunmaya hazır. Otelimiz, konforlu ve modern tasarımıyla <strong>49 oda, 150 yatak</strong> kapasitesiyle sizi ağırlıyor.',
      'about.p2': 'Güzelçamlı\'nın doğal güzellikleriyle çevrili otelimizden yakın çevresindeki tarihi mekanları ziyaret edebilir, Dilek Yarımadası Milli Parkı\'nın gizli koylarını keşfedebilir ya da Kuşadası\'nın canlı gece hayatına katılabilirsiniz.',
      'about.stat.rooms': 'Oda',
      'about.stat.beds': 'Yatak',
      'about.stat.distance': 'Dilek Parkı',

      /* ── Index: Rooms ── */
      'rooms.heading': 'ODALAR',
      'rooms.standard.name': 'Standart Oda',
      'rooms.standard.f1': 'Çift kişilik yatak',
      'rooms.standard.f2': 'Klima · WiFi · TV',
      'rooms.family.name': 'Aile Odası',
      'rooms.family.f1': 'Çift + tek kişilik yatak',
      'rooms.family.f2': 'Ayrı yatak odası · Klima · WiFi',
      'rooms.suite.name': 'Aile Süiti',
      'rooms.suite.f1': 'Oturma odası + yatak odası',
      'rooms.suite.f2': 'Klima · WiFi · TV',

      /* ── Index: Services ── */
      'services.heading': 'HİZMETLER',
      'services.pool_adult.name': 'Yetişkin Havuzu',
      'services.pool_adult.desc': '2024\'te yenilenen havuz; 70 m² alan, 140 cm derinlik.',
      'services.pool_kids.name': 'Çocuk Havuzu',
      'services.pool_kids.desc': '16 m² alan, 40 cm derinliğinde güvenli çocuk havuzu.',
      'services.wifi.name': 'Ücretsiz WiFi',
      'services.wifi.desc': 'Tüm oda ve ortak alanlarda yüksek hızlı internet.',
      'services.restaurant.name': 'Restoran',
      'services.restaurant.desc': 'Zengin Ege mutfağı ile açık büfe ve à la carte seçenekleri.',
      'services.bar.name': 'Bar',
      'services.bar.desc': 'Havuz ve iskele başında içecek ve atıştırmalık servisi.',
      'services.snackbar.name': 'Snack Bar',
      'services.snackbar.desc': 'Havuz başında hafif yemek ve atıştırmalık servisi.',
      'services.boat.name': 'Tekne Turu',
      'services.boat.desc': 'Dilek Yarımadası\'nın muhteşem koylarına rehberli tekne turu.',
      'services.yacht.name': 'Yat Kiralama',
      'services.yacht.desc': 'Özel yat kiralayarak koyları özgürce keşfedin.',

      /* ── Index: Attractions ── */
      'attractions.heading': 'Gezilecek Yerler',
      'attractions.ephesus.name': 'Efes Antik Kenti',
      'attractions.ephesus.desc': 'Antik çağın önemli şehirlerinden biri olan eşsiz açık hava müzesi.',
      'attractions.virgin_mary.name': 'Meryem Ana Evi',
      'attractions.virgin_mary.desc': 'St. John\'un Meryem Ana\'yı getirdiğine inanılan kutsal mekân.',
      'attractions.sirince.name': 'Şirince Köyü',
      'attractions.sirince.desc': 'Tarihi mimarisiyle korunmuş, şarap bahçeleriyle ünlü özgün köy.',
      'attractions.dilek.name': 'Dilek Yarımadası',
      'attractions.dilek.desc': '209 kuş türü ve kristal koylarıyla eşsiz milli park.',
      'attractions.zeus.name': 'Zeus Mağarası',
      'attractions.zeus.desc': 'Afrodit efsanesiyle bütünleşen, gizemli doğal mağara.',
      'attractions.pigeon.name': 'Güvercin Ada Kalesi',
      'attractions.pigeon.desc': 'Barbaros Hayrettin Paşa\'nın yaptırdığı, Kuşadası\'nın simgesi kale.',

      /* ── Index: Gallery ── */
      'gallery.heading': 'Fotoğraf Albümü',

      /* ─────────── ROOM PAGES ─────────── */

      /* Standart Oda */
      'page.standart.title': 'Standart Oda',
      'page.standart.info_title': 'Oda Hakkında',
      'page.standart.info': 'Standart odalarımız, deniz, kısmı deniz, Milli Park ya da bahçe manzaralı olup, 21 m²\'den oluşmaktadır. TRP odalar hariç odalarda, isteğe bağlı 2 tek kişilik yatak ya da 1 çift kişilik yatak bulunurken, her odada klima, makyaj masası ve aynası, dolaplar, fransız balkon, banyo ve tuvalet, saç kurutma makinesi, uydu yayınlı televizyon ve minibar bulunur. Tüm odaların yerleri laminant kaplıdır. TRP odalar da 1 çift kişilik yatak ve 1 tek kişilik yatak ya da 3 tek kişilik yatak olarak organize edilebilir. TRP odalar hariç diğer odalara ek yatak talebinde bulunulabilir fakat talepler müsaitliğe ve ek ücrete tabidir.',
      'page.standart.features_title': 'Oda Olanakları',
      'page.standart.gallery_title': 'Oda Fotoğrafları',
      'page.standart.capacity': '2–3 Kişi',
      'page.standart.size': '21 m²',
      'page.standart.view': 'Deniz veya Bahçe Manzarası',
      'page.standart.f1': 'Tek/Çift Kişilik Yatak',
      'page.standart.f2': 'Klima',
      'page.standart.f3': 'Ücretsiz WiFi',
      'page.standart.f4': '40" Düz Ekran TV',
      'page.standart.f5': 'Özel Banyo',
      'page.standart.f6': 'Fransız Balkon',
      'page.standart.f7': 'Minibar',
      'page.standart.f9': 'Saç Kurutma Makinesi',
      'page.standart.f10': 'Terlik',
      'page.standart.f11': 'Buklet Malzemeleri',

      /* Aile Odası */
      'page.aile.title': 'Aile Odası',
      'page.aile.info_title': 'Oda Hakkında',
      'page.aile.info': 'Aile odalarımız bağlantılı 2 yatak odasından oluşmaktadır. Her biri 45 m² olan bu odalar maksimum 5 kişilik kapasiteye sahiptir. Aile odalarımız, deniz, kısmı deniz, Milli Park ya da bahçe manzaralı olup 45 m²\'den oluşmaktadır. Her odada klima, makyaj masası ve aynası, dolaplar, fransız balkon, banyo ve tuvalet, saç kurutma makinesi, uydu yayınlı televizyon ve minibar bulunur. Tüm odaların yerleri laminant kaplıdır.',
      'page.aile.features_title': 'Oda Olanakları',
      'page.aile.gallery_title': 'Oda Fotoğrafları',
      'page.aile.capacity': '3–5 Kişi',
      'page.aile.size': '45 m²',
      'page.aile.view': 'Bahçe ve Dağ Manzarası',
      'page.aile.f1': 'Tek/Çift Kişilik Yatak (Ana Oda)',
      'page.aile.f2': '2–3 Tek Kişilik Yatak (2. Oda)',
      'page.aile.f3': 'Ayrı Yatak Odaları',
      'page.aile.f4': 'Klima',
      'page.aile.f5': 'Ücretsiz WiFi',
      'page.aile.f6': '40" Düz Ekran TV',
      'page.aile.f7': 'Özel Banyo',
      'page.aile.f9': 'Minibar',
      'page.aile.f10': 'Buklet Malzemeleri',
      'page.aile.f11': 'Saç Kurutma Makinesi',
      'page.aile.f12': 'Fransız Balkon',
      'page.aile.f13': 'Terlik',

      /* Aile Süiti */
      'page.suite.title': 'Aile Süiti',
      'page.suite.info_title': 'Oda Hakkında',
      'page.suite.info': 'Süitimiz 75 m² olup bağlantılı 2 yatak odası ve salondan oluşur ve oturma grubuna sahiptir. Aile süitimizin yatak odaları Milli Park, salon ise deniz manzaralı olup, odada klima, makyaj masası ve aynası, dolaplar, fransız balkon, banyo ve tuvalet, saç kurutma makinesi, uydu yayınlı televizyon ve minibar bulunur. Bu odamız ek yatak ile 7 kişinin konaklayabileceği kapasiteye ulaşır.',
      'page.suite.features_title': 'Oda Olanakları',
      'page.suite.gallery_title': 'Oda Fotoğrafları',
      'page.suite.capacity': '4–6 Kişi',
      'page.suite.size': '75 m²',
      'page.suite.view': 'Bahçe ve Deniz Manzaralı',
      'page.suite.f1': 'Tek/Çift Kişilik Yatak (Ana Oda)',
      'page.suite.f2': '3 Tek Kişilik Yatak (2. Oda)',
      'page.suite.f3': 'Ayrı Yatak Odaları',
      'page.suite.f4': 'Geniş Oturma Odası',
      'page.suite.f5': 'Klima',
      'page.suite.f6': 'Ücretsiz WiFi',
      'page.suite.f7': 'Düz Ekran TV',
      'page.suite.f8': 'Özel Banyo',
      'page.suite.f9': 'Minibar',
      'page.suite.f10': 'Fransız Balkon',
      'page.suite.f11': 'Buklet Malzemeleri',
      'page.suite.f12': 'Terlik',
      'page.suite.f13': 'Saç Kurutma Makinesi',

      /* ─────────── ATTRACTION PAGES ─────────── */

      /* Efes */
      'page.efes.title': 'Efes Antik Kenti',
      'page.efes.info_title': 'Efes Antik Kenti Hakkında',
      'page.efes.info': '<p>Efes Antik Kenti, Türkiye\'nin batısında, İzmir iline bağlı Selçuk ilçesinde bulunan, antik Roma\'nın önemli şehirlerinden biridir. Efes, antik dönemde büyük bir liman şehri ve kültür merkezi olarak bilinir. Bugün ise arkeolojik kalıntıları ve tarihî zenginlikleriyle ziyaretçilere açıktır.</p><p>Efes, M.Ö. 10. yüzyılda kurulmuş olup antik dönemde Lidyalılar, Persler, Makedonyalılar ve Roma İmparatorluğu gibi birçok medeniyet tarafından yönetilmiştir. Hellenistik ve Roma dönemlerinde zirveye ulaşan şehir, tarihî ve kültürel açıdan büyük bir öneme sahiptir.</p><p>Efes Antik Kenti\'nde birçok önemli kalıntı bulunmaktadır. Artemis Tapınağı, Celsus Kütüphanesi, Büyük Tiyatro, Trajan Çeşmesi, Hadrian Tapınağı gibi yapılar şehirdeki önemli eserler arasındadır. Efes\'in en ünlü yapılarından biri olan Celsus Kütüphanesi, antik dünyadaki en büyük kütüphanelerden biriydi. Şu anda ayakta kalmış cephesi oldukça etkileyicidir.</p><p>Kapasitesi yaklaşık 25.000 kişiyi aşan Büyük Tiyatro, antik dönemin önemli tiyatrolarından biridir. Konserler ve etkinlikler için hâlâ kullanılmaktadır.</p><p>Efes\'in yakınlarında yer alan ve Hristiyanlık geleneğine göre Meryem Ana\'nın ölümüne işaret eden bu kilise, Hristiyanlar için kutsal bir ziyaret noktasıdır.</p><p>Efes Antik Kenti\'nin yanında yer alan müze, bölgede yapılan kazılardan elde edilen eserleri sergiler. Müze, antik döneme ait heykeller, mozaikler ve diğer kalıntıları içerir.</p>',
      'page.efes.activities_title': 'Yapılabilecek Aktiviteler',
      'page.efes.a1': 'Celsus Kütüphanesi\'ni ziyaret edin',
      'page.efes.a2': 'Büyük Tiyatro\'da antik akustiği keşfedin',
      'page.efes.a3': 'Terras Evleri\'nde mozaiklere hayran kalın',
      'page.efes.a4': 'Artemis Tapınağı kalıntılarını görün',
      'page.efes.a5': 'Rehberli kültür turu ile tarihe yolculuk yapın',
      'page.efes.a6': 'Efes Müzesi\'ni (Selçuk) ziyaret edin',
      'page.efes.distance': '30 km',

      /* Meryem Ana */
      'page.meryem.title': 'Meryem Ana Evi',
      'page.meryem.info_title': 'Meryem Ana Evi Hakkında',
      'page.meryem.info': '<p>Meryem Ana Evi, Selçuk\'a 9 km. uzaklıktaki Bülbül Dağı üzerinde bulunmaktadır. İsa\'nın ölümünden 4 ya da 6 yıl sonra St. John\'un Meryem Ana\'yı Efes\'e getirdiği bilinmektedir. 1891 yılında Lazarist papazlar Alman rahibe A.Katherina Emmerick\'in rüyası üzerine Meryem Ana\'nın son günlerini geçirdiği evin araştırmalar sonunda bu ev olduğunu ortaya çıkarmışlardır. Bu olay Hıristyanlık dünyasında yepyeni bir buluş olmuş ve tüm dünya din alemine ışık tutmuştur. Haç planlı ve kubbeli olan bu yapı daha sonra restore edilmiştir. Müslümanlarca da kutsal sayılan evde Papa VI.Paul\'un 1967 deki ziyaretinden sonra her yıl Ağustos ayının 15. gününden ayinler düzenlenmekte ve bu ayinler büyük ilgi görmektedir.</p>',
      'page.meryem.activities_title': 'Yapılabilecek Aktiviteler',
      'page.meryem.a1': 'Kutsal mekânı ziyaret ederek dua edin',
      'page.meryem.a2': 'Dilek ağacına dilek bağlayın',
      'page.meryem.a3': 'Kutsal pınardan su içip yanınıza alın',
      'page.meryem.a4': 'Bülbüldağı\'nda doğa yürüyüşü yapın',
      'page.meryem.a5': 'Yakınlardaki Efes ile birleşik tur yapın',
      'page.meryem.distance': '35 km',

      /* Şirince */
      'page.sirince.title': 'Şirince Köyü',
      'page.sirince.info_title': 'Şirince Köyü Hakkında',
      'page.sirince.info': '<p>Şirince, Türkiye\'nin batısında, İzmir iline bağlı Selçuk ilçesine yaklaşık 8 kilometre uzaklıkta bulunan tarihi ve şirin bir köydür. Şirince, antik dönemde "Kırkınca" adıyla bilinmekteydi. Rumlar döneminde "Çirkince" olarak adlandırılan köy, 1926 yılında "Şirince" adını almıştır.</p><p>Deniz seviyesinden yüksek bir konumda yer alır ve çevresi bağlarla çevrilidir.</p><p>Şirince, tipik Ege mimarisiyle inşa edilmiş taş evleri, dar sokakları ve meydanlarıyla ünlüdür. Köy, tarihi dokusunu korumuş ve restore edilmiş yapılarıyla dikkat çeker.</p><p>Şirince, meşhur üzüm bağları ve üzüm ürünleri ile tanınır. Köyde organik şarap üretimi yapılmaktadır. Şirince şarapları, zeytinyağları ve reçineli şaraplarıyla ünlüdür.</p><p>Şirince, tarihi atmosferi, doğal güzellikleri ve yöresel ürünleriyle turistlerin ilgisini çeker. Köy, özellikle hafta sonları ve yaz aylarında ziyaretçi akınına uğrar.</p><p>Köyde geleneksel el sanatları ürünleri ve hediyelik eşyalar satan küçük dükkanlar bulunmaktadır. Yerel el sanatları, seramik ürünleri ve el dokuması ürünler gibi çeşitli hediyelikler köyde bulunabilir.</p><p>Şirince Meydanı, köyün merkezi bir buluşma noktasıdır. Meydanda çeşitli kafeler, restoranlar ve hediyelik eşya satan dükkanlar vardır. Ziyaretçiler, geleneksel Türk kahvesi içebilir ve köy atmosferinin tadını çıkarabilirler.</p>',
      'page.sirince.activities_title': 'Yapılabilecek Aktiviteler',
      'page.sirince.a1': 'Meyve şaraplarını ve rakıyı tadın',
      'page.sirince.a2': 'El yapımı hediyelikler alın',
      'page.sirince.a3': 'Taş yokuşlarda yürüyüş yapın',
      'page.sirince.a4': 'Yöresel Ege mutfağını keşfedin',
      'page.sirince.a5': 'Köy çarşısında zeytin yağı ve doğal ürünler satın alın',
      'page.sirince.distance': '49 km',

      /* Dilek */
      'page.dilek.title': 'Dilek Yarımadası Milli Parkı',
      'page.dilek.info_title': 'Dilek Yarımadası Hakkında',
      'page.dilek.info': 'Medos Hotel\'e yalnızca 2 km mesafede bulunan Dilek Yarımadası–Büyük Menderes Deltası Milli Parkı, Türkiye\'nin en önemli doğa alanlarından biridir. 27.000 hektarlık alanda 209 kuş türü, akdeniz foklarından deniz kaplumbağalarına kadar pek çok hayvanın doğal yaşam alanı. Dört ana koy\'da temiz ve sakin plajlar bulunmaktadır.',
      'page.dilek.activities_title': 'Yapılabilecek Aktiviteler',
      'page.dilek.a1': 'Kristal berraklığındaki koylarda yüzün',
      'page.dilek.a2': 'Snorkeling yapın ve deniz altı dünyasını keşfedin',
      'page.dilek.a3': 'İşaretli doğa yürüyüşü parkurlarında trekking yapın',
      'page.dilek.a4': 'Kuş gözlemciliği yapın (209 tür!)',
      'page.dilek.a5': 'Tur teknesine binerek koyları gezin',
      'page.dilek.a6': 'Zeus Mağarası\'nı ziyaret edin (park içi)',
      'page.dilek.distance': '2 km',
      'page.dilek.coves_title': 'Koylar',
      'page.dilek.cove1_name': 'İçmeler Koyu',
      'page.dilek.cove1_dist': 'Girişten 1 km',
      'page.dilek.cove1_desc': 'Kumluk yapıda, sığ bir denize sahiptir.',
      'page.dilek.cove2_name': 'Aydınlık Koyu',
      'page.dilek.cove2_dist': 'Girişten 6 km',
      'page.dilek.cove2_desc': 'Taşlık yapıda, oldukça derin denize sahiptir.',
      'page.dilek.cove3_name': 'Kavaklı',
      'page.dilek.cove3_dist': 'Girişten 8 km',
      'page.dilek.cove3_desc': 'Boyları çok uzun ağaçların bulunduğu, taşlık sahile ve derin denize sahiptir.',
      'page.dilek.cove4_name': 'Karasu',
      'page.dilek.cove4_dist': 'Girişten 11 km',
      'page.dilek.cove4_desc': 'Taşlık yapıda; adını alma nedeni olan su, 1-2 adımda oldukça derinleşen bir koydur.',

      /* Zeus */
      'page.zeus.title': 'Zeus Mağarası',
      'page.zeus.info_title': 'Zeus Mağarası Hakkında',
      'page.zeus.info': '<p>Zeus Mağarası, Türkiye\'nin Aydın iline bağlı Kuşadası ilçesinde bulunan Dilek Yarımadası-Büyük Menderes Delta Milli Parkı sınırları içinde yer alan önemli bir doğal ve tarihi mekânlardan biridir. Mitolojik bir öneme sahip olan mağara, Zeus\'un doğduğuna inanılan yer olarak bilinir.</p><p>Zeus Mağarası\'nın içinde yer alan bir şapel ve içerideki doğal oluşumlar ziyaretçilerin ilgisini çeker. Mitolojik öykülere göre Zeus\'un annesi Rhea, oğlu Zeus\'u Cronus\'un elinden kurtarmak için Dikili Taş Ormanı\'nda doğumu gerçekleştirmiştir. Bu doğum sırasında Zeus\'un koruması altında olması amacıyla mağaranın yıkılıp kapatılması istenmiştir. Mitolojiye göre Zeus\'un doğduğu bu mağara özel bir atmosfere ve tarihi bir derinliğe sahiptir.</p><p>Zeus Mağarası, milli park içinde yer alması nedeniyle yalnızca doğal güzellikleriyle değil, tarihi ve mitolojik zenginlikleriyle de dikkat çeker. Bölge, doğa severler, tarih meraklıları ve mitoloji hayranları için ilginç bir ziyaret noktasıdır.</p>',
      'page.zeus.activities_title': 'Yapılabilecek Aktiviteler',
      'page.zeus.a1': 'Mağaranın kristal berraklığındaki soğuk suyunda serinleyin',
      'page.zeus.a2': 'Orman içindeki yürüyüş parkurunda trekking yapın',
      'page.zeus.a3': 'Milli park içindeki diğer koylarla birleşik gezi yapın',
      'page.zeus.a4': 'Doğa fotoğrafçılığı yapın',
      'page.zeus.distance': '1 km',

      /* Güvercin Ada */
      'page.guvercin.title': 'Güvercin Ada Kalesi',
      'page.guvercin.info_title': 'Güvercin Ada Kalesi Hakkında',
      'page.guvercin.info': '<p>Kuşadası ilçesinde yer alan ada, insan yapımı bir geçitle karaya bağlıdır. Kuşadası için bir simge niteliği taşıyan adada Cenevizliler tarafından inşa edilmiş bir kale bulunmaktadır. UNESCO, 2020\'de kaleyi "Ceneviz Ticaret Yolu\'nda Akdeniz\'den Karadeniz\'e Kadar Kale ve Surlu Yerleşimleri" dosyası kapsamında Dünya Mirası Geçici Listesi\'ne dahil etmiştir.</p><p>Güvercinada\'nın tamamını kaplayan Güvercinada Kalesi, doğal bir kayalık üzerinde bulunur. Tarihi 13. yüzyılın sonlarında ya da 14. yüzyılın başlarında Kuşadası\'na gelen Cenevizlere dayanmaktadır; Osmanlı İmparatorluğu döneminde yenilenmiştir. Osmanlı döneminde ada korsanlara karşı bir karakol vazifesi de gördüğü için Korsan Kalesi olarak da bilinir.</p><p>Adadaki iç kaleyi ve şehir cephaneliğini, 1533 yılında kurulan Cezayir-i Bahr-i Sefid Eyaleti\'nin ilk beylerbeyi olarak atanan Barbaros Hayreddin Paşa yaptırmıştır. 1613 yılında Kuşadası\'nın sadrazam ve damat Öküz Mehmed Paşa\'ya mülk olarak verilmesinden sonra Mehmet Paşa kaleyi tamir ettirdi. 19. yüzyılda dış surlar ve kale çevresindeki surlar, Mora İsyanı sırasında subaşı İlyas Ağa tarafından 1826–1827 yıllarında tamir edildi. Kale 1834 yılında tekrar onarılıp güçlendirildi, 1957 yılında bir mendirekle karaya bağlandı ve 2013 yılında yeniden onarım görerek kale içindeki bazı yapılar restore edildi.</p>',
      'page.guvercin.activities_title': 'Yapılabilecek Aktiviteler',
      'page.guvercin.a1': 'Tarihi surlarda yürüyün ve manzarayı izleyin',
      'page.guvercin.a2': 'Kuşadası körfezinde günbatımı seyredin',
      'page.guvercin.a3': 'Ada çevresinde kayıkla tur yapın',
      'page.guvercin.a4': 'Kuşadası çarşısını ve limanı keşfedin',
      'page.guvercin.distance': '~8 km',

      /* ─────────── ABOUT PAGE ─────────── */
      'page.about.title': 'Hakkımızda',
      'page.about.hero_subtitle': 'Herkese özel bir tatil deneyimi',
      'page.about.story_title': 'Hikayemiz',
      'page.about.story': 'Medos Hotel; Kuşadası\'nın sakin ve yeşil koyu Güzelçamlı\'da, Ege kıyısında kurulmuş aile işletmesidir. Doğanın tam ortasında, şehrin gürültüsünden uzak ama her şeye yakın konumuyla misafirlerine benzersiz bir tatil ortamı sunmaktadır. Ailemizin sıcaklığını ve Ege\'nin özgünlüğünü tüm detaylarda hissedeceksiniz.',
      'page.about.vision_title': 'Vizyonumuz',
      'page.about.vision': 'Misafirlerimize sadece bir yer değil, bir deneyim sunmak istiyoruz. Her mevsimde farklı güzellikleriyle kendini yenileyen Güzelçamlı\'da, sizi yıl boyu karşılamak en büyük arzumuzdur.',
      'page.about.values_title': 'Değerlerimiz',
      'page.about.v1_title': 'Güvenirlik',
      'page.about.v1_desc': 'Şeffaflık ve dürüstlük ilkesiyle, her zaman söz verdiğimizi yerine getiriyoruz.',
      'page.about.v2_title': 'Misafir Odaklılık',
      'page.about.v2_desc': 'Her kararımızın merkezine misafirlerimizin memnuniyetini ve konforunu koyuyoruz.',
      'page.about.v3_title': 'Sürekli Gelişim',
      'page.about.v3_desc': 'Hizmet kalitemizi her gün daha ileriye taşımak için öğrenmeyi ve gelişmeyi esas alıyoruz.',
      'page.about.v4_title': 'Yenilikçilik',
      'page.about.v4_desc': 'Değişen ihtiyaçlara yaratıcı ve özgün çözümler üreterek fark yaratıyoruz.',
      'page.about.v5_title': 'Sosyal Duyarlılık',
      'page.about.v5_desc': 'Topluma ve çevreye karşı sorumluluklarımızın bilincinde hareket ediyoruz.',
      'page.about.v6_title': 'Özeleştiri ve Empati',
      'page.about.v6_desc': 'Kendimizi ve başkalarını anlamak için empati kuruyor, hatalarımızdan öğreniyoruz.',
      'page.about.v7_title': 'İnisiyatif Kullanma',
      'page.about.v7_desc': 'Doğru anı beklemeden harekete geçiyor, çözüm odaklı bir tutumla ilerliyoruz.',
      'page.about.v8_title': 'Verimlilik',
      'page.about.v8_desc': 'Kaynaklarımızı akıllıca kullanarak en yüksek değeri üretmeyi hedefliyoruz.',

      'page.about.policy_title': 'Politikalarımız',
      'page.about.policy_commit': 'taahhüt ederiz.',
      'page.about.p1':  'Yasal ve ilgili diğer şartlar için uygunluk yükümlülüklerimizi yerine getirmeyi,',
      'page.about.p2':  'Yönetim sistemleri amaçları ve hedeflerine ulaşmak için gerekli bilgi ve kaynakların kullanılabilirliğini sağlamayı,',
      'page.about.p3':  'Misafirlerimizin ve ilgili tarafların gereksinim ve beklentilerini gözeterek, paydaşlarımızın memnuniyetinin sürekliliğini güvence altına almayı,',
      'page.about.p4':  'Faaliyetlerimizde ortaya çıkabilecek hataları önlemeyi ve tespit edilen hata kaynaklarını ortadan kaldırmayı,',
      'page.about.p5':  'Enerji performansını etkileyen enerji verimli ürün ve hizmetlerin tedarik edilmesini desteklemeyi,',
      'page.about.p6':  'Faaliyetlerimiz sırasında ortaya çıkacak tehlikeleri ortadan kaldırmayı, iş güvenliği ve sağlığına yönelik riskleri azaltmayı,',
      'page.about.p7':  'Faaliyetlerimizden kaynaklanabilecek yaralanma ve sağlığın bozulmasının önlenmesi için gerekli olan güvenli ve sağlıklı çalışma koşullarını sağlamayı,',
      'page.about.p8':  'İş güvenliği ve sağlığına yönelik faaliyetlerimizde çalışan ve çalışan temsilcilerine danışmayı ve katılımlarını sağlamayı,',
      'page.about.p9':  'Hizmetlerimizi gerçekleştirme ve sonrasında, çevre kirliliğini azaltmayı, enerji, doğal kaynak ve malzemeleri verimli kullanmayı,',
      'page.about.p10': 'Kirliliğin önlenmesi ve faaliyetlerimizden kaynaklanan olumsuz çevresel etkilerimizi önlemeyi ve geri kazanımı artırmayı,',
      'page.about.p11': 'Gıda zincirinin her aşamasında; insan sağlığını ön planda tutarak ürün güvenliğinin ve kalitesinin korunmasını sağlamayı, tedarikçilerimiz ile iş birliği içerisinde çalışarak standartlaşmış ürün kalitesi sunmayı,',

      /* ─────────── BOOKING PAGE ─────────── */
      'page.booking.title': 'Rezervasyon',
      'page.booking.hero_subtitle': 'Yerinizi hemen garantiye alın',

      /* ─────────── TRANSPORT PAGE ─────────── */
      'page.transport.title': 'Otele Ulaşım',
      'page.transport.hero_subtitle': 'Güzelçamlı\'ya Ulaşım Seçenekleri',
      'page.transport.map_title': 'Konum',

      /* ─────────── CONTACT PAGE ─────────── */
      'page.contact.title': 'İletişim',
      'page.contact.hero_subtitle': 'Sorularınız için buradayız',
      'page.contact.form_title': 'Mesaj Gönderin',
      'page.contact.name': 'Ad Soyad',
      'page.contact.email': 'E-posta Adresi',
      'page.contact.phone': 'Telefon (İsteğe Bağlı)',
      'page.contact.subject': 'Konu',
      'page.contact.message': 'Mesajınız',
      'page.contact.send': 'Gönder',
      'page.contact.info_title': 'İletişim Bilgileri',
      'page.contact.address_title': 'Adres',
      'page.contact.phone_title': 'Telefon',
      'page.contact.email_title': 'E-posta',
      'page.contact.hours_title': 'Resepsiyon Saatleri',
      'page.contact.hours': '24 Saat / 7 Gün',
      'page.contact.form_success': 'Mesajınız gönderildi. En kısa sürede dönüş yapacağız.',

      /* ─────────── BLOG ─────────── */
      'nav.blog': 'Blog',
      'breadcrumb.blog': 'Blog',
      'page.blog.title': 'Blog',
      'page.blog.hero_subtitle': 'Seyahat Rehberi & Haberler',
      'blog.read_more': 'Devamını Oku →',
      'blog.back': '← Blog\'a Dön',
      'blog.by': 'Medos Hotel',
      'blog.kusadasi.title': 'Kuşadası\'nda Gezilecek Yerler (2026 Güncel Rehber)',
      'blog.kusadasi.date': '17 Nisan 2026',
      'blog.kusadasi.category': 'Seyahat Rehberi',
      'blog.kusadasi.excerpt': 'Kuşadası çevresindeki en popüler gezilecek yerleri keşfedin: Dilek Yarımadası Milli Parkı, Zeus Mağarası ve Güvercin Ada Kalesi.',
      'blog.kusadasi.cta': 'Medos Beach Hotel\'de konaklayarak bu lokasyonlara kolayca ulaşabilirsiniz.',
      'blog.kusadasi.body': '<p>Kuşadası, Ege Bölgesi\'nin en popüler tatil destinasyonlarından biridir. Hem tarihi hem de doğal güzellikleriyle her yıl binlerce ziyaretçiyi ağırlar.</p><h2><a href="dilek_yarim_adasi_milli_park.html">Dilek Yarımadası Milli Parkı</a></h2><p>Türkiye\'nin en önemli doğal alanlarından biri olan milli park, yüzlerce bitki türüne ve zengin yaban hayatına ev sahipliği yapmaktadır. Doğa yürüyüşü ve deniz keyfi için ideal bir noktadır.</p><h2><a href="zeus_magarasi.html">Zeus Mağarası</a></h2><p>Mitolojik hikayeleriyle ünlü olan bu mağara, serin suları ve doğal yapısıyla ziyaretçilerin ilgisini çeker.</p><h2><a href="guvercin_ada_kalesi.html">Güvercinada Kalesi</a></h2><p>Kuşadası\'nın simgelerinden biri olan kale, tarihi atmosferi ile görülmeye değerdir.</p>',

      /* ─────────── VIRTUAL TOUR PAGE ─────────── */
      'page.tour.title': 'Sanal Tur',
      'page.tour.hero_subtitle': 'Oteli 360° keşfedin',
      'page.tour.intro': 'Medos Hotel\'i ziyaret etmeden önce 360° sanal turumuzla tüm bölümlerimizi keşfedebilirsiniz. Odalar, havuz alanı, restoran ve iskeleyi interaktif olarak gezin.',
    },

    en: {
      /* Site */
      'site.name': 'Medos Hotel',
      'site.tagline': 'Güzelçamlı, Kuşadası · Aegean',

      /* Nav */
      'nav.home': 'Home',
      'nav.rooms': 'Rooms',
      'nav.rooms.standard': 'Standard Room',
      'nav.rooms.family': 'Family Room',
      'nav.rooms.suite': 'Family Suite',
      'nav.virtual_tour': 'Virtual Tour',
      'nav.places': 'Places to Visit',
      'nav.places.ephesus': 'Ephesus Ancient City',
      'nav.places.virgin_mary': 'House of Virgin Mary',
      'nav.places.sirince': 'Şirince Village',
      'nav.places.dilek': 'Dilek Peninsula',
      'nav.places.zeus': 'Zeus Cave',
      'nav.places.pigeon': 'Pigeon Island Castle',
      'nav.about': 'About',
      'nav.transport': 'Getting Here',
      'nav.contact': 'Contact',

      /* Footer */
      'footer.quicklinks': 'Quick Links',
      'footer.contact_title': 'Contact',
      'footer.location': 'Location',
      'footer.view_map': 'View on Map',
      'footer.address': 'Zeus Cumhuriyet Sk No: 5, Güzelçamlı Mh., 09430 Kuşadası, Aydın, Turkey',
      'footer.copyright': 'All rights reserved.',
      'footer.developed_by': 'Developed by',
      'footer.documents': 'Documents',
      'footer.cookie_policy': 'Cookie Policy',
      'footer.privacy_notice': 'Privacy Notice',
      'footer.kvkk_text': 'KVKK Text',
      'footer.data_request': 'Data Request Form',
      'footer.sustainability_report': 'Sustainability Report',
      'footer.sustainability_corner': 'Sustainability Corner',
      'footer.species_action_plan': 'Aydın Province Species Action Plan',
      'footer.sustainability_cert': 'Sustainable Tourism Certificate',

      /* Reviews */
      'reviews.heading':  'Guest Reviews',
      'reviews.count':    'Google reviews',
      'reviews.view_all': 'See All Reviews →',

      /* Alt butonlar */
      'cta.chat': 'Your Assistant',
      'cta.call': 'Call',
      'cta.book': 'Book Now',

      /* Common buttons */
      'btn.detail': 'Details',
      'btn.book': 'Book Now',
      'btn.explore': 'Explore the Hotel',
      'btn.learn_more': 'Learn More',
      'btn.back_home': 'Back to Home',
      'btn.send': 'Send Message',
      'btn.map': 'View on Map',

      /* Breadcrumb */
      'breadcrumb.home': 'Home',
      'breadcrumb.rooms': 'Rooms',
      'breadcrumb.places': 'Places to Visit',

      /* ── Index: Hero ── */
      'hero.eyebrow': 'Güzelçamlı · Kuşadası · Aegean',
      'hero.title': 'Welcome to Medos Hotel',

      /* ── Index: About ── */
      'about.label': 'Who We Are',
      'about.title': 'Medos Hotel',
      'about.p1': 'Nestled in Güzelçamlı, the jewel of Kuşadası, on the shores of the Aegean, Medos Hotel is ready to offer guests an unforgettable holiday experience. Our hotel welcomes you with a comfortable and modern design of <strong>49 rooms and 150 beds</strong>.',
      'about.p2': 'Surrounded by the natural beauty of Güzelçamlı, you can visit nearby historical sites, discover the hidden coves of Dilek Peninsula National Park, or enjoy the vibrant nightlife of Kuşadası.',
      'about.stat.rooms': 'Rooms',
      'about.stat.beds': 'Beds',
      'about.stat.distance': 'Dilek Park',

      /* ── Index: Rooms ── */
      'rooms.heading': 'ROOMS',
      'rooms.standard.name': 'Standard Room',
      'rooms.standard.f1': 'Double Bed',
      'rooms.standard.f2': 'AC · WiFi · TV',
      'rooms.family.name': 'Family Room',
      'rooms.family.f1': 'Double + Twin Beds',
      'rooms.family.f2': 'Separate Bedroom · AC · WiFi',
      'rooms.suite.name': 'Family Suite',
      'rooms.suite.f1': 'Living Room + Bedroom',
      'rooms.suite.f2': 'AC · WiFi · TV',

      /* ── Index: Services ── */
      'services.heading': 'SERVICES',
      'services.pool_adult.name': 'Adult Pool',
      'services.pool_adult.desc': 'Renovated in 2024; 70 m² area, 140 cm depth.',
      'services.pool_kids.name': 'Children\'s Pool',
      'services.pool_kids.desc': 'Safe children\'s pool; 16 m² area, 40 cm depth.',
      'services.wifi.name': 'Free WiFi',
      'services.wifi.desc': 'High-speed internet in all rooms and common areas.',
      'services.restaurant.name': 'Restaurant',
      'services.restaurant.desc': 'Rich Aegean cuisine with buffet and à la carte options.',
      'services.bar.name': 'Bar',
      'services.bar.desc': 'Drinks and snacks at the poolside and dock bar.',
      'services.snackbar.name': 'Snack Bar',
      'services.snackbar.desc': 'Light meals and snacks served at the poolside.',
      'services.boat.name': 'Boat Tour',
      'services.boat.desc': 'Guided boat tour to the stunning coves of Dilek Peninsula.',
      'services.yacht.name': 'Yacht Rental',
      'services.yacht.desc': 'Rent a private yacht and freely explore the coves.',

      /* ── Index: Attractions ── */
      'attractions.heading': 'Places to Visit',
      'attractions.ephesus.name': 'Ephesus Ancient City',
      'attractions.ephesus.desc': 'One of the best-preserved ancient cities in the world — a must-see open-air museum.',
      'attractions.virgin_mary.name': 'House of Virgin Mary',
      'attractions.virgin_mary.desc': 'Sacred pilgrimage site believed to be the last home of the Virgin Mary.',
      'attractions.sirince.name': 'Şirince Village',
      'attractions.sirince.desc': 'A charming village famous for its preserved architecture and fruit wines.',
      'attractions.dilek.name': 'Dilek Peninsula',
      'attractions.dilek.desc': 'National park with 209 bird species and crystal-clear coves.',
      'attractions.zeus.name': 'Zeus Cave',
      'attractions.zeus.desc': 'A mysterious natural cave steeped in Aphrodite mythology.',
      'attractions.pigeon.name': 'Pigeon Island Castle',
      'attractions.pigeon.desc': 'Historic castle built by Barbaros Hayrettin Pasha — the symbol of Kuşadası.',

      /* ── Index: Gallery ── */
      'gallery.heading': 'Photo Gallery',

      /* ─────────── ROOM PAGES ─────────── */

      /* Standard Room */
      'page.standart.title': 'Standard Room',
      'page.standart.info_title': 'About the Room',
      'page.standart.info': 'Our Standard Rooms offer sea, partial sea, National Park or garden views and cover 21 m². Except for TRP rooms, beds can be configured as 2 single beds or 1 double bed upon request. All rooms feature air conditioning, a dressing table with mirror, wardrobes, a French balcony, bathroom and toilet, hair dryer, satellite TV and minibar. All rooms have laminate flooring. TRP rooms can be arranged as 1 double bed and 1 single bed, or 3 single beds. Extra beds are available in non-TRP rooms upon request, subject to availability and an additional charge.',
      'page.standart.features_title': 'Room Amenities',
      'page.standart.gallery_title': 'Room Photos',
      'page.standart.capacity': '2–3 Guests',
      'page.standart.size': '21 m²',
      'page.standart.view': 'Sea or Garden View',
      'page.standart.f1': 'Single/Double Bed',
      'page.standart.f2': 'Air Conditioning',
      'page.standart.f3': 'Free WiFi',
      'page.standart.f4': '40" Flat Screen TV',
      'page.standart.f5': 'Private Bathroom',
      'page.standart.f6': 'French Balcony',
      'page.standart.f7': 'Minibar',
      'page.standart.f9': 'Hair Dryer',
      'page.standart.f10': 'Slippers',
      'page.standart.f11': 'Toiletries',

      /* Family Room */
      'page.aile.title': 'Family Room',
      'page.aile.info_title': 'About the Room',
      'page.aile.info': 'Our Family Rooms consist of 2 interconnected bedrooms, each 45 m², with a maximum capacity of 5 guests. They offer sea, partial sea, National Park or garden views. Each room features air conditioning, a dressing table with mirror, wardrobes, a French balcony, bathroom and toilet, hair dryer, satellite TV and minibar. All rooms have laminate flooring.',
      'page.aile.features_title': 'Room Amenities',
      'page.aile.gallery_title': 'Room Photos',
      'page.aile.capacity': '3–5 Guests',
      'page.aile.size': '45 m²',
      'page.aile.view': 'Garden & Mountain View',
      'page.aile.f1': 'Single/Double Bed (Master)',
      'page.aile.f2': '2–3 Single Beds (2nd Room)',
      'page.aile.f3': 'Separate Bedrooms',
      'page.aile.f4': 'Air Conditioning',
      'page.aile.f5': 'Free WiFi',
      'page.aile.f6': '40" Flat Screen TV',
      'page.aile.f7': 'Private Bathroom',
      'page.aile.f9': 'Minibar',
      'page.aile.f10': 'Toiletries',
      'page.aile.f11': 'Hair Dryer',
      'page.aile.f12': 'French Balcony',
      'page.aile.f13': 'Slippers',

      /* Family Suite */
      'page.suite.title': 'Family Suite',
      'page.suite.info_title': 'About the Room',
      'page.suite.info': 'Our Suite is 75 m² and consists of 2 interconnected bedrooms and a lounge with a seating area. The bedrooms overlook the National Park and the lounge has sea views. The suite features air conditioning, a dressing table with mirror, wardrobes, a French balcony, bathroom and toilet, hair dryer, satellite TV and minibar. With an extra bed, the suite accommodates up to 7 guests.',
      'page.suite.features_title': 'Room Amenities',
      'page.suite.gallery_title': 'Room Photos',
      'page.suite.capacity': '4–6 Guests',
      'page.suite.size': '75 m²',
      'page.suite.view': 'Garden & Sea View',
      'page.suite.f1': 'Single/Double Bed (Master)',
      'page.suite.f2': '3 Single Beds (2nd Room)',
      'page.suite.f3': 'Separate Bedrooms',
      'page.suite.f4': 'Spacious Living Room',
      'page.suite.f5': 'Air Conditioning',
      'page.suite.f6': 'Free WiFi',
      'page.suite.f7': 'Flat Screen TV',
      'page.suite.f8': 'Private Bathroom',
      'page.suite.f9': 'Minibar',
      'page.suite.f10': 'French Balcony',
      'page.suite.f11': 'Toiletries',
      'page.suite.f12': 'Slippers',
      'page.suite.f13': 'Hair Dryer',

      /* ─────────── ATTRACTION PAGES ─────────── */

      /* Ephesus */
      'page.efes.title': 'Ephesus Ancient City',
      'page.efes.info_title': 'About Ephesus',
      'page.efes.info': '<p>Ephesus Ancient City is one of the most important cities of ancient Rome, located in the Selçuk district of İzmir province in western Turkey. In antiquity, Ephesus was known as a great harbour city and cultural centre. Today it is open to visitors with its archaeological remains and historical riches.</p><p>Founded in the 10th century BC, Ephesus was ruled by many civilisations including the Lydians, Persians, Macedonians and the Roman Empire. The city reached its peak during the Hellenistic and Roman periods and holds immense historical and cultural significance.</p><p>Ephesus contains many important ruins: the Temple of Artemis, the Library of Celsus, the Grand Theatre, the Fountain of Trajan and the Temple of Hadrian are among its most notable monuments. The Library of Celsus, one of the most famous structures in Ephesus, was one of the largest libraries of the ancient world. Its surviving façade remains remarkably impressive.</p><p>The Grand Theatre, with a capacity of over 25,000, is one of the most important theatres of antiquity and is still used today for concerts and events.</p><p>Located near Ephesus, this church — traditionally believed to mark the place where the Virgin Mary spent her final years — is a sacred pilgrimage site for Christians.</p><p>The museum adjacent to Ephesus displays artefacts uncovered during excavations in the region, including ancient sculptures, mosaics and other relics from antiquity.</p>',
      'page.efes.activities_title': 'Things to Do',
      'page.efes.a1': 'Visit the Library of Celsus',
      'page.efes.a2': 'Experience the ancient acoustics of the Grand Theatre',
      'page.efes.a3': 'Admire the mosaics in the Terrace Houses',
      'page.efes.a4': 'See the ruins of the Temple of Artemis',
      'page.efes.a5': 'Join a guided historical tour',
      'page.efes.a6': 'Visit the Ephesus Museum in Selçuk',
      'page.efes.distance': '30 km',

      /* Virgin Mary */
      'page.meryem.title': 'House of Virgin Mary',
      'page.meryem.info_title': 'About the House of Virgin Mary',
      'page.meryem.info': '<p>The House of the Virgin Mary is situated on Mount Bülbül, 9 km from Selçuk. It is believed that St. John brought the Virgin Mary to Ephesus 4 or 6 years after the death of Jesus. In 1891, Lazarist priests, guided by the visions of German nun A. Katharina Emmerick, identified this house through research as the place where Mary spent her final days. This discovery was a landmark event for the Christian world and shed light on religious history worldwide. The cross-plan, domed structure was later restored. The house, also considered sacred by Muslims, has hosted masses every year on 15 August since Pope Paul VI\'s visit in 1967, drawing great interest from pilgrims around the world.</p>',
      'page.meryem.activities_title': 'Things to Do',
      'page.meryem.a1': 'Visit the sacred site and offer a prayer',
      'page.meryem.a2': 'Tie a wish to the wishing wall',
      'page.meryem.a3': 'Drink from and collect the holy spring water',
      'page.meryem.a4': 'Take a nature walk on Mount Bülbül',
      'page.meryem.a5': 'Combine with a nearby Ephesus tour',
      'page.meryem.distance': '35 km',

      /* Şirince */
      'page.sirince.title': 'Şirince Village',
      'page.sirince.info_title': 'About Şirince Village',
      'page.sirince.info': '<p>Şirince is a historic and charming village located approximately 8 kilometres from the Selçuk district of İzmir province in western Turkey. In antiquity the village was known as "Kırkınca." During the Greek period it was called "Çirkince," before taking the name "Şirince" in 1926.</p><p>It sits at an elevated position above sea level, surrounded by vineyards on all sides.</p><p>Şirince is renowned for its stone houses built in typical Aegean architecture, its narrow streets and village squares. The village stands out for preserving its historic fabric with restored buildings.</p><p>Şirince is famous for its renowned vineyards and grape products. Organic wine is produced in the village. Şirince wines, olive oils and resin wines are among its most celebrated offerings.</p><p>Şirince attracts tourists with its historic atmosphere, natural beauty and local products. The village sees a surge of visitors especially at weekends and during the summer months.</p><p>Small shops selling traditional handicrafts and souvenirs can be found throughout the village. Various souvenirs such as local handicrafts, ceramic products and hand-woven goods are available.</p><p>Şirince Square is the central meeting point of the village. The square is home to various cafés, restaurants and souvenir shops. Visitors can enjoy traditional Turkish coffee and soak up the village atmosphere.</p>',
      'page.sirince.activities_title': 'Things to Do',
      'page.sirince.a1': 'Taste fruit wines and local spirits',
      'page.sirince.a2': 'Shop for handmade souvenirs',
      'page.sirince.a3': 'Walk along the cobblestone streets',
      'page.sirince.a4': 'Discover the local Aegean cuisine',
      'page.sirince.a5': 'Buy olive oil and natural products at the village market',
      'page.sirince.distance': '49 km',

      /* Dilek */
      'page.dilek.title': 'Dilek Peninsula National Park',
      'page.dilek.info_title': 'About Dilek Peninsula',
      'page.dilek.info': 'The Dilek Peninsula–Büyük Menderes Delta National Park, just 2 km from Medos Hotel, is one of Turkey\'s most important nature reserves. Spanning 27,000 hectares, it is home to 209 bird species and wildlife ranging from Mediterranean monk seals to sea turtles. Four main coves offer clean and peaceful beaches.',
      'page.dilek.activities_title': 'Things to Do',
      'page.dilek.a1': 'Swim in crystal-clear coves',
      'page.dilek.a2': 'Snorkel and discover the underwater world',
      'page.dilek.a3': 'Trek along marked nature trails',
      'page.dilek.a4': 'Go birdwatching (209 species!)',
      'page.dilek.a5': 'Take a tour boat around the coves',
      'page.dilek.a6': 'Visit Zeus Cave (inside the park)',
      'page.dilek.distance': '2 km',
      'page.dilek.coves_title': 'Coves',
      'page.dilek.cove1_name': 'İçmeler Cove',
      'page.dilek.cove1_dist': '1 km from entrance',
      'page.dilek.cove1_desc': 'Sandy seabed with shallow water.',
      'page.dilek.cove2_name': 'Aydınlık Cove',
      'page.dilek.cove2_dist': '6 km from entrance',
      'page.dilek.cove2_desc': 'Rocky seabed with very deep water.',
      'page.dilek.cove3_name': 'Kavaklı',
      'page.dilek.cove3_dist': '8 km from entrance',
      'page.dilek.cove3_desc': 'Home to very tall trees, with a rocky shore and deep sea.',
      'page.dilek.cove4_name': 'Karasu',
      'page.dilek.cove4_dist': '11 km from entrance',
      'page.dilek.cove4_desc': 'Rocky shore; the cove drops to considerable depth within just 1-2 steps, which is the origin of its name.',

      /* Zeus */
      'page.zeus.title': 'Zeus Cave',
      'page.zeus.info_title': 'About Zeus Cave',
      'page.zeus.info': '<p>Zeus Cave is one of the important natural and historical sites located within the Dilek Peninsula–Büyük Menderes Delta National Park in the Kuşadası district of Aydın province, Turkey. The cave holds mythological significance and is known as the place where Zeus is believed to have been born.</p><p>A chapel inside the cave and the natural formations within it attract visitors. According to mythological accounts, Zeus\'s mother Rhea gave birth to Zeus in the Dikili Taş Forest to save him from Cronus. During this birth, it was requested that the cave be sealed to protect Zeus. According to mythology, the cave where Zeus was born possesses a unique atmosphere and great historical depth.</p><p>As it lies within a national park, Zeus Cave draws attention not only for its natural beauty but also for its historical and mythological richness. The area can be an interesting destination for nature lovers, history enthusiasts and mythology admirers alike.</p>',
      'page.zeus.activities_title': 'Things to Do',
      'page.zeus.a1': 'Cool off in the crystal-clear, icy spring water',
      'page.zeus.a2': 'Trek along the forest hiking trail',
      'page.zeus.a3': 'Combine with other coves in the national park',
      'page.zeus.a4': 'Enjoy nature photography',
      'page.zeus.distance': '1 km',

      /* Pigeon Island */
      'page.guvercin.title': 'Pigeon Island Castle',
      'page.guvercin.info_title': 'About Pigeon Island Castle',
      'page.guvercin.info': '<p>The island, located in the Kuşadası district, is connected to the mainland by a man-made causeway. A castle built by the Genoese stands on the island, which is an iconic landmark of Kuşadası. In 2020, UNESCO added the castle to its World Heritage Tentative List under the file "Genoese Commercial Route: Fortresses and Fortified Settlements from the Mediterranean to the Black Sea."</p><p>The Güvercinada Castle, which covers the entire island, sits on a natural rocky outcrop. Its history dates back to the Genoese, who arrived in Kuşadası in the late 13th or early 14th century, and it was later renovated during the Ottoman Empire. Because the island also served as an outpost against pirates during the Ottoman period, it is also known as the Pirate\'s Castle.</p><p>The inner citadel and the city arsenal on the island were built by Barbaros Hayreddin Pasha, appointed as the first governor-general of the Province of Cezayir-i Bahr-i Sefid established in 1533. After Kuşadası was granted as an estate to Grand Vizier and son-in-law Öküz Mehmed Pasha in 1613, he had the castle repaired. In the 19th century, the outer walls and the surrounding fortifications were repaired in 1826–1827 by subaşı İlyas Ağa during the Morean Revolt. The castle was again repaired and reinforced in 1834, connected to the mainland by a breakwater in 1957, and underwent further restoration in 2013 with several structures inside the castle being restored.</p>',
      'page.guvercin.activities_title': 'Things to Do',
      'page.guvercin.a1': 'Walk the historic walls and enjoy panoramic views',
      'page.guvercin.a2': 'Watch the sunset over Kuşadası Bay',
      'page.guvercin.a3': 'Take a boat tour around the island',
      'page.guvercin.a4': 'Explore the Kuşadası bazaar and marina',
      'page.guvercin.distance': '~8 km',

      /* ─────────── ABOUT PAGE ─────────── */
      'page.about.title': 'About Us',
      'page.about.hero_subtitle': 'A unique holiday experience for everyone',
      'page.about.story_title': 'Our Story',
      'page.about.story': 'Medos Hotel is a family-run establishment on the Aegean coast of Güzelçamlı, the tranquil and verdant cove of Kuşadası. Located in the heart of nature, away from city noise yet close to everything, it offers guests a unique holiday environment. You will feel the warmth of our family and the authenticity of the Aegean in every detail.',
      'page.about.vision_title': 'Our Vision',
      'page.about.vision': 'We want to offer our guests not just a place, but an experience. Our greatest desire is to welcome you year-round in Güzelçamlı, which renews itself with different beauty every season.',
      'page.about.values_title': 'Our Values',
      'page.about.v1_title': 'Reliability',
      'page.about.v1_desc': 'We always deliver on our promises, guided by transparency and honesty.',
      'page.about.v2_title': 'Guest Focus',
      'page.about.v2_desc': 'We place guest satisfaction and comfort at the heart of every decision.',
      'page.about.v3_title': 'Continuous Improvement',
      'page.about.v3_desc': 'We embrace learning and growth to elevate our service quality every day.',
      'page.about.v4_title': 'Innovation',
      'page.about.v4_desc': 'We create a difference by generating creative and original solutions to changing needs.',
      'page.about.v5_title': 'Social Responsibility',
      'page.about.v5_desc': 'We act with awareness of our responsibilities towards society and the environment.',
      'page.about.v6_title': 'Self-Criticism & Empathy',
      'page.about.v6_desc': 'We empathise with others and learn from our mistakes to grow together.',
      'page.about.v7_title': 'Taking Initiative',
      'page.about.v7_desc': 'We take action without waiting for the perfect moment, moving forward with a solution-oriented mindset.',
      'page.about.v8_title': 'Efficiency',
      'page.about.v8_desc': 'We aim to generate the highest value by using our resources wisely.',

      'page.about.policy_title': 'Our Policies',
      'page.about.policy_commit': 'we commit.',
      'page.about.p1':  'To fulfil our compliance obligations with legal and other relevant requirements,',
      'page.about.p2':  'To ensure the availability of the knowledge and resources necessary to achieve management system objectives and targets,',
      'page.about.p3':  'To safeguard the continuing satisfaction of our stakeholders by taking into account the needs and expectations of our guests and interested parties,',
      'page.about.p4':  'To prevent errors that may arise in our activities and to eliminate identified sources of errors,',
      'page.about.p5':  'To support the procurement of energy-efficient products and services that affect energy performance,',
      'page.about.p6':  'To eliminate hazards that may arise during our activities and to reduce risks to occupational health and safety,',
      'page.about.p7':  'To provide the safe and healthy working conditions necessary to prevent work-related injury and ill health arising from our activities,',
      'page.about.p8':  'To consult and involve employees and employee representatives in our occupational health and safety activities,',
      'page.about.p9':  'During and after the delivery of our services, to reduce environmental pollution and to use energy, natural resources and materials efficiently,',
      'page.about.p10': 'To prevent pollution, to avoid negative environmental impacts arising from our activities and to increase recovery,',
      'page.about.p11': 'At every stage of the food chain, to ensure the protection of product safety and quality by prioritising human health, and to offer standardised product quality by working in cooperation with our suppliers,',

      /* ─────────── BOOKING PAGE ─────────── */
      'page.booking.title': 'Reservation',
      'page.booking.hero_subtitle': 'Secure your spot right away',

      /* ─────────── TRANSPORT PAGE ─────────── */
      'page.transport.title': 'Getting Here',
      'page.transport.hero_subtitle': 'Transport Options to Güzelçamlı',
      'page.transport.map_title': 'Location',

      /* ─────────── CONTACT PAGE ─────────── */
      'page.contact.title': 'Contact',
      'page.contact.hero_subtitle': 'We are here for your questions',
      'page.contact.form_title': 'Send a Message',
      'page.contact.name': 'Full Name',
      'page.contact.email': 'Email Address',
      'page.contact.phone': 'Phone (Optional)',
      'page.contact.subject': 'Subject',
      'page.contact.message': 'Your Message',
      'page.contact.send': 'Send',
      'page.contact.info_title': 'Contact Information',
      'page.contact.address_title': 'Address',
      'page.contact.phone_title': 'Phone',
      'page.contact.email_title': 'Email',
      'page.contact.hours_title': 'Reception Hours',
      'page.contact.hours': '24 Hours / 7 Days',
      'page.contact.form_success': 'Your message has been sent. We will get back to you as soon as possible.',

      /* ─────────── VIRTUAL TOUR PAGE ─────────── */
      'page.tour.title': 'Virtual Tour',
      'page.tour.hero_subtitle': 'Explore the hotel in 360°',
      'page.tour.intro': 'Before visiting Medos Hotel, you can explore all our areas with our 360° virtual tour. Interactively walk through our rooms, pool area, restaurant and dock.',

      /* ─────────── BLOG ─────────── */
      'nav.blog': 'Blog',
      'breadcrumb.blog': 'Blog',
      'page.blog.title': 'Blog',
      'page.blog.hero_subtitle': 'Travel Guide & News',
      'blog.read_more': 'Read More →',
      'blog.back': '← Back to Blog',
      'blog.by': 'Medos Hotel',
      'blog.kusadasi.title': 'Places to Visit in Kuşadası (2026 Updated Guide)',
      'blog.kusadasi.date': 'April 17, 2026',
      'blog.kusadasi.category': 'Travel Guide',
      'blog.kusadasi.excerpt': 'Discover the most popular places to visit near Kuşadası: Dilek Peninsula National Park, Zeus Cave and Pigeon Island Castle.',
      'blog.kusadasi.cta': 'Stay at Medos Beach Hotel and reach all these locations with ease.',
      'blog.kusadasi.body': '<p>Kuşadası is one of the most popular holiday destinations in the Aegean Region. With its rich history and stunning natural scenery, it welcomes thousands of visitors every year.</p><h2><a href="dilek_yarim_adasi_milli_park.html">Dilek Peninsula National Park</a></h2><p>One of Turkey\'s most important natural areas, the national park is home to hundreds of plant species and rich wildlife. It is an ideal spot for nature hikes and enjoying the sea.</p><h2><a href="zeus_magarasi.html">Zeus Cave</a></h2><p>Famous for its mythological stories, this cave attracts visitors with its cool waters and unique natural structure.</p><h2><a href="guvercin_ada_kalesi.html">Pigeon Island Castle</a></h2><p>One of the symbols of Kuşadası, the castle is well worth a visit for its remarkable historical atmosphere.</p>',
    },
  };

  /* ──────────────────── Core i18n functions ──────────────────────────── */

  function t(key) {
    const lang = (window.MEDOS && window.MEDOS.lang) || 'tr';
    return (T[lang] && T[lang][key]) || (T['tr'] && T['tr'][key]) || key;
  }

  function applyLang(lang) {
    /* Set html[lang] */
    document.documentElement.lang = lang;

    /* data-i18n → textContent */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = (T[lang] && T[lang][el.dataset.i18n]) || (T['tr'] && T['tr'][el.dataset.i18n]);
      if (val !== undefined) el.textContent = val;
    });

    /* data-i18n-html → innerHTML */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = (T[lang] && T[lang][el.dataset.i18nHtml]) || (T['tr'] && T['tr'][el.dataset.i18nHtml]);
      if (val !== undefined) el.innerHTML = val;
    });

    /* data-i18n-placeholder → placeholder attribute */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = (T[lang] && T[lang][el.dataset.i18nPlaceholder]) || (T['tr'] && T['tr'][el.dataset.i18nPlaceholder]);
      if (val !== undefined) el.placeholder = val;
    });

    /* data-lang blocks → show/hide */
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.hidden = (el.dataset.lang !== lang);
    });

    /* Update <title> */
    var titleKey = document.documentElement.dataset.titleI18n;
    if (titleKey) {
      var pageTitle = (T[lang] && T[lang][titleKey]) || (T['tr'] && T['tr'][titleKey]) || '';
      var siteTitle = (T[lang] && T[lang]['site.name']) || 'Medos Hotel';
      if (pageTitle) document.title = pageTitle + ' | ' + siteTitle;
    }

    /* Update lang switcher label */
    document.querySelectorAll('.lang-label').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    /* Mark active lang option */
    document.querySelectorAll('[data-set-lang]').forEach(function (el) {
      el.setAttribute('aria-current', el.dataset.setLang === lang ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (lang !== 'tr' && lang !== 'en') return;
    localStorage.setItem(LANG_KEY, lang);
    window.MEDOS.lang = lang;
    applyLang(lang);
  }

  /* ──────────────────── Language detection ───────────────────────────── */

  function detectLang() {
    return new Promise(function (resolve) {
      /* 1. localStorage */
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === 'tr' || stored === 'en') {
        resolve(stored);
        return;
      }

      /* 2. IP geolocation (with 3s timeout) */
      var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var timer = setTimeout(function () {
        if (controller) controller.abort();
        /* fallback to browser language */
        var bl = (navigator.language || navigator.userLanguage || 'tr').toLowerCase();
        var lang = bl.startsWith('tr') ? 'tr' : 'en';
        localStorage.setItem(LANG_KEY, lang);
        resolve(lang);
      }, 3000);

      var fetchOpts = controller ? { signal: controller.signal } : {};
      fetch('https://ipapi.co/json/', fetchOpts)
        .then(function (res) { return res.json(); })
        .then(function (data) {
          clearTimeout(timer);
          var lang = data.country_code === 'TR' ? 'tr' : 'en';
          localStorage.setItem(LANG_KEY, lang);
          resolve(lang);
        })
        .catch(function () {
          clearTimeout(timer);
          var bl = (navigator.language || navigator.userLanguage || 'tr').toLowerCase();
          var lang = bl.startsWith('tr') ? 'tr' : 'en';
          localStorage.setItem(LANG_KEY, lang);
          resolve(lang);
        });
    });
  }

  /* ──────────────────── Expose global API ────────────────────────────── */

  window.MEDOS = {
    lang: 'tr',
    t: t,
    setLang: setLang,
    applyLang: applyLang,
    T: T,
  };

  /* ──────────────────── Bootstrap ────────────────────────────────────── */

  detectLang().then(function (lang) {
    window.MEDOS.lang = lang;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { applyLang(lang); });
    } else {
      applyLang(lang);
    }
  });

})();
