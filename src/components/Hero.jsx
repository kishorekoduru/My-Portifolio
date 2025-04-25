
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C] text-white">
      <div className={`max-w-4xl mx-auto px-4 text-center transform transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Hello, I'm [Your Name]
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Senior Software Engineer specializing in building exceptional digital experiences
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="group hover:bg-blue-500 hover:text-white transition-all"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
      <div className="absolute bottom-10 w-full text-center animate-bounce">
        <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
