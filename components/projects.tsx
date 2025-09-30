"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { TechBadge } from "./tech-badge";

const projects = [
  {
    title: "BookWise - University Library Management",
    description:
      "Modern, full-stack library management system with smart authentication, real-time operations, and intelligent automation. Features multi-role system, mobile-first design, and comprehensive admin dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "NextAuth.js",
      "Neon Database",
      "Shadcn/UI",
    ],
    github: "https://github.com/Suraj0791/bookly",
    live: "https://bookly-wheat-one.vercel.app/",
    status: "All Systems Operational",
  },
  {
    title: "WordNest - Language Learning Platform",
    description:
      "Interactive Duolingo-inspired language learning app with gamification, AI voice integration, premium features, and comprehensive progress tracking. Includes hearts system, leaderboards, and quests.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Stripe",
      "Vapi AI",
      "Shadcn/UI",
    ],
    github: "https://github.com/Suraj0791/wordnest",
    live: "https://wordnest-seven.vercel.app/",
    status: "All Systems Operational",
  },
  {
    title: "AI Finance Management App",
    description:
      "Comprehensive financial management platform with AI receipt scanning, Splitwise clone features, automated budgeting, and database health monitoring for Supabase free tier.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Google Gemini AI",
      "Resend",
      "Inngest",
      "Supabase",
    ],
    github: "https://github.com/Suraj0791/finance-manage",
    live: "https://ai-finance-manage.vercel.app/",
    status: "All Systems Operational",
  },
  {
    title: "Yoom - Video Calling Platform",
    description:
      "Modern video calling application with screen sharing, meeting scheduling, personal rooms, call analytics, chat integration, and meeting recording capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stream",
      "WebRTC",
      "Clerk",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    github: "https://github.com/Suraj0791/yoom",
    live: "https://yoom-brown-six.vercel.app/",
    status: "All Systems Operational",
  },
  {
    title: "Workify - Project Management Platform",
    description:
      "Jira-inspired project management application with organization management, sprint planning, drag-and-drop issue tracking, and comprehensive project analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    github: "https://github.com/Suraj0791/Workify",
    live: "https://workify-rust.vercel.app/",
    status: "All Systems Operational",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 gradient-overlay opacity-60 z-10" />
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {project.live && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="icon-only" />
                ))}
              </div>

              {project.status && (
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      project.status === "All Systems Operational"
                        ? "bg-green-500"
                        : "bg-red-500 animate-pulse"
                    }`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {project.status}
                  </span>
                  <Button variant="link" className="h-auto p-0 text-xs ml-auto">
                    View Details →
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="rounded-full bg-transparent">
          Show all projects
        </Button>
      </div>
    </section>
  );
}
