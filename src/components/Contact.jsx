
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <Card className="p-6 bg-white">
          <p className="text-lg text-gray-700 mb-8">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="hover:bg-blue-500 hover:text-white" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-[#0077B5] hover:text-white" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-[#333] hover:text-white" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
