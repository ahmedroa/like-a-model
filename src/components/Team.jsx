export default function Team() {
  return (
    <>
      <div className="chapter" id="journey">

      {/* ══════════ 8 · THE TRANSFORMATION JOURNEY ══════════ */}
      <section className="section section-alt" id="journey-guide" aria-labelledby="journeyTitle">
        <div className="shell">
          <header className="about-lead journey-lead reveal">
            <p className="sec-ornament" aria-hidden="true">
              <span className="sec-ornament-line"></span>
              <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
              <span className="sec-ornament-line"></span>
            </p>
            <h2 className="about-lead-title" id="journeyTitle">فريق يعمل من أجل نجاح رحلتكِ</h2>
          </header>
        </div>

          <div className="journey-main">
            <div className="journey-copy">
              <p className="reveal">
                في <bdi className="lam" lang="en">Like A Model</bdi> لا تقتصر رحلتكِ على مدربة أو برنامج تدريبي، بل تبدأ بالانضمام إلى منظومة متكاملة من المختصين الذين يعملون من أجل فهم أهدافكِ، وتقديم تجربة متوازنة تساعدكِ على تحقيق أفضل النتائج.
              </p>
              <p className="reveal" data-delay="1">
                لأن كل رحلة تحوّل ناجحة تستحق أكثر من مجرد تدريب، وضعنا فريقًا متكاملًا يعمل خلف الكواليس لمنحكِ تجربة احترافية ونتائج تدوم.
              </p>
            </div>

            {/* TEMP: journey-preview.jpg اختبار بصري مؤقت — استبدليه لاحقًا بصور Like A Model النهائية لكل بطاقة. */}
            <figure className="journey-frame reveal" data-delay="2" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="خدمة العملاء" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">خدمة العملاء</span>
                <span className="journey-cap-desc">فريق قريب منكِ للإجابة عن استفساراتكِ وتنسيق رحلتكِ.</span>
              </figcaption>
            </figure>
          </div>

          <div className="journey-gallery">
            <figure className="journey-frame reveal" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="مديرة التقييم" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">مديرة التقييم</span>
                <span className="journey-cap-desc">تقييم دقيق يضع نقطة البداية المناسبة لأهدافكِ.</span>
              </figcaption>
            </figure>
            <figure className="journey-frame reveal" data-delay="1" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="أخصائية التغذية" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">أخصائية التغذية</span>
                <span className="journey-cap-desc">خطة غذائية مرنة تناسب احتياجاتكِ وأسلوب حياتكِ.</span>
              </figcaption>
            </figure>
            <figure className="journey-frame reveal" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="فيديو تدريبات" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">فيديو تدريبات</span>
                <span className="journey-cap-desc">تدريب واضح ومتابعة تساعدكِ على أداء التمارين بثقة.</span>
              </figcaption>
            </figure>
            <figure className="journey-frame reveal" data-delay="1" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="جماعية التدريب" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">جماعية التدريب</span>
                <span className="journey-cap-desc">بيئة تدريب داعمة تمنحكِ حافزًا للاستمرار.</span>
              </figcaption>
            </figure>
            <figure className="journey-frame reveal" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="المتابعة" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">المتابعة</span>
                <span className="journey-cap-desc">متابعة مستمرة لتعديل الخطة ومواكبة تقدّمكِ.</span>
              </figcaption>
            </figure>
            <figure className="journey-frame reveal" data-delay="1" tabIndex="0">
              <div className="journey-media">
                <img src="/assets/img/journey-preview.jpg" alt="العمليات" width="1024" height="682" loading="lazy" />
                <span className="journey-veil" aria-hidden="true"></span>
              </div>
              <figcaption className="journey-cap">
                <span className="journey-cap-title">العمليات</span>
                <span className="journey-cap-desc">فريق منظم يعمل خلف الكواليس لتقديم تجربة سلسة.</span>
              </figcaption>
            </figure>
          </div>
      </section>

      </div>
    </>
  );
}
