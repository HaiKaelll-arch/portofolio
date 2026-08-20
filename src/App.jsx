import { useState } from 'react';
import BackgroundSystem from './components/BackgroundSystem/BackgroundSystem';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Activity from './components/Activity/Activity';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import '../src/styles/animations.css';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div className="app-root">
      {/* Background & HUD effects */}
      <BackgroundSystem />
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Activity />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Futuristic Toast Notification */}
      <div className={`toast ${toastVisible ? 'show' : ''}`} role="status" aria-live="polite">
        <span className="text-cyan">[SYSTEM_NOTIFY]</span> {toastMessage}
      </div>
    </div>
  );
}
