/* ==========================================================================
   Like A Model — Landing Page JS
   ──────────────────────────────────────────────────────────────────────────
   ✏️  كل ما يحتاج تعديلًا موجود في الكتل المرقّمة أدناه فقط.
   ========================================================================== */

/* ✏️ ①  بيانات التواصل */
const CONTACT = {
  whatsapp    : '966542555516',              // رقم واتساب بصيغة دولية بدون + أو مسافات
  whatsappText: '0542555516',                // الرقم كما يُعرض للزائرة
  phoneTel    : '+966920031018',             // ما يُتصل به فعليًا عند الضغط
  phoneText   : '920031018',                 // الرقم الموحّد كما يُعرض
  email       : 'info@likeamodel.com.sa',
  address     : 'الرياض — المملكة العربية السعودية',

  /* ✏️ روابط الحسابات — ضعي رابط الحساب الكامل لكل منصّة.
     اتركي القيمة فارغة '' لإخفاء أيقونة المنصّة من الموقع بالكامل. */
  social: {
    tiktok   : 'https://www.tiktok.com/',
    instagram: 'https://www.instagram.com/',
    facebook : 'https://www.facebook.com/',
    x        : 'https://x.com/',
    linkedin : 'https://www.linkedin.com/'
  }
};

/* ✏️ ③  فيديو الهيرو — خلفية سينمائية (أول ٣ ثوانٍ حلقيًا). */
const VIDEO = {
  url   : 'https://www.youtube.com/watch?v=nuvMkMLdQqc',
  poster: 'https://i.ytimg.com/vi/nuvMkMLdQqc/maxresdefault.jpg',
  start : 0,
  end   : 3
};

/* ✏️ ④  خريطة موقع الشركة — غيّري الرابطين معًا عند اعتماد الموقع النهائي */
const MAP = {
  embed: 'https://www.google.com/maps?q=حي%20الورود%2C%20الرياض%2C%20المملكة%20العربية%20السعودية&output=embed',
  open:  'https://www.google.com/maps?q=حي%20الورود%2C%20الرياض%2C%20المملكة%20العربية%20السعودية'
};

/* ✏️ ⑤  وجهة نموذج «تواصل معنا»
   endpoint فارغ  → يُرسَل الطلب عبر واتساب برسالة جاهزة (لا يحتاج خادمًا).
   endpoint مضبوط → يُرسَل الطلب بصيغة JSON عبر POST (Formspree / Google Apps Script / API خاص). */
const FORM = {
  endpoint: ''
};

/* ✏️ ⑥  النسخة الإنجليزية — ضعي رابط الصفحة الإنجليزية لتفعيل زر EN */
const LANG = {
  enUrl: ''                                  // مثال: 'en/index.html'
};

/* ✏️ ⑦  شكل أرقام «نجاحنا بالأرقام»: false = ٣٥+ عربية · true = 35+ لاتينية */
const STATS_LATIN = false;

/* ────────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    const setText = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };
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
    if (!btn) return;
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
    if (!media) return;

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


  /* ══════════ 3ب. كتابة الهيرو — حلقة مستمرة ══════════ */
  function initHeroType() {
    const hero = $('#home');
    if (hero?.dataset.typed === '1') return;
    if (hero) hero.dataset.typed = '1';

    const live = $('.hero-title .hero-type-live');
    const cta = $('.hero-content .btn');
    const scroll = $('.hero-scroll');
    const FIRST = 'أهلًا بكِ في Like A Model';
    const PHRASES = [FIRST, 'أكثر من تدريب… أسلوب حياة'];

    const setTyped = (el, text) => {
      const latin = text.match(/[A-Za-z].*$/);
      if (!latin) { el.textContent = text; return; }
      el.replaceChildren();
      const ar = text.slice(0, latin.index);
      if (ar) el.append(document.createTextNode(ar));
      const en = document.createElement('bdi');
      en.className = 'lam';
      en.lang = 'en';
      en.textContent = latin[0];
      el.append(en);
    };

    const showStatic = () => {
      if (live) {
        setTyped(live, FIRST);
        live.classList.add('is-done');
      }
      cta?.classList.add('is-in');
      scroll?.classList.add('is-in');
    };

    if (reduceMotion || !live) {
      showStatic();
      return;
    }

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeInto = async (text, delay) => {
      live.classList.remove('is-hold', 'is-done', 'is-fade');
      live.classList.add('is-typing');
      const chars = Array.from(text);
      for (let i = 1; i <= chars.length; i++) {
        setTyped(live, chars.slice(0, i).join(''));
        await wait(delay);
      }
    };

    const fadeOut = async () => {
      live.classList.remove('is-typing', 'is-hold');
      live.classList.add('is-fade');
      await wait(reduceMotion ? 0 : 560);
      live.textContent = '';
      live.classList.remove('is-fade');
    };

    live.textContent = '';
    cta?.classList.add('is-in');
    scroll?.classList.add('is-in');

    (async () => {
      if (document.fonts && document.fonts.ready) {
        await Promise.race([document.fonts.ready, wait(800)]);
      }
      await wait(280);
      for (;;) {
        for (const phrase of PHRASES) {
          await typeInto(phrase, 68);
          live.classList.remove('is-typing');
          live.classList.add('is-hold');
          await wait(1500);
          await fadeOut();
        }
      }
    })();
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
    if (!frame || !src) return;

    const f = document.createElement('iframe');
    f.src = src;
    f.title = 'موقع شركة Like A Model — حي الورود، الرياض';
    f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade';
    f.setAttribute('scrolling', 'no');
    f.allowFullscreen = true;
    frame.replaceChildren(f);
  }


  /* ══════════ 5. عدّاد «نجاحنا بالأرقام» ══════════ */
  function initCounters() {
    const nums = $$('.stat-num[data-count]');
    if (!nums.length) return;

    const fmt = (n) => '+' + (STATS_LATIN ? String(n) : toAr(n));

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

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        run(entry.target);
      });
    }, { threshold: 0.4 });

    nums.forEach((el) => io.observe(el));

    // شبكة أمان: لا يجوز أن يبقى رقم على صفر إذا تعطّل المراقب
    setTimeout(() => {
      nums.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) run(el);
      });
    }, 1500);
  }


  /* ══════════ 5b. Parallax خلفية «نجاحنا بالأرقام» ══════════ */
  function initStatsParallax() {
    const statsSection = document.querySelector('.stats-section');
    const statsBg = document.querySelector('.stats-parallax-bg');
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

      // حركة واضحة بمقدار 240px من أعلى إلى أسفل
      const offsetY = -120 + (clamped * 240);

      statsBg.style.setProperty('--stats-parallax-y', `${offsetY.toFixed(1)}px`);
    };

    const requestStatsParallax = () => {
      if (!statsParallaxFrame) {
        statsParallaxFrame = requestAnimationFrame(updateStatsParallax);
      }
    };

    window.addEventListener('scroll', requestStatsParallax, { passive: true });
    window.addEventListener('resize', requestStatsParallax);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', requestStatsParallax);
    requestStatsParallax();
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
      const pinned = document.body.classList.contains('page-syj');
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
    $$('a[href^="#"]', nav).forEach((a) => a.addEventListener('click', () => shut()));

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
    clearTimeout(window.__lamReveal);          // المراقب يعمل — لا حاجة لشبكة الأمان
    const items = $$('.reveal');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach((el) => io.observe(el));

    // شبكة أمان: لا يجوز أن يبقى أي محتوى مخفيًا إذا تعطّل المراقب
    setTimeout(() => {
      items.forEach((el) => {
        if (el.classList.contains('is-in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-in');
          io.unobserve(el);
        }
      });
    }, 1200);
  }


  /* ══════════ 8ب. مسار «من نحن» — الخط والنص معًا ══════════ */
  function initAboutTimeline() {
    const section = $('#about-intro') || $('#about');
    const block = section ? $('[data-timeline]', section) : $('[data-timeline]');
    if (!section || !block) return;

    const lines = $$('.about-story-line', section);

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

    const io = new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
      update();
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: [0, 0.08, 0.2, 0.45, 0.75, 1]
    });

    io.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }


  /* ══════════ 8.5 مسار ندعمكِ الدائري مع التمرير ══════════ */
  function initSupportOrbit() {
    const section = $('#support');
    if (!section) return;

    const progressEl = $('.support-arc-progress', section);
    const arrow = $('.support-arc-arrow', section);
    const halo = $('.support-halo', section);
    const figure = $('.support-figure', section);
    const steps = [1, 2, 3, 4].map((n) => section.querySelector('[data-support-step="' + n + '"]'));
    const desktopMq = window.matchMedia('(min-width: 960px)');

    const THRESH = { 1: 0.04, 2: 0.28, 3: 0.52, 4: 0.76 };
    const DRAW_START = 0.008;
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

    const apply = (p, headed) => {
      const drawn = Math.min(1, Math.max(0, p));
      if (progressEl) {
        progressEl.style.strokeDasharray = '1';
        progressEl.style.strokeDashoffset = String(1 - drawn);
      }
      placeArrow(drawn);
      section.classList.toggle('is-headed', headed);
      const showCenter = drawn >= DRAW_START;
      halo?.classList.toggle('is-on', showCenter);
      figure?.classList.toggle('is-on', showCenter);

      steps.forEach((el, i) => {
        if (!el) return;
        const on = drawn >= THRESH[i + 1];
        el.classList.toggle('is-on', on);
        if (on) el.removeAttribute('aria-hidden');
        else el.setAttribute('aria-hidden', 'true');
      });
    };

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const headed = rect.bottom > 64 && rect.top < vh * 0.9;
      let p = 0;

      if (desktopMq.matches) {
        const travel = section.offsetHeight - vh;
        p = travel > 0 ? -rect.top / travel : (rect.top < vh ? 1 : 0);
      } else {
        const visual = $('.support-orbit__center', section) || section;
        const y = visual.getBoundingClientRect().top;
        const headerH = parseFloat(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-measured')) || 72;
        const start = vh * 0.82;
        const end = headerH + vh * 0.22;
        if (y <= end) p = 1;
        else if (y >= start) p = 0;
        else p = (start - y) / (start - end);
      }

      apply(p, headed);
    };

    if (reduceMotion) {
      section.classList.add('is-static');
      apply(1, true);
      return;
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

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    desktopMq.addEventListener?.('change', onScroll);
    measure();
  }


  /* ══════════ 9. تظليل رابط القسم الحالي ══════════ */
  function initScrollSpy() {
    const links = $$('.site-nav a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;

    const map = new Map();
    links.forEach((a) => {
      const sec = document.getElementById(a.getAttribute('href').slice(1));
      if (sec) map.set(sec, a);
    });
    if (!map.size) return;

    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
      // نخرج قبل المسح، وإلا اختفى التظليل كلما عبر الشريط فجوة غير مراقَبة
      if (!visible.size) return;
      links.forEach((a) => a.removeAttribute('aria-current'));
      const top = Array.from(visible).sort((a, b) => a.offsetTop - b.offsetTop)[0];
      map.get(top)?.setAttribute('aria-current', 'true');
    }, { rootMargin: '-45% 0px -50% 0px' });

    map.forEach((_, sec) => io.observe(sec));
  }


  /* ══════════ 10. نموذج «تواصل معنا» ══════════ */
  function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    const status  = $('#formStatus');
    const submit  = $('#contactSubmit');
    const otherIn = $('#cSourceOther');
    const otherFd = $('#sourceOtherField');
    const sourceEl = $('#cSource', form);
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
      if (!consentEl?.checked) {
        issues.push({ el: consentEl, key: 'consent', msg: 'يلزم الموافقة على التواصل لإرسال الطلب.' });
      }
      return issues;
    }

    const ERR_KEYS = ['cName','cPhone','cWeight','cHeight','goal','source','cSourceOther','consent'];
    const FIELD_IDS = {
      cName: '#cName', cPhone: '#cPhone', cWeight: '#cWeight', cHeight: '#cHeight',
      goal: '#cGoal', source: '#cSource', cSourceOther: '#cSourceOther', consent: '#cConsent'
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
      syncOther();
      syncSubmit();
    });
    form.addEventListener('change', (e) => {
      syncOther();
      if (e.target && e.target.id) {
        const map = {
          cName: 'cName', cPhone: 'cPhone', cWeight: 'cWeight', cHeight: 'cHeight',
          cGoal: 'goal', cSource: 'source', cSourceOther: 'cSourceOther', cConsent: 'consent'
        };
        const key = map[e.target.id];
        if (key) { setErr(key, ''); mark(e.target, false); }
      }
      syncSubmit();
    });

    syncOther();
    syncSubmit();
  }


  /* ══════════ 10ب. نموذج «ابدئي رحلتكِ» ══════════ */
  function initStartJourney() {
    const form = $('#syjForm');
    const card = $('#syjCard');
    if (!form || !card) return;

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
          window.location.href = 'index.html';
          return;
        }
        if (countEl) countEl.textContent = toAr(left);
      }, 1000);
    });

    $('#syjHome')?.addEventListener('click', () => {
      window.clearInterval(timer);
    });
  }


  /* ══════════ 11. الأزرار العائمة ══════════ */
  function initToTop() {
    const topBtn = $('#toTop');
    const waBtn = $('#fabWhatsapp');
    if (!topBtn && !waBtn) return;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (topBtn) topBtn.hidden = y < 700;
      if (waBtn) waBtn.hidden = document.body.classList.contains('page-syj') ? false : y < 40;
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


  /* ══════════ التشغيل ══════════ */
  function boot() {
    applyContact();
    initLang();
    initHeroType();
    initHeroVideo();
    initMap();
    initCounters();
    initStatsParallax();
    initHeader();
    initNav();
    initReveal();
    initAboutTimeline();
    initSupportOrbit();
    initScrollSpy();
    initContactForm();
    initStartJourney();
    initToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
