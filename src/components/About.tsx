
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate Software Engineer with extensive experience in building scalable applications. 
            My journey in tech has led me through various roles at leading companies, where I've developed 
            expertise in modern web technologies and cloud architecture.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Commits</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
