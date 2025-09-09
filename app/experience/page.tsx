import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience - Ashish Kumar Jha",
  description:
    "Professional experience, education, and career journey of Ashish Kumar Jha - Software Developer at Leadzen.ai.",
};

const workExperience = [
  {
    title: "Software Development Engineer - 2",
    company: "Leadzen.ai",
    location: "New Delhi, Delhi, India",
    period: "March 2025 - Present",
    duration: "7 months",
    type: "Current Role",
    description: [
      "Leading backend development initiatives for scalable automation platforms",
      "Architecting and implementing microservices using FastAPI and Docker",
      "Optimizing database performance and designing efficient data pipelines",
      "Mentoring junior developers and conducting code reviews",
      "Driving technical decisions for system design and architecture improvements",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "MongoDB",
      "System Design",
      "Microservices",
    ],
  },
  {
    title: "Software Development Engineer - 1",
    company: "Leadzen.ai",
    location: "New Delhi, Delhi, India",
    period: "February 2023 - March 2025",
    duration: "2 years 2 months",
    type: "Promotion",
    description: [
      "Developed and maintained backend services for automation and lead generation platforms",
      "Built robust web scraping solutions handling large-scale data extraction",
      "Implemented RESTful APIs serving thousands of daily requests",
      "Collaborated with frontend teams to deliver end-to-end features",
      "Participated in on-call rotations and incident response procedures",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Web Scraping",
      "REST APIs",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology - BTech",
    field: "Information Technology",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Lucknow",
    period: "October 2023 - October 2026",
    status: "In Progress",
    description:
      "Pursuing advanced coursework in software engineering, algorithms, database systems, and computer networks.",
  },
  {
    degree: "High School Diploma",
    field: "Information Technology",
    institution: "Ambedkar DSEU Shakarpur Campus-I",
    location: "Delhi",
    period: "October 2020 - May 2023",
    status: "Completed",
    description:
      "Specialized in information technology fundamentals, programming basics, and computer science principles.",
  },
  {
    degree: "Secondary School",
    field: "General Studies",
    institution: "Central Board of Secondary Education",
    location: "India",
    period: "April 2019 - June 2020",
    status: "Completed",
    description:
      "Completed secondary education with focus on mathematics, science, and computer studies.",
  },
];

const skills = {
  "Programming Languages": ["Python", "TypeScript", "JavaScript"],
  "Frameworks & Libraries": ["FastAPI", "Next.js", "React", "Django", "Pygame"],
  Databases: ["MongoDB", "PostgreSQL", "Redis"],
  "DevOps & Tools": ["Docker", "Git", "Linux", "Nginx", "Terraform"],
  Specializations: [
    "Web Scraping",
    "System Design",
    "API Development",
    "Automation",
  ],
};

function TimelineItem({
  title,
  subtitle,
  period,
  location,
  description,
  technologies,
  icon: Icon,
  type,
}: {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string[] | string;
  technologies?: string[];
  icon: any;
  type: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full mr-4">
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="secondary" className="text-xs">
          {type}
        </Badge>
      </div>

      <Card className="ml-14 mb-8">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="flex flex-col gap-1">
            <span className="font-medium">{subtitle}</span>
            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {location}
              </span>
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent>
          {Array.isArray(description) ? (
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70 mb-4">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-foreground/70 mb-4">{description}</p>
          )}

          {technologies && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Experience & Education</h1>
          <p className="text-lg text-foreground/60">
            My professional journey in software development and continuous
            learning path.
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6" />
            Work Experience
          </h2>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <TimelineItem
                key={index}
                title={job.title}
                subtitle={job.company}
                period={`${job.period} (${job.duration})`}
                location={job.location}
                description={job.description}
                technologies={job.technologies}
                icon={Building}
                type={job.type}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6" />
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
                location={edu.location}
                description={edu.description}
                icon={GraduationCap}
                type={edu.status}
              />
            ))}
          </div>
        </section>

        {/* Skills Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center mt-16 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Open to Opportunities</h3>
          <p className="text-foreground/70">
            Currently looking for challenging roles in backend development,
            system design, and automation. Let&apos;s build something amazing
            together!
          </p>
        </div>
      </div>
    </div>
  );
}
