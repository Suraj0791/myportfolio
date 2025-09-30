"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { TechBadge } from "./tech-badge";

const experiences = [
  {
    company: "Atom 360",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Bangalore, India (Remote)",
    period: "Jan 2025 - May 2025 (3 months)",
    role: "Frontend Developer Intern",
    status: "Semi-fulltime",
    description: [
      "🧩 Project 1: India Statistics Map Visualization - Built the entire frontend from scratch using React.js and D3.js for real-time data visualization on Indian map with interactive features like tooltips, hover highlights, and dynamic legends.",
      "🧩 Project 2: Atom 360 Dashboard Website - Developed a comprehensive admin dashboard for healthcare management with responsive pages, reusable components, and seamless API integration for patient records and screening history.",
      "🛠 Key Contributions: Implemented dynamic data rendering with region-wise statistics, pie charts for detection results, bar charts by gender with interactive tooltips, and ensured cross-browser compatibility with performance optimization.",
      "✨ Features Delivered: Patient and user data management, detailed screening analytics, dashboard cards with stats and charts, fully responsive layout with mobile support, and modular component structure for scalability.",
    ],
    technologies: [
      "React.js",
      "CSS",
      "Django",
      "JavaScript",
      "PostgreSQL",
      "Material-UI",
    ],
    links: {
      website: "https://atom360.io/",
      linkedin: "https://www.linkedin.com/company/atom360/",
    },
  },
  {
    company: "Stealth Startup",
    logo: "/placeholder.svg?height=48&width=48",
    location: "India (Remote)",
    period: "April - July 2025",
    role: "Full Stack Developer",
    status: "Freelance",
    description: [
      "🎯 Live Quiz Platform: Developed a comprehensive live quiz application with real-time functionality using QStash workflows and Pusher for instant updates and synchronization across multiple users.",
      "⚡ Mock Quiz System: Built a LeetCode-style contest platform with proper timer functionality, Redis caching for performance optimization, and QStash workflows for background processing.",
      "🔧 Technical Implementation: Architected the complete full-stack solution with Next.js and TypeScript frontend, PostgreSQL database, Redis for caching and session management, and integrated Shadcn UI components.",
      "🚀 Key Features: Real-time multiplayer quiz sessions, automated scoring system, leaderboards, contest scheduling, question management system, and comprehensive analytics dashboard.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Shadcn UI",
      "QStash",
      "Pusher",
    ],
    links: {},
  },
];

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
                <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {exp.company.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      {exp.links?.website && (
                        <a
                          href={exp.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {exp.links?.linkedin && (
                        <a
                          href={exp.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {exp.status && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-xs text-blue-500 font-medium">
                            {exp.status}
                          </span>
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
                    <p
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
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
  );
}
