import { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects - Ashish Kumar Jha",
  description:
    "Explore my portfolio of Python automation tools, web scrapers, games, and full-stack applications.",
};

const featuredProjects = [
  {
    title: "Facebook Ads Library Scraper",
    description:
      "Scraper designed to extract all Facebook ads from the Facebook Ads Library with advanced filtering and data extraction capabilities.",
    language: "Python",
    stars: 26,
    forks: 9,
    githubUrl: "https://github.com/Ashish-Github193/Facebook-Ads-Library",
    tags: ["Web Scraping", "Data Mining", "API"],
    featured: true,
  },
  {
    title: "Portmux",
    description:
      "PortMUX helps you create and manage SSH port forwards without dealing with tmux commands directly. Simplified port forwarding management.",
    language: "Python",
    stars: 1,
    githubUrl: "https://github.com/Ashish-Github193/Portmux",
    tags: ["SSH", "CLI Tool", "DevOps"],
    featured: true,
  },
  {
    title: "Browser-Native Xdotcom-Scraper",
    description:
      "A modern web scraper built with PyDoll that can handle JavaScript-heavy websites and bypass Cloudflare protection.",
    language: "Python",
    stars: 2,
    githubUrl:
      "https://github.com/Ashish-Github193/Browser-Native-Xdotcom-Scraper",
    tags: ["PyDoll", "Cloudflare Bypass", "JavaScript Rendering"],
    featured: true,
  },
  {
    title: "Ecommerce Platform",
    description:
      "Robust e-commerce application built with FastAPI, PostgreSQL, and Docker featuring complete shopping cart, user management, and order processing.",
    language: "Python",
    stars: 2,
    forks: 1,
    githubUrl: "https://github.com/Ashish-Github193/Ecommerce",
    tags: ["FastAPI", "PostgreSQL", "Docker", "REST API"],
    featured: true,
  },
];

const gameProjects = [
  {
    title: "Spook-Alle",
    description:
      "Halloween-themed game built with Pygame featuring spooky graphics and engaging gameplay mechanics.",
    language: "Python",
    githubUrl: "https://github.com/Ashish-Github193/Spook-Alle",
    tags: ["Pygame", "Game Development", "Graphics"],
  },
  {
    title: "Space Invaders",
    description:
      "Classic arcade game recreation with modern Python and Pygame, featuring smooth controls and retro aesthetics.",
    language: "Python",
    githubUrl: "https://github.com/Ashish-Github193/Space-Invaders",
    tags: ["Pygame", "Arcade", "Classic Game"],
  },
  {
    title: "Flappy Bird",
    description:
      "Popular mobile game clone implemented in Python with physics simulation and difficulty progression.",
    language: "Python",
    githubUrl: "https://github.com/Ashish-Github193/Flappy-bird",
    tags: ["Pygame", "Physics", "Mobile Game Clone"],
  },
  {
    title: "Mike vs Godzilla",
    description:
      "Action-packed fighting game featuring custom characters and combat mechanics built with Pygame.",
    language: "Python",
    githubUrl: "https://github.com/Ashish-Github193/Mike-vs-Godzilla",
    tags: ["Pygame", "Fighting Game", "Animation"],
  },
];

const automationProjects = [
  {
    title: "Rsync for Remote Development",
    description:
      "Automated file synchronization tool for remote development workflows with real-time sync capabilities.",
    language: "Python",
    githubUrl:
      "https://github.com/Ashish-Github193/Rsync-For-Remote-Development",
    tags: ["Automation", "DevOps", "File Sync"],
  },
  {
    title: "Ansible Scripts",
    description:
      "Collection of Ansible playbooks and scripts for server provisioning, configuration management, and deployment automation.",
    language: "YAML",
    githubUrl: "https://github.com/Ashish-Github193/Ansible-Scripts",
    tags: ["Ansible", "Infrastructure", "Configuration Management"],
  },
  {
    title: "Pihole Adblocker Docker",
    description:
      "Dockerized Pi-hole setup for network-wide ad blocking with custom configuration and monitoring.",
    language: "Docker",
    githubUrl: "https://github.com/Ashish-Github193/Pihole-Adblocker-Docker",
    tags: ["Docker", "DNS", "Ad Blocking", "Network Security"],
  },
];

const mlProjects = [
  {
    title: "Music Genre Identification",
    description:
      "Machine learning model for automatic music genre classification using audio feature extraction and neural networks.",
    language: "Jupyter Notebook",
    githubUrl: "https://github.com/Ashish-Github193/Music-genre-Identification",
    tags: ["Machine Learning", "Audio Processing", "Neural Networks"],
  },
  {
    title: "Genetic Algorithm Reinforcement Training",
    description:
      "Implementation of genetic algorithms for reinforcement learning optimization with performance metrics and visualization.",
    language: "Python",
    githubUrl:
      "https://github.com/Ashish-Github193/Genetic-Algorithm-Reinforcement-Training",
    tags: ["Genetic Algorithm", "Reinforcement Learning", "Optimization"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in Python
            development, web scraping, automation, game development, and machine
            learning.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Badge variant="default">Highlights</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* DevOps & Automation */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-semibold">DevOps & Automation</h2>
            <Badge variant="outline">Infrastructure</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Machine Learning */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-semibold">Machine Learning & AI</h2>
            <Badge variant="outline">Experimental</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mlProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Game Development */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-semibold">Game Development</h2>
            <Badge variant="secondary">Pygame</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="text-foreground/60">
            Want to see more? Check out my{" "}
            <a
              href="https://github.com/Ashish-Github193"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GitHub profile
            </a>{" "}
            for additional projects and contributions.
          </p>
        </div>
      </div>
    </div>
  );
}
