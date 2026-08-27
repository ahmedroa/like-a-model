import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import SupportJourney from '../components/SupportJourney.jsx';
import Stats from '../components/Stats.jsx';
import Ecosystem from '../components/Ecosystem.jsx';
import Team from '../components/Team.jsx';
import TransformationStories from '../components/TransformationStories.jsx';
import Contact from '../components/Contact.jsx';

export default function HomePage({ onOpenBooking }) {
  useEffect(() => {
    window.__lamInitHome?.();
    return () => window.__lamAbortHome?.();
  }, []);

  return (
    <main id="main">
      <Hero onOpenBooking={onOpenBooking} />
      <About />
      <SupportJourney onOpenBooking={onOpenBooking} />
      <Stats />
      <Ecosystem />
      <Team />
      <TransformationStories />
      <Contact />
    </main>
  );
}
