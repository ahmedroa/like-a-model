import { useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import { bootPageEffects } from './effects/boot.js';
import { scrollToHash } from './lib/navScroll.js';

const TITLES = {
  '/': 'Like A Model — أكثر من تدريب... أسلوب حياة.',
  '/stories': 'قصص التحوّل — Like A Model',
  '/start-your-journey': 'ابدئي رحلتكِ — Like A Model',
};

export default function App() {
  const location = useLocation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pinned = location.pathname === '/stories' || location.pathname === '/start-your-journey';

  useLayoutEffect(() => {
    document.documentElement.classList.add('js');
    document.documentElement.classList.remove('no-js');
    bootPageEffects();
  }, []);

  useEffect(() => {
    document.title = TITLES[location.pathname] || TITLES['/'];
    document.body.classList.toggle('page-stories', location.pathname === '/stories');
    document.body.classList.toggle('page-syj', location.pathname === '/start-your-journey');
    document.body.classList.toggle('is-bk-open', isBookingOpen);
  }, [location.pathname, isBookingOpen]);

  useEffect(() => {
    const opened = () => setIsBookingOpen(true);
    const closed = () => setIsBookingOpen(false);
    window.addEventListener('lam:booking-opened', opened);
    window.addEventListener('lam:booking-closed', closed);
    return () => {
      window.removeEventListener('lam:booking-opened', opened);
      window.removeEventListener('lam:booking-closed', closed);
    };
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (location.hash) scrollToHash(location.hash, false);
      else window.scrollTo({ top: 0, behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname, location.hash]);

  const onOpenBooking = () => {
    setIsBookingOpen(true);
    if (typeof window.__lamOpenBooking === 'function') window.__lamOpenBooking();
    else window.__lamBookingQueued = true;
  };

  return (
    <>
      <a className="skip-link" href="#main">تخطّي إلى المحتوى</a>
      <Header pinned={pinned} />
      <Outlet context={{ onOpenBooking }} />
      <Footer />
      <FloatingActions />
      <BookingModal open={isBookingOpen} />
    </>
  );
}
