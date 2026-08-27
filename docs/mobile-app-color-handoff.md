# Like A Model — Mobile App Color & State Handoff

تقرير موثّق من الكود الحالي (بدون تعديل). المصدر الوحيد للألوان هو `assets/css/styles.css` مع `theme-color` في HTML. لا توجد ألوان مكتوبة في `assets/js/main.js`.

**ملفات مُراجعة**

| ملف | دور الألوان |
|---|---|
| `assets/css/styles.css` | كل التوكنز والحالات |
| `index.html` | `theme-color="#E0AEAF"` + استخدام المكوّنات |
| `start-your-journey.html` | نفس `theme-color` + أزرار/حقول SYJ |
| `assets/js/main.js` | لا ألوان |

**كيف تُقرأ قيم `color-mix`**

- العمود «قيمة CSS» = النص الحرفي في الملف.
- العمود «مكافئ محسوب» = مزج قنوات sRGB كما يعرّفه CSS `color-mix(in srgb, A p%, B)`: `round(A*p + B*(1-p))`. هذا حساب من الصيغة، ليس التقاط شاشة.
- `color-mix(in srgb, COLOR p%, transparent)` = نفس RGB للون مع شفافية `p%`. لا يُحوَّل إلى HEX معتم.

**ثوابت الحركة المستخدمة مع الألوان**

| Token | قيمة |
|---|---|
| `--t-btn` | `220ms` |
| `--t-fast` | `180ms` |
| `--t-med` | `320ms` |
| `--t-slow` | `600ms` |
| `--ease` | `cubic-bezier(.22,.61,.36,1)` |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` |

Focus الافتراضي لكل الصفحة: `outline: 3px solid var(--color-focus-ring)` (`#E0AEAF`) + `outline-offset: 3px`. الهيدر والفوتر يعيدان `--color-focus-ring` إلى الأبيض.

---

## 1. ألوان الهوية الأساسية

### 1.1 توكنز حرفية (HEX في `:root`)

| CSS variable | HEX | RGB | الدور |
|---|---|---|---|
| `--color-primary` | `#E0AEAF` | `224, 174, 175` | Primary / ورد الهوية. أيضًا `theme-color` و`--color-brand-primary` و`--color-brand-bar` و`--color-overlay-hero` و`--color-focus-ring` |
| `--color-primary-hover` | `#F8E7E0` | `248, 231, 224` | Blush فاتح للأسطح وHover أزرار الـ Outline. **ليس** Hover الزر الممتلئ |
| `--color-primary-active` | `#D99CA0` | `217, 156, 160` | Active أزرار Outline فقط |
| `--color-btn-primary-hover` | `#B97880` | `185, 120, 128` | Hover الزر الممتلئ Primary / CTA / FAB الشات |
| `--color-btn-primary-active` | `#9E5F68` | `158, 95, 104` | Active/Pressed للزر الممتلئ |
| `--color-brown` | `#44231A` | `68, 35, 26` | نص قوي، أيقونات، underline الفوتر، خلفية بطاقات المنظومة |
| `--color-white` | `#FFFFFF` | `255, 255, 255` | White / سطح / نص على Primary |
| `--section-white` | `#FFFCFA` | `255, 252, 250` | Cream فاتح جدًا — خلفية قسم افتراضية |
| `--section-blush` | `#FDF5F2` | `253, 245, 242` | Blush أقسام |
| `--section-cream` | `#F9F1EB` | `249, 241, 235` | Cream أقسام |
| `--color-danger` | `#B3261E` | `179, 38, 30` | خطأ نماذج / `form-status.is-err` |
| `--color-success` | `#166534` | `22, 101, 52` | نجاح نماذج / `form-status.is-ok` |
| `--color-whatsapp` | `#12833F` | `18, 131, 63` | FAB واتساب فقط — ليس لون هوية |

### 1.2 أسماء بديلة (نفس القيمة)

| Alias | يشير إلى |
|---|---|
| `--color-primary-soft` | `--color-primary-hover` `#F8E7E0` |
| `--color-on-primary` | `--color-white` |
| `--color-text-dark` / `--color-text` / `--color-brand-secondary` | `--color-brown` `#44231A` |
| `--color-brand-primary` / `--color-brand-bar` | `--color-primary` |
| `--color-brand-primary-hover` | `--color-primary-hover` |
| `--color-brand-rose` | `--color-primary-border` |
| `--color-brand-blush` | `--color-primary-hover` |
| `--color-brand-white` | `--color-white` |
| `--color-surface` | `--color-white` |
| `--color-surface-alt` | `--color-brand-cream` |
| `--color-surface-blush` | `--color-primary-hover` `#F8E7E0` |
| `--color-surface-lavender` | `--color-brand-lavender` |
| `--color-text-on-dark` | `--color-white` |
| `--color-border` | `--color-primary-border` |
| `--color-overlay-hero` | `--color-primary` — **غير مستخدم** على الهيرو (الهيرو يستخدم أسود 12%) |

### 1.3 توكنز `color-mix` (مع مكافئ محسوب)

| CSS variable | صيغة CSS | مكافئ محسوب | الدور |
|---|---|---|---|
| `--color-primary-border` | `primary 48% + white` | `#F0D8D9` | Border وردي فاتح / `--color-brand-rose` / `--color-border` |
| `--color-brand-cream` | `primary-hover 62% + white` | `#FBF0EC` | Cream حقول عامة / `--color-surface-alt` |
| `--color-brand-lavender` | `primary-hover 70% + primary-border` | `#F6E3DE` | Lavender سطح |
| `--color-text-muted` | `brown 58% + white` | `#937F7A` | نص الجسم الافتراضي (`body`) |
| `--color-text-subtle` | `brown 42% + white` | `#B0A39F` | Eyebrow / تسميات ثانوية |
| `--color-border-strong` | `brown 28% + primary-border` | `#C0A5A4` | حدود حقول عامة |
| `--color-neutral-border` | `brown 16% + white` | `#E1DCDA` | حدود حقول نموذج التواصل / Modal |
| `--color-placeholder` | `brown 40% + white` | `#B4A7A3` | Placeholder نموذج التواصل + أيام تقويم معطّلة |
| `--color-brand-secondary-hover` | `brown 82% + #000` | `#381D15` | معرّف وغير مستخدم على مكوّن ظاهر |
| `--color-whatsapp-hover` | `whatsapp 82% + #000` | `#0F6B34` | Hover FAB واتساب |
| `--color-text-on-dark-muted` | `white 78% + transparent` | `rgba(255,255,255,0.78)` | نص خافت على خلفية داكنة / Hero scroll |

**نص على Primary (فوتر)** — محلي داخل `.site-footer`:

| Token محلي | صيغة | مكافئ |
|---|---|---|
| `--footer-heading` | `#FFFFFF` | أبيض 100% |
| `--footer-text` | white 92% + transparent | `rgba(255,255,255,0.92)` |
| `--footer-muted` | white 78% + transparent | `rgba(255,255,255,0.78)` |
| `--footer-line` | white 58% + transparent | `rgba(255,255,255,0.58)` |

### 1.4 ظلال التوكنز

كلها من البني `#44231A` بشفافية:

| Token | القيمة |
|---|---|
| `--sh-1` | `0 1px 2px rgba(68,35,26,0.08)`, `0 4px 14px rgba(68,35,26,0.06)` |
| `--sh-2` | `0 2px 6px rgba(68,35,26,0.10)`, `0 16px 40px rgba(68,35,26,0.10)` |
| `--sh-3` | `0 30px 70px rgba(68,35,26,0.20)` |

### 1.5 اختيار النص

`::selection`: خلفية `#E0AEAF`، نص `#44231A`.

### 1.6 فخ التسمية (إلزامي لمطور التطبيق)

`--color-primary-hover` (`#F8E7E0`) **لا يُستخدم** كـ hover للزر الوردي الممتلئ.

| المقصود | Token الصحيح | HEX |
|---|---|---|
| Hover زر Primary ممتلئ | `--color-btn-primary-hover` | `#B97880` |
| Active زر Primary ممتلئ | `--color-btn-primary-active` | `#9E5F68` |
| Hover زر Outline / شات / خريطة | `--color-primary-hover` | `#F8E7E0` |
| Active زر Outline | `--color-primary-active` | `#D99CA0` |

---

## 2. الأزرار

القاعدة المشتركة `.btn`: حبة (`border-radius: 999px`)، ارتفاع أدنى 48px، حد `1.5px solid transparent`، انتقال `220ms` `--ease`. Hover يحرّك الأيقونة `.btn-ico` بـ `translateX(-4px)`. Active على `.btn`: `translateY(1px)`. Disabled / `aria-disabled="true"`: `opacity: .45`، بدون ظل، `pointer-events: none`. لا توجد ألوان disabled مستقلة.

`.btn-lg`: ارتفاع 56px. `.btn-sm`: 44px. الأيقونات `currentColor` / `stroke: currentColor`.

### 2.1 Primary buttons

**Selector:** `.btn-primary`  
**موجود في HTML:** `#contactSubmit`، `#bkNext`، `#bkSend`، `#syjNext`، `#syjSend`، `#syjHome`

| حالة | خلفية | نص/أيقونة | Border | Shadow / Notes |
|---|---|---|---|---|
| Normal | `#E0AEAF` | `#FFFFFF` | شفاف 1.5px | `0 8px 24px rgba(224,174,175,0.28)` |
| Hover | `#B97880` | `#FFFFFF` | شفاف | `0 12px 30px rgba(185,120,128,0.34)` · 220ms |
| Active/Pressed | `#9E5F68` | `#FFFFFF` | شفاف | نفس ظل الـ hover ما لم يُلغَ |
| Focus-visible | كما Normal | كما Normal | — | `outline-color: #E0AEAF` (سُمك 3px من القاعدة) |
| Disabled | نفس Normal بـ opacity 45% | — | — | `box-shadow: none` |

### 2.2 Secondary / Outline

**Selector:** `.btn-outline`  
معرّف في CSS. **لا يوجد عنصر HTML يستخدم `class="btn-outline"`.** النمط نفسه مطبّق بأسماء أخرى أدناه.

| حالة | خلفية | نص/أيقونة | Border | Notes |
|---|---|---|---|---|
| Normal | شفاف | `#44231A` | `1.5px #E0AEAF` | بلا ظل من القاعدة |
| Hover | `#F8E7E0` | `#44231A` | `#E0AEAF` | 220ms |
| Active | `#D99CA0` | `#44231A` | `#D99CA0` | — |
| Focus | قاعدة الصفحة | — | — | `3px #E0AEAF` offset 3px |
| Disabled | opacity 45% عبر `.btn` | — | — | إن وُجد `disabled` |

**نفس عائلة الـ Outline (مستخدمة فعليًا):**

| Selector | أين | اختلاف عن `.btn-outline` |
|---|---|---|
| `.syj-ghost` (`#syjBack`) | صفحة ابدئي رحلتكِ | حد `1px` (ليس 1.5). Hover: `#F8E7E0` / بني / `#E0AEAF`. لا Active مخصّص. `box-shadow: none` |
| `.map-open` | رابط فتح الخريطة في التواصل | حد `1px #E0AEAF`، ظل `0 2px 8px rgba(68,35,26,0.06)`، حجم أصغر `.75rem`. Hover: خلفية `#F8E7E0` |
| `.bk-locate-btn` / `.bk-map-geo` | مودال الحجز | حد `1px`، ارتفاع 52px، زوايا 12px (ليست حبة). Hover: `#F8E7E0` بلا ظل |
| `.chat-reply` | ردود الشات بوت | زوايا 12px، عرض كامل، وزن 500. Hover **و** Focus-visible: `#F8E7E0`. Disabled: opacity **.55** (ليس .45) |
| `.chat-again` | إعادة الشات | حبة، حد `1px`. Hover: `#F8E7E0`. لا Active مخصّص |

### 2.3 CTA

**Hero — `.hero-cta` + قرص `.hero-cta-play`** (`data-bk-open`)

النص `.hero-cta-lbl`: `#FFFFFF`. الخلفية الكلية للزر شفافة. القرص هو الزر البصري.

| حالة | قرص الخلفية | أيقونة | نص التسمية | Shadow | Notes |
|---|---|---|---|---|---|
| Normal | `#E0AEAF` | `#FFFFFF` (fill) | `#FFFFFF` | `0 8px 20px rgba(224,174,175,0.34)` | قرص 54×54 |
| Hover | `#B97880` | `#FFFFFF` | `#FFFFFF` | `0 12px 28px rgba(185,120,128,0.44)` | `scale(1.07)` · 220ms |
| Active | `#9E5F68` | `#FFFFFF` | `#FFFFFF` | — | — |
| Focus-visible | — | — | — | — | `outline: 3px solid #F8E7E0` offset 4px — **blush وليس Primary** |
| Disabled | غير موجود | — | — | — | — |

خلفية الهيرو خلف الزر: `#000` + overlay `rgba(0,0,0,0.12)`.

**بانر التدريب المنزلي — `#bookingOpen` / `.home-cta-btn`**

نفس ألوان Primary الممتلئ، **بدون** `box-shadow`. حد `0`. ارتفاع أدنى 46px.

| حالة | خلفية | نص | Notes |
|---|---|---|---|
| Normal | `#E0AEAF` | `#FFFFFF` | بلا ظل |
| Hover | `#B97880` | `#FFFFFF` | `translate: 0 -2px` |
| Active | `#9E5F68` | `#FFFFFF` | `translate: 0` |
| Focus | قاعدة `3px #E0AEAF` | — | — |

خط الزخرفة فوق الزر `.home-cta-rule`:  
`color-mix(brand-rose 72%, brown)` = محسوب `#C0A5A4` (يطابق `--color-border-strong`).

### 2.4 أزرار النماذج والـ Modal

| Selector | الدور | Normal | Hover | Active | Focus | Disabled |
|---|---|---|---|---|---|---|
| `.contact-form .btn-primary` (`#contactSubmit`) | إرسال التواصل | كما Primary | كما Primary | كما Primary | كما Primary | opacity .45 + تكرار نفس القاعدة محليًا |
| `.bk-next` / `.bk-send` | التالي / إرسال الحجز | Primary | Primary | Primary | Primary | opacity .45 |
| `.bk-back` | رجوع الحجز (نص فقط) | شفاف، نص `#937F7A` | نص `#44231A` | غير معرّف | قاعدة الصفحة | يُخفى بـ `[hidden]` |
| `.bk-modal-close` | إغلاق المودال | شفاف، أيقونة `#937F7A` | أيقونة `#44231A`، خلفية `rgba(68,35,26,0.05)` | غير معرّف | قاعدة الصفحة | — |
| `.bk-cal-nav` | شهر التقويم | شفاف، أيقونة `#937F7A` | خلفية `rgba(68,35,26,0.05)`، لون `#44231A` | غير معرّف | قاعدة | — |
| `.bk-cal-day` | يوم | شفاف، نص `#44231A` | خلفية `#F8E7E0` | — | قاعدة | نص `#B4A7A3` + opacity .55 |
| `.bk-cal-day.is-today` | اليوم | — | — | — | — | inset `1px` من `primary 55%` = `rgba(224,174,175,0.55)` |
| `.bk-cal-day.is-on` | محدد | `#E0AEAF` | يبقى محدّدًا | — | — | نص `#44231A` وزن 700 |
| `.bk-slot` | وقت | `#FFFFFF`، حد `#E1DCDA`، نص بني | حد `#E0AEAF`، خلفية `#F8E7E0` | — | قاعدة | — |
| `.bk-slot.is-on` | وقت محدد | `#E0AEAF`، حد `#E0AEAF`، نص `#44231A` | hover يرجّع الخلفية إلى `#F8E7E0` مع الإبقاء على النص البني | — | — | **ملاحظة:** hover الحالة المحددة يفتحّل اللون |
| `.bk-locate-edit` | تعديل الموقع | شفاف، نص muted، underline | `#E0AEAF` | — | قاعدة | — |
| `#syjNext` / `#syjSend` / `#syjHome` | SYJ | Primary | Primary | Primary | Primary | قاعدة `.btn` |
| `.syj-ghost` | رجوع SYJ | انظر Outline | `#F8E7E0` | غير معرّف | قاعدة | — |
| `.syj-back` | رابط العودة أعلى الصفحة | شفاف، `#937F7A` | `#44231A` | — | قاعدة | — |

شريط تقدّم الحجز `.bk-bar`: مسار `rgba(214,214,214,0.85)` — **رمادي خارج التوكنز**. التعبئة `.bk-bar-fill`: `#E0AEAF`.  
شريط SYJ `.syj-bar`: مسار `primary-border 70%` = `rgba(240,216,217,0.70)`. التعبئة `#E0AEAF`.

### 2.5 أزرار الشات بوت

| Selector | Normal | Hover | Active | Focus | Disabled |
|---|---|---|---|---|---|
| `.fab-chat` | خلفية `#E0AEAF`، أيقونة `#FFFFFF`، بلا حد | `#B97880` / أبيض | `#9E5F68` / أبيض | قاعدة + إظهار التلميح | — |
| `.fab-chat-tip` | خلفية `#44231A`، نص أبيض | يظهر مع hover/focus للـ FAB | — | — | سهم التلميح `border-inline-end-color: #44231A` |
| `.chatbot-close` | خلفية `rgba(255,255,255,0.18)` على رأس Primary، أيقونة أبيض | `rgba(255,255,255,0.28)` | غير معرّف | قاعدة (الحلقة البيضاء داخل الرأس الوردي قد تضعف التباين) | — |
| `.chat-reply` | شفاف، حد `#E0AEAF`، نص `#44231A` | `#F8E7E0` | غير معرّف | نفس Hover، `outline: none` | opacity .55 |
| `.chat-again` | شفاف، حد `#E0AEAF`، نص `#44231A` | `#F8E7E0` | غير معرّف | قاعدة | — |

رأس اللوحة `.chatbot-head`: خلفية `#E0AEAF`، عنوان أبيض، عنوان فرعي `rgba(255,255,255,0.82)`.  
حد اللوحة: `primary-border 70% + neutral-border` · ظل `--sh-3`.  
فقاعة البوت: محسوب `#F8EDED`، حد `rgba(224,174,175,0.28)`، نص `#44231A`.  
فقاعة المستخدم: محسوب `#FAEEE9`، حد محسوب `#E9DAD9`، نص `#44231A`.

### 2.6 الأزرار العائمة

القاعدة `.fab`: 56×56، حبة، ظل `--sh-2`، hover `translateY(-3px)` خلال `180ms`.

| Selector | Normal | Hover | Active | Focus | Notes |
|---|---|---|---|---|---|
| `.fab-wa` | `#12833F` / أيقونة `#FFFFFF` | `#0F6B34` | غير معرّف (يبقى hover اللون) | قاعدة `3px #E0AEAF` | **لا يُلوَّن بوردي الهوية** |
| `.fab-top` | `#FFFFFF` / أيقونة `#44231A` / حد `1px #F0D8D9` | نفس الألوان + رفع 3px | غير معرّف | قاعدة | Back to top |
| `.fab-chat` | انظر 2.5 | — | — | — | فوق واتساب بـ 16px |

---

## 3. التنقل والهيدر والفوتر

### 3.1 الهيدر `.site-header`

`--color-focus-ring` محليًا = أبيض.

| حالة الشريط | خلفية | حد سفلي | ظل |
|---|---|---|---|
| أعلى الصفحة (الرئيسية) | شفاف | `1px transparent` | لا |
| `.is-scrolled` | `#E0AEAF` | `primary-border 28%` = `rgba(240,216,217,0.28)` | `0 10px 28px rgba(224,174,175,0.28)` |
| `.page-syj` (دائمًا) | نفس `.is-scrolled` | نفس | نفس |

انتقال الخلفية/الحد/الظل: `320ms`.

| عنصر | Normal | Hover | Active / current | Notes |
|---|---|---|---|---|
| الشعار `.site-header .brand` | `#FFFFFF` | — | — | الصورة/الـ mark ترث اللون |
| روابط `.site-nav a` | `#FFFFFF` | `#44231A` | `[aria-current="true"]` = `#44231A` | بلا underline. انتقال لون `180ms` |
| `.nav-toggle` | يرث أبيض | `#44231A` | — | أيقونة قائمة/إغلاق |
| `.header-social a` | أبيض، **opacity .88** | `#44231A`، opacity 1، خلفية `rgba(255,255,255,0.08)` | — | 34×34، زوايا 8px |
| `.lang-switch` | شفاف، نص أبيض، حد `rgba(255,255,255,0.35)` | خلفية `rgba(255,255,255,0.12)`، نص+حد `#44231A` | `aria-disabled`: opacity .55، hover لا يغيّر | حبة |

قائمة الجوال (`<1080px`) عند الفتح: خلفية `primary 94%` = `rgba(224,174,175,0.94)`. روابط بحد سفلي `rgba(255,255,255,0.10)`.

### 3.2 الفوتر `.site-footer`

خلفية: `#E0AEAF`.  
طبقة تزيين: `radial-gradient` أبيض **10%** في المركز يتلاشى عند 72%. على الجوال `::before` بـ opacity **.45**.  
خطوط SVG: stroke `rgba(255,255,255,0.13)`.  
Focus ring محلي: أبيض.

القيم الفائزة بعد كتلة `footer.site-footer … !important` (نهاية الملف):

| عنصر | Normal | Hover / Focus-visible |
|---|---|---|
| عناوين الأعمدة `.footer-h` | `#FFFFFF` | — |
| اسم العلامة | `#FFFFFF` | — |
| وصف العلامة `.brand-tag` | `#FFFFFF` | — |
| روابط/نصوص الأعمدة | `rgba(255,255,255,0.92)` | `#44231A` + underline `2px #44231A` يظهر بـ `scaleX(1)` خلال **250ms** `ease-out` (من القاعدة؛ الـ !important يلغي underline النص فقط لا شريط `::after`) |
| أيقونات صفوف التواصل | `rgba(255,255,255,0.58)` | — |
| أيقونات السوشيال | `#FFFFFF`، حد `rgba(255,255,255,0.85)` | يبقى **أبيض** وحد أبيض (`!important`) — **لا يتحوّل للبني** عكس روابط الأعمدة |
| الشريط القانوني | `rgba(255,255,255,0.78)`، حد علوي `rgba(255,255,255,0.58)` | — |

في القاعدة الأقدم: `.socials a:hover` كان `color: var(--footer-heading)` (أبيض أصلًا). الكتلة اللاحقة تثبّت الأبيض صراحةً.

---

## 4. الحقول والنماذج

يوجد **نظامان** للحقول. يجب ألا يُدمجا في التطبيق دون قرار.

### 4.1 النظام العام `.input` (مودال الحجز + صفحة SYJ)

انتقال الحدود/الظل/الخلفية: `180ms`.

| حالة | خلفية | نص | Border | Shadow / Notes |
|---|---|---|---|---|
| Normal | `#FBF0EC` (`--color-surface-alt`) | `#44231A` | `1.5px #C0A5A4` | زوايا 12px، ارتفاع 52px |
| Placeholder | — | `#937F7A` بـ **opacity .75** | — | ليس `--color-placeholder` |
| Hover | كما Normal | — | `#F0D8D9` (`--color-brand-rose`) | — |
| Focus | `#FFFFFF` | `#44231A` | `#E0AEAF` | `0 0 0 4px rgba(224,174,175,0.14)` + `outline: 3px solid #E0AEAF` offset 2px على `:focus-visible` |
| Filled | **غير معرّف** | — | — | يبقى Normal ما لم يُركَّز |
| Error `[aria-invalid=true]` | كما Normal | — | `#B3261E` | `0 0 0 4px rgba(179,38,30,0.12)` |
| Disabled | **لا قاعدة CSS** | — | — | — |
| أيقونة `.field-ico` | — | `#937F7A` | — | — |
| Textarea | كما `.input` | — | — | ارتفاع أدنى 96px |
| `select.input` | كما `.input` | — | — | `appearance: none` |

**SYJ textarea `.syj-note`:** عند focus/focus-visible: `outline: 2px solid #E0AEAF` offset 2px، حد Primary، **بدون** box-shadow (يختلف عن `.input:focus`).

تسمية `.field-lbl`: `#44231A`. نجمة `.req`: `#E0AEAF`. خطأ `.field-err`: `#B3261E`.

### 4.2 نموذج التواصل `.contact-form .input`

| حالة | خلفية | نص | Border | Shadow / Notes |
|---|---|---|---|---|
| Normal | `#FFFFFF` | `#44231A` | `1px #E1DCDA` | بلا ظل. ارتفاع 52px |
| Placeholder | — | `#B4A7A3` opacity **1** | — | `--color-placeholder` |
| Hover (فارغ) | `#FFFFFF` | — | يبقى `#E1DCDA` | **لا تغيّر بصري** |
| Filled `.is-filled` | `#FFFFFF` | — | `1px #E0AEAF` | `0 0 0 3px rgba(224,174,175,0.14)` |
| Filled + Hover | `#FFFFFF` | — | `#E0AEAF` | نفس حلقة 14% |
| Focus / Focus-visible | `#FFFFFF` | — | `1px #E0AEAF` | `0 0 0 3px rgba(224,174,175,0.18)` و`outline: 0` |
| Error | `#FFFFFF` (`--color-surface`) | — | `#B3261E` | `0 0 0 4px rgba(179,38,30,0.12)` |
| أيقونة عند focus-within | — | `#E0AEAF` | — | — |
| Select فارغ (`option[value=""]`) | — | `#B4A7A3` | — | سهم SVG stroke `#44231A` |
| Select option | `#FFFFFF` | `#44231A` | — | — |

### 4.3 Checkbox / Radio المخصّصة `.optrow`

الـ input مخفي (`opacity: 0`). الوجه `.optrow-face` + دائرة `::before`.

| حالة | وجه الخلفية | نص الوجه | حد الوجه | دائرة |
|---|---|---|---|---|
| Normal | `#FBF0EC` | `#937F7A` | `1.5px #F0D8D9` | حد `2px #C0A5A4`، داخل `#FFFFFF` |
| Hover | `#F8E7E0` | — | `#F0D8D9` (`brand-rose`) | — |
| Checked | `primary 14% + white` = `#FBF4F4` | `#44231A` وزن 700 | `#E0AEAF` | خلفية+حد `#E0AEAF` + علامة ✓ stroke `#44231A` في SVG |
| Focus-visible | — | — | — | `outline: 3px solid #E0AEAF` offset 2px على الوجه |

لا توجد حالة Disabled في CSS لـ `.optrow`.

### 4.4 Checkbox الأصلي (موافقة)

`.contact-check input` و`.syj-check input`: `accent-color: #E0AEAF`. الحجم 1.25rem. لا أنماط checked/hover مخصّصة — سلوك المتصفح/نظام التشغيل.  
صندوق موافقة SYJ `.syj-consent`: خلفية `#F8E7E0`، حد `rgba(240,216,217,0.70)`.

### 4.5 حالات النموذج النصية

| Selector | لون |
|---|---|
| `.form-status` | `#937F7A` |
| `.form-status.is-err` | `#B3261E` |
| `.form-status.is-ok` | `#166534` |

---

## 5. البطاقات والعناصر التفاعلية

### 5.1 بطاقة التواصل `.contact-unified-card`

- خلفية `#FFFFFF`
- حد `rgba(68,35,26,0.08)`
- ظل: `0 2px 10px rgba(68,35,26,0.05)`, `0 18px 44px rgba(68,35,26,0.07)`, `0 12px 36px rgba(224,174,175,0.16)`
- زوايا 22px  
لا hover لوني على الكارد نفسه.

عمود جانبي فاصل: `brand-rose 72%` = `rgba(240,216,217,0.72)`.

### 5.2 بطاقة SYJ `.syj-card`

- خلفية `#FFFFFF`، حد `1px #F0D8D9`، ظل `--sh-1`.

### 5.3 مودال الحجز `.bk-modal-dialog`

- خلفية `#FFFFFF`، حد `#E1DCDA`، زوايا 22px  
- ظل: `0 2px 10px rgba(68,35,26,0.06)`, `0 22px 48px rgba(68,35,26,0.16)`  
- Backdrop: `rgba(36,18,16,0.48)` + blur 2px — بني أغمق من `#44231A` (RGB `36,18,16` مقابل `68,35,26`)

صف الموقع المحدّد `.bk-locate-done`: أبيض، حد Primary، حلقة `rgba(224,174,175,0.14)`. أيقونة الصح: `#E0AEAF`.  
مراجعة `.bk-review`: أبيض، حد `#E1DCDA`.

### 5.4 بطاقات المنظومة `.eco-card`

| حالة | خلفية / صورة | حد | نص | Overlay |
|---|---|---|---|---|
| Normal | صورة + fallback `#44231A` | `1px #F0D8D9` | عنوان أبيض مع `text-shadow rgba(68,35,26,0.45)` | تدرّج سفلي بني 78% → 28% → شفاف |
| Hover / Focus-visible (فأرة دقيقة) | زوم صورة 1.03 | `#F0D8D9` | — | طبقة `::after`: مزيج بني 62% + Primary = محسوب `#7F5853` بـ **opacity .28** |
| مغادرة القسم `.is-leaving` | — | — | — | البطاقة opacity **.2** |

وصف البطاقة: مزيج أبيض 90% + rose ≈ `#FEFBFB`. تلميح: أبيض 82% + rose ≈ `#FCF8F8`.

### 5.5 بطاقات القصص `.story-card`

متغيرات القسم: `--stories-pink: #E0AEAF`، `--stories-card` = soft 35% + white = `#FDF7F4`، `--stories-fade` = `#FCF5F3`، `--stories-border` = primary 48% + primary-border = `#E8C4C5`.

| حالة | خلفية | حد | نص/أيقونة | Shadow |
|---|---|---|---|---|
| Normal (كارد جانبي مدمج) | صورة كاملة | `1px #E8C4C5` زوايا 16px | عنوان/سهم أبيض فوق الصورة؛ `.story-ico` و`.story-arrow` `#E0AEAF` في التعريف الأساسي ثم تُجبَر للأبيض على الكاردات المدموجة | `0 10px 28px rgba(74,41,50,0.09)` |
| Hover (فأرة) | — | — | سهم يتحرك | `translateY(-4px)` + `0 16px 34px rgba(74,41,50,0.14)` |
| Focus-visible | — | outline `3px #E0AEAF` offset 3px | — | نفس ظل الـ hover على الكاردات الجانبية |

Overlay الصورة (كاردات مدموجة):  
`linear-gradient(90deg, rgba(64,37,35,0.48), rgba(64,37,35,0.12))` أو الاتجاه المعاكس.  
`rgba(64,37,35)` و`rgba(74,41,50)` **ليسا** التوكن `#44231A`.

عنوان القصص `em` داخل `.stories-head .h2`: `#E0AEAF`. باقي الموقع `.h2 em`: `#44231A`.

### 5.6 إطار الرحلة `.journey-frame`

- حد الصورة: `1px #F0D8D9`  
- Hover: `.journey-veil` يظهر — بني 28% = `rgba(68,35,26,0.28)`  
- تسمية سفلية: تدرّج بني 58% → 18% → شفاف، نص أبيض، وصف `rgba(255,255,255,0.92)`  
- فاصل النص: `rgba(74,41,50,0.22)` — خارج التوكن

### 5.7 شارات وخطوات وأيقونات

| عنصر | Normal | حالة نشطة |
|---|---|---|
| `.contact-badge` | خلفية `rgba(224,174,175,0.22)`، حد `rgba(224,174,175,0.28)`، نص/أيقونة `#44231A` | — |
| `.sec-ornament` / `.stories-kicker` | `#E0AEAF`، الخطوط opacity **.72** | في `#stories` نفس الوردي عبر `--stories-pink` |
| `.support-ico` | سطح أبيض، أيقونة `#F0D8D9`، حد محسوب `#F3DFE0` | `.is-on`: أيقونة `#E0AEAF`، حد محسوب `#EAC8C9` |
| `.support-num` | خلفية `#F8E7E0`، نص `#44231A`، حد `#F3E0E1` | `.is-on` / static: خلفية `#E0AEAF`، نص `#44231A`، حد `#E0AEAF` |
| قوس الدعم `.support-arc-track` | `rgba(240,216,217,0.38)` | — |
| تقدّم القوس `.support-arc-progress` | مزيج primary 22% + rose = `#ECCFD0` | — |
| رابط بين العقد `.support-step-link` | `rgba(240,216,217,0.78)` | `.is-on`: `#E9C6C7` |
| هالة `.support-halo` | radial blush 92% → rose 28% → شفاف | تظهر بـ opacity 1 |
| أيقونات التواصل `.contact-ico` | خلفية `#FBF0EC`، أيقونة `#44231A` | الصف `a:hover` يلوّن النص `#E0AEAF` (الأيقونة عبر currentColor إن وُرثت) |
| سوشيال التواصل `.contact-social a` | شفاف، حد `#C0A5A4`، أيقونة `#44231A` | Hover: `#F8E7E0` / بني / حد `#E0AEAF` |
| سوشيال الهيدر | انظر 3.1 | بني + غسل أبيض 8% |
| سوشيال الفوتر | أبيض / حد أبيض 85% | يبقى أبيض |
| أيقونات مزايا التدريب `.home-train-point-ico` | `#E0AEAF` | — |
| `.bk-bar-fill` / `.syj-bar-fill` | `#E0AEAF` | عرض متحرك `320ms` |

---

## 6. ألوان الخلفيات

### 6.1 أقسام (بدون صورة)

| قسم / Selector | الخلفية |
|---|---|
| `body` | `#FFFFFF` |
| `.section` الافتراضي | `#FFFCFA` |
| `.section-alt` / `.section-about` / `#journey-guide` | `linear-gradient(180deg, #FFFCFA 0%, #FDF5F2 100%)` |
| `.section-support` | `linear-gradient(180deg, #FDF5F2 0%, #F9F1EB 100%)` |
| `#ecosystem` | `linear-gradient(180deg, #F9F1EB 0%, #FFFCFA 100%)` |
| `.section-stories` | `linear-gradient(180deg, #FDF5F2 0%, #F9F1EB 100%)` |
| زخرفة about دوائر | حد `#F0D8D9` بـ opacity **.045** و **.035** |
| بقعة ecosystem `::before` | `#FBF0EC` opacity **.62** |
| شبكة journey `::before` | خطوط `rgba(240,216,217,0.55)` |
| شريط مزايا التدريب `.home-train-points` | cream 55% + white = `#FDF7F5`، حد علوي `rgba(240,216,217,0.70)` |
| فواصل المزايا | `rgba(240,216,217,0.55)` (سطح المكتب) / `0.50` (جوال) |
| `.convert-panel` | `#FFFFFF` + ظلال بني 5%/8% و primary 9% |
| `.chatbot-thread` / لوحة الشات | `#FFFFFF` |
| صفحة SYJ (body) | `#FFFFFF` (وراثة) |

### 6.2 هيرو

- خلفية الوسائط: `#000`
- Overlay `.hero-overlay`: `rgba(0,0,0,0.12)` — أسود **12%**
- مؤشر التمرير `.hero-scroll`: `rgba(255,255,255,0.78)`؛ hover `#F0D8D9`؛ مسار `rgba(255,255,255,0.28)`

`--color-overlay-hero` (= Primary) **لا يُطبَّق** هنا.

### 6.3 Overlays الصور (Stats + Contact) — مكرّرة حرفيًا

نفس التدرّج على `.stats-overlay` و`.contact-banner` overlay:

```
linear-gradient(
  rgba(31, 12, 9, 0.84) 0%,
  rgba(68, 35, 26, 0.76) 42%,
  rgba(105, 54, 61, 0.68) 72%,
  rgba(149, 95, 98, 0.52) 100%
)
```

طبقة multiply إضافية:

```
radial-gradient(ellipse at center,
  rgba(222, 197, 188, 0.12) 0%,
  rgba(68, 35, 26, 0.42) 60%,
  rgba(20, 7, 5, 0.38) 100%)
```

| محطة | RGB | α | ملاحظة |
|---|---|---|---|
| بداية التدرّج | `31,12,9` | 84% | أغمق من البني |
| 42% | `68,35,26` | 76% | يطابق `--color-brown` |
| 72% | `105,54,61` | 68% | وردي-بني خارج التوكنز |
| نهاية | `149,95,98` | 52% | أقرب للـ Primary الداكن، ليس `#E0AEAF` |
| radial فاتح | `222,197,188` | 12% | — |
| radial نهاية | `20,7,5` | 38% | — |

نص الإحصائيات: أبيض + `text-shadow rgba(30,12,8,0.48)` / الأرقام `rgba(68,35,26,0.55)` / التسميات `rgba(255,255,255,0.92)` + ظل `rgba(68,35,26,0.42)`.  
فواصل الإحصائيات سطح المكتب: `rgba(255,255,255,0.48)`.

### 6.4 Overlay بانر التدريب المنزلي

سطح المكتب (`to left`):

1. `primary-soft 82% + white` = `#F9EBE6`  
2. cream 58% شفاف  
3. rose 22% شفاف  
4. شفاف عند 86%

جوال (`to top`): soft 90% + white، ثم cream 72% شفاف، rose 18% شفاف، شفاف عند 82%.

### 6.5 Overlay المنظومة / الرحلة / القصص

انظر القسم 5. النسب:

| Overlay | اللون الأساسي | الشفافية |
|---|---|---|
| Eco أسفل الصورة | `#44231A` | 78% → 28% → 0% |
| Eco hover wash | محسوب `#7F5853` | **28%** (opacity الطبقة) |
| Journey veil | `#44231A` | 28% |
| Journey caption | `#44231A` | 58% → 18% → 0% |
| Stories image fade | `64,37,35` | 48% → 12% |
| Modal backdrop | `36,18,16` | 48% |
| Hero | `#000000` | 12% |
| Footer radial wash | `#FFFFFF` | 10% |

---

## ألوان مكرّرة أو غير موحّدة — تنبيه لمطور التطبيق

1. **اسمان لـ hover الزر:** `#F8E7E0` (blush / outline) مقابل `#B97880` (الزر الممتلئ). استخدام الاسم `primary-hover` للزر الممتلئ خطأ.
2. **اسمان لـ active:** `#D99CA0` (outline) مقابل `#9E5F68` (ممتلئ).
3. **حقول مزدوجة:** Cream + حد 1.5px + placeholder muted 75% (حجز/SYJ) مقابل White + حد 1px محايد + placeholder `#B4A7A3` (تواصل). Focus: حلقة 4px/14%+outline مقابل حلقة 3px/18% بلا outline.
4. **بنيود خارج التوكن:** `rgba(64,37,35)`، `rgba(74,41,50)`، `rgba(36,18,16)`، `rgba(31,12,9)`، `rgba(105,54,61)`، `rgba(149,95,98)` بجانب `#44231A`.
5. **رمادي وحيد:** مسار تقدّم الحجز `rgba(214,214,214,0.85)`.
6. **سوشيال الفوتر** لا يتبع Hover البني لروابط الفوتر.
7. **Hover الوقت المحدد** `.bk-slot.is-on:hover` يعود إلى `#F8E7E0` بدل الإبقاء على `#E0AEAF`.
8. **Focus الهيرو CTA** بلون blush `#F8E7E0` بينما بقية الأزرار الممتلئة تستخدم `#E0AEAF`.
9. **Disabled غير موحّد:** أزرار .45 / ردود شات وأيام تقويم .55 / مبدّل اللغة .55.
10. **`.btn-outline` غير مستخدم في HTML** لكن نمطه هو المرجع لأزرار الشات/الخريطة/SYJ/تحديد الموقع.
11. **`--color-overlay-hero`** = Primary وغير مطبّق على الهيرو.
12. **`--color-brand-secondary-hover` `#381D15`** معرّف وغير مربوط بمكوّن ظاهر.
13. **واتساب يبقى أخضر وظيفيًا** `#12833F` / hover `#0F6B34`.
14. **تأكيد العنوان الوردي** يظهر في قصص (`h2 em`) وفي الزخارف، بينما `.h2 em` العام بني.
15. Overlay الإحصائيات والتواصل **منسوخ مرتين** بنفس الـ rgba — ثبّتيه كتوكين واحد في التطبيق.

---

## Mobile App Color & State Handoff

قيم جاهزة للنسخ إلى Flutter (`Color(0xAARRGGBB)`) أو React Native. الشفافية مكتوبة كـ `rgba`. الحركة حيث تؤثر على الحالة.

| Component | State | Background | Text/Icon | Border | Shadow/Notes |
|---|---|---|---|---|---|
| Brand / AppBar / theme | Default | `#E0AEAF` | `#FFFFFF` | — | `theme-color` |
| Scaffold / page | Default | `#FFFFFF` | `#937F7A` | — | Headings `#44231A` |
| Section surface A | Default | `#FFFCFA` | — | — | `--section-white` |
| Section surface B | Default | `#FDF5F2` | — | — | `--section-blush` |
| Section surface C | Default | `#F9F1EB` | — | — | `--section-cream` |
| PrimaryButton | Normal | `#E0AEAF` | `#FFFFFF` | none | `0 8px 24px rgba(224,174,175,0.28)` · 220ms · pill |
| PrimaryButton | Hover | `#B97880` | `#FFFFFF` | none | `0 12px 30px rgba(185,120,128,0.34)` |
| PrimaryButton | Pressed | `#9E5F68` | `#FFFFFF` | none | + `translateY(1px)` on shared `.btn` |
| PrimaryButton | Focus | `#E0AEAF` | `#FFFFFF` | — | Outline 3px `#E0AEAF` offset 3px |
| PrimaryButton | Disabled | same @ 45% opacity | same @ 45% | none | No shadow, no pointer |
| HomeCtaButton | Normal | `#E0AEAF` | `#FFFFFF` | none | **No** box-shadow · minH 46 |
| HomeCtaButton | Hover | `#B97880` | `#FFFFFF` | none | `translateY(-2px)` |
| HomeCtaButton | Pressed | `#9E5F68` | `#FFFFFF` | none | `translateY(0)` |
| HeroCta disc | Normal | `#E0AEAF` | `#FFFFFF` | none | `0 8px 20px rgba(224,174,175,0.34)` · 54dp |
| HeroCta disc | Hover | `#B97880` | `#FFFFFF` | none | `0 12px 28px rgba(185,120,128,0.44)` · scale 1.07 |
| HeroCta disc | Pressed | `#9E5F68` | `#FFFFFF` | none | — |
| HeroCta | Focus | — | label `#FFFFFF` | — | Outline 3px `#F8E7E0` offset 4px |
| OutlineButton | Normal | transparent | `#44231A` | 1.5px `#E0AEAF` | Used as pattern; HTML uses aliases |
| OutlineButton | Hover | `#F8E7E0` | `#44231A` | `#E0AEAF` | 220ms |
| OutlineButton | Pressed | `#D99CA0` | `#44231A` | `#D99CA0` | `.btn-outline:active` only |
| SyjGhost / Map / Locate / ChatReply | Normal | transparent | `#44231A` | 1px `#E0AEAF` | ChatReply radius 12; others vary |
| SyjGhost / Map / Locate / ChatReply | Hover | `#F8E7E0` | `#44231A` | `#E0AEAF` | ChatReply focus = hover, outline none |
| ChatReply | Disabled | same @ 55% | same @ 55% | same | opacity .55 not .45 |
| TextBack (`.bk-back`, `.syj-back`) | Normal | transparent | `#937F7A` | none | — |
| TextBack | Hover | transparent | `#44231A` | none | — |
| ModalClose | Normal | transparent | `#937F7A` | none | 40×40 circle |
| ModalClose | Hover | `rgba(68,35,26,0.05)` | `#44231A` | none | — |
| Header | Top of home | transparent | `#FFFFFF` | transparent | Focus ring white |
| Header | Scrolled / SYJ | `#E0AEAF` | `#FFFFFF` | `rgba(240,216,217,0.28)` bottom | `0 10px 28px rgba(224,174,175,0.28)` |
| NavLink | Normal | — | `#FFFFFF` | none | — |
| NavLink | Hover / Current | — | `#44231A` | none | 180ms |
| HeaderSocial | Normal | transparent | `#FFFFFF` @ 88% | none | 34dp |
| HeaderSocial | Hover | `rgba(255,255,255,0.08)` | `#44231A` @ 100% | none | — |
| LangSwitch | Normal | transparent | `#FFFFFF` | 1px `rgba(255,255,255,0.35)` | pill |
| LangSwitch | Hover | `rgba(255,255,255,0.12)` | `#44231A` | `#44231A` | — |
| LangSwitch | Disabled | transparent @ 55% | inherit @ 55% | white 35% | Hover locked |
| MobileNav sheet | Open | `rgba(224,174,175,0.94)` | `#FFFFFF` | item `rgba(255,255,255,0.10)` | — |
| Footer | Default | `#E0AEAF` | `rgba(255,255,255,0.92)` | — | Headings `#FFFFFF`; legal `rgba(255,255,255,0.78)` |
| Footer link | Hover | — | `#44231A` | underline 2px `#44231A` | 250ms ease-out |
| Footer social | Normal | transparent | `#FFFFFF` | `rgba(255,255,255,0.85)` | 36dp |
| Footer social | Hover | transparent | `#FFFFFF` | `#FFFFFF` | Does **not** turn brown |
| Input (booking/SYJ) | Normal | `#FBF0EC` | `#44231A` | 1.5px `#C0A5A4` | Placeholder `#937F7A` @ 75% |
| Input (booking/SYJ) | Hover | `#FBF0EC` | `#44231A` | `#F0D8D9` | 180ms |
| Input (booking/SYJ) | Focus | `#FFFFFF` | `#44231A` | `#E0AEAF` | Ring 4px `rgba(224,174,175,0.14)` + outline 3px |
| Input (booking/SYJ) | Error | `#FBF0EC` | `#44231A` | `#B3261E` | Ring 4px `rgba(179,38,30,0.12)` |
| Input (contact) | Normal | `#FFFFFF` | `#44231A` | 1px `#E1DCDA` | Placeholder `#B4A7A3` @ 100% |
| Input (contact) | Hover empty | `#FFFFFF` | `#44231A` | `#E1DCDA` | No visual change |
| Input (contact) | Filled | `#FFFFFF` | `#44231A` | `#E0AEAF` | Ring 3px `rgba(224,174,175,0.14)` |
| Input (contact) | Focus | `#FFFFFF` | `#44231A` | `#E0AEAF` | Ring 3px `rgba(224,174,175,0.18)` · outline 0 |
| Input (contact) | Error | `#FFFFFF` | `#44231A` | `#B3261E` | Ring 4px `rgba(179,38,30,0.12)` |
| OptionRow | Normal | `#FBF0EC` | `#937F7A` | 1.5px `#F0D8D9` | Radio 19dp, border `#C0A5A4` |
| OptionRow | Hover | `#F8E7E0` | `#937F7A` | `#F0D8D9` | — |
| OptionRow | Checked | `#FBF4F4` | `#44231A` | `#E0AEAF` | Disc `#E0AEAF` + check `#44231A` |
| Native checkbox | Checked | OS / `accent-color` | — | — | Accent `#E0AEAF` only |
| TimeSlot | Normal | `#FFFFFF` | `#44231A` | `#E1DCDA` | pill |
| TimeSlot | Hover | `#F8E7E0` | `#44231A` | `#E0AEAF` | — |
| TimeSlot | Selected | `#E0AEAF` | `#44231A` | `#E0AEAF` | Selected+hover → `#F8E7E0` |
| CalendarDay | Selected | `#E0AEAF` | `#44231A` | none | Today: inset `rgba(224,174,175,0.55)` |
| CalendarDay | Disabled | transparent | `#B4A7A3` @ 55% | none | — |
| ProgressTrack (booking) | Default | `rgba(214,214,214,0.85)` | — | none | **Unbranded gray** |
| ProgressFill | Default | `#E0AEAF` | — | none | 320ms width |
| Chat FAB | Normal | `#E0AEAF` | `#FFFFFF` | none | `--sh-2` · hover `#B97880` · press `#9E5F68` |
| Chat close | Normal | `rgba(255,255,255,0.18)` | `#FFFFFF` | none | On `#E0AEAF` header |
| Chat close | Hover | `rgba(255,255,255,0.28)` | `#FFFFFF` | none | 180ms |
| Bot bubble | Default | `#F8EDED` | `#44231A` | `rgba(224,174,175,0.28)` | — |
| User bubble | Default | `#FAEEE9` | `#44231A` | `#E9DAD9` | — |
| WhatsApp FAB | Normal | `#12833F` | `#FFFFFF` | none | `--sh-2` |
| WhatsApp FAB | Hover | `#0F6B34` | `#FFFFFF` | none | Do not recolor to pink |
| BackToTop FAB | Normal | `#FFFFFF` | `#44231A` | 1px `#F0D8D9` | `--sh-2` · hover lift 3px |
| EcoCard | Normal | photo / `#44231A` | `#FFFFFF` | `#F0D8D9` | Bottom brown 78%→28% fade |
| EcoCard | Hover | + wash `#7F5853` @ 28% | `#FFFFFF` | `#F0D8D9` | `--sh-1` · 320ms |
| StoryCard | Normal | photo + `#FDF7F4` tokens | `#FFFFFF` on photo | `#E8C4C5` | `0 10px 28px rgba(74,41,50,0.09)` |
| StoryCard | Hover | — | — | — | lift 4px · `0 16px 34px rgba(74,41,50,0.14)` |
| Contact card | Default | `#FFFFFF` | `#44231A` | `rgba(68,35,26,0.08)` | Pink-tinted shadow 16% |
| Modal sheet | Default | `#FFFFFF` | `#44231A` | `#E1DCDA` | Backdrop `rgba(36,18,16,0.48)` + blur 2px |
| Support step icon | Idle | `#FFFFFF` | `#F0D8D9` | `#F3DFE0` | Badge `#F8E7E0` / `#44231A` |
| Support step icon | Active | `#FFFFFF` | `#E0AEAF` | `#EAC8C9` | Badge `#E0AEAF` / `#44231A` |
| Contact social | Normal | transparent | `#44231A` | `#C0A5A4` | 40dp |
| Contact social | Hover | `#F8E7E0` | `#44231A` | `#E0AEAF` | 180ms |
| Badge (contact) | Default | `rgba(224,174,175,0.22)` | `#44231A` | `rgba(224,174,175,0.28)` | pill |
| Form error text | Default | — | `#B3261E` | — | — |
| Form success text | Default | — | `#166534` | — | — |
| Selection | Selected | `#E0AEAF` | `#44231A` | — | — |

### Flutter token snippet (حرفي + محسوب معتم)

```dart
// Literal tokens
const primary = Color(0xFFE0AEAF);
const primaryHoverBlush = Color(0xFFF8E7E0); // NOT filled-button hover
const outlineActive = Color(0xFFD99CA0);
const btnPrimaryHover = Color(0xFFB97880);
const btnPrimaryActive = Color(0xFF9E5F68);
const brown = Color(0xFF44231A);
const white = Color(0xFFFFFFFF);
const sectionWhite = Color(0xFFFFFCFA);
const sectionBlush = Color(0xFFFDF5F2);
const sectionCream = Color(0xFFF9F1EB);
const danger = Color(0xFFB3261E);
const success = Color(0xFF166534);
const whatsapp = Color(0xFF12833F);
const whatsappHover = Color(0xFF0F6B34); // mix 82% + black

// Computed from color-mix(in srgb, …)
const primaryBorder = Color(0xFFF0D8D9);
const brandCream = Color(0xFFFBF0EC);
const textMuted = Color(0xFF937F7A);
const textSubtle = Color(0xFFB0A39F);
const borderStrong = Color(0xFFC0A5A4);
const neutralBorder = Color(0xFFE1DCDA);
const placeholder = Color(0xFFB4A7A3);
```
