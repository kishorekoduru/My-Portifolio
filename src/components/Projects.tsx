
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: "Cloud-Scale Application",
    description: "Developed a highly scalable cloud application handling millions of requests using AWS Lambda and DynamoDB.",
    tech: ["React", "Node.js", "AWS", "TypeScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "Real-time Analytics Platform",
    description: "Built a real-time analytics dashboard processing terabytes of data using Google BigQuery and Kafka.",
    tech: ["Next.js", "Python", "Kafka", "BigQuery"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI-Powered Assistant",
    description: "Created an AI assistant using OpenAI's GPT API with advanced context understanding.",
    tech: ["React", "Python", "OpenAI", "Redis"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
