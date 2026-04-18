/* ═══════════════════════════════════════════════════════════════════════
   Medos Hotel — chatbot.js
   Self-contained chat widget. Injects own HTML + CSS into body.
   No external dependencies. Positioned bottom-left to avoid alt_butonlar.
   Falls back to local FAQ when /api/chat is unavailable (static hosting).
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ──────────────────── Config ──────────────────────────────────────── */
  var CONFIG = {
    apiUrl:       '/api/chat',
    leadUrl:      '/api/lead',
    whatsappUrl:  'https://wa.me/905416461786',
    defaultLang:  'tr'
  };

  /* ──────────────────── UI Strings ──────────────────────────────────── */
  var TEXTS = {
    tr: {
      toggle:    '💬 Yardım & Rezervasyon',
      title:     'Medos Hotel',
      subtitle:  'Size nasıl yardımcı olabiliriz?',
      input:     'Sorunuzu yazın...',
      send:      'Gönder',
      wa:        'WhatsApp ile yazın',
      leadName:  'Adınız',
      leadPhone: 'Telefon',
      leadNote:  'Talebiniz',
      leadSend:  'Gönder',
      leadSent:  'Teşekkür ederiz. Talebiniz ekibimize iletildi.',
      welcome:   'Merhaba 👋 Medos Hotel\'e hoş geldiniz. Aşağıdaki başlıklardan birini seçebilir veya sorunuzu yazabilirsiniz.',
      fallback:  'Sorunuza net bir cevap bulamadım. İsterseniz iletişim bilgilerinizi bırakabilir ya da WhatsApp üzerinden bize yazabilirsiniz.',
      quick:     ['Fiyat Sor', 'Müsaitlik Sor', 'Denize Uzaklık', 'Giriş / Çıkış Saatleri', 'Wi-Fi', 'Oda Temizliği', 'Pansiyon Tipleri', 'Düğün & Nişan & Aktivite', 'WhatsApp']
    },
    en: {
      toggle:    '💬 Help & Reservation',
      title:     'Medos Hotel',
      subtitle:  'How can we help you?',
      input:     'Type your question...',
      send:      'Send',
      wa:        'Write on WhatsApp',
      leadName:  'Your name',
      leadPhone: 'Phone',
      leadNote:  'Your request',
      leadSend:  'Send',
      leadSent:  'Thank you. Your request has been sent to our team.',
      welcome:   'Hello 👋 Welcome to Medos Hotel. You can choose one of the topics below or type your question.',
      fallback:  'I could not find a clear answer. You can leave your contact details or write to us on WhatsApp.',
      quick:     ['Ask Price', 'Check Availability', 'Distance to Beach', 'Check-in / Check-out Times', 'Wi-Fi', 'Room Cleaning', 'Board Types', 'Wedding & Engagement & Activities', 'WhatsApp']
    }
  };

  /* ──────────────────── Quick chip → message mapping ───────────────── */
  var QUICK_MAP = {
    tr: {
      'Fiyat Sor':                    'Fiyat bilgisi almak istiyorum.',
      'Müsaitlik Sor':                'Müsaitlik bilgisi almak istiyorum.',
      'Denize Uzaklık':               'Denize uzaklığınız nedir?',
      'Giriş / Çıkış Saatleri':       'Giriş ve çıkış saatleri nedir?',
      'Wi-Fi':                        'Wi-Fi internet hakkında bilgi almak istiyorum.',
      'Oda Temizliği':                'Oda temizliği nasıl yapılıyor?',
      'Pansiyon Tipleri':             'Pansiyon tipleriniz nelerdir?',
      'Düğün & Nişan & Aktivite':     'Düğün, nişan ve aktiviteler hakkında bilgi almak istiyorum.',
      'WhatsApp':                     'WhatsApp iletişim bilgisi nedir?'
    },
    en: {
      'Ask Price':                            'I want to ask for the price.',
      'Check Availability':                   'I want to check availability.',
      'Distance to Beach':                    'What is the distance to the beach?',
      'Check-in / Check-out Times':           'What are the check-in and check-out times?',
      'Wi-Fi':                                'I want to know about Wi-Fi internet.',
      'Room Cleaning':                        'How does room cleaning work?',
      'Board Types':                          'What are your board types?',
      'Wedding & Engagement & Activities':    'I want information about weddings, engagements, and activities.',
      'WhatsApp':                             'What is your WhatsApp contact?'
    }
  };

  /* ──────────────────── Local FAQ (static fallback) ─────────────────── */
  var LOCAL_FAQ = {
    tr: [
      { keywords: ["fiyat","ücret","gecelik","oda fiyatı"],
        answer: "Fiyatlarımız tarih, kişi sayısı ve oda tipine göre değişmektedir. Lütfen giriş-çıkış tarihinizi ve kişi sayısını paylaşın ya da WhatsApp üzerinden bizimle iletişime geçin: +90 541 646 17 86." },
      { keywords: ["müsaitlik","boş oda","odanız var mı?"],
        answer: "Müsaitlik için lütfen giriş tarihi, çıkış tarihi ve kişi sayısını paylaşın. 0256 646 1786 numaralı telefondan veya Whatsapp hattımızdan iletişime geçebilirsiniz. ." },
      { keywords: ["deniz","plaj","iskele","uzaklık"],
        answer: "Otelimiz denize sıfır konumdadır. Özel iskele 50 metre, plaj ise 250 metre mesafededir." },
      { keywords: ["giris","cikis","check","late","erken"],
        answer: "Giriş saati 14:00, çıkış saati 12:00'dir. Erken giriş ve geç çıkış talepleri müsaitliğe bağlıdır ve ek ücrete tabi olabilir." },
      { keywords: ["wifi","wi-fi","internet"],
        answer: "Evet, odalarda ve tüm genel alanlarda erişim sağlayabileceğiniz yüksek hızlı internet bağlantımız ücretsiz sunulmaktadır." },
      { keywords: ["oda temizliği","temizlik","havlu","çarşaf","değişim","oda temizlik"],
        answer: "Odalar 2 günde bir ücretsiz temizlenir. Çarşaf ve havlular da 2 günde bir ücretsiz değiştirilir. 2 günden önce istenen ek temizlik ve değişim ücretli olabilir." },
      { keywords: ["pansiyon","konsept","soft all inclusive","bed breakfast","oda & kahvaltı","alkolsüz her şey dahil"],
        answer: "Otelimiz oda & kahvaltı ve alkolsüz her şey dahil konseptlerinde hizmet vermektedir." },
      { keywords: ["dugun","nisan","aktivite","organizasyon","tekne","yat"],
        answer: "Düğün, nişan ve özel organizasyon talepleriniz için bizimle iletişime geçebilirsiniz. Ayrıca tekne turu, özel yat kiralama ve çeşitli aktiviteler hakkında da bilgi verebiliriz." },
      { keywords: ["whatsapp","iletisim","rezervasyon"],
        answer: "Bizimle WhatsApp üzerinden hızlıca iletişime geçebilirsiniz: +90 541 646 17 86" },
      { keywords: ["havuz saatleri","açık saatler","sezon saatleri","yetişkin havuzu","çocuk havuzu","havuz derinliği","havuz ölçüleri","otel havuzu","aile dostu havuz","çocuk güvenliği","yüzme alanı","havuz bilgisi"],
        answer: "Havuzlarımız sezon boyunca her gün 09:00 – 19:00 saatleri arasında hizmet vermektedir.\nYetişkin havuzumuz 70 m² büyüklüğünde olup 140 cm derinliğindedir. Çocuk havuzumuz ise 16 m² alanında ve 40 cm derinliğindedir." },
      { keywords: ["otel ulaşım","nasıl gidilir","yol tarifi","kuşadası ulaşım","güzelçamlı ulaşım","izmir havalimanı transfer","dolmuş","toplu taşıma","otel konum","otele nasıl gelirim","otele ulaşım"],
        answer: "Otelimize ulaşım oldukça kolaydır. Kuşadası Güzelçamlı'da bulunan otelimize; İzmir Adnan Menderes Havalimanı üzerinden transfer, özel araç veya toplu taşıma ile ulaşabilirsiniz. Kuşadası merkezden Güzelçamlı'ya düzenli dolmuş seferleri vardır.\n\nDetaylı yol tarifi ve ulaşım seçenekleri için:\n👉 https://medoshotel.com/ulasim.html" },
      { keywords: ["gezilecek yerler","kuşadası gezilecek yerler","güzelçamlı gezilecek yerler","dilek yarımadası milli parkı","zeus mağarası","tekne turları","sahil","doğa gezisi","turistik yerler"],
        answer: "Otelimiz, doğa ve keşif açısından zengin bir bölgede yer almaktadır. Dilek Yarımadası Milli Parkı, Zeus Mağarası, Güzelçamlı sahili ve tekne turları ile keşfedebileceğiniz birçok güzel nokta bulunmaktadır.\n\nTüm gezilecek yerleri detaylı incelemek için:\n👉 https://medoshotel.com/index.html#gezilecek-yerler" },
      { keywords: ["otopark","ücretsiz otopark","otel otoparkı","park yeri","araç park","otopark müsaitlik","sınırlı otopark","ücretsiz park"],
        answer: "Otelimizde misafirlerimiz için sınırlı sayıda ücretsiz otopark alanı bulunmaktadır. Müsaitlik durumuna göre kullanım sağlanmaktadır." },
      { keywords: ["sigara","sigara yasağı","sigara içmek yasak","otel kuralları","kapalı alan sigara","oda sigara yasağı","banyo sigara yasağı","koridor sigara yasağı","cezai işlem","sigara cezası"],
        answer: "Oda, banyo, koridor ve tüm kapalı alanlarda sigara içmek kesinlikle yasaktır. Sigara içildiğinin tespit edilmesi durumunda cezai işlem uygulanmaktadır." },
      { keywords: ["yiyecek yasağı","içecek yasağı","oda kuralları","hijyen kuralları","odaya yemek","odaya içecek","otel kuralları","yemek çıkarma yasak"],
        answer: "Hijyen kuralları gereği odalara yiyecek ve içecek çıkarılması yasaktır. Anlayışınız için teşekkür ederiz." },
      { keywords: ["alkolsüz her şey dahil","ücretsiz içecekler","içecek saatleri","alkolsüz içecekler","meşrubatlar","meyve suyu","su","kahve","çay","sıcak çikolata"],
        answer: "Alkolsüz her şey dahil konsepti kapsamında; alkolsüz içecekler (meşrubatlar, konsantre meyve suları, su) ile sıcak içecekler (kahve, çay, sıcak çikolata) ücretsiz olarak sunulmaktadır. İçecek servisi 07:30 – 22:00 saatleri arasındadır ve tüm içecekler bardakta servis edilir." },
      { keywords: ["ziyaretçi politikası","misafir ziyareti","otel kuralları","resepsiyon bildirimi","odaya ziyaretçi","ziyaretçi yasağı","kaçak ziyaretçi","otel ücreti","güvenlik kuralları"],
        answer: "Resepsiyona bilgi verilmeden ziyaretçilerin odaya veya otel içerisindeki alanlara girişi yasaktır. Kurala uyulmaması durumunda ziyaretçi otel dışına çıkarılır ve kaçak ziyaretçi sayısı kadar ücret tahsil edilir." },
      { keywords: ["havalimanı transfer","transfer hizmeti","ücretli transfer","özel araç","taksi","izmir havalimanı","otel transfer","ulaşım hizmeti"],
        answer: "Havalimanı transfer hizmeti talep eden misafirlerimize ücretli olarak özel araç veya taksi organizasyonu sağlanmaktadır." },
      { keywords: ["kahvaltı","öğün saatleri","yemek saatleri","kahvaltı saatleri","öğle yemeği","akşam yemeği","restoran","lidya restoran","açık büfe","set menü","yemek yeri"],
        answer: "Tüm öğünler zemin katta bulunan Lidya Restoran'da servis edilmektedir.\nKahvaltı: 07:30 – 10:00\nÖğle Yemeği: 12:00 – 13:30\nAkşam Yemeği: 19:00 – 21:00\n\nAkşam yemeği, yeterli misafir sayısına ulaşıldığında açık büfe, diğer durumlarda set menü olarak sunulmaktadır. Yemek saatleri değişiklik gösterebilir." },
      { keywords: ["iskele","ücretli iskele","denize giriş","şezlong","şezlong kiralama","yeme içme","deniz","plaj hizmeti","iskele hizmetleri","yiyecek","içecek"],
        answer: "Deniz üzerinde bulunan iskelemiz herkese açık olup ücretlidir. İskelede denize girebilir, şezlong kiralayabilir ve yeme-içme hizmetlerinden faydalanabilirsiniz." },
      { keywords: ["oda tipleri","standart oda","aile odası","otel odaları","2 kişilik oda","aile odası 3 5 kişilik","oda özellikleri","klima wifi tv","konaklama seçenekleri"],
        answer: "Otelimizde iki farklı oda tipi bulunmaktadır:\n• Standart Oda: 2 kişilik konaklama için uygundur.\n• Aile Odası: 3–7 kişilik konaklamalar için geniş ve konforlu alan sunar.\n\nDetaylı bilgi için: 👉 https://medoshotel.com/index.html#odalar" }
    ],
    en: [
      { keywords: ["price","rate","cost"],
        answer: "Our prices vary depending on dates, number of guests, and room type. Please share your check-in/check-out dates and number of guests, or contact us on WhatsApp: +90 541 646 17 86." },
      { keywords: ["availability","available","room"],
        answer: "For availability, please share your check-in date, check-out date, and number of guests. You can contact us at +90256 646 1786 or via our WhatsApp line." },
      { keywords: ["beach","distance","pier"],
        answer: "Our hotel is right by the sea. The private pier is 50 metres away and the beach is 250 metres away." },
      { keywords: ["check-in","check out","checkout","early","late"],
        answer: "Check-in starts at 14:00 and check-out is at 12:00. Early check-in and late check-out requests depend on availability and may be subject to an extra charge." },
      { keywords: ["wifi","wi-fi","internet"],
        answer: "Yes, we offer free high-speed internet access in the rooms and all public areas." },
      { keywords: ["cleaning","housekeeping","towels","linen"],
        answer: "Rooms are cleaned free of charge every 2 days. Bed linen and towels are also changed every 2 days free of charge. Additional cleaning requested earlier may be charged." },
      { keywords: ["board","concept","soft all inclusive","bed breakfast"],
        answer: "Our hotel operates with Bed & Breakfast and Soft All Inclusive concepts." },
      { keywords: ["wedding","engagement","activity","boat","yacht","event"],
        answer: "You can contact us for wedding, engagement, and special event requests. We can also provide information about boat tours, private yacht rental, and various activities." },
      { keywords: ["whatsapp","contact","reservation"],
        answer: "You can quickly contact us on WhatsApp: +90 541 646 17 86" },
      { keywords: ["pool hours","opening hours","seasonal hours","adult pool","children's pool","pool depth","pool size","hotel pool","family-friendly pool","kids pool safety","swimming area","pool information"],
        answer: "Our pools are open daily from 09:00 to 19:00 during the season.\nThe adult pool is 70 m² in size with a depth of 140 cm, while the children's pool covers 16 m² and has a depth of 40 cm." },
      { keywords: ["things to do","places to visit","kusadasi attractions","guzelcamli attractions","dilek peninsula national park","zeus cave","boat tours","beach","nature trips","tourist attractions"],
        answer: "Our hotel is located in a region rich in nature and attractions. You can explore many beautiful places such as Dilek Peninsula National Park, Zeus Cave, Güzelçamlı beach, and boat tours.\n\nFor more details about nearby attractions:\n👉 https://medoshotel.com/index.html#gezilecek-yerler" },
      { keywords: ["parking","free parking","hotel parking","parking space","car park","parking availability","limited parking","free car park"],
        answer: "Our hotel offers a limited number of free parking spaces for guests. Availability is subject to capacity." },
      { keywords: ["how to get there","hotel directions","location","kusadasi transport","guzelcamli location","izmir airport transfer","minibus dolmus","public transport","hotel location"],
        answer: "Reaching our hotel is easy. Located in Güzelçamlı, Kuşadası, you can get to our hotel via İzmir Adnan Menderes Airport by transfer, private car, or public transportation. There are regular minibus (dolmuş) services from Kuşadası center to Güzelçamlı." },
      { keywords: ["no smoking","smoking policy","hotel rules","indoor smoking ban","room smoking ban","bathroom smoking","corridor smoking","penalty","smoking fine","smoke","smoking"],
        answer: "Smoking is strictly prohibited in rooms, bathrooms, corridors, and all indoor areas. A penalty will be applied if smoking is detected." },
      { keywords: ["food policy","beverage policy","room rules","hygiene rules","food in rooms","drinks in rooms","hotel rules","no food allowed"],
        answer: "For hygiene reasons, bringing food and beverages into the rooms is not allowed. Thank you for your understanding." },
      { keywords: ["non alcoholic all inclusive","free drinks","beverage hours","soft drinks","fruit juice","water","coffee","tea","hot chocolate"],
        answer: "As part of the non-alcoholic all-inclusive concept, soft drinks (carbonated drinks, concentrated fruit juices, water) and hot beverages (coffee, tea, hot chocolate) are offered free of charge. Beverage service is available between 07:30 – 22:00, and all drinks are served in glasses." },
      { keywords: ["visitor policy","guest visitors","hotel rules","reception notification","visitors in room","unauthorized visitor","visitor restriction","hotel fee","security policy"],
        answer: "Visitors are not allowed to enter rooms or hotel areas without informing the reception. In case of violation, the visitor will be asked to leave the hotel and a fee will be charged per unauthorized visitor." },
      { keywords: ["airport transfer","transfer service","paid transfer","private car","taxi","izmir airport","hotel transfer","transportation service"],
        answer: "We offer paid airport transfer services for our guests upon request, including private car or taxi arrangements." },
      { keywords: ["meal times","dining hours","breakfast time","lunch time","dinner time","restaurant","lidya restaurant","open buffet","set menu","dining location"],
        answer: "All meals are served at the Lidya Restaurant located on the ground floor.\nBreakfast: 07:30 – 10:00\nLunch: 12:00 – 13:30\nDinner: 19:00 – 21:00\n\nDinner is served as an open buffet when there are enough guests; otherwise, it is offered as a set menu. Meal times may vary." },
      { keywords: ["pier","paid pier","sea access","swimming","sunbed","sunbed rental","food and beverage","beach service","pier services"],
        answer: "Our pier located over the sea is open to everyone and is subject to a fee. You can swim from the pier, rent sunbeds, and enjoy food and beverage services." },
      { keywords: ["room types","standard room","family room","hotel rooms","double room","family room 3 5 persons","room amenities","air conditioning wifi tv","accommodation options"],
        answer: "Our hotel offers two types of rooms:\n• Standard Room: Suitable for 2 guests.\n• Family Room: Spacious and comfortable, ideal for 3–5 guests.\n\nFor more details: 👉 https://medoshotel.com/index.html#odalar" }
    ]
  };

  /* ──────────────────── Inject HTML ─────────────────────────────────── */
  var ROOT_ID = 'medos-chatbot-root';
  if (document.getElementById(ROOT_ID)) return; /* prevent double-init */

  var rootDiv = document.createElement('div');
  rootDiv.id = ROOT_ID;
  rootDiv.innerHTML = [
    '<style>',
    '#medos-chatbot-root,#medos-chatbot-root *{box-sizing:border-box;font-family:"Kanit",Arial,sans-serif;}',
    '#medos-chatbot-root{position:fixed;right:calc(1.5rem + env(safe-area-inset-right,0px));bottom:calc(1.75rem + env(safe-area-inset-bottom,0px) + 58px);z-index:9800;}',
    '.mc-toggle{display:none;}',
    '.mc-box{width:360px;max-height:600px;display:none;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 20px 60px rgba(19,80,139,.18);border:1px solid #d9efeb;}',
    '.mc-box.open{display:flex;flex-direction:column;}',
    '.mc-header{background:linear-gradient(135deg,var(--clr-secondary,#13508b),var(--clr-primary,#00b1c9));color:#fff;padding:16px 18px;display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-shrink:0;}',
    '.mc-title{margin:0;font-size:17px;font-weight:700;}',
    '.mc-subtitle{margin:3px 0 0;font-size:12px;color:rgba(255,255,255,.88);}',
    '.mc-lang{border:none;background:rgba(255,255,255,.15);color:#fff;border-radius:10px;padding:7px 9px;font-size:12px;font-weight:700;cursor:pointer;}',
    '.mc-body{display:flex;flex-direction:column;flex:1;min-height:0;padding:10px;background:#f7faf9;gap:8px;}',
    '.mc-quick{display:flex;flex-wrap:wrap;gap:6px;background:#fff;border:1px solid #e5f0ee;border-radius:16px;padding:8px;flex-shrink:0;}',
    '.mc-chip{border:1px solid #d9eeea;background:#f9fdfc;color:#334155;border-radius:999px;padding:6px 11px;font-size:11.5px;cursor:pointer;font-family:inherit;transition:background 150ms,border-color 150ms;}',
    '.mc-chip:hover{background:#e8f8f5;border-color:#00b1c9;color:#00b1c9;}',
    '.mc-messages{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:8px;padding-right:2px;}',
    '.mc-msg{max-width:88%;padding:10px 13px;border-radius:16px;font-size:13.5px;line-height:1.55;white-space:pre-line;}',
    '.mc-msg.bot{background:#eaf7f5;border:1px solid #d5eeea;align-self:flex-start;border-bottom-left-radius:4px;}',
    '.mc-msg.user{background:#eef4ff;border:1px solid #dce8fb;align-self:flex-end;border-bottom-right-radius:4px;}',
    '.mc-lead{display:none;background:#fff8ef;border:1px solid #f0d9b5;border-radius:16px;padding:10px;flex-shrink:0;}',
    '.mc-lead.show{display:block;}',
    '.mc-lead input,.mc-lead textarea{width:100%;border:1px solid #d5e8e4;background:#fff;border-radius:10px;padding:9px 11px;font-size:13px;font-family:inherit;outline:none;margin-top:6px;}',
    '.mc-lead input:first-child{margin-top:0;}',
    '.mc-lead textarea{min-height:60px;resize:vertical;}',
    '.mc-row{display:flex;gap:7px;flex-shrink:0;}',
    '.mc-input{flex:1;border:1px solid #d5e8e4;background:#fff;border-radius:12px;padding:10px 13px;font-size:13.5px;font-family:inherit;outline:none;}',
    '.mc-input:focus{border-color:var(--clr-primary,#00b1c9);box-shadow:0 0 0 3px rgba(0,177,201,.12);}',
    '.mc-send,.mc-lead button{border:none;background:var(--clr-primary,#00b1c9);color:#fff;border-radius:12px;padding:10px 15px;font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:background 150ms;}',
    '.mc-send:hover,.mc-lead button:hover{background:var(--clr-primary-dk,#0097ac);}',
    '.mc-wa{display:block;text-align:center;text-decoration:none;background:#f0fdf8;color:#13508b;border:1px solid #b8e8d4;border-radius:12px;padding:11px;font-size:13px;font-weight:600;transition:background 150ms;flex-shrink:0;}',
    '.mc-wa:hover{background:#dcf5ec;}',
    '@media(max-width:520px){#medos-chatbot-root{right:10px;bottom:calc(1.75rem + env(safe-area-inset-bottom,0px) + 58px);}.mc-box{width:calc(100vw - 20px);max-height:75vh;}}',
    '</style>',
    '<div id="mc-box" class="mc-box">',
    '  <div class="mc-header">',
    '    <div><h3 id="mc-title" class="mc-title"></h3><p id="mc-subtitle" class="mc-subtitle"></p></div>',
    '    <select id="mc-lang" class="mc-lang"><option value="tr">TR</option><option value="en">EN</option></select>',
    '  </div>',
    '  <div class="mc-body">',
    '    <div id="mc-quick" class="mc-quick"></div>',
    '    <div id="mc-messages" class="mc-messages"></div>',
    '    <div id="mc-lead" class="mc-lead">',
    '      <input id="mc-lead-name" type="text">',
    '      <input id="mc-lead-phone" type="tel">',
    '      <textarea id="mc-lead-note"></textarea>',
    '      <button id="mc-lead-submit" type="button"></button>',
    '    </div>',
    '    <div class="mc-row">',
    '      <input id="mc-input" class="mc-input" type="text">',
    '      <button id="mc-send" class="mc-send" type="button"></button>',
    '    </div>',
    '    <a id="mc-wa" class="mc-wa" target="_blank" rel="noopener noreferrer"></a>',
    '  </div>',
    '</div>',
    '<button id="mc-toggle" class="mc-toggle" type="button"></button>'
  ].join('');

  document.body.appendChild(rootDiv);

  /* ──────────────────── Element refs ────────────────────────────────── */
  var el = {
    toggle:      document.getElementById('mc-toggle'),
    box:         document.getElementById('mc-box'),
    title:       document.getElementById('mc-title'),
    subtitle:    document.getElementById('mc-subtitle'),
    lang:        document.getElementById('mc-lang'),
    quick:       document.getElementById('mc-quick'),
    messages:    document.getElementById('mc-messages'),
    lead:        document.getElementById('mc-lead'),
    leadName:    document.getElementById('mc-lead-name'),
    leadPhone:   document.getElementById('mc-lead-phone'),
    leadNote:    document.getElementById('mc-lead-note'),
    leadSubmit:  document.getElementById('mc-lead-submit'),
    input:       document.getElementById('mc-input'),
    send:        document.getElementById('mc-send'),
    wa:          document.getElementById('mc-wa')
  };

  /* ──────────────────── Helpers ──────────────────────────────────────── */
  function lang() { return el.lang.value || CONFIG.defaultLang; }

  function normalize(text) {
    return String(text || '').toLowerCase()
      .replace(/ç/g,'c').replace(/ğ/g,'g').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ş/g,'s').replace(/ü/g,'u')
      .replace(/Ç/g,'c').replace(/Ğ/g,'g').replace(/İ/g,'i').replace(/Ö/g,'o').replace(/Ş/g,'s').replace(/Ü/g,'u')
      .replace(/[^a-z0-9\s\-]/g,' ').replace(/\s+/g,' ').trim();
  }

  function addMessage(text, type) {
    var div = document.createElement('div');
    div.className = 'mc-msg ' + type;
    div.textContent = text;
    el.messages.appendChild(div);
    el.messages.scrollTop = el.messages.scrollHeight;
  }

  function showLead(show) { el.lead.classList.toggle('show', !!show); }

  /* ──────────────────── Render UI texts ─────────────────────────────── */
  function renderTexts() {
    var t = TEXTS[lang()];
    el.toggle.textContent    = t.toggle;
    el.title.textContent     = t.title;
    el.subtitle.textContent  = t.subtitle;
    el.input.placeholder     = t.input;
    el.send.textContent      = t.send;
    el.wa.textContent        = t.wa;
    el.wa.href               = CONFIG.whatsappUrl;
    el.leadName.placeholder  = t.leadName;
    el.leadPhone.placeholder = t.leadPhone;
    el.leadNote.placeholder  = t.leadNote;
    el.leadSubmit.textContent = t.leadSend;
    renderQuick();
  }

  function renderQuick() {
    el.quick.innerHTML = '';
    TEXTS[lang()].quick.forEach(function (label) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mc-chip';
      btn.textContent = label;
      btn.addEventListener('click', function () {
        if (label === 'WhatsApp' || label === 'WhatsApp') {
          window.open(CONFIG.whatsappUrl, '_blank');
          return;
        }
        el.input.value = QUICK_MAP[lang()][label] || label;
        sendMessage();
      });
      el.quick.appendChild(btn);
    });
  }

  /* ──────────────────── Local FAQ matching ───────────────────────────── */
  function localAnswer(message) {
    var text = normalize(message);
    var best = null, bestScore = 0;
    (LOCAL_FAQ[lang()] || []).forEach(function (item) {
      var score = 0;
      item.keywords.forEach(function (kw) {
        var k = normalize(kw);
        if (k && text.indexOf(k) > -1) score += k.indexOf(' ') > -1 ? 3 : 1;
      });
      if (score > bestScore) { best = item; bestScore = score; }
    });
    return bestScore > 0 ? best.answer : null;
  }

  /* ──────────────────── Send message ────────────────────────────────── */
  function sendMessage() {
    var message = el.input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    el.input.value = '';
    showLead(false);

    fetch(CONFIG.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message, lang: lang() })
    })
    .then(function (res) {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(function (data) {
      addMessage(data.reply || TEXTS[lang()].fallback, 'bot');
      showLead(!!data.showLeadForm);
    })
    .catch(function () {
      var answer = localAnswer(message);
      if (answer) {
        addMessage(answer, 'bot');
      } else {
        addMessage(TEXTS[lang()].fallback, 'bot');
        showLead(true);
      }
    });
  }

  /* ──────────────────── Submit lead form ────────────────────────────── */
  function submitLead() {
    var payload = {
      name:   el.leadName.value.trim(),
      phone:  el.leadPhone.value.trim(),
      note:   el.leadNote.value.trim(),
      source: 'medoshotel-embed'
    };
    if (!payload.name && !payload.phone && !payload.note) return;

    fetch(CONFIG.leadUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function () {});

    addMessage(TEXTS[lang()].leadSent, 'bot');
    el.leadName.value  = '';
    el.leadPhone.value = '';
    el.leadNote.value  = '';
    showLead(false);
  }

  /* ──────────────────── Event listeners ─────────────────────────────── */
  el.toggle.addEventListener('click', function () {
    el.box.classList.toggle('open');
  });

  el.send.addEventListener('click', sendMessage);
  el.leadSubmit.addEventListener('click', submitLead);

  el.input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  el.lang.addEventListener('change', function () {
    el.messages.innerHTML = '';
    renderTexts();
    addMessage(TEXTS[lang()].welcome, 'bot');
    showLead(false);
  });

  /* ──────────────────── Public API ──────────────────────────────────── */
  window.MedosChat = {
    toggle: function () { el.box.classList.toggle('open'); },
    open:   function () { el.box.classList.add('open'); },
    close:  function () { el.box.classList.remove('open'); }
  };

  /* ──────────────────── Init ─────────────────────────────────────────── */
  renderTexts();
  addMessage(TEXTS[lang()].welcome, 'bot');

  /* Sync with site language if MEDOS i18n is active */
  if (window.MEDOS && window.MEDOS.lang) {
    el.lang.value = window.MEDOS.lang;
    renderTexts();
    el.messages.innerHTML = '';
    addMessage(TEXTS[lang()].welcome, 'bot');
  }

})();
