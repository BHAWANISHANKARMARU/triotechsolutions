import Hero from './components/Homepage/Hero';
import Stats from './components/Homepage/Stats';
import Services from './components/Homepage/Services';
import Features from './components/Homepage/Features';
import Testimonials from './components/Homepage/Testimonials';
import WhyChooseUs from './components/Homepage/WhyChooseUs';
import CTA from './components/Homepage/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
