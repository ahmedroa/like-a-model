import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SyjCard = memo(function SyjCard() {
  return (
          <div className="syj-card" id="syjCard">
            <div className="syj-flow">
              <div className="syj-meta">
                <p className="syj-step-lbl" id="syjStepLbl" aria-live="polite">١ من ٤</p>
                <div className="syj-bar" aria-hidden="true"><span className="syj-bar-fill" id="syjBarFill"></span></div>
              </div>

              <form id="syjForm" noValidate>
                <fieldset className="syj-panel is-on" data-syj-step="1">
                  <p className="sr-only">بداية رحلتكِ</p>
                  <h1 tabIndex={-1}>يسعدنا التعرّف عليكِ</h1>
                  <p className="field">
                    <label className="field-lbl" htmlFor="syjName">الاسم الكامل <span className="req" aria-hidden="true">*</span></label>
                    <span className="field-wrap">
                      <svg className="ico field-ico" aria-hidden="true"><use href="#i-user"></use></svg>
                      <input className="input" id="syjName" name="name" type="text" autoComplete="name" required placeholder="اسمِك الكامل" />
                    </span>
                    <span className="field-err" data-err-for="name"></span>
                  </p>
                  <p className="field">
                    <label className="field-lbl" htmlFor="syjPhone">رقم الجوال السعودي <span className="req" aria-hidden="true">*</span></label>
                    <span className="field-wrap">
                      <svg className="ico field-ico" aria-hidden="true"><use href="#i-phone"></use></svg>
                      <input className="input" id="syjPhone" name="phone" type="tel" inputMode="tel" dir="ltr"
                             autoComplete="tel" required placeholder="05XXXXXXXX" />
                    </span>
                    <span className="field-err" data-err-for="phone"></span>
                  </p>
                </fieldset>

                <fieldset className="syj-panel" data-syj-step="2">
                  <p className="sr-only">هدفكِ</p>
                  <h1 tabIndex={-1}>ما الذي ترغبين في تحقيقه؟</h1>
                  <div className="optlist optlist-2" role="radiogroup" aria-labelledby="syjGoalLegend">
                    <p className="sr-only" id="syjGoalLegend">اختاري هدفًا واحدًا</p>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة خسارة الدهون" /><span className="optrow-face">رحلة خسارة الدهون</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة نحت وتنسيق القوام" /><span className="optrow-face">رحلة نحت وتنسيق القوام</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة بناء العضلات والقوة" /><span className="optrow-face">رحلة بناء العضلات والقوة</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة نمط الحياة الصحي" /><span className="optrow-face">رحلة نمط الحياة الصحي</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة الحمل الصحي" /><span className="optrow-face">رحلة الحمل الصحي</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة ما بعد الولادة" /><span className="optrow-face">رحلة ما بعد الولادة</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة التحوّل بعد التكميم" /><span className="optrow-face">رحلة التحوّل بعد التكميم</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة اللياقة والصحة لكبار السن" /><span className="optrow-face">رحلة اللياقة والصحة لكبار السن</span></label>
                    <label className="optrow"><input type="radio" name="goal" value="رحلة تألق العروس" /><span className="optrow-face">رحلة تألق العروس</span></label>
                    <label className="optrow optrow-wide"><input type="radio" name="goal" value="لست متأكدة وأرغب بالحصول على توصية من فريق Like A Model" /><span className="optrow-face">لست متأكدة وأرغب بالحصول على توصية من فريق Like A Model</span></label>
                  </div>
                  <span className="field-err" data-err-for="goal"></span>
                </fieldset>

                <fieldset className="syj-panel" data-syj-step="3">
                  <p className="sr-only">نوع الدعم</p>
                  <h1 tabIndex={-1}>كيف نساعدكِ في رحلتكِ؟</h1>
                  <div className="optlist" role="radiogroup" aria-labelledby="syjSupportLegend">
                    <p className="sr-only" id="syjSupportLegend">اختاري نوع الدعم</p>
                    <label className="optrow"><input type="radio" name="support" value="تدريب شخصي" /><span className="optrow-face">تدريب شخصي</span></label>
                    <label className="optrow"><input type="radio" name="support" value="تغذية" /><span className="optrow-face">تغذية</span></label>
                    <label className="optrow"><input type="radio" name="support" value="متابعة متكاملة" /><span className="optrow-face">متابعة متكاملة</span></label>
                  </div>
                  <span className="field-err" data-err-for="support"></span>
                  <p className="field">
                    <label className="field-lbl" htmlFor="syjTime">وقت التواصل المفضّل <span className="req" aria-hidden="true">*</span></label>
                    <select className="input" id="syjTime" name="time" required>
                      <option value="">اختاري الوقت</option>
                      <option value="صباحًا">صباحًا</option>
                      <option value="ظهرًا">ظهرًا</option>
                      <option value="مساءً">مساءً</option>
                      <option value="في أي وقت">في أي وقت</option>
                    </select>
                    <span className="field-err" data-err-for="time"></span>
                  </p>
                </fieldset>

                <fieldset className="syj-panel" data-syj-step="4">
                  <p className="sr-only">الخطوة الأخيرة</p>
                  <h1 tabIndex={-1}>باقي خطوة ونبدأ</h1>
                  <p className="field">
                    <label className="field-lbl" htmlFor="syjSource">كيف تعرّفتِ علينا؟ <span className="field-unit">(اختياري)</span></label>
                    <select className="input" id="syjSource" name="source">
                      <option value="">اختاري إن رغبتِ</option>
                      <option value="إنستغرام">إنستغرام</option>
                      <option value="سناب شات">سناب شات</option>
                      <option value="تيك توك">تيك توك</option>
                      <option value="صديقة أو أحد أفراد العائلة">صديقة أو أحد أفراد العائلة</option>
                      <option value="شريك من شركاء النجاح">شريك من شركاء النجاح</option>
                      <option value="واتساب">واتساب</option>
                      <option value="إعلان ممول">إعلان ممول</option>
                      <option value="معرض أو فعالية">معرض أو فعالية</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </p>
                  <p className="field">
                    <label className="field-lbl" htmlFor="syjMessage">رسالتِك <span className="field-unit">(اختياري)</span></label>
                    <textarea className="input syj-note" id="syjMessage" name="message" rows="4" placeholder="أي تفاصيل تودّين إخبارنا بها…"></textarea>
                  </p>
                  <div className="syj-consent">
                    <label className="syj-check">
                      <input type="checkbox" id="syjConsent" name="consent" required aria-describedby="syjConsentErr" />
                      <span>أوافق على تواصل فريق <bdi className="lam" lang="en">Like A Model</bdi> معي بشأن طلبي.</span>
                    </label>
                    <span className="field-err" id="syjConsentErr" data-err-for="consent"></span>
                  </div>
                </fieldset>

                <div className="syj-actions">
                  <button className="btn syj-ghost" id="syjBack" type="button" hidden>رجوع</button>
                  <button className="btn btn-primary" id="syjNext" type="button">التالي</button>
                  <button className="btn btn-primary btn-lg" id="syjSend" type="submit" hidden aria-hidden="true">إرسال الطلب</button>
                </div>
                <p className="form-status syj-status" role="status" aria-live="polite" id="syjLive"></p>
              </form>
            </div>

            <div className="syj-done">
              <h1 id="syjDoneTitle" tabIndex={-1}>تم استلام طلبكِ</h1>
              <p>شكرًا لكِ. سيتواصل معكِ فريق <bdi className="lam" lang="en">Like A Model</bdi> قريبًا لتبدأ رحلتكِ.</p>
              <p>سنعيدكِ للرئيسية خلال <span className="syj-count" id="syjCount">٨</span> ثوانٍ.</p>
              <Link className="btn btn-primary btn-lg" id="syjHome" to="/">العودة للرئيسية</Link>
            </div>
          </div>
  );
}, () => true);

export default function StartJourneyPage() {
  useEffect(() => {
    window.__lamInitStartJourney?.();
    return () => window.__lamAbortStartJourney?.();
  }, []);

  return (
    <main id="main">
      <div className="shell syj-wrap">
          <Link className="syj-back" to="/">
            <svg className="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>
            العودة للرئيسية
          </Link>
          <SyjCard />
        </div>
    </main>
  );
}
