import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ashish-Github193",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ashishk2004a/",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:ashishk2004a@gmail.com", icon: Mail },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ashish Kumar Jha</h3>
            <p className="text-foreground/60 max-w-md">
              Software Developer specializing in Python, Automation & Scalable
              System Design. Building solutions with precision and clarity.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <MapPin className="h-4 w-4 mr-2" />
              New Delhi, Delhi, India
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Button key={item.name} variant="outline" size="sm" asChild>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                );
              })}
            </div>
            <div className="text-sm text-foreground/60">
              <p>Phone: +91 8700745395</p>
              <p>Email: ashishk2004a@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
          <p>© 2024 Ashish Kumar Jha. Built with Next.js & Tailwind CSS.</p>
          <p className="mt-1">I Use Arch & NeoVim, BTW 🐧</p>
        </div>
      </div>
    </footer>
  );
}
