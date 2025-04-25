
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Cloud (AWS/GCP)", level: 80 },
  { name: "System Design", level: 85 },
  { name: "Data Structures", level: 90 }
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
