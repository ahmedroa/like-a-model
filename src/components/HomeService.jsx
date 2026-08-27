export default function HomeService({ onOpenBooking }) {
  return (
    <div className="home-train-banner" id="home-training" aria-labelledby="homeCtaTitle">
      <div className="home-train-bg" aria-hidden="true">
        <img src="/assets/img/home-training.jpg?v=20260827-1149" alt="" width="1536" height="1024" decoding="async" />
      </div>
      <div className="home-train-overlay" aria-hidden="true"></div>
      <div className="shell home-train-content">
        <p className="home-cta-mark" aria-hidden="true">
          <svg className="ico"><use href="#i-heart"></use></svg>
        </p>
        <h2 className="home-cta-title" id="homeCtaTitle">
          <span>من تريدين أن تكوني بعد اليوم؟</span>
        </h2>
        <p className="home-cta-copy-text">رحلتكِ نحو النسخة التي تطمحين إليها تبدأ بخطوة واحدة، وجلسة التقييم هي البداية التي نصمّم منها رحلتكِ الخاصة.</p>
        <span className="home-cta-rule" aria-hidden="true"></span>
        <button className="btn home-cta-btn" type="button" id="bookingOpen" data-bk-open onClick={onOpenBooking} aria-haspopup="dialog" aria-controls="bookingModal">
          احجزي جلسة تقييمكِ المجانية
          <svg className="ico btn-ico" aria-hidden="true"><use href="#i-arrow"></use></svg>
        </button>
      </div>
    </div>
  );
}
