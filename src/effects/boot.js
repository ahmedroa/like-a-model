/* ==========================================================================
   Like A Model — Landing Page JS
   ──────────────────────────────────────────────────────────────────────────
   ✏️  كل ما يحتاج تعديلًا موجود في الكتل المرقّمة أدناه فقط.
   ========================================================================== */

/* ✏️ ①  بيانات التواصل */
export const CONTACT = {
  whatsapp    : '966542555516',              // رقم واتساب بصيغة دولية بدون + أو مسافات
  whatsappText: '0542555516',                // الرقم كما يُعرض للزائرة
  phoneTel    : '+966920031018',             // ما يُتصل به فعليًا عند الضغط
  phoneText   : '920031018',                 // الرقم الموحّد كما يُعرض
  email       : 'info@likeamodel.com.sa',
  address     : 'الرياض – المملكة العربية السعودية',

  /* ✏️ روابط الحسابات — ضعي رابط الحساب الكامل لكل منصّة.
     اتركي القيمة فارغة '' لإخفاء أيقونة المنصّة من الموقع بالكامل. */
  social: {
    tiktok   : 'https://www.tiktok.com/',
    youtube  : 'https://www.youtube.com/',
    instagram: 'https://www.instagram.com/',
    facebook : 'https://www.facebook.com/',
    x        : 'https://x.com/',
    linkedin : 'https://www.linkedin.com/'
  }
};

/* ✏️ ③  فيديو الهيرو — خلفية سينمائية (أول ٣ ثوانٍ حلقيًا). */
export const VIDEO = {
  url   : 'https://www.youtube.com/watch?v=nuvMkMLdQqc',
  poster: 'https://i.ytimg.com/vi/nuvMkMLdQqc/maxresdefault.jpg',
  start : 0,
  end   : 3
};

/* ✏️ ④  خريطة موقع الشركة — غيّري الرابطين معًا عند اعتماد الموقع النهائي */
export const MAP = {
  embed: 'https://www.google.com/maps?q=حي%20الورود%2C%20الرياض%2C%20المملكة%20العربية%20السعودية&output=embed',
  open:  'https://www.google.com/maps?q=حي%20الورود%2C%20الرياض%2C%20المملكة%20العربية%20السعودية'
};

/* ✏️ ⑤  وجهة نموذج «تواصل معنا»
   endpoint فارغ  → يُرسَل الطلب عبر واتساب برسالة جاهزة (لا يحتاج خادمًا).
   endpoint مضبوط → يُرسَل الطلب بصيغة JSON عبر POST (Formspree / Google Apps Script / API خاص). */
export const FORM = {
  endpoint: ''
};

/* ✏️ ⑥  النسخة الإنجليزية — ضعي رابط الصفحة الإنجليزية لتفعيل زر EN */
export const LANG = {
  enUrl: ''                                  // مثال: 'en/index.html'
};

/* ✏️ ⑦  شكل أرقام «نجاحنا بالأرقام»: false = ٣٥+ عربية · true = 35+ لاتينية */
export const STATS_LATIN = false;

/* ✏️ ⑧  أسئلة وإجابات الشات بوت (ثابتة — بدون API) */
export const CHAT_FAQ = [
  {
    q: 'ما هو Like A Model؟',
    a: 'Like A Model هي رحلة تحوّل متكاملة صُممت خصيصًا لكِ، تجمع التدريب الشخصي والتغذية والمتابعة وقياس النتائج؛ لبناء أسلوب حياة متوازن ونتائج تدوم.'
  },
  {
    q: 'كيف أبدأ رحلتي؟',
    a: 'ابدئي بجلسة تقييم مجانية، ثم نحدد هدفكِ ومستوى تجربتكِ وأسلوب التدريب الأنسب لكِ، وبعدها نصمّم رحلتكِ الخاصة.'
  },
  {
    q: 'هل البرنامج الغذائي مشمول ضمن الاشتراك؟',
    a: 'نعم، يتضمن البرنامج توجيهًا غذائيًا مصممًا ليتناسب مع أهدافكِ واحتياجاتكِ ونمط حياتكِ.'
  },
  {
    q: 'ماذا يشمل الاشتراك؟',
    a: 'يشمل جلسة تقييم، تحليل تكوين الجسم InBody، قياسات دورية، جلسات تدريب شخصية، برنامجًا غذائيًا، ومتابعة مستمرة بحسب الباقة المناسبة لكِ.'
  },
  {
    q: 'ما الفرق بين EMS Training وPersonal Training وReformer Pilates؟',
    a: 'EMS Training يعتمد على التحفيز الكهربائي للعضلات، ومدة الجلسة 20 دقيقة.\nPersonal Training تدريب شخصي مصمم وفق أهدافكِ، ومدة الجلسة 60 دقيقة.\nReformer Pilates تمارين على جهاز الريفورمر لتحسين المرونة والتوازن والقوة، ومدة الجلسة 60 دقيقة.'
  },
  {
    q: 'ما الفرق بين Private وElite وSignature؟',
    a: 'Signature Experience هي البداية المتكاملة التي تجمع الخدمات الأساسية لرحلتكِ.\nElite Experience تمنحكِ مزايا إضافية وتوجيهًا أوسع.\nPrivate Experience هي أعلى مستوى من الخصوصية والعناية، بخدمات وتجربة مصممة بالكامل لكِ.'
  },
  {
    q: 'هل يمكنني حجز جلسات؟',
    a: 'نعم، يمكنكِ حجز جلساتكِ واختيار الوقت المتاح المناسب لكِ.'
  },
  {
    q: 'هل يمكنني الاشتراك مع صديقتي أو أحد أفراد أسرتي؟',
    a: 'نعم، نوفر باقات للتدريب المشترك مع الصديقات أو أفراد الأسرة، لتجعل الرحلة أكثر تحفيزًا والتزامًا.'
  },
  {
    q: 'متى أبدأ بملاحظة النتائج؟',
    a: 'تختلف النتائج حسب الهدف والالتزام، لكن كثيرًا من العميلات يبدأن بملاحظة فرق خلال الأسابيع الأولى من البرنامج.'
  },
  {
    q: 'كيف تتم متابعة تقدمي؟',
    a: 'نتابع تقدمكِ عبر القياسات الدورية، مراجعة التمارين والتغذية، تقييم مستوى الالتزام، ومتابعة النتائج والتطور بشكل مستمر.'
  },
  {
    q: 'ماذا لو لدي إصابة أو حالة صحية خاصة؟',
    a: 'نبدأ بجلسة تقييم للتأكد من أن رحلتكِ مناسبة وآمنة ومتوافقة مع احتياجاتكِ الصحية.'
  },
  {
    q: 'هل يمكن تغيير المدربة؟',
    a: 'نعم، يمكن تغيير المدربة عند الحاجة بما يضمن راحتكِ واستمراريتكِ في الرحلة.'
  },
  {
    q: 'هل يمكن إعادة جدولة الجلسات؟',
    a: 'نعم، يمكنكِ إعادة جدولة الجلسة عند إبلاغ المدربة قبل الموعد بوقت كافٍ.'
  },
  {
    q: 'ماذا لو كنت مسافرة أو لدي ظرف شخصي؟',
    a: 'البرنامج مرن، ويمكننا مساعدتكِ في تنظيم الجلسات المتبقية أو إعادة جدولتها بما يناسب ظرفكِ.'
  },
  {
    q: 'هل يوجد تجديد للاشتراك؟',
    a: 'نعم، يمكنكِ تجديد اشتراككِ والاستمرار في رحلتكِ مع تطوير الخطة حسب تقدمكِ وأهدافكِ الجديدة.'
  },
  {
    q: 'هل يوجد برنامج إحالة؟',
    a: 'نعم، يمكنكِ دعوة صديقاتكِ والاستفادة من رصيد أو مزايا خاصة وفق برنامج الإحالة المتاح.'
  },
  {
    q: 'ما الذي يميز Like A Model؟',
    a: 'لأننا لا نقدم تدريبًا فقط؛ نصمم لكِ رحلة متكاملة تجمع التدريب والتغذية والمتابعة وقياس النتائج والدعم المستمر، لتصلي إلى أسلوب حياة صحي يدوم.'
  },
  {
    q: 'لم أجد سؤالي، ماذا أفعل؟',
    a: 'يسعدنا تواصلكِ معنا، وسيتواصل فريقنا معكِ لفهم احتياجكِ وتقديم الحل الأنسب لكِ.'
  }
];

/* ────────────────────────────────────────────────────────────────────────── */

export function bootPageEffects() {

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fx = (window.__lamFx ||= { aborts: {} });
  function takeSignal(key) {
    fx.aborts[key]?.abort();
    fx.aborts[key] = new AbortController();
    return fx.aborts[key].signal;
  }
  function trackIo(io) {
    (fx.observers ||= []).push(io);
    return io;
  }
  function trackTimeout(id) {
    (fx.timeouts ||= []).push(id);
    return id;
  }
  function resetHomeFx() {
    (fx.observers || []).forEach((io) => {
      try { io.disconnect(); } catch (err) { /* ignore */ }
    });
    fx.observers = [];
    (fx.timeouts || []).forEach((tid) => clearTimeout(tid));
    fx.timeouts = [];
  }
  let homeSignal = null;

  /* أرقام هندية (٠١٢…) للعرض بالعربية */
  const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const toAr = (n) => String(n).replace(/\d/g, (d) => AR_DIGITS[+d]);

  const WA = 'https://wa.me/' + CONTACT.whatsapp;
  const waWith = (msg) => WA + '?text=' + encodeURIComponent(msg);


  /* ══════════ 1. بيانات التواصل ══════════ */
  function applyContact() {
    // روابط واتساب المباشرة
    ['#waLink', '#fabWhatsapp', '#cWaLink', '#headerWhatsapp'].forEach((sel) => {
      const el = $(sel); if (el) { el.href = WA; el.rel = 'noopener noreferrer'; }
    });
    const headerWa = $('#headerWhatsapp');
    if (headerWa) headerWa.target = '_blank';

    // روابط الهاتف والبريد
    const tel = 'tel:' + CONTACT.phoneTel.replace(/[^\d+]/g, '');
    ['#phoneLink', '#cPhoneLink'].forEach((sel) => {
      const el = $(sel); if (el) el.href = tel;
    });
    ['#emailLink', '#cMailLink'].forEach((sel) => {
      const el = $(sel); if (el) el.href = 'mailto:' + CONTACT.email;
    });

    // النصوص المعروضة
    const setText = (sel, txt) => {
      const el = $(sel);
      if (!el) return;
      const slot = el.querySelector('[data-contact-text]');
      (slot || el).textContent = txt;
    };
    setText('#phoneLink',    CONTACT.phoneText);
    setText('#cPhoneLink',   CONTACT.phoneText);
    setText('#waLink',       CONTACT.whatsappText);
    setText('#cWaLink',      CONTACT.whatsappText);
    setText('#emailLink',    CONTACT.email);
    setText('#cMailLink',    CONTACT.email);
    setText('#addrText',     CONTACT.address);
    setText('#cAddrText',    CONTACT.address);

    // حسابات التواصل — يُخفى العنصر إن لم يوجد رابط
    $$('[data-social]').forEach((a) => {
      const url = (CONTACT.social[a.dataset.social] || '').trim();
      const host = a.closest('li') || a;
      if (url) { a.href = url; a.rel = 'noopener'; a.target = '_blank'; host.hidden = false; }
      else { host.hidden = true; }
    });

    // ✏️ روابط CTA التي تفتح واتساب برسالة جاهزة — أضيفي 'معرّف#': 'الرسالة'
    // (فرغت بعد حذف قسم شركاء النجاح؛ الآلية باقية لأي زرّ جديد)
    const presets = {};
    Object.entries(presets).forEach(([sel, msg]) => {
      const el = $(sel);
      if (el) { el.href = waWith(msg); el.rel = 'noopener'; }
    });

    const year = $('#year');
    if (year) year.textContent = toAr(new Date().getFullYear());
  }


  /* ══════════ 2. زر تبديل اللغة ══════════ */
  function initLang() {
    const btn = $('#langSwitch');
    if (!btn || btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    const url = (LANG.enUrl || '').trim();

    if (url) { btn.href = url; return; }

    // لا توجد نسخة إنجليزية بعد — يبقى الزر ظاهرًا لكن غير فعّال
    btn.setAttribute('aria-disabled', 'true');
    btn.title = 'النسخة الإنجليزية قريبًا';
    btn.addEventListener('click', (e) => e.preventDefault());
  }


  /* ══════════ 3. فيديو الهيرو (خلفية غير تفاعلية) ══════════ */
  function initHeroVideo() {
    const media = $('#heroMedia');
    if (!media || media.querySelector('iframe')) return;

    const url = (VIDEO.url || '').trim();
    const poster = (VIDEO.poster || '').trim();
    if (poster) {
      media.style.backgroundImage = 'url("' + poster.replace(/"/g, '%22') + '")';
    }

    if (reduceMotion || !url) return;

    const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/);
    if (!yt) return;

    const id = yt[1];
    const start = Number.isFinite(VIDEO.start) ? VIDEO.start : 0;
    const end = Number.isFinite(VIDEO.end) ? VIDEO.end : 3;
    const src = 'https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&mute=1&loop=1&playlist=' + encodeURIComponent(id) +
      '&start=' + start + '&end=' + end +
      '&controls=0&playsinline=1&rel=0&modestbranding=1';

    const f = iframeEl(src);
    f.title = '';
    f.tabIndex = -1;
    f.setAttribute('aria-hidden', 'true');
    f.allow = 'autoplay; encrypted-media';
    f.allowFullscreen = false;
    f.removeAttribute('loading');
    f.style.pointerEvents = 'none';
    media.appendChild(f);
  }

  function iframeEl(src) {
    const f = document.createElement('iframe');
    f.src = src;
    f.title = 'فيديو تسويقي لخدمات Like A Model';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    f.loading = 'lazy';
    return f;
  }


  /* ══════════ 4. خريطة موقع الشركة ══════════ */
  function initMap() {
    const frame = $('#mapFrame');
    const open = $('#mapOpen');
    const src = (MAP.embed || '').trim();
    const href = (MAP.open || src.replace(/&output=embed$/, '')).trim();

    if (open && href) open.href = href;
    const addr = $('#addrText');
    if (addr && href && addr.tagName === 'A') {
      addr.href = href;
      addr.target = '_blank';
      addr.rel = 'noopener noreferrer';
    }
    if (!frame || !src) return;
    if (frame.querySelector('iframe')) return;

    const f = document.createElement('iframe');
    f.src = src;
    f.title = 'موقع شركة Like A Model — حي الورود، الرياض';
    f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade';
    f.setAttribute('scrolling', 'no');
    f.allowFullscreen = true;
    f.style.width = '100%';
    f.style.height = '100%';
    f.style.border = '0';
    frame.replaceChildren(f);
  }


  /* ══════════ 5. عدّاد «نجاحنا بالأرقام» ══════════ */
  function initCounters() {
    const nums = $$('.stat-num[data-count]');
    if (!nums.length) return;

    const fmt = (n) => (STATS_LATIN ? String(n) : toAr(n)) + '+';

    if (reduceMotion || !('IntersectionObserver' in window)) {
      nums.forEach((el) => { el.textContent = fmt(+el.dataset.count || 0); });
      return;
    }

    nums.forEach((el) => { el.textContent = fmt(0); });

    const run = (el) => {
      if (el.dataset.done) return;
      el.dataset.done = '1';
      const target = +el.dataset.count || 0;
      const start = performance.now();
      const DUR = 1200;

      const tick = (now) => {
        const p = Math.min(1, (now - start) / DUR);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = trackIo(new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        run(entry.target);
      });
    }, { threshold: 0.4 }));

    nums.forEach((el) => io.observe(el));

    // شبكة أمان: لا يجوز أن يبقى رقم على صفر إذا تعطّل المراقب
    trackTimeout(setTimeout(() => {
      nums.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) run(el);
      });
    }, 1500));
  }


  /* ══════════ 5b. Parallax خلفية «نجاحنا بالأرقام» ══════════ */
  function initStatsParallax() {
    const statsSection = document.querySelector('.stats-section');
    const statsBg = document.querySelector('.stats-section .stats-parallax-bg');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!statsSection || !statsBg) return;

    let statsParallaxFrame = null;

    const updateStatsParallax = () => {
      statsParallaxFrame = null;

      if (reduceMotion.matches || window.innerWidth < 768) {
        statsBg.style.setProperty('--stats-parallax-y', '0px');
        return;
      }

      const rect = statsSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // يبدأ قبل دخول القسم وينتهي بعد خروجه
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));

      // حركة أوضح بمقدار 640px من أعلى إلى أسفل أثناء مرور القسم
      const offsetY = -320 + (clamped * 640);

      statsBg.style.setProperty('--stats-parallax-y', `${offsetY.toFixed(1)}px`);
    };

    const requestStatsParallax = () => {
      if (!statsParallaxFrame) {
        statsParallaxFrame = requestAnimationFrame(updateStatsParallax);
      }
    };

    window.addEventListener('scroll', requestStatsParallax, { passive: true, signal: homeSignal });
    window.addEventListener('resize', requestStatsParallax, { signal: homeSignal });
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', requestStatsParallax, { signal: homeSignal });
    requestStatsParallax();
  }


  /* ══════════ 5c. Parallax شريط صورة التواصل العلوي ══════════ */
  function initContactParallax() {
    const banner = document.querySelector('.section-contact .contact-banner');
    const contactBg = document.querySelector('.section-contact .contact-parallax-bg');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!banner || !contactBg) return;

    let contactParallaxFrame = null;

    const updateContactParallax = () => {
      contactParallaxFrame = null;

      if (reduceMotion.matches) {
        contactBg.style.setProperty('--contact-parallax-y', '0px');
        return;
      }

      // تقدّم مرور الشريط داخل نافذة العرض: 0 عند الدخول → 1 عند الخروج
      const rect = banner.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));

      // مدى أوضح ±220px أثناء مرور الشريط
      const offsetY = -220 + (clamped * 440);

      contactBg.style.setProperty('--contact-parallax-y', `${offsetY.toFixed(1)}px`);
    };

    const requestContactParallax = () => {
      if (!contactParallaxFrame) {
        contactParallaxFrame = requestAnimationFrame(updateContactParallax);
      }
    };

    window.addEventListener('scroll', requestContactParallax, { passive: true, signal: homeSignal });
    window.addEventListener('resize', requestContactParallax, { signal: homeSignal });
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', requestContactParallax, { signal: homeSignal });
    requestContactParallax();
  }


  /* إزاحة الهيدر الثابت + فراغ --scroll-gap (1.25rem) حتى لا يُغطّى عنوان القسم */
  function navScrollOffset() {
    const header = $('#siteHeader');
    const h = header ? Math.round(header.getBoundingClientRect().height) : 72;
    const fs = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return h + 1.25 * fs;
  }

  function scrollToNavTarget(el, instant) {
    const behavior = instant || reduceMotion ? 'auto' : 'smooth';
    if (!el || el.id === 'home') {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const y = Math.max(0, window.scrollY + el.getBoundingClientRect().top - navScrollOffset());
    window.scrollTo({ top: y, behavior });
  }

  /* ══════════ 6. الهيدر ══════════ */
  function initHeader() {
    const header = $('#siteHeader');
    if (!header) return;
    let ticking = false;

    const syncOffset = () => {
      document.documentElement.style.setProperty(
        '--header-measured',
        `${Math.round(header.getBoundingClientRect().height)}px`
      );
    };

    const update = () => {
      const pinned = document.body.classList.contains('page-syj')
        || document.body.classList.contains('page-stories');
      header.classList.toggle('is-scrolled', pinned || window.scrollY > 40);
      syncOffset();
      ticking = false;
    };
    syncOffset();
    update();
    window.addEventListener('resize', syncOffset);
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
  }


  /* ══════════ 7. القائمة الموسَّعة ══════════ */
  function initNav() {
    const header = $('#siteHeader');
    const toggle = $('#navToggle');
    const nav = $('#siteNav');
    if (!header || !toggle || !nav) return;

    const FOCUSABLE = 'a[href], button:not([disabled])';
    const mobileMq = window.matchMedia('(max-width: 1079px)');
    let lastFocus = null;

    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
    const isMobile = () => mobileMq.matches;
    const isDesktopInline = () => !isMobile() && header.classList.contains('is-scrolled');

    const setExpanded = (open) => {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
      header.classList.toggle('is-nav-open', open);
      document.body.classList.toggle('nav-open', open && isMobile());
      const exposed = open || isDesktopInline();
      nav.setAttribute('aria-hidden', exposed ? 'false' : 'true');
      if ('inert' in nav) nav.inert = !exposed;
    };

    const open = () => {
      if (isOpen() || isDesktopInline()) return;
      lastFocus = document.activeElement;
      setExpanded(true);
      document.addEventListener('keydown', onKey);
      document.addEventListener('pointerdown', onOutside, true);
      if (isMobile()) nav.querySelector(FOCUSABLE)?.focus();
    };

    const shut = ({ restoreFocus = true } = {}) => {
      if (!isOpen()) return;
      setExpanded(false);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside, true);
      if (!restoreFocus) return;
      const back = (lastFocus && lastFocus !== document.body && document.contains(lastFocus))
        ? lastFocus : toggle;
      back.focus();
    };

    let wasInline = false;
    const syncDesktopInline = () => {
      const inline = isDesktopInline();
      if (inline === wasInline && !(inline && isOpen())) return;
      wasInline = inline;
      if (inline && isOpen()) shut({ restoreFocus: false });
      setExpanded(isOpen());
    };

    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); shut(); return; }
      if (e.key !== 'Tab' || !isMobile()) return;
      const items = $$(FOCUSABLE, header).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function onOutside(e) {
      if (header.contains(e.target)) return;
      shut();
    }

    toggle.addEventListener('click', () => { isOpen() ? shut() : open(); });
    $$('a[href^="#"]', header).forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = (a.hash || '').replace(/^#/, '');
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        shut();
        if (history.replaceState) history.replaceState(null, '', '#' + id);
        else location.hash = id;
        scrollToNavTarget(target, false);
      });
    });

    mobileMq.addEventListener('change', () => {
      if (isOpen()) shut({ restoreFocus: false });
      syncDesktopInline();
    });

    window.addEventListener('scroll', syncDesktopInline, { passive: true });
    setExpanded(false);
    syncDesktopInline();
  }


  /* ══════════ 8. ظهور العناصر عند التمرير ══════════ */
  function initReveal() {
    clearTimeout(window.__lamReveal);
    const items = $$('.reveal').filter((el) => !el.classList.contains('eco-card') && !el.closest('#ecosystem .eco-grid'));
    if (!items.length) return;

    const skipExit = (el) => !!el.closest(
      '#stats, .stats-section, #about, #about-intro, #support, .hero, #home, #bookingModal, .bk-modal, #chatbot, .chatbot'
    );
    const onceItems = items.filter(skipExit);
    const exitItems = items.filter((el) => !skipExit(el));

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => {
        el.classList.add('is-in');
        el.classList.remove('is-leaving-up', 'is-leaving-down');
      });
      return;
    }

    const markIn = (el) => {
      el.classList.add('is-in');
      el.classList.remove('is-leaving-up', 'is-leaving-down');
    };

    const markOut = (el, entry) => {
      if (!el.classList.contains('is-in') &&
          !el.classList.contains('is-leaving-up') &&
          !el.classList.contains('is-leaving-down')) {
        return;
      }
      const rect = entry.boundingClientRect;
      const vh = (entry.rootBounds && entry.rootBounds.height) || window.innerHeight;
      el.classList.remove('is-in');
      if (rect.bottom < vh * 0.45) {
        el.classList.add('is-leaving-up');
        el.classList.remove('is-leaving-down');
      } else {
        el.classList.add('is-leaving-down');
        el.classList.remove('is-leaving-up');
      }
    };

    if (onceItems.length) {
      const onceIo = trackIo(new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          markIn(entry.target);
          onceIo.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }));
      onceItems.forEach((el) => onceIo.observe(el));

      trackTimeout(setTimeout(() => {
        onceItems.forEach((el) => {
          if (el.classList.contains('is-in')) return;
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            markIn(el);
            onceIo.unobserve(el);
          }
        });
      }, 1200));
    }

    if (exitItems.length) {
      const exitIo = trackIo(new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) markIn(entry.target);
          else markOut(entry.target, entry);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }));
      exitItems.forEach((el) => exitIo.observe(el));

      trackTimeout(setTimeout(() => {
        exitItems.forEach((el) => {
          if (el.classList.contains('is-in')) return;
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) markIn(el);
        });
      }, 1200));
    }
  }


  /* ══════════ 8ب. مسار «من نحن» — الخط والنص معًا ══════════ */
  function initAboutTimeline() {
    const section = $('#about-intro') || $('#about');
    const block = section ? $('[data-timeline]', section) : $('[data-timeline]');
    if (!section || !block) return;

    const lines = $$('.about-story-line', section).filter((el) => !el.closest('.about-coda'));

    const revealAll = () => {
      block.style.setProperty('--about-tl', '1');
      lines.forEach((el) => el.classList.add('is-revealed'));
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    const fromOf = (el) => {
      const v = parseFloat(el.getAttribute('data-about-from'));
      return Number.isFinite(v) ? v : 0;
    };

    const progressOf = () => {
      const headerH = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-measured')) || 72;
      const rect = section.getBoundingClientRect();
      const needle = headerH + window.innerHeight * 0.22;
      const span = rect.height;
      if (span <= 0) return 0;
      if (needle <= rect.top) return 0;
      if (needle >= rect.bottom) return 1;
      return (needle - rect.top) / span;
    };

    const apply = (p) => {
      const clamped = Math.min(1, Math.max(0, p));
      block.style.setProperty('--about-tl', clamped.toFixed(4));
      lines.forEach((el) => {
        if (clamped >= fromOf(el)) el.classList.add('is-revealed');
      });
    };

    let inView = false;
    let ticking = false;
    const update = () => {
      ticking = false;
      const p = progressOf();
      if (!inView && p <= 0) {
        block.style.setProperty('--about-tl', '0');
        return;
      }
      apply(p);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const io = trackIo(new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
      update();
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: [0, 0.08, 0.2, 0.45, 0.75, 1]
    }));

    io.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true, signal: homeSignal });
    window.addEventListener('resize', onScroll, { signal: homeSignal });
    update();
  }


  /* ══════════ 8ت. دخول كتلة «شريككِ في رحلة التحوّل» عند ظهورها ══════════ */
  function initAboutCoda() {
    const coda = $('.about-coda');
    if (!coda) return;

    const show = () => coda.classList.add('is-in');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      show();
      return;
    }

    const io = trackIo(new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      show();
      io.disconnect();
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }));

    io.observe(coda);

    trackTimeout(setTimeout(() => {
      if (coda.classList.contains('is-in')) return;
      const r = coda.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show();
    }, 1200));
  }


  /* ══════════ 8.5 مسار ندعمكِ الدائري مع التمرير ══════════ */
  function initSupportOrbit() {
    const section = $('#support');
    if (!section) return;

    const progressEl = $('.support-arc-progress', section);
    const arrow = $('.support-arc-arrow', section);
    const center = $('.support-orbit__center', section);
    const steps = [1, 2, 3, 4].map((n) => section.querySelector('[data-support-step="' + n + '"]'));
    const desktopMq = window.matchMedia('(min-width: 960px)');

    const THRESH = { 1: 0.04, 2: 0.28, 3: 0.52, 4: 0.76 };
    const DRAW_AT_VH = 0.72;
    const DONE_AT_VH = 0.5;
    const CX = 200, CY = 200, RADIUS = 168;

    const placeArrow = (p) => {
      if (!arrow) return;
      if (p < 0.012) {
        arrow.setAttribute('opacity', '0');
        return;
      }
      const a = -Math.PI / 4 + p * Math.PI * 2;
      const x = CX + RADIUS * Math.cos(a);
      const y = CY + RADIUS * Math.sin(a);
      const deg = Math.atan2(Math.cos(a), -Math.sin(a)) * (180 / Math.PI);
      arrow.setAttribute('transform', 'translate(' + x.toFixed(2) + ' ' + y.toFixed(2) + ') rotate(' + deg.toFixed(2) + ')');
      arrow.setAttribute('opacity', '1');
    };

    const apply = (p) => {
      const drawn = Math.min(1, Math.max(0, p));
      if (progressEl) {
        progressEl.style.strokeDasharray = '1';
        progressEl.style.strokeDashoffset = String(1 - drawn);
      }
      placeArrow(drawn);

      let highest = 0;
      steps.forEach((el, i) => {
        if (!el) return;
        const on = drawn >= THRESH[i + 1];
        el.classList.toggle('is-on', on);
        if (on) {
          highest = i + 1;
          el.removeAttribute('aria-hidden');
        } else {
          el.setAttribute('aria-hidden', 'true');
        }
      });
      steps.forEach((el, i) => {
        if (!el) return;
        el.classList.toggle('is-current', highest > 0 && (i + 1) === highest);
      });
    };

    const measure = () => {
      const vh = window.innerHeight;
      const visual = center || $('.support-arc', section) || section;
      const box = visual.getBoundingClientRect();

      /* خارج الشاشة بالكامل → إعادة للحالة الابتدائية لإعادة الحركة عند الدخول */
      if (box.bottom <= 0 || box.top >= vh) {
        center?.classList.remove('is-in');
        apply(0);
        return;
      }

      center?.classList.add('is-in');

      const cy = box.top + box.height / 2;
      const startY = vh * DRAW_AT_VH;
      const endY = vh * DONE_AT_VH;
      const span = Math.max(1, startY - endY);

      let p = 0;
      if (cy <= endY) p = 1;
      else if (cy < startY) p = (startY - cy) / span;

      apply(p);
    };

    const head = $('.support-head', section);
    const revealHead = () => {
      section.classList.add('is-headed');
      section.classList.remove('is-head-leaving-up', 'is-head-leaving-down');
    };
    const leaveHead = (entry) => {
      if (!section.classList.contains('is-headed') &&
          !section.classList.contains('is-head-leaving-up') &&
          !section.classList.contains('is-head-leaving-down')) {
        return;
      }
      const rect = entry.boundingClientRect;
      const vh = (entry.rootBounds && entry.rootBounds.height) || window.innerHeight;
      section.classList.remove('is-headed');
      if (rect.bottom < vh * 0.45) {
        section.classList.add('is-head-leaving-up');
        section.classList.remove('is-head-leaving-down');
      } else {
        section.classList.add('is-head-leaving-down');
        section.classList.remove('is-head-leaving-up');
      }
    };

    if (reduceMotion) {
      section.classList.add('is-static');
      center?.classList.add('is-in');
      revealHead();
      apply(1);
      return;
    }

    if (head && 'IntersectionObserver' in window) {
      const headIo = trackIo(new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) revealHead();
          else leaveHead(e);
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }));
      headIo.observe(head);
    } else {
      revealHead();
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        measure();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true, signal: homeSignal });
    window.addEventListener('resize', onScroll, { signal: homeSignal });
    desktopMq.addEventListener?.('change', onScroll, { signal: homeSignal });
    measure();
  }


  /* ══════════ 8.6 بانر التدريب المنزلي — دخول/خروج المحتوى ══════════ */
  function initHomeTrainingMotion() {
    const banner = $('#home-training');
    const points = $('.home-train-points');
    if (!banner && !points) return;

    const showAll = () => {
      banner?.classList.add('is-in-view');
      banner?.classList.remove('is-leaving');
      points?.classList.add('is-in-view');
      points?.classList.remove('is-leaving-up', 'is-leaving-down');
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    if (banner) {
      const io = trackIo(new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        const rect = entry.boundingClientRect;
        const vh = window.innerHeight;

        if (entry.isIntersecting) {
          banner.classList.add('is-in-view');
          banner.classList.remove('is-leaving');
          return;
        }

        if (rect.bottom < vh * 0.28) {
          banner.classList.remove('is-in-view');
          banner.classList.add('is-leaving');
        } else if (rect.top > vh * 0.72) {
          banner.classList.remove('is-in-view', 'is-leaving');
        }
      }, {
        root: null,
        rootMargin: '-32% 0px -32% 0px',
        threshold: [0, 0.12, 0.28, 0.45, 0.6, 0.8, 1]
      }));
      io.observe(banner);
    }

    if (points) {
      const io = trackIo(new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        const rect = entry.boundingClientRect;
        const vh = window.innerHeight;

        if (entry.isIntersecting) {
          points.classList.add('is-in-view');
          points.classList.remove('is-leaving-up', 'is-leaving-down');
          return;
        }

        if (!points.classList.contains('is-in-view') &&
            !points.classList.contains('is-leaving-up') &&
            !points.classList.contains('is-leaving-down')) {
          return;
        }

        points.classList.remove('is-in-view');
        if (rect.bottom < vh * 0.28) {
          points.classList.add('is-leaving-up');
          points.classList.remove('is-leaving-down');
        } else if (rect.top > vh * 0.72) {
          points.classList.add('is-leaving-down');
          points.classList.remove('is-leaving-up');
        }
      }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: [0, 0.12, 0.28, 0.45, 0.7, 1]
      }));
      io.observe(points);
    }
  }


  /* ══════════ 8.7 منظومة الكاردين — دخول من الجانبين وخروج هادئ ══════════ */
  function initEcosystemMotion() {
    const grid = $('#ecosystem .eco-grid');
    if (!grid) return;

    const show = () => {
      grid.classList.add('is-in-view');
      grid.classList.remove('is-leaving');
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      show();
      return;
    }

    const io = trackIo(new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const rect = entry.boundingClientRect;
      const vh = window.innerHeight;

      if (entry.isIntersecting) {
        show();
        return;
      }

      if (rect.bottom < vh * 0.22) {
        grid.classList.remove('is-in-view');
        grid.classList.add('is-leaving');
      } else if (rect.top > vh * 0.78) {
        grid.classList.remove('is-in-view', 'is-leaving');
      }
    }, {
      root: null,
      rootMargin: '0px 0px -16% 0px',
      threshold: [0, 0.12, 0.28, 0.45, 0.7, 1]
    }));

    io.observe(grid);
  }


  /* ══════════ 9. تظليل رابط القسم الحالي ══════════ */
  function initScrollSpy() {
    const links = $$('.site-nav a[href^="#"]');
    if (!links.length) return;

    const items = links.map((a) => {
      const id = (a.hash || '').replace(/^#/, '');
      const sec = id ? document.getElementById(id) : null;
      return sec ? { a, sec } : null;
    }).filter(Boolean);
    if (!items.length) return;

    let ticking = false;
    const apply = () => {
      ticking = false;
      const line = navScrollOffset();
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = items[0];
      if (atEnd) {
        current = items[items.length - 1];
      } else {
        for (const item of items) {
          if (item.sec.getBoundingClientRect().top <= line + 1) current = item;
        }
      }
      links.forEach((a) => a.removeAttribute('aria-current'));
      current.a.setAttribute('aria-current', 'true');
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    apply();
  }

  function initHashLanding() {
    const id = location.hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const jump = () => scrollToNavTarget(el, true);
    jump();
    requestAnimationFrame(jump);
  }


  /* ══════════ 10. نموذج «تواصل معنا» ══════════ */
  function initContactForm() {
    const form = $('#contactForm');
    if (!form || form.dataset.bound === '1') return;
    form.dataset.bound = '1';

    const status  = $('#formStatus');
    const submit  = $('#contactSubmit');
    const otherIn = $('#cSourceOther');
    const otherFd = $('#sourceOtherField');
    const sourceEl = $('#cSource', form);
    const timeEl = $('#cTime', form);
    const consentEl = $('#cConsent', form);

    const isOther = () => val('#cSource') === 'أخرى';

    const syncOther = () => {
      const on = isOther();
      if (otherFd) otherFd.hidden = !on;
      if (otherIn) {
        otherIn.disabled = !on;
        otherIn.required = on;
        if (!on) {
          otherIn.value = '';
          otherIn.removeAttribute('aria-invalid');
          setErr('cSourceOther', '');
        }
        syncFilled(otherIn);
      }
    };

    const setErr = (key, msg) => {
      const box = form.querySelector('[data-err-for="' + key + '"]');
      if (box) box.textContent = msg || '';
    };
    const mark = (el, bad) => {
      if (!el) return;
      if (bad) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
    };
    const say = (msg, kind) => {
      if (!status) return;
      status.textContent = msg;
      status.classList.toggle('is-err', kind === 'err');
      status.classList.toggle('is-ok',  kind === 'ok');
    };

    const val = (sel) => ($(sel, form)?.value || '').trim();

    function isFilledControl(el) {
      if (!el || el.type === 'checkbox' || el.type === 'radio') return false;
      if (!el.classList.contains('input')) return false;
      if (el.tagName === 'SELECT') return Boolean((el.value || '').trim());
      return String(el.value || '').trim() !== '';
    }

    function syncFilled(el) {
      if (!el || !el.classList || el.type === 'checkbox' || el.type === 'radio') return;
      if (!el.classList.contains('input')) return;
      const on = isFilledControl(el);
      el.classList.toggle('is-filled', on);
      const wrap = el.closest('.field-wrap');
      if (wrap) wrap.classList.toggle('is-filled', on);
    }

    function syncFilledAll() {
      form.querySelectorAll('.input').forEach(syncFilled);
    }

    const phoneOk = (raw) => {
      const digits = String(raw || '').replace(/\D/g, '');
      return digits.length >= 9 && digits.length <= 15;
    };
    const numIn = (raw, min, max) => {
      if (raw === '') return false;
      const n = Number(raw);
      return Number.isFinite(n) && n >= min && n <= max;
    };

    function inspect() {
      const nameEl = $('#cName', form);
      const phoneEl = $('#cPhone', form);
      const weightEl = $('#cWeight', form);
      const heightEl = $('#cHeight', form);
      const goalEl = $('#cGoal', form);
      const issues = [];

      if (val('#cName').length < 2) {
        issues.push({ el: nameEl, key: 'cName', msg: 'الرجاء كتابة الاسم الكامل.' });
      }
      if (!phoneOk(val('#cPhone'))) {
        issues.push({ el: phoneEl, key: 'cPhone', msg: 'الرجاء كتابة رقم جوال صحيح.' });
      }
      if (!numIn(val('#cWeight'), 30, 250)) {
        issues.push({ el: weightEl, key: 'cWeight', msg: 'الرجاء إدخال الوزن بالكيلوجرام.' });
      }
      if (!numIn(val('#cHeight'), 100, 220)) {
        issues.push({ el: heightEl, key: 'cHeight', msg: 'الرجاء إدخال الطول بالسنتيمتر.' });
      }
      if (!val('#cGoal')) {
        issues.push({ el: goalEl, key: 'goal', msg: 'الرجاء اختيار هدف الرحلة.' });
      }
      if (!val('#cSource')) {
        issues.push({ el: sourceEl, key: 'source', msg: 'الرجاء اختيار كيف تعرّفتِ علينا.' });
      }
      if (isOther() && val('#cSourceOther').length < 2) {
        issues.push({ el: otherIn, key: 'cSourceOther', msg: 'الرجاء توضيح كيف تعرّفتِ علينا.' });
      }
      if (!val('#cTime')) {
        issues.push({ el: timeEl, key: 'time', msg: 'الرجاء اختيار الوقت المناسب للتواصل.' });
      }
      if (!consentEl?.checked) {
        issues.push({ el: consentEl, key: 'consent', msg: 'يلزم الموافقة على التواصل لإرسال الطلب.' });
      }
      return issues;
    }

    const ERR_KEYS = ['cName','cPhone','cWeight','cHeight','goal','source','cSourceOther','time','consent'];
    const FIELD_IDS = {
      cName: '#cName', cPhone: '#cPhone', cWeight: '#cWeight', cHeight: '#cHeight',
      goal: '#cGoal', source: '#cSource', cSourceOther: '#cSourceOther',
      time: '#cTime', consent: '#cConsent'
    };

    function paintErrors(issues) {
      const bad = new Map(issues.map((i) => [i.key, i]));
      ERR_KEYS.forEach((key) => {
        const hit = bad.get(key);
        setErr(key, hit ? hit.msg : '');
        mark($(FIELD_IDS[key], form), Boolean(hit));
      });
    }

    function validate() {
      const issues = inspect();
      paintErrors(issues);
      return issues[0]?.el || null;
    }

    function syncSubmit() {
      if (!submit) return;
      const ready = inspect().length === 0;
      submit.disabled = !ready;
      submit.setAttribute('aria-disabled', ready ? 'false' : 'true');
    }

    function collect() {
      const src = val('#cSource');
      const other = val('#cSourceOther');
      return {
        name    : val('#cName'),
        phone   : val('#cPhone'),
        weight  : val('#cWeight'),
        height  : val('#cHeight'),
        goal    : val('#cGoal'),
        source  : src === 'أخرى' && other ? 'أخرى — ' + other : src,
        time    : val('#cTime'),
        message : val('#cMessage'),
        consent : consentEl?.checked === true
      };
    }

    function buildMessage(d) {
      const line = (k, v, suffix) => v ? '• ' + k + ': ' + v + (suffix || '') + '\n' : '';
      return 'مرحبًا Like A Model 👋\n' +
             'أرغب بالتواصل معكم عبر نموذج الموقع:\n\n' +
             line('الاسم', d.name) +
             line('رقم الجوال', d.phone) +
             line('الوزن', d.weight, ' كجم') +
             line('الطول', d.height, ' سم') +
             line('الهدف', d.goal) +
             line('كيف تعرّفتُ عليكم', d.source) +
             line('وقت التواصل المناسب', d.time) +
             (d.message ? '\n' + d.message + '\n' : '') +
             '\nأتطلع لردّكم.';
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      syncOther();

      const bad = validate();
      if (bad) {
        say('الرجاء إكمال جميع الحقول المطلوبة قبل الإرسال.', 'err');
        bad.focus({ preventScroll: false });
        syncSubmit();
        return;
      }

      const data = collect();

      if (!FORM.endpoint) {
        const url = waWith(buildMessage(data));
        say('جارٍ فتح واتساب لإرسال طلبِك…', 'ok');
        const win = window.open(url, '_blank', 'noopener');
        if (!win) window.location.href = url;
        return;
      }

      submit.disabled = true;
      submit.setAttribute('aria-disabled', 'true');
      say('جارٍ الإرسال…');
      try {
        const res = await fetch(FORM.endpoint, {
          method : 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body   : JSON.stringify(data)
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        syncOther();
        syncFilledAll();
        paintErrors([]);
        say('تم استلام طلبِك ✓ سنتواصل معكِ قريبًا.', 'ok');
      } catch (err) {
        say('تعذّر الإرسال. تواصلي معنا عبر واتساب أو الهاتف.', 'err');
      } finally {
        syncSubmit();
      }
    });

    form.addEventListener('input', (e) => {
      const map = {
        cName: 'cName', cPhone: 'cPhone', cWeight: 'cWeight', cHeight: 'cHeight',
        cSourceOther: 'cSourceOther'
      };
      const key = e.target && map[e.target.id];
      if (key) { setErr(key, ''); mark(e.target, false); }
      if (e.target && e.target.matches('input.input, textarea.input')) syncFilled(e.target);
      syncOther();
      syncSubmit();
    });
    form.addEventListener('change', (e) => {
      syncOther();
      if (e.target && e.target.id) {
        const map = {
          cName: 'cName', cPhone: 'cPhone', cWeight: 'cWeight', cHeight: 'cHeight',
          cGoal: 'goal', cSource: 'source', cSourceOther: 'cSourceOther',
          cTime: 'time', cConsent: 'consent'
        };
        const key = map[e.target.id];
        if (key) { setErr(key, ''); mark(e.target, false); }
      }
      if (e.target && e.target.matches('select.input, input.input, textarea.input')) {
        syncFilled(e.target);
      }
      syncSubmit();
    });

    syncOther();
    syncFilledAll();
    syncSubmit();
  }


  /* ══════════ 10ب. نموذج «ابدئي رحلتكِ» ══════════ */
  function initStartJourney() {
    const form = $('#syjForm');
    const card = $('#syjCard');
    if (!form || !card) return;
    if (form.dataset.bound === '1') return;
    form.dataset.bound = '1';

    const KEY = 'lamStartJourney';
    const stepAr = (n) => toAr(n);
    const panels = $$('[data-syj-step]', form);
    const backBtn = $('#syjBack');
    const nextBtn = $('#syjNext');
    const sendBtn = $('#syjSend');
    const stepLbl = $('#syjStepLbl');
    const bar = $('#syjBarFill');
    const live = $('#syjLive');
    const countEl = $('#syjCount');
    let step = 1;
    let timer = 0;

    const isSaudiPhone = (raw) => {
      const d = String(raw || '').replace(/\D/g, '');
      return /^05\d{8}$/.test(d) || /^5\d{8}$/.test(d) || /^9665\d{8}$/.test(d);
    };

    const say = (msg) => { if (live) live.textContent = msg || ''; };

    const setErr = (key, msg) => {
      const box = form.querySelector('[data-err-for="' + key + '"]');
      if (box) box.textContent = msg || '';
    };

    const mark = (el, bad) => {
      if (!el) return;
      if (bad) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
    };

    const read = () => ({
      name: ($('#syjName')?.value || '').trim(),
      phone: ($('#syjPhone')?.value || '').trim(),
      goal: (form.querySelector('input[name="goal"]:checked') || {}).value || '',
      support: (form.querySelector('input[name="support"]:checked') || {}).value || '',
      time: ($('#syjTime')?.value || '').trim(),
      source: ($('#syjSource')?.value || '').trim(),
      message: ($('#syjMessage')?.value || '').trim(),
      consent: $('#syjConsent')?.checked === true
    });

    const persist = () => {
      try { sessionStorage.setItem(KEY, JSON.stringify({ step, ...read() })); }
      catch (e) { /* تجاهل وضع التصفح الخاص */ }
    };

    const restore = () => {
      let saved = null;
      try { saved = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { saved = null; }
      if (!saved) return;
      if (saved.name) $('#syjName').value = saved.name;
      if (saved.phone) $('#syjPhone').value = saved.phone;
      if (saved.goal) {
        const g = form.querySelector('input[name="goal"][value="' + saved.goal + '"]');
        if (g) g.checked = true;
      }
      if (saved.support) {
        const s = form.querySelector('input[name="support"][value="' + saved.support + '"]');
        if (s) s.checked = true;
      }
      if (saved.time) $('#syjTime').value = saved.time;
      if (saved.source) $('#syjSource').value = saved.source;
      if (saved.message) $('#syjMessage').value = saved.message;
      if (saved.consent) $('#syjConsent').checked = true;
      if (saved.step >= 1 && saved.step <= 4) step = saved.step;
    };

    const GOAL_SLUGS = {
      'fat-loss': 'رحلة خسارة الدهون',
      'body-sculpt': 'رحلة نحت وتنسيق القوام',
      'muscle-building': 'رحلة بناء العضلات والقوة',
      'bride': 'رحلة تألق العروس',
      'postpartum': 'رحلة ما بعد الولادة',
      'pregnancy': 'رحلة الحمل الصحي',
      'lifestyle': 'رحلة نمط الحياة الصحي',
      'bariatric': 'رحلة التحوّل بعد التكميم'
    };

    const applyGoalFromQuery = () => {
      const slug = new URLSearchParams(location.search).get('goal');
      if (!slug) return;
      const value = GOAL_SLUGS[slug];
      if (!value) return;
      const g = form.querySelector('input[name="goal"][value="' + value + '"]');
      if (g) g.checked = true;
    };

    const validate = (n) => {
      const d = read();
      let first = null;
      if (n === 1) {
        const nameEl = $('#syjName');
        const phoneEl = $('#syjPhone');
        if (d.name.length < 2) {
          setErr('name', 'الرجاء كتابة الاسم الكامل.'); mark(nameEl, true); first ||= nameEl;
        } else { setErr('name', ''); mark(nameEl, false); }
        if (!isSaudiPhone(d.phone)) {
          setErr('phone', 'الرجاء إدخال رقم جوال سعودي صحيح.'); mark(phoneEl, true); first ||= phoneEl;
        } else { setErr('phone', ''); mark(phoneEl, false); }
      }
      if (n === 2) {
        if (!d.goal) { setErr('goal', 'الرجاء اختيار هدف واحد.'); first ||= form.querySelector('input[name="goal"]'); }
        else setErr('goal', '');
      }
      if (n === 3) {
        if (!d.support) { setErr('support', 'الرجاء اختيار نوع الدعم.'); first ||= form.querySelector('input[name="support"]'); }
        else setErr('support', '');
        const timeEl = $('#syjTime');
        if (!d.time) { setErr('time', 'الرجاء اختيار وقت التواصل المفضّل.'); mark(timeEl, true); first ||= timeEl; }
        else { setErr('time', ''); mark(timeEl, false); }
      }
      if (n === 4) {
        const c = $('#syjConsent');
        if (!d.consent) { setErr('consent', 'يلزم الموافقة على التواصل للمتابعة.'); first ||= c; }
        else setErr('consent', '');
      }
      return first;
    };

    const show = () => {
      panels.forEach((p) => p.classList.toggle('is-on', +p.dataset.syjStep === step));
      if (stepLbl) stepLbl.textContent = stepAr(step) + ' من ٤';
      if (bar) bar.style.setProperty('--syj-p', String((step / 4) * 100));
      card.classList.toggle('is-final', step === 4);
      if (backBtn) backBtn.hidden = step === 1;
      if (nextBtn) nextBtn.hidden = step === 4;
      syncSend({ instant: true });
      const heading = form.querySelector('[data-syj-step="' + step + '"] h1');
      if (heading && !reduceMotion) heading.focus({ preventScroll: true });
      persist();
    };

    const hideSend = () => {
      if (!sendBtn) return;
      sendBtn.classList.remove('is-in');
      sendBtn.hidden = true;
      sendBtn.disabled = true;
      sendBtn.setAttribute('aria-hidden', 'true');
      sendBtn.setAttribute('aria-disabled', 'true');
    };

    const syncSend = (opts) => {
      if (!sendBtn) return;
      const instant = opts && opts.instant;
      const ok = step === 4 && $('#syjConsent')?.checked === true;
      if (!ok) {
        if (sendBtn.hidden || instant || reduceMotion) {
          hideSend();
          return;
        }
        sendBtn.classList.remove('is-in');
        sendBtn.disabled = true;
        sendBtn.setAttribute('aria-disabled', 'true');
        const finish = () => {
          if (step === 4 && $('#syjConsent')?.checked) return;
          hideSend();
        };
        sendBtn.addEventListener('transitionend', finish, { once: true });
        window.setTimeout(finish, 400);
        return;
      }
      sendBtn.disabled = false;
      sendBtn.removeAttribute('aria-hidden');
      sendBtn.setAttribute('aria-disabled', 'false');
      setErr('consent', '');
      if (!sendBtn.hidden && sendBtn.classList.contains('is-in')) return;
      sendBtn.hidden = false;
      if (instant || reduceMotion) {
        sendBtn.classList.add('is-in');
        return;
      }
      sendBtn.classList.remove('is-in');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => sendBtn.classList.add('is-in'));
      });
    };

    const buildMessage = (d) => {
      const line = (k, v) => v ? '• ' + k + ': ' + v + '\n' : '';
      return 'مرحبًا Like A Model\n' +
        'أرغب ببدء رحلتي عبر نموذج الموقع:\n\n' +
        line('الاسم', d.name) +
        line('رقم الجوال', d.phone) +
        line('الهدف', d.goal) +
        line('نوع الدعم', d.support) +
        line('وقت التواصل', d.time) +
        line('كيف تعرّفتُ عليكم', d.source) +
        (d.message ? '\n' + d.message + '\n' : '') +
        '\nأوافق على تواصل الفريق معي بشأن طلبي.';
    };

    restore();
    applyGoalFromQuery();
    show();

    form.addEventListener('input', persist);
    form.addEventListener('change', (e) => {
      persist();
      if (e.target.id === 'syjConsent') {
        syncSend();
        if (e.target.checked) say('');
      }
    });

    backBtn?.addEventListener('click', () => {
      say('');
      if (step > 1) { step -= 1; show(); }
    });

    nextBtn?.addEventListener('click', () => {
      const bad = validate(step);
      if (bad) {
        say('الرجاء إكمال هذه الخطوة قبل المتابعة.');
        bad.focus();
        return;
      }
      say('');
      if (step < 4) { step += 1; show(); }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const bad = validate(4);
      if (bad) {
        say('الرجاء الموافقة على التواصل لإرسال الطلب.');
        bad.focus();
        return;
      }
      const data = read();
      const url = waWith(buildMessage(data));
      try { sessionStorage.removeItem(KEY); } catch (err) { /* */ }

      const win = window.open(url, '_blank', 'noopener');
      if (!win) window.location.href = url;

      card.classList.add('is-done');
      say('تم استلام طلبكِ. سيتواصل معكِ الفريق قريبًا.');
      $('#syjDoneTitle')?.focus();

      let left = 8;
      if (countEl) countEl.textContent = toAr(left);
      timer = window.setInterval(() => {
        left -= 1;
        if (left <= 0) {
          window.clearInterval(timer);
          window.location.href = '/';
          return;
        }
        if (countEl) countEl.textContent = toAr(left);
      }, 1000);
    });

    $('#syjHome')?.addEventListener('click', () => {
      window.clearInterval(timer);
    });

    window.__lamAbortStartJourney = () => {
      window.clearInterval(timer);
    };
  }


  /* ══════════ 11. الأزرار العائمة ══════════ */
  function initToTop() {
    const topBtn = $('#toTop');
    const waBtn = $('#fabWhatsapp');
    const chatBtn = $('#chatbotOpen');
    if (!topBtn && !waBtn && !chatBtn) return;
    if (topBtn?.dataset.bound === '1') return;
    if (topBtn) topBtn.dataset.bound = '1';
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const hideNearHero = document.body.classList.contains('page-syj') ? false : y < 40;
      if (topBtn) topBtn.hidden = y < 700;
      if (waBtn) waBtn.hidden = hideNearHero;
      if (chatBtn) {
        const wasVisible = !chatBtn.hidden;
        chatBtn.hidden = hideNearHero;
        if (hideNearHero && wasVisible) {
          window.dispatchEvent(new Event('lam:close-chatbot'));
        }
      }
      ticking = false;
    };
    update();
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    topBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      $('.brand')?.focus();
    });
  }


  /* ══════════ 11ب. Chatbot FAQ (أسئلة ثابتة) ══════════ */
  function initChatbot() {
    const root = $('#chatbot');
    const openBtn = $('#chatbotOpen');
    const thread = $('#chatbotThread');
    const panel = root && $('.chatbot-panel', root);
    if (!root || !openBtn || !thread || !panel) return;
    if (root.dataset.bound === '1') return;
    root.dataset.bound = '1';
    if (!Array.isArray(CHAT_FAQ) || !CHAT_FAQ.length) {
      openBtn.hidden = true;
      return;
    }

    let open = false;
    let busy = false;
    let lastFocus = null;
    let answerTimer = 0;

    const WELCOME = 'أهلًا بكِ 🤍 كيف يمكنني مساعدتكِ اليوم؟';

    const scrollEnd = () => {
      thread.scrollTop = thread.scrollHeight;
    };

    const addBubble = (text, kind) => {
      const el = document.createElement('div');
      el.className = 'chat-bubble chat-bubble--' + kind;
      el.textContent = text;
      thread.appendChild(el);
      scrollEnd();
      return el;
    };

    const clearReplies = () => {
      $$('.chat-replies, .chat-again', thread).forEach((n) => n.remove());
    };

    const showQuestions = () => {
      clearReplies();
      const wrap = document.createElement('div');
      wrap.className = 'chat-replies';
      wrap.setAttribute('role', 'group');
      wrap.setAttribute('aria-label', 'أسئلة شائعة');

      CHAT_FAQ.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chat-reply';
        btn.textContent = item.q;
        btn.dataset.faq = String(idx);
        btn.addEventListener('click', () => onAsk(item, btn));
        wrap.appendChild(btn);
      });

      thread.appendChild(wrap);
      scrollEnd();
    };

    const showAgain = () => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-again';
      btn.textContent = 'سؤال آخر';
      btn.addEventListener('click', () => {
        btn.remove();
        showQuestions();
      });
      thread.appendChild(btn);
      scrollEnd();
    };

    const onAsk = (item, btn) => {
      if (busy) return;
      busy = true;
      $$('.chat-reply', thread).forEach((b) => { b.disabled = true; });
      clearReplies();
      addBubble(item.q, 'user');

      window.clearTimeout(answerTimer);
      const delay = reduceMotion ? 0 : 300;
      answerTimer = window.setTimeout(() => {
        addBubble(item.a, 'bot');
        showAgain();
        busy = false;
      }, delay);
    };

    const resetThread = () => {
      window.clearTimeout(answerTimer);
      busy = false;
      thread.replaceChildren();
      addBubble(WELCOME, 'bot');
      showQuestions();
    };

    const setOpen = (next) => {
      if (next === open) return;
      if (next && document.body.classList.contains('is-bk-open')) return;
      open = next;
      openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('is-chat-open', open);

      if (open) {
        lastFocus = document.activeElement;
        resetThread();
        root.hidden = false;
        root.setAttribute('aria-hidden', 'false');
        requestAnimationFrame(() => {
          root.classList.add('is-open');
          panel.focus({ preventScroll: true });
        });
      } else {
        root.classList.remove('is-open');
        const finish = () => {
          if (open) return;
          root.hidden = true;
          root.setAttribute('aria-hidden', 'true');
          if (lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus({ preventScroll: true });
          }
        };
        if (reduceMotion) finish();
        else window.setTimeout(finish, 280);
      }
    };

    openBtn.addEventListener('click', () => setOpen(!open));
    root.addEventListener('click', (e) => {
      if (e.target && e.target.closest('[data-chat-close]')) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && open && !document.body.classList.contains('is-bk-open')) {
        e.preventDefault();
        setOpen(false);
      }
    });

    window.addEventListener('lam:close-chatbot', () => setOpen(false));
  }


  /* ══════════ 10ج. Modal حجز جلسة التقييم (متعدد الخطوات) ══════════ */
  function initBookingModal() {
    const modal = $('#bookingModal');
    const form = $('#bookingForm');
    if (!modal || !form) return;
    if (form.dataset.bound === '1') return;
    form.dataset.bound = '1';
    const openSel = '[data-bk-open], [data-open-booking-modal]';

    const TOTAL = 5;
    const RIYADH = { lat: 24.7136, lng: 46.6753 };
    const MONTHS_AR = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    const SLOT_LABELS = { '10:00': '10:00 ص', '12:00': '12:00 م', '16:00': '4:00 م', '18:00': '6:00 م' };

    const dialog = $('.bk-modal-dialog', modal);
    const panels = $$('[data-bk-step]', form);
    const backBtn = $('#bkBack');
    const nextBtn = $('#bkNext');
    const sendBtn = $('#bkSend');
    const stepLbl = $('#bkStepLbl');
    const bar = $('#bkBarFill');
    const status = $('#bkStatus');
    const review = $('#bkReview');
    const consentEl = $('#bkConsent', form);
    const locateOpen = $('#bkLocateOpen', form);
    const mapPanel = $('#bkMapPanel', form);
    const mapEl = $('#bkMap', form);
    const useMyLoc = $('#bkUseMyLoc', form);
    const locateDone = $('#bkLocateDone', form);
    const locateEdit = $('#bkLocateEdit', form);
    const locateAddr = $('#bkLocateAddr', form);
    const latEl = $('#bkLat', form);
    const lngEl = $('#bkLng', form);
    const addressEl = $('#bkAddress', form);
    const calMonthEl = $('#bkCalMonth', form);
    const calGrid = $('#bkCalGrid', form);
    const calPrev = $('#bkCalPrev', form);
    const calNext = $('#bkCalNext', form);
    const slotsWrap = $('#bkSlots', form);
    const slotsList = $('#bkSlotsList', form);
    const dateEl = $('#bkDate', form);
    const slotEl = $('#bkSlot', form);

    let step = 1;
    let lastFocus = null;
    let open = false;
    let map = null;
    let marker = null;
    let pendingLatLng = null;
    let calCursor = new Date();
    calCursor.setDate(1);
    calCursor.setHours(0, 0, 0, 0);

    const val = (sel) => ($(sel, form)?.value || '').trim();

    const phoneOk = (raw) => {
      const digits = String(raw || '').replace(/\D/g, '');
      return digits.length >= 9 && digits.length <= 15;
    };
    const numIn = (raw, min, max) => {
      if (raw === '') return false;
      const n = Number(raw);
      return Number.isFinite(n) && n >= min && n <= max;
    };
    const setErr = (key, msg) => {
      const box = form.querySelector('[data-err-for="' + key + '"]');
      if (box) box.textContent = msg || '';
    };
    const mark = (el, bad) => {
      if (!el) return;
      if (bad) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
    };
    const say = (msg, kind) => {
      if (!status) return;
      status.textContent = msg || '';
      status.classList.toggle('is-err', kind === 'err');
      status.classList.toggle('is-ok', kind === 'ok');
    };

    function isFilledControl(el) {
      if (!el || el.type === 'checkbox' || el.type === 'radio' || el.type === 'hidden') return false;
      if (!el.classList.contains('input')) return false;
      if (el.tagName === 'SELECT') return Boolean((el.value || '').trim());
      return String(el.value || '').trim() !== '';
    }
    function syncFilled(el) {
      if (!el || !el.classList || el.type === 'checkbox' || el.type === 'radio') return;
      if (!el.classList.contains('input')) return;
      const on = isFilledControl(el);
      el.classList.toggle('is-filled', on);
      const wrap = el.closest('.field-wrap');
      if (wrap) wrap.classList.toggle('is-filled', on);
    }
    function syncFilledAll() {
      form.querySelectorAll('.input').forEach(syncFilled);
    }

    function loadLeaflet() {
      if (window.L) return Promise.resolve(window.L);
      return new Promise((resolve, reject) => {
        const cssId = 'lam-leaflet-css';
        if (!document.getElementById(cssId)) {
          const link = document.createElement('link');
          link.id = cssId;
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
        }
        const existing = document.getElementById('lam-leaflet-js');
        if (existing) {
          existing.addEventListener('load', () => resolve(window.L));
          existing.addEventListener('error', reject);
          return;
        }
        const script = document.createElement('script');
        script.id = 'lam-leaflet-js';
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => resolve(window.L);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    async function reverseGeocode(lat, lng) {
      try {
        const url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' +
          encodeURIComponent(lat) + '&lon=' + encodeURIComponent(lng) + '&accept-language=ar';
        const res = await fetch(url, { headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error('geo');
        const data = await res.json();
        const a = data.address || {};
        const short = [a.suburb || a.neighbourhood || a.quarter, a.city || a.town || a.state || 'الرياض']
          .filter(Boolean).join(' — ');
        return short || data.display_name || 'موقع محدد على الخريطة';
      } catch (e) {
        return 'موقع محدد على الخريطة';
      }
    }

    function setPending(lat, lng) {
      pendingLatLng = { lat, lng };
      if (marker && map) marker.setLatLng([lat, lng]);
      saveLocation(lat, lng);
    }

    async function saveLocation(lat, lng) {
      if (latEl) latEl.value = String(lat);
      if (lngEl) lngEl.value = String(lng);
      const addr = await reverseGeocode(lat, lng);
      if (addressEl) addressEl.value = addr;
      setErr('bkLocation', '');
      showLocateDone();
    }

    async function ensureMap() {
      const L = await loadLeaflet();
      if (!mapEl) return;
      if (L.Icon && L.Icon.Default) {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
        });
      }
      const startLat = Number(latEl?.value) || RIYADH.lat;
      const startLng = Number(lngEl?.value) || RIYADH.lng;
      if (!map) {
        map = L.map(mapEl, { scrollWheelZoom: false, attributionControl: true });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap'
        }).addTo(map);
        marker = L.marker([startLat, startLng], { draggable: true }).addTo(map);
        marker.on('dragend', () => {
          const p = marker.getLatLng();
          setPending(p.lat, p.lng);
        });
        map.on('click', (e) => setPending(e.latlng.lat, e.latlng.lng));
      }
      map.setView([startLat, startLng], 13);
      marker.setLatLng([startLat, startLng]);
      pendingLatLng = { lat: startLat, lng: startLng };
      requestAnimationFrame(() => map.invalidateSize());
      setTimeout(() => map && map.invalidateSize(), 180);
    }

    function showLocateIdle() {
      if (locateOpen) locateOpen.hidden = false;
      if (mapPanel) mapPanel.hidden = true;
      if (locateDone) locateDone.hidden = true;
      if (locateAddr) { locateAddr.hidden = true; locateAddr.textContent = ''; }
    }
    function showLocateMap() {
      if (locateOpen) locateOpen.hidden = true;
      if (mapPanel) mapPanel.hidden = false;
      if (locateDone) locateDone.hidden = true;
      ensureMap();
    }
    function showLocateDone() {
      if (locateOpen) locateOpen.hidden = true;
      if (mapPanel) mapPanel.hidden = true;
      if (locateDone) locateDone.hidden = false;
      const addr = val('#bkAddress');
      if (locateAddr) {
        locateAddr.hidden = !addr;
        locateAddr.textContent = addr;
      }
    }
    function syncLocateUi() {
      if (val('#bkLat') && val('#bkLng')) showLocateDone();
      else showLocateIdle();
    }
    function clearLocation() {
      if (latEl) latEl.value = '';
      if (lngEl) lngEl.value = '';
      if (addressEl) addressEl.value = '';
      pendingLatLng = null;
      showLocateIdle();
    }

    function todayStart() {
      const t = new Date();
      t.setHours(0, 0, 0, 0);
      return t;
    }
    function ymd(d) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return y + '-' + m + '-' + day;
    }
    function formatDateAr(iso) {
      if (!iso) return '';
      const [y, m, d] = iso.split('-').map(Number);
      return toAr(d) + ' ' + MONTHS_AR[m - 1] + ' ' + toAr(y);
    }

    function paintCalendar() {
      if (!calGrid || !calMonthEl) return;
      const year = calCursor.getFullYear();
      const month = calCursor.getMonth();
      calMonthEl.textContent = MONTHS_AR[month] + ' ' + toAr(year);
      const firstDow = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const selected = val('#bkDate');
      const today = todayStart();
      const frag = document.createDocumentFragment();
      for (let i = 0; i < firstDow; i++) {
        const empty = document.createElement('button');
        empty.type = 'button';
        empty.className = 'bk-cal-day is-empty';
        empty.tabIndex = -1;
        empty.setAttribute('aria-hidden', 'true');
        frag.appendChild(empty);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const iso = ymd(date);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'bk-cal-day';
        btn.textContent = toAr(day);
        btn.dataset.date = iso;
        if (date < today) btn.disabled = true;
        if (ymd(today) === iso) btn.classList.add('is-today');
        if (selected === iso) btn.classList.add('is-on');
        btn.addEventListener('click', () => selectDate(iso));
        frag.appendChild(btn);
      }
      calGrid.replaceChildren(frag);
      if (calPrev) {
        const prevMonthEnd = new Date(year, month, 0);
        calPrev.disabled = prevMonthEnd < today;
      }
    }

    function selectDate(iso) {
      if (dateEl) dateEl.value = iso;
      if (slotEl) slotEl.value = '';
      $$('.bk-slot', form).forEach((b) => b.classList.remove('is-on'));
      if (slotsWrap) slotsWrap.hidden = false;
      setErr('bkAppt', '');
      paintCalendar();
    }

    function selectSlot(value) {
      if (slotEl) slotEl.value = value;
      $$('.bk-slot', form).forEach((b) => b.classList.toggle('is-on', b.dataset.slot === value));
      setErr('bkAppt', '');
    }

    function collect() {
      return {
        name: val('#bkName'),
        phone: val('#bkPhone'),
        weight: val('#bkWeight'),
        height: val('#bkHeight'),
        goal: val('#bkGoal'),
        lat: val('#bkLat'),
        lng: val('#bkLng'),
        address: val('#bkAddress'),
        date: val('#bkDate'),
        slot: val('#bkSlot'),
        slotLabel: SLOT_LABELS[val('#bkSlot')] || val('#bkSlot'),
        consent: consentEl?.checked === true
      };
    }

    function paintReview() {
      if (!review) return;
      const d = collect();
      const esc = (s) => String(s || '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      const row = (k, v) => v
        ? '<div class="bk-review-row"><span class="bk-review-k">' + esc(k) + '</span><span class="bk-review-v">' + esc(v) + '</span></div>'
        : '';
      review.innerHTML =
        row('الاسم', d.name) +
        row('رقم الجوال', d.phone) +
        row('الوزن', d.weight ? d.weight + ' كجم' : '') +
        row('الطول', d.height ? d.height + ' سم' : '') +
        row('الهدف', d.goal) +
        row('موقع الجلسة', d.address || (d.lat && d.lng ? 'موقع محدد على الخريطة' : '')) +
        row('موعد الجلسة', d.date ? (formatDateAr(d.date) + (d.slotLabel ? ' — ' + d.slotLabel : '')) : '');
    }

    function validateStep(n) {
      let first = null;
      const fail = (el, key, msg) => { setErr(key, msg); if (el) mark(el, true); first ||= el; };
      const ok = (el, key) => { setErr(key, ''); if (el) mark(el, false); };

      if (n === 1) {
        const nameEl = $('#bkName', form);
        const phoneEl = $('#bkPhone', form);
        const name = val('#bkName');
        if (name.length < 2) fail(nameEl, 'bkName', 'الرجاء كتابة الاسم الكامل.');
        else ok(nameEl, 'bkName');
        if (!phoneOk(val('#bkPhone'))) fail(phoneEl, 'bkPhone', 'الرجاء كتابة رقم جوال صحيح.');
        else ok(phoneEl, 'bkPhone');
      }
      if (n === 2) {
        const weightEl = $('#bkWeight', form);
        const heightEl = $('#bkHeight', form);
        const goalEl = $('#bkGoal', form);
        if (!numIn(val('#bkWeight'), 30, 250)) fail(weightEl, 'bkWeight', 'الرجاء إدخال الوزن بالكيلوجرام.');
        else ok(weightEl, 'bkWeight');
        if (!numIn(val('#bkHeight'), 100, 220)) fail(heightEl, 'bkHeight', 'الرجاء إدخال الطول بالسنتيمتر.');
        else ok(heightEl, 'bkHeight');
        if (!val('#bkGoal')) fail(goalEl, 'bkGoal', 'الرجاء اختيار هدف الرحلة.');
        else ok(goalEl, 'bkGoal');
      }
      if (n === 3) {
        // موقع الجلسة اختياري — يمكن المتابعة بدون تحديد
        setErr('bkLocation', '');
      }
      if (n === 4) {
        if (!val('#bkDate') || !val('#bkSlot')) {
          fail(calGrid, 'bkAppt', 'الرجاء اختيار التاريخ والوقت المناسبين.');
        } else ok(null, 'bkAppt');
      }
      if (n === 5) {
        if (!consentEl?.checked) fail(consentEl, 'bkConsent', 'يلزم الموافقة على التواصل لإرسال الطلب.');
        else ok(consentEl, 'bkConsent');
      }
      return first;
    }

    function syncSend() {
      if (!sendBtn) return;
      const ready = step === TOTAL && consentEl?.checked === true;
      sendBtn.hidden = step !== TOTAL;
      sendBtn.disabled = !ready;
      sendBtn.setAttribute('aria-disabled', ready ? 'false' : 'true');
    }

    function paintHello() {
      const nameSlot = $('#bkHelloName');
      if (nameSlot) nameSlot.textContent = val('#bkName');
    }
    function playHelloEnter() {
      const hello = $('#bkHello');
      if (!hello) return;
      hello.classList.remove('is-in');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        hello.classList.add('is-in');
        return;
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => hello.classList.add('is-in'));
      });
    }

    function showStep() {
      panels.forEach((p) => {
        const on = +p.dataset.bkStep === step;
        p.classList.toggle('is-on', on);
        p.hidden = !on;
      });
      if (stepLbl) stepLbl.textContent = toAr(step) + ' من ' + toAr(TOTAL);
      if (bar) bar.style.setProperty('--bk-p', String((step / TOTAL) * 100));
      if (backBtn) backBtn.hidden = step === 1;
      if (nextBtn) nextBtn.hidden = step === TOTAL;
      if (step === 2) { paintHello(); playHelloEnter(); }
      if (step === 3) syncLocateUi();
      if (step === 4) {
        paintCalendar();
        if (slotsWrap) slotsWrap.hidden = !val('#bkDate');
        $$('.bk-slot', form).forEach((b) => b.classList.toggle('is-on', b.dataset.slot === val('#bkSlot')));
      }
      if (step === 5) paintReview();
      syncSend();
      say('');
      if (open && step <= 2) {
        const firstInput = form.querySelector('[data-bk-step="' + step + '"] .input');
        if (firstInput) requestAnimationFrame(() => firstInput.focus({ preventScroll: true }));
      }
    }

    function buildMessage(d) {
      const line = (k, v, suffix) => v ? '• ' + k + ': ' + v + (suffix || '') + '\n' : '';
      return 'مرحبًا Like A Model 👋\n' +
        'أرغب بحجز جلسة تقييم مجانية عبر الموقع:\n\n' +
        line('الاسم', d.name) +
        line('رقم الجوال', d.phone) +
        line('الوزن', d.weight, ' كجم') +
        line('الطول', d.height, ' سم') +
        line('الهدف', d.goal) +
        line('موقع الجلسة', d.address) +
        (d.lat && d.lng ? line('الإحداثيات', d.lat + ', ' + d.lng) : '') +
        line('موعد الجلسة', d.date ? (formatDateAr(d.date) + (d.slotLabel ? ' — ' + d.slotLabel : '')) : '') +
        '\nأتطلع لردّكم.';
    }

    function resetBookingExtras() {
      clearLocation();
      if (dateEl) dateEl.value = '';
      if (slotEl) slotEl.value = '';
      if (slotsWrap) slotsWrap.hidden = true;
      $$('.bk-slot', form).forEach((b) => b.classList.remove('is-on'));
      calCursor = new Date();
      calCursor.setDate(1);
      calCursor.setHours(0, 0, 0, 0);
    }

    function openModal() {
      if (open) return;
      open = true;
      window.dispatchEvent(new Event('lam:close-chatbot'));
      lastFocus = document.activeElement;
      step = 1;
      showStep();
      syncFilledAll();
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-bk-open');
      window.dispatchEvent(new Event('lam:booking-opened'));
      requestAnimationFrame(() => {
        (dialog || modal).focus({ preventScroll: true });
        $('#bkName', form)?.focus({ preventScroll: true });
      });
    }

    function closeModal() {
      if (!open) return;
      open = false;
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-bk-open');
      window.dispatchEvent(new Event('lam:booking-closed'));
      say('');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
    }

    window.__lamOpenBooking = openModal;
    window.__lamCloseBooking = closeModal;
    if (window.__lamBookingQueued) {
      window.__lamBookingQueued = false;
      openModal();
    }

    document.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest(openSel);
      if (!btn || !document.contains(btn)) return;
      e.preventDefault();
      openModal();
    });
    modal.addEventListener('click', (e) => {
      if (e.target && e.target.closest('[data-bk-close]')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (!open || e.key !== 'Escape') return;
      e.preventDefault();
      closeModal();
    });

    locateOpen?.addEventListener('click', () => {
      setErr('bkLocation', '');
      showLocateMap();
    });
    locateEdit?.addEventListener('click', () => showLocateMap());
    useMyLoc?.addEventListener('click', () => {
      if (!navigator.geolocation) return;
      useMyLoc.disabled = true;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          useMyLoc.disabled = false;
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          if (map) map.setView([lat, lng], 15);
          if (marker && map) marker.setLatLng([lat, lng]);
          setPending(lat, lng);
        },
        () => { useMyLoc.disabled = false; },
        { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
      );
    });

    calPrev?.addEventListener('click', () => {
      calCursor.setMonth(calCursor.getMonth() - 1);
      paintCalendar();
    });
    calNext?.addEventListener('click', () => {
      calCursor.setMonth(calCursor.getMonth() + 1);
      paintCalendar();
    });
    slotsList?.addEventListener('click', (e) => {
      const btn = e.target.closest('.bk-slot');
      if (!btn || !btn.dataset.slot) return;
      selectSlot(btn.dataset.slot);
    });

    backBtn?.addEventListener('click', () => {
      if (step <= 1) return;
      step -= 1;
      showStep();
    });
    nextBtn?.addEventListener('click', () => {
      const bad = validateStep(step);
      if (bad) {
        if (typeof bad.focus === 'function') bad.focus({ preventScroll: false });
        return;
      }
      if (step >= TOTAL) return;
      step += 1;
      showStep();
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (step !== TOTAL) return;
      const bad = validateStep(TOTAL);
      if (bad) {
        say('يلزم الموافقة على التواصل قبل إرسال الطلب.', 'err');
        if (typeof bad.focus === 'function') bad.focus({ preventScroll: false });
        syncSend();
        return;
      }
      const data = collect();
      if (!FORM.endpoint) {
        const url = waWith(buildMessage(data));
        say('جارٍ فتح واتساب لإرسال طلبِك…', 'ok');
        const win = window.open(url, '_blank', 'noopener');
        if (!win) window.location.href = url;
        return;
      }
      sendBtn.disabled = true;
      sendBtn.setAttribute('aria-disabled', 'true');
      say('جارٍ الإرسال…');
      try {
        const res = await fetch(FORM.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ ...data, origin: 'booking-modal' })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        resetBookingExtras();
        step = 1;
        syncFilledAll();
        showStep();
        say('تم استلام طلبِك ✓ سنتواصل معكِ قريبًا.', 'ok');
      } catch (err) {
        say('تعذّر الإرسال. تواصلي معنا عبر واتساب أو الهاتف.', 'err');
      } finally {
        syncSend();
      }
    });

    form.addEventListener('input', (e) => {
      const t = e.target;
      if (!t || !t.id) return;
      if (['bkName', 'bkPhone', 'bkWeight', 'bkHeight'].includes(t.id)) {
        setErr(t.id, ''); mark(t, false);
      }
      if (t.matches('input.input, textarea.input')) syncFilled(t);
      syncSend();
    });
    form.addEventListener('change', (e) => {
      const t = e.target;
      if (t && t.id) {
        const mapIds = { bkName: 'bkName', bkPhone: 'bkPhone', bkWeight: 'bkWeight', bkHeight: 'bkHeight', bkGoal: 'bkGoal', bkConsent: 'bkConsent' };
        const key = mapIds[t.id];
        if (key) { setErr(key, ''); mark(t, false); }
      }
      if (t && t.matches('select.input, input.input, textarea.input')) syncFilled(t);
      if (step === TOTAL) paintReview();
      syncSend();
    });

    modal.addEventListener('keydown', (e) => {
      if (!open || e.key !== 'Tab') return;
      const focusables = $$('button:not([hidden]):not([disabled]), [href], input:not([disabled]):not([hidden]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
        .filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    showStep();
    syncFilledAll();
  }


  /* ══════════ التشغيل ══════════ */
  function bootLayout() {
    applyContact();
    initLang();
    initBookingModal();
    initToTop();
    initChatbot();
  }

  function bootHome() {
    homeSignal = takeSignal('home');
    resetHomeFx();
    applyContact();
    initHeroVideo();
    initMap();
    initCounters();
    initStatsParallax();
    initContactParallax();
    initReveal();
    initAboutTimeline();
    initAboutCoda();
    initSupportOrbit();
    initHomeTrainingMotion();
    initEcosystemMotion();
    initHashLanding();
    initContactForm();
  }

  window.__lamInitHome = bootHome;
  window.__lamAbortHome = () => {
    takeSignal('home');
    resetHomeFx();
  };
  window.__lamInitStartJourney = initStartJourney;

  if (!window.__lamLayoutBooted) {
    window.__lamLayoutBooted = true;
    bootLayout();
  }
}

