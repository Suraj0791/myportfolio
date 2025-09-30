"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { TechBadge } from "./tech-badge";

const techStack = [
  "React js",
  "Next js",
  "Express js",
  "Node Js",
  "Bun",
  "Tailwind Css",
  "Three Js",
  "Vercel",
  "Aws",
  "Javascript",
  "Typescript",
  "Vector DB",
  "MongoDB",
  "Prisma",
  "Drizzle",
  "Postgres",
];

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="h-32 w-32 rounded-full border-4 border-primary overflow-hidden">
            <Image
              src="/developer-avatar.png"
              alt="Profile"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
            <span className="text-muted-foreground">Full Stack Developer</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Hello, I'm <span className="text-primary">Suraj Sharma</span> 👋🏻
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for new projects
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full Stack Web Developer passionate about creating innovative web
            solutions and enhancing user experiences. I build interactive web
            applications using TypeScript, React, Next.js, and PostgreSQL,
            driven by a keen eye for design and modern web technologies.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="rounded-full">
            <Mail className="mr-2 h-4 w-4" />
            Get in touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full bg-transparent"
          >
            Resume CV
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-450">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} variant="icon-only" />
          ))}
        </div>
      </div>
    </section>
  );
}
