import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  stars?: number;
  forks?: number;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  language,
  stars = 0,
  forks = 0,
  githubUrl,
  demoUrl,
  tags,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`h-full transition-all hover:shadow-lg ${featured ? "border-primary" : ""}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 flex items-center gap-2">
              {title}
              {featured && (
                <Badge variant="default" className="text-xs">
                  Featured
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            {language}
          </Badge>
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-foreground/60">
          {stars > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{stars}</span>
            </div>
          )}
          {forks > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{forks}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" />
              Code
            </Link>
          </Button>
          {demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
