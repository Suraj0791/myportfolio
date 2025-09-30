"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Expelee",
    location: "Dubai (Remote)",
    period: "March 2024 - Present",
    role: "Junior Web Developer and UI/UX Designer",
    description: [
      "Designed and implemented scalable, responsive web applications, reducing load time by 20%.",
      "Created optimized user interfaces that led to a 15% increase in customer retention.",
      "Collaborated with cross-functional teams to improve delivery timelines by 10%.",
    ],
    technologies: ["Next.js", "Express", "TypeScript", "React", "Prisma", "PostgreSQL", "Vercel"],
  },
  {
    company: "Expelee",
    location: "Dubai (Remote)",
    period: "August 2023 - December 2023",
    role: "Graphic Designer, Video Editor, and Front-End Developer",
    description: [
      "Designed interactive front-end elements and animations, increasing engagement metrics by 12%.",
      "Edited promotional videos that contributed to a 10% rise in brand visibility.",
    ],
    technologies: ["React", "Express", "Figma", "Bootstrap", "MongoDB", "Next.js", "Redux", "Prisma", "Vercel", "AWS"],
  },
]

export function Experience() {
  return (
    <section id="work" className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {exp.location} • {exp.role}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">{exp.period}</div>
            </div>

            <div className="space-y-3 mb-6">
              {exp.description.map((desc, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  • {desc}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
          Show all work experiences
        </button>
      </div>
    </section>
  )
}
