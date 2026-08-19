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

/* ✏️ ③  الفيديو التسويقي — ضعي رابط يوتيوب / فيديو / MP4.
   اتركيه فارغًا ليبقى المكان محجوزًا بنصّ توضيحي حتى يجهز الفيديو. */
const VIDEO = {
  url   : '',                                // مثال: 'https://www.youtube.com/watch?v=XXXXXXXX'
  poster: ''                                 // مثال: 'assets/img/video-poster.jpg'
};

/* ✏️ ④  خريطة موقع الشركة — انسخي رابط «تضمين خريطة» من خرائط جوجل (قيمة src فقط) */
const MAP = {
  embed: ''                                  // مثال: 'https://www.google.com/maps/embed?pb=...'
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
    ['#waLink', '#fabWhatsapp', '#cWaLink'].forEach((sel) => {
      const el = $(sel); if (el) { el.href = WA; el.rel = 'noopener'; }
    });

    // روابط الهاتف والبريد
    const tel = 'tel:' + CONTACT.phoneTel.replace(/[^\d+]/g, '');
    ['#topPhone', '#phoneLink', '#cPhoneLink'].forEach((sel) => {
      const el = $(sel); if (el) el.href = tel;
    });
    ['#topMail', '#emailLink', '#cMailLink'].forEach((sel) => {
      const el = $(sel); if (el) el.href = 'mailto:' + CONTACT.email;
    });

    // النصوص المعروضة
    const setText = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };
    setText('#topPhoneText', CONTACT.phoneText);
    setText('#topMailText',  CONTACT.email);
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

    // روابط CTA التي تفتح واتساب برسالة جاهزة
    const presets = {
      '#partnerCta': 'مرحبًا، أرغب بالانضمام إلى شركاء النجاح في Like A Model.'
    };
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


  /* ══════════ 3. الفيديو التسويقي ══════════ */
  function initVideo() {
    const frame = $('#videoFrame');
    const btn   = $('#videoPlay');
    const ph    = $('#videoPh');
    if (!frame || !btn) return;

    const url = (VIDEO.url || '').trim();

    if (VIDEO.poster) {
      frame.style.backgroundImage = 'url("' + VIDEO.poster.replace(/"/g, '%22') + '")';
      frame.style.backgroundSize = 'cover';
      frame.style.backgroundPosition = 'center';
    }

    if (!url) {                                   // الفيديو لم يجهز بعد
      btn.disabled = true;
      btn.setAttribute('aria-disabled', 'true');
      btn.title = 'الفيديو قيد الإعداد';
      return;
    }

    if (ph) ph.hidden = true;

    btn.addEventListener('click', () => {
      const node = buildPlayer(url);
      if (!node) return;
      frame.appendChild(node);
      frame.classList.add('is-playing');
      frame.style.backgroundImage = '';
    }, { once: true });
  }

  function buildPlayer(url) {
    const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/);
    const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);

    if (yt) return iframeEl('https://www.youtube-nocookie.com/embed/' + yt[1] + '?autoplay=1&rel=0&playsinline=1');
    if (vm) return iframeEl('https://player.vimeo.com/video/' + vm[1] + '?autoplay=1');

    if (/\.(mp4|webm|ogv|ogg)(\?|#|$)/i.test(url)) {
      const v = document.createElement('video');
      v.src = url; v.controls = true; v.autoplay = true; v.playsInline = true;
      return v;
    }
    return iframeEl(url);                          // رابط تضمين جاهز
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
    if (!frame) return;
    const src = (MAP.embed || '').trim();
    if (!src) return;                              // يبقى النص البديل ظاهرًا

    const f = document.createElement('iframe');
    f.src = src;
    f.title = 'موقع شركة Like A Model على الخريطة';
    f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade';
    f.allowFullscreen = true;
    frame.textContent = '';
    frame.appendChild(f);
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


  /* ══════════ 6. الهيدر ══════════ */
  function initHeader() {
    const header = $('#siteHeader');
    if (!header) return;
    let ticking = false;

    const update = () => {
      header.classList.toggle('is-stuck', window.scrollY > 24);
      ticking = false;
    };
    update();
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
  }


  /* ══════════ 7. قائمة الجوال ══════════ */
  function initMobileNav() {
    const toggle  = $('#navToggle');
    const overlay = $('#mobileNav');
    const close   = $('#navClose');
    if (!toggle || !overlay) return;

    const FOCUSABLE = 'a[href], button:not([disabled])';
    let lastFocus = null;

    const open = () => {
      lastFocus = document.activeElement;
      overlay.hidden = false;
      document.body.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      (close || overlay.querySelector(FOCUSABLE))?.focus();
      document.addEventListener('keydown', onKey);
    };

    const shut = () => {
      overlay.hidden = true;
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', onKey);
      // نعيد التركيز إلى الزر إن لم يكن هناك عنصر سابق صالح
      const back = (lastFocus && lastFocus !== document.body && document.contains(lastFocus))
        ? lastFocus : toggle;
      back.focus();
    };

    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); shut(); return; }
      if (e.key !== 'Tab') return;
      // حصر التركيز داخل القائمة
      const items = $$(FOCUSABLE, overlay).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    toggle.addEventListener('click', open);
    close?.addEventListener('click', shut);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) shut(); });
    $$('a[href^="#"]', overlay).forEach((a) => a.addEventListener('click', shut));
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
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 1200);
  }


  /* ══════════ 9. تظليل رابط القسم الحالي ══════════ */
  function initScrollSpy() {
    const links = $$('.nav-desktop a[href^="#"]');
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

    /* إظهار حقل «أخرى» عند اختيارها فقط */
    const syncOther = () => {
      const on = $('#srcOther')?.checked === true;
      if (otherFd) otherFd.hidden = !on;
      if (on) otherIn?.focus();
    };
    $$('input[name="source"]', form).forEach((r) => r.addEventListener('change', syncOther));
    syncOther();

    /* أدوات التحقّق */
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
    const picked = (name) => form.querySelector('input[name="' + name + '"]:checked');

    function validate() {
      let firstBad = null;

      const nameEl = $('#cName', form);
      const phoneEl = $('#cPhone', form);
      const name = val('#cName');
      const phone = val('#cPhone');
      const digits = phone.replace(/\D/g, '');
      const goal = picked('goal');

      if (name.length < 2) {
        setErr('cName', 'الرجاء كتابة الاسم.'); mark(nameEl, true); firstBad ||= nameEl;
      } else { setErr('cName', ''); mark(nameEl, false); }

      if (digits.length < 9 || digits.length > 15) {
        setErr('cPhone', 'الرجاء كتابة رقم جوال صحيح.'); mark(phoneEl, true); firstBad ||= phoneEl;
      } else { setErr('cPhone', ''); mark(phoneEl, false); }

      if (!goal) {
        setErr('goal', 'الرجاء اختيار الهدف.');
        firstBad ||= form.querySelector('input[name="goal"]');
      } else { setErr('goal', ''); }

      return firstBad;
    }

    function collect() {
      const src = picked('source');
      const other = val('#cSourceOther');
      return {
        name    : val('#cName'),
        phone   : val('#cPhone'),
        weight  : val('#cWeight'),
        height  : val('#cHeight'),
        goal    : picked('goal')?.value || '',
        source  : !src ? '' : (src.value === 'أخرى' && other) ? 'أخرى — ' + other : src.value,
        message : val('#cMessage')
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

      const bad = validate();
      if (bad) {
        say('الرجاء تعبئة الحقول المطلوبة.', 'err');
        bad.focus({ preventScroll: false });
        return;
      }

      const data = collect();

      /* (أ) لا يوجد خادم — نفتح واتساب برسالة جاهزة */
      if (!FORM.endpoint) {
        const url = waWith(buildMessage(data));
        say('جارٍ فتح واتساب لإرسال طلبِك…', 'ok');
        const win = window.open(url, '_blank', 'noopener');
        if (!win) window.location.href = url;      // المتصفح منع النافذة المنبثقة
        return;
      }

      /* (ب) يوجد endpoint — نرسل الطلب مباشرة */
      submit.disabled = true;
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
        say('تم استلام طلبِك ✓ سنتواصل معكِ قريبًا.', 'ok');
      } catch (err) {
        say('تعذّر الإرسال. تواصلي معنا عبر واتساب أو الهاتف.', 'err');
      } finally {
        submit.disabled = false;
      }
    });

    // مسح رسالة الخطأ بمجرد بدء التصحيح
    form.addEventListener('input', (e) => {
      const el = e.target;
      if (el.id === 'cName')  { setErr('cName', '');  mark(el, false); }
      if (el.id === 'cPhone') { setErr('cPhone', ''); mark(el, false); }
    });
    form.addEventListener('change', (e) => {
      if (e.target.name === 'goal') setErr('goal', '');
    });
  }


  /* ══════════ 11. زر العودة للأعلى ══════════ */
  function initToTop() {
    const btn = $('#toTop');
    if (!btn) return;
    let ticking = false;

    const update = () => { btn.hidden = window.scrollY < 700; ticking = false; };
    update();
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      $('.brand')?.focus();
    });
  }


  /* ══════════ التشغيل ══════════ */
  function boot() {
    applyContact();
    initLang();
    initVideo();
    initMap();
    initCounters();
    initHeader();
    initMobileNav();
    initReveal();
    initScrollSpy();
    initContactForm();
    initToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
