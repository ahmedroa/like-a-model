/* ==========================================================================
   Like A Model — Landing Page JS
   ──────────────────────────────────────────────────────────────────────────
   ✏️  عدّلي بيانات التواصل والأسعار من الكتلتين التاليتين فقط.
   ========================================================================== */

/* ✏️ ①  بيانات التواصل — استبدلي القيم بالبيانات الحقيقية */
const CONTACT = {
  whatsapp : '966500000000',                 // رقم واتساب بصيغة دولية بدون + أو مسافات
  phoneText: '+966 50 000 0000',             // الرقم كما يُعرض في الفوتر
  email    : 'hello@likeamodel.sa',
  instagram: 'https://instagram.com/',       // ضعي رابط الحساب الكامل
  address  : 'الرياض — المملكة العربية السعودية'
};

/* ✏️ ②  الأسعار — ضعي رقمًا (مثال: 1200) لعرضه، أو null لعرض «عند الطلب» */
const PRICING = {
  ems      : null,
  pt       : null,
  reformer : null
};

/* ────────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* أرقام هندية (٠١٢…) للعرض بالعربية */
  const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const toAr = (n) => String(n).replace(/\d/g, (d) => AR_DIGITS[+d]);


  /* ══════════ 1. بيانات التواصل ══════════ */
  function applyContact() {
    const wa = 'https://wa.me/' + CONTACT.whatsapp;

    [['#waLink', wa], ['#fabWhatsapp', wa], ['#finalWhatsapp', wa],
     ['#phoneLink', wa], ['#igLink', CONTACT.instagram],
     ['#mailLink', 'mailto:' + CONTACT.email], ['#emailLink', 'mailto:' + CONTACT.email]
    ].forEach(([sel, href]) => { const el = $(sel); if (el) el.href = href; });

    const phone = $('#phoneLink'); if (phone) phone.textContent = CONTACT.phoneText;
    const mail  = $('#emailLink'); if (mail)  mail.textContent  = CONTACT.email;
    const addr  = $('#addrText');  if (addr)  addr.textContent  = CONTACT.address;

    // روابط CTA التي تفتح واتساب برسالة جاهزة
    const presets = {
      '#pricingCta': 'مرحبًا، أرغب بمعرفة أسعار البرامج في Like A Model.',
      '#faqContact': 'مرحبًا، لدي استفسار عن برامج Like A Model.'
    };
    Object.entries(presets).forEach(([sel, msg]) => {
      const el = $(sel);
      if (el) { el.href = wa + '?text=' + encodeURIComponent(msg); el.rel = 'noopener'; }
    });

    const year = $('#year');
    if (year) year.textContent = toAr(new Date().getFullYear());
  }


  /* ══════════ 2. الأسعار ══════════ */
  function applyPricing() {
    $$('[data-price]').forEach((el) => {
      const v = PRICING[el.dataset.price];
      el.textContent = (typeof v === 'number' && v > 0)
        ? toAr(v.toLocaleString('en-US')) + ' ريال'
        : 'عند الطلب';
    });
  }


  /* ══════════ 3. الهيدر ══════════ */
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


  /* ══════════ 4. قائمة الجوال ══════════ */
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


  /* ══════════ 5. ظهور العناصر عند التمرير ══════════ */
  function initReveal() {
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


  /* ══════════ 6. تظليل رابط القسم الحالي ══════════ */
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
      links.forEach((a) => a.removeAttribute('aria-current'));
      if (!visible.size) return;
      const top = Array.from(visible).sort((a, b) => a.offsetTop - b.offsetTop)[0];
      map.get(top)?.setAttribute('aria-current', 'true');
    }, { rootMargin: '-45% 0px -50% 0px' });

    map.forEach((_, sec) => io.observe(sec));
  }


  /* ══════════ 7. ابني رحلتك ══════════ */
  function initBuilder() {
    const form = $('#builder');
    if (!form) return;

    const out = {
      title   : $('#sumTitle'),
      goal    : $('#sumGoal'),
      method  : $('#sumMethod'),
      duration: $('#sumDuration'),
      level   : $('#sumLevel'),
      bar     : $('#sumBar'),
      count   : $('#sumCount'),
      cta     : $('#sumCta'),
      live    : $('#sumLive')
    };

    const pick = (name) => form.querySelector(`input[name="${name}"]:checked`);

    function render() {
      const goal     = pick('goal');
      const method   = pick('method');
      const duration = pick('duration');
      const level    = pick('level');

      const chosen = [goal, method, duration, level].filter(Boolean).length;
      const dash   = '—';

      if (out.goal)     out.goal.textContent     = goal ? goal.value : dash;
      if (out.method)   out.method.textContent   = method ? method.value : dash;
      if (out.duration) out.duration.textContent = duration ? duration.value : dash;
      if (out.level)    out.level.textContent    = level ? level.value : dash;

      if (out.title) {
        // «رحلة العروس» تبدأ أصلًا بكلمة «رحلة» — لا نكررها
        out.title.textContent = !goal ? 'ابدئي باختيار هدفك'
          : goal.value.startsWith('رحلة') ? goal.value
          : 'رحلة ' + goal.value;
      }
      if (out.bar)   out.bar.style.width = (chosen / 4 * 100) + '%';
      if (out.count) out.count.textContent = toAr(chosen);

      // رابط واتساب برسالة تحتوي اختيارات العميلة
      if (out.cta) {
        if (chosen === 4) {
          const msg =
            'مرحبًا Like A Model 👋\n' +
            'أرغب في بدء رحلتي، وهذه اختياراتي:\n\n' +
            '• الهدف: ' + goal.value + '\n' +
            '• أسلوب التدريب: ' + method.value + '\n' +
            '• مدة الرحلة: ' + duration.value + '\n' +
            '• مستوى التجربة: ' + level.value + '\n\n' +
            'أتطلع لمعرفة الخطوة التالية.';
          out.cta.href = 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(msg);
          out.cta.rel = 'noopener';
          out.cta.removeAttribute('aria-disabled');
          if (out.live) out.live.textContent = 'رحلتك جاهزة للإرسال ✓';
        } else {
          out.cta.href = '#build';
          out.cta.setAttribute('aria-disabled', 'true');
          if (out.live) out.live.textContent = 'أكملي ' + toAr(4 - chosen) + ' خطوة لإرسال رحلتك';
        }
      }
    }

    form.addEventListener('change', render);
    form.addEventListener('reset', () => setTimeout(render, 0));
    render();
  }


  /* ══════════ 8. الأسئلة الشائعة — فتح واحد في كل مرة ══════════ */
  function initFaq() {
    const items = $$('#faqList .faq-item');
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        items.forEach((other) => { if (other !== item) other.open = false; });
      });
    });
  }


  /* ══════════ 9. زر المشاركة ══════════ */
  function initShare() {
    const btn    = $('#shareBtn');
    const status = $('#shareStatus');
    if (!btn) return;

    const say = (msg) => { if (status) { status.textContent = msg; setTimeout(() => { status.textContent = ''; }, 3500); } };

    btn.addEventListener('click', async () => {
      const data = {
        title: btn.dataset.shareTitle || document.title,
        text : btn.dataset.shareText  || '',
        url  : window.location.href.split('#')[0]
      };
      try {
        if (navigator.share) { await navigator.share(data); return; }
        if (navigator.clipboard) { await navigator.clipboard.writeText(data.url); say('تم نسخ الرابط ✓'); return; }
        say(data.url);
      } catch (err) {
        if (err && err.name === 'AbortError') return;      // ألغت المستخدمة المشاركة
        say('تعذّرت المشاركة — انسخي الرابط يدويًا');
      }
    });
  }


  /* ══════════ 10. زر العودة للأعلى ══════════ */
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
    applyPricing();
    initHeader();
    initMobileNav();
    initReveal();
    initScrollSpy();
    initBuilder();
    initFaq();
    initShare();
    initToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
