export default function About() {
  return (
    <>
      <div className="chapter" id="about">

      {/* ══════════ 2 · ABOUT ══════════ */}
      <section className="section section-about" id="about-intro" aria-labelledby="aboutTitle">
        <span className="about-logo-watermark" aria-hidden="true"></span>
        <div className="shell">
          <header className="about-lead">
            <p className="sec-ornament" aria-hidden="true">
              <span className="sec-ornament-line"></span>
              <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
              <span className="sec-ornament-line"></span>
            </p>
            <h2 className="about-lead-title about-story-line" id="aboutTitle" data-about-from="0">من نحن</h2>
            <p className="about-lead-sub about-story-line" data-about-from="0">خبرة تمتد لأكثر من ٢٠ عامًا</p>
          </header>

          <div className="about-body">
            <div className="about-story">
            <p className="about-brand lam about-story-line" lang="en" data-about-from="0">Like A Model</p>

            <div className="about-editorial" data-timeline>
              <div className="about-timeline" aria-hidden="true">
                <span className="about-tl-track"></span>
                <span className="about-tl-progress"></span>
                <span className="about-tl-start"></span>
                <span className="about-tl-head"></span>
              </div>
              <div className="about-editorial-body">
                <p className="about-line about-opener about-story-line" data-about-from="0">رحلة تحوّل مصممة خصيصًا لكِ.</p>
                <p className="about-line about-story-line" data-about-from="0.20">في <bdi className="lam" lang="en">Like A Model</bdi> نؤمن أن التحول الحقيقي لا يبدأ من الميزان، بل من القرار.</p>
                <p className="about-line about-decision about-story-line" data-about-from="0.28">قرار الاهتمام بنفسك.</p>
                <p className="about-line about-decision about-story-line" data-about-from="0.36">قرار الاستثمار في صحتك.</p>
                <p className="about-line about-decision about-story-line" data-about-from="0.42">قرار بناء أسلوب حياة يمنحك المزيد من القوة والثقة والتوازن.</p>
                <p className="about-line about-copy about-story-line" data-about-from="0.45">لهذا صممنا تجربة متكاملة ترافقك في كل خطوة، من التقييم الأول وحتى تحقيق أهدافك، من خلال التدريب الشخصي، والتغذية، والمتابعة المستمرة، ضمن رحلة تناسب احتياجاتك وأسلوب حياتك.</p>
              </div>
            </div>
            </div>
          </div>

          <div className="about-coda">
            <p>لسنا مجرد برنامج تدريبي.</p>
            <p className="about-coda-strong">نحن شريككِ في رحلة التحوّل.</p>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
