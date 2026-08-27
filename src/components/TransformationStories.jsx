import { Link } from 'react-router-dom';

export default function TransformationStories() {
  return (
    <>
      <div className="chapter" id="stories">

      <section className="section section-stories" aria-labelledby="storiesTitle">
        <div className="shell">
          <header className="sec-head sec-head-center stories-head">
            <p className="sec-ornament stories-kicker" aria-hidden="true">
              <span className="sec-ornament-line stories-kicker-line"></span>
              <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
              <span className="sec-ornament-line stories-kicker-line"></span>
            </p>
            <h2 className="h2 reveal" id="storiesTitle">قصص بدأت <em>بقرار</em></h2>
            <p className="sec-sub reveal" data-delay="1">كل قصة هنا كانت يومًا في نفس نقطة البداية التي تقفين عندها اليوم.<br />اكتشفي كيف تحوّلت قراراتهن إلى حياة جديدة.</p>
          </header>

          <div className="stories-grid">
            <div className="stories-col stories-col--start">
              <Link className="story-card story-card--side reveal" data-story="body-sculpt" to="/stories?goal=body-toning">
                <span className="story-media">
                  <img src="/assets/img/goal-body-toning.png" alt="تمارين نحت القوام بأشرطة مقاومة في استوديو بيلاتس" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-sparkle"></use></svg>
                  <span className="story-title">نحت القوام</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
              <Link className="story-card story-card--side reveal" data-story="bride" to="/stories?goal=bridal">
                <span className="story-media">
                  <img src="/assets/img/goal-bridal-glow.png" alt="استعداد هادئ لتألّق يوم الزفاف" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-crown"></use></svg>
                  <span className="story-title">تألق العروس</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
              <Link className="story-card story-card--side reveal" data-story="pregnancy" to="/stories?goal=pregnancy">
                <span className="story-media">
                  <img src="/assets/img/goal-pregnancy-wellness.png" alt="حركة هادئة تدعم الحمل الصحي" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-bloom"></use></svg>
                  <span className="story-title">الحمل الصحي</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
              <Link className="story-card story-card--side reveal" data-story="bariatric" to="/stories?goal=bariatric">
                <span className="story-media">
                  <img src="/assets/img/goal-post-bariatric.png" alt="خطوة واثقة في رحلة التحوّل بعد التكميم" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-transform"></use></svg>
                  <span className="story-title">بعد التكميم</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
            </div>

            <div className="stories-center">
              <Link className="stories-figure reveal" to="/start-your-journey">
                <img className="stories-figure-img" src="/assets/img/stories/story-center-figure.png" alt="امرأة تنظر بأمل نحو قصتها القادمة" width="607" height="1024" loading="lazy" />
                <span className="stories-figure-copy">
                  <span className="stories-figure-kicker">ابحثي عن قصة</span>
                  <span className="stories-figure-accent">تشبه قصتكِ
                    <svg className="stories-figure-swoosh" viewBox="0 0 88 14" aria-hidden="true" focusable="false">
                      <path d="M5 9.5c16 6.5 52 6.5 78-5" fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round"/>
                    </svg>
                  </span>
                </span>
              </Link>
              <Link className="story-card story-card--side story-card--wide reveal" data-story="wellness" to="/stories?goal=health-fitness">
                <span className="story-media">
                  <img src="/assets/img/goal-health-fitness.png" alt="استوديو عافية هادئ بإضاءة طبيعية دافئة" width="960" height="640" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-heart"></use></svg>
                  <span className="story-title">الصحة واللياقة</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
            </div>

            <div className="stories-col stories-col--end">
              <Link className="story-card story-card--side reveal" data-story="fat-loss" to="/stories?goal=fat-loss">
                <span className="story-media">
                  <img src="/assets/img/goal-fat-loss.png" alt="تدريب يركّز على خسارة الدهون في استوديو نسائي هادئ" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-flame"></use></svg>
                  <span className="story-title">خسارة الدهون</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
              <Link className="story-card story-card--side reveal" data-story="muscle-building" to="/stories?goal=muscle-building">
                <span className="story-media">
                  <img src="/assets/img/goal-muscle-building.png" alt="تمرين قوة لبناء العضلات بأوزان خفيفة" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-dumbbell"></use></svg>
                  <span className="story-title">بناء العضلات</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
              <Link className="story-card story-card--side reveal" data-story="postpartum" to="/stories?goal=postpartum">
                <span className="story-media">
                  <img src="/assets/img/goal-postpartum.png" alt="تمارين لطيفة لدعم الجسم بعد الولادة" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-baby"></use></svg>
                  <span className="story-title">ما بعد الولادة</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
              <Link className="story-card story-card--side reveal" data-story="lifestyle" to="/stories?goal=healthy-lifestyle">
                <span className="story-media">
                  <img src="/assets/img/goal-healthy-lifestyle.png" alt="عادات يومية لنمط حياة صحي في المطبخ" width="640" height="960" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />
                </span>
                <span className="story-body">
                  <svg className="ico story-ico" aria-hidden="true"><use href="#i-leaf"></use></svg>
                  <span className="story-title">نمط الحياة الصحي</span>
                  <svg className="ico story-arrow" aria-hidden="true"><use href="#i-arrow"></use></svg>
                </span>
              </Link>
            </div>
          </div>

          <aside className="stories-cta reveal" data-delay="2">
            <p>كل قرار صغير اليوم... قد يكون البداية لحياة جديدة لا تتخيلينها.</p>
            <p className="stories-cta-q">ما قصتكِ القادمة؟</p>
          </aside>
        </div>
      </section>

      </div>
    </>
  );
}
