"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { TechBadge } from "./tech-badge"

const projects = [
  {
    title: "NotesBuddy",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
    image: "/study-platform-with-notes-and-flashcards.jpg",
    technologies: ["Next.js", "TypeScript", "React", "Vercel", "Tailwind CSS", "PostgreSQL"],
    github: true,
    live: true,
    status: "All Systems Operational",
  },
  {
    title: "Appwrite MCP Server",
    description:
      "Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate",
    image: "/server-dashboard-with-database-operations.jpg",
    technologies: ["TypeScript", "Node.js", "Vercel", "Appwrite"],
    github: true,
    live: true,
    status: "All Systems Operational",
  },
  {
    title: "Spotify Clone",
    description: "Full-featured music streaming platform with personalized playlists, live chat, and social features",
    image: "/music-streaming-app.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: true,
    live: true,
    status: null,
  },
  {
    title: "Dating Platform",
    description: "Modern dating platform featuring profile creation, matching algorithm, and authentic user engagement",
    image: "/dating-app-profiles.png",
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    github: false,
    live: true,
    status: "Building in Progress",
  },
]

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
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="icon-only" />
                ))}
              </div>

              {project.status && (
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      project.status === "All Systems Operational" ? "bg-green-500" : "bg-red-500 animate-pulse"
                    }`}
                  />
                  <span className="text-xs text-muted-foreground">{project.status}</span>
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
  )
}
