
import { Card } from "@/components/ui/card";
import { Brain, Code, Database, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate fresher with a strong foundation in Computer Science. I'm enthusiastic about exploring various 
            domains including Web Development, Data Structures & Algorithms, Cloud Computing, AI/ML, and Data Science. 
            Currently seeking opportunities to apply my knowledge and grow as a technology professional.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <Code className="mx-auto h-8 w-8 text-blue-600 mb-2" />
              <div className="text-sm font-medium text-gray-600">Web Development</div>
            </div>
            <div className="text-center p-4">
              <Brain className="mx-auto h-8 w-8 text-blue-600 mb-2" />
              <div className="text-sm font-medium text-gray-600">AI & ML</div>
            </div>
            <div className="text-center p-4">
              <Cloud className="mx-auto h-8 w-8 text-blue-600 mb-2" />
              <div className="text-sm font-medium text-gray-600">Cloud Computing</div>
            </div>
            <div className="text-center p-4">
              <Database className="mx-auto h-8 w-8 text-blue-600 mb-2" />
              <div className="text-sm font-medium text-gray-600">Data Science</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
