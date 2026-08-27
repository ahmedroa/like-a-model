import { useNavigate } from 'react-router-dom';
import { scrollToNavTarget } from '../lib/navScroll.js';

export default function Hero({ onOpenBooking }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero" id="home" aria-label="الواجهة الرئيسية">
        <div className="hero-media" id="heroMedia" aria-hidden="true"></div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <h1 className="sr-only"><span className="lam" lang="en">Like A Model</span></h1>

        <button className="hero-cta" type="button" data-bk-open onClick={onOpenBooking} aria-haspopup="dialog" aria-controls="bookingModal">
          <span className="hero-cta-play" aria-hidden="true">
            <svg className="ico" focusable="false"><use href="#i-play"></use></svg>
          </span>
          <span className="hero-cta-lbl">ابدئي رحلتكِ</span>
        </button>

        <a
          className="hero-scroll"
          href="#about"
          onClick={(e) => {
            const target = document.getElementById('about');
            if (!target) return;
            e.preventDefault();
            navigate({ pathname: '/', hash: '#about' }, { replace: true });
            scrollToNavTarget(target, false);
          }}
        >
          <span className="hero-scroll-lbl">اكتشفي المزيد</span>
          <span className="hero-scroll-track" aria-hidden="true"><span className="hero-scroll-dot"></span></span>
        </a>
      </section>
    </>
  );
}
