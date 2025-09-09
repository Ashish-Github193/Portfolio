import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Terminal, Zap, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Code,
      title: "Precision in Code",
      description:
        "Build with precision. Clean architecture and maintainable solutions.",
    },
    {
      icon: Zap,
      title: "Clear Thinking",
      description:
        "Think with clarity. Understanding problems before solving them.",
    },
    {
      icon: Users,
      title: "Aligned Living",
      description:
        "Live with alignment. Consistent values across work and life.",
    },
  ];

  const topSkills = ["FastAPI", "Docker", "Linux", "Git"];
  const techStack = [
    "Python",
    "TypeScript",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "React",
    "Node.js",
    "Linux",
    "Git",
    "System Design",
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Currently serving as <strong>SDE2 at Leadzen.ai</strong> with 2.5+
              years of experience in building scalable systems and automation
              solutions. My approach is simple: understand deeply, build
              precisely, and maintain clarity in every decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Terminal className="h-5 w-5 mr-2" />
                  Top Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topSkills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <p className="text-foreground/70">
                  Building robust, scalable backend systems at Leadzen.ai while
                  continuously exploring new technologies and architectural
                  patterns. Always learning, always improving, always aligned
                  with the principle that good code is code that can be
                  understood and maintained.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
