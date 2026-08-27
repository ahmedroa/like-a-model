import { assetUrl } from '../lib/asset.js';

export default function Ecosystem() {
  return (
    <>
      <section className="section" id="ecosystem">
        <div className="shell">
          <header className="sec-head sec-head-center">
            <p className="sec-ornament reveal" aria-hidden="true">
              <span className="sec-ornament-line"></span>
              <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
              <span className="sec-ornament-line"></span>
            </p>
            <h2 className="h2 reveal" data-delay="1">منظومة <em className="lam" lang="en">Like A Model</em></h2>
            <p className="sec-sub reveal" data-delay="2">
              لأن التحوّل الحقيقي يحتاج أكثر من مجرد تدريب، صمّمنا منظومة متكاملة تجمع بين
              الخدمات الاحترافية والشركاء الموثوقين لتمنحِك تجربة استثنائية ونتائج تليق
              بطموحِك
            </p>
          </header>

          <div className="grid grid-2 eco-grid">
            <article className="eco-card" tabIndex="0">
              <div className="eco-media">
                <img src={assetUrl('/assets/img/success-partners.jpg')} alt="استشارة تغذية ونمط حياة صحي بين مختصة وعميلة في جلسة هادئة" width="1024" height="768" loading="lazy" />
              </div>
              <div className="eco-body">
                <h3 className="h3">شركاء النجاح</h3>
                <p className="eco-sub">اكتشفي منظومة متكاملة تدعم نجاحِك</p>
                <div className="eco-card-reveal">
                  <p className="eco-desc">
                    من المختبرات والوجبات الصحية إلى المنتجات والخدمات المختارة بعناية، نوفّر لكِ
                    شبكة من الشركاء الذين يشاركوننا نفس معايير الجودة لنرافقِك نحو أفضل النتائج.
                  </p>
                </div>
                <p className="eco-cue">
                  <span>اكتشفي المزيد</span>
                  <svg className="ico eco-cue-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </p>
              </div>
            </article>

            <article className="eco-card" tabIndex="0">
              <div className="eco-media">
                <img src={assetUrl('/assets/img/services-training.jpg')} alt="مدربة تساعد متدربة على أداء تمرين في استوديو نسائي حديث وهادئ" width="1024" height="768" loading="lazy" />
              </div>
              <div className="eco-body">
                <h3 className="h3">خدماتنا</h3>
                <p className="eco-sub">ابدئي رحلة التحوّل التي تناسبِك</p>
                <div className="eco-card-reveal">
                  <p className="eco-desc">
                    برامج متخصصة، مدرِّبات محترفات، خطط مخصصة، ومتابعة مستمرة صُمّمت لتمنحِك
                    تجربة استثنائية ونتائج حقيقية تدوم. استكشفي الخدمات واختاري الرحلة الأقرب
                    إلى أهدافِك.
                  </p>
                </div>
                <p className="eco-cue">
                  <span>اكتشفي المزيد</span>
                  <svg className="ico eco-cue-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
