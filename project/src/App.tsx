import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectGallery } from './components/ProjectGallery';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    document.title = 'Softcraft Technologies | Solar, CCTV, Amusement, Automation';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Expert installation and maintenance of solar systems, amusement rides, CCTV security, and industrial automation. Professional solutions by Softcraft Technologies.'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute(
      'content',
      'solar installation, CCTV security, amusement park rides, industrial automation, renewable energy, security systems, Softcraft Technologies'
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
        <Navigation />
        <Hero />
        <Services />
        <ProjectGallery />
        <Testimonials />
        <Portfolio />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
