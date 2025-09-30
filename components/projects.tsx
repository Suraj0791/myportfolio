"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "NoteBuddy",
    description:
      "A comprehensive diary platform with clean, fullscreen, Vercel, AI chatbot, Markdown support, and more.",
    image: "/note-taking-app-interface.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Vercel"],
    github: true,
    live: true,
    stars: 45,
  },
  {
    title: "Apparate MCF Server",
    description: "Model Context Protocol server for seamless Apparate integration, supporting MCP servers.",
    image: "/server-dashboard-interface.png",
    technologies: ["Node.js", "Express", "TypeScript", "Docker"],
    github: true,
    live: true,
    stars: 32,
  },
  {
    title: "Spotify",
    description: "Spotify clone, streaming platform with personalized playlists, live chat, and social features.",
    image: "/music-streaming-app.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind", "Express"],
    github: true,
    live: true,
    stars: 28,
  },
  {
    title: "Passphida Aayrl",
    description: "Instagram dating platform featuring screenshot, creation and authentic user engagement.",
    image: "/dating-app-interface.png",
    technologies: ["Next.js", "React", "Tailwind", "Firebase", "Vercel"],
    github: false,
    live: true,
    stars: 0,
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
                  {project.github && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.github && project.stars > 0 && (
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>{project.stars} Stars</span>
                  </div>
                  <Button variant="link" className="h-auto p-0 text-sm">
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
