
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Data Structures & Algorithms", level: 75 },
  { name: "Web Development (MERN Stack)", level: 70 },
  { name: "Python Programming", level: 80 },
  { name: "Cloud Computing (AWS)", level: 65 },
  { name: "Machine Learning Basics", level: 60 },
  { name: "SQL & Data Analysis", level: 70 }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-4 hover:shadow-lg transition-shadow">
              <div className="mb-2 flex justify-between items-center">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
