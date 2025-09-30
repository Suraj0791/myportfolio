"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award } from "lucide-react";
import { TechBadge } from "./tech-badge";

const education = [
  {
    institution: "Indian Institute of Information Technology Ranchi",
    degree: "Bachelor of Technology in Electronics Engineering",
    period: "2023 - 2027",
    location: "Ranchi, Jharkhand, India",
    description:
      "Pursuing B.Tech in Electronics Engineering with focus on modern technologies and software development.",
    achievements: [
      "CGPA: 8.7/10",
      "College Hackathon Winner",
      "9 SGPA in 4th Semester",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Python",
    ],
  },
  {
    institution: "Holy Cross School Hazaribagh",
    degree: "Higher Secondary Education (12th)",
    period: "2021 - 2023",
    location: "Hazaribagh, Jharkhand, India",
    description:
      "Completed higher secondary education with exceptional academic performance and competitive exam preparation.",
    achievements: [
      "95% in 12th Grade - School Topper",
      "96% in 10th Grade - School Topper",
      "JEE Mains: 97 Percentile",
    ],
    technologies: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
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
                      <TechBadge key={tech} name={tech} />
                    ))}
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
