"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    period: "2020 - 2024",
    location: "New Delhi, India",
    description:
      "Focused on Full Stack Web Development, Data Structures, and Software Engineering principles.",
    achievements: [
      "Dean's List",
      "Top 10% of Class",
      "Web Development Club President",
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Python"],
  },
  {
    institution: "Tech Academy",
    degree: "Full Stack Web Development Bootcamp",
    period: "2023 - 2024",
    location: "Online",
    description:
      "Intensive program covering modern web development technologies and industry best practices.",
    achievements: ["Outstanding Performance", "Final Project Excellence Award"],
    technologies: ["TypeScript", "Next.js", "React", "PostgreSQL", "AWS"],
  },
];

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "aws",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    badge: "react",
  },
  {
    name: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    badge: "fcc",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          Learning Journey
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      </div>

      <div className="space-y-8">
        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Academic Background
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Achievements:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Award className="h-3 w-3 text-primary flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2 py-1 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${(index + education.length) * 100}ms`,
                }}
              >
                <div className="p-4 space-y-3 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
