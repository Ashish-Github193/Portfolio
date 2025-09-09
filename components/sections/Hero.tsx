import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="block">Ashish Kumar Jha</span>
            <span className="block text-2xl sm:text-3xl font-normal text-foreground/70 mt-2">
              Software Developer
            </span>
          </h1>

          <div className="mb-4 flex items-center justify-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              New Delhi, Delhi, India
            </Badge>
          </div>

          <p className="text-lg sm:text-xl text-foreground/60 mb-8 max-w-3xl mx-auto">
            Specializing in{" "}
            <strong>Python, Automation & Scalable System Design</strong> |
            FastAPI | Docker | MongoDB | Clean Architecture &gt; Hacks
          </p>

          <div className="mb-8">
            <Badge variant="outline" className="text-sm px-3 py-1">
              I Use Arch & NeoVim, BTW 🐧
            </Badge>
          </div>

          <blockquote className="text-lg italic text-foreground/70 mb-12 max-w-2xl mx-auto">
            &quot;What drives me is not just problem-solving, but
            problem-understanding—the kind that makes complexity collapse into
            clarity.&quot;
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-foreground/60">
            <Badge variant="secondary">SDE2 at Leadzen.ai</Badge>
            <Badge variant="secondary">2.5+ Years Experience</Badge>
            <Badge variant="secondary">Python Expert</Badge>
            <Badge variant="secondary">System Design</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
