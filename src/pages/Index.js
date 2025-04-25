
import Hero from '@/components/Hero.js';
import About from '@/components/About.js';
import Skills from '@/components/Skills.js';
import Projects from '@/components/Projects.js';
import Contact from '@/components/Contact.js';

const Index = () => {
  return (
    <div className="font-inter">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
