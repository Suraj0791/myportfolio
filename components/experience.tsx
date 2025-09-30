"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Twitter, Github } from "lucide-react"
import { TechBadge } from "./tech-badge"
import Image from "next/image"

const experiences = [
  {
    company: "Startup Name",
    logo: "/placeholder.svg?height=48&width=48",
    location: "United States (Remote)",
    period: "August 2025 - Present",
    role: "Founding Frontend Engineer",
    status: "Working",
    description: [
      "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
      "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
      "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Figma", "Vercel", "AWS", "Postman", "Bun"],
  },
  {
    company: "Upsurge Labs",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Bangalore, India (On-Site)",
    period: "June 2025 - July 2025",
    role: "Backend Developer Intern",
    status: null,
    description: [
      "Developed and maintained RESTful APIs using Node.js and Express.js for various client projects.",
      "Implemented database schemas and queries using MongoDB and PostgreSQL.",
      "Collaborated with frontend developers to integrate APIs and ensure seamless data flow.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
]

export function Experience() {
  return (
    <section id="work" className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm text-muted-foreground">Featured</p>
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-secondary/50 border border-border/50 overflow-hidden flex items-center justify-center">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                      <Github className="h-4 w-4 text-muted-foreground" />
                      {exp.status && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs text-green-500 font-medium">{exp.status}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-base font-medium">{exp.role}</p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
