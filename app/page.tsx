import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Appointment from '@/components/Appointment';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Appointment />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
