"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function AboutMe() {
  return (
    <section className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Me</h2>
      </div>

      <Card className="p-8 bg-card border-border animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="relative h-48 w-48 rounded-2xl overflow-hidden border-4 border-primary">
              <Image
                src="/developer-portrait.png"
                alt="Suraj Sharma"
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Suraj Sharma</h3>
              <p className="text-muted-foreground">
                I'm a Full Stack web developer passionate about creating
                innovative web solutions and enhancing user experiences. I build
                interactive web apps using TypeScript, React, Next.js, and
                PostgreSQL, specializing in building MVPs, SaaS products, and
                solving real-world problems.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Current Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Software Engineer building stuff that matters. Currently
                  working on innovative web applications using modern
                  technologies like Next.js, React, TypeScript, and PostgreSQL.
                  Always exploring new ways to enhance user experience and
                  create impactful solutions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
                  <Badge variant="secondary">Full Stack Development</Badge>
                  <Badge variant="secondary">3D Graphics</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
