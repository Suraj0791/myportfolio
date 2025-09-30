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
                src="/developer-avatar.jpg"
                alt="Suraj Sharma - Full Stack Developer"
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
                  <Badge variant="secondary">Full Stack Development</Badge>
                  <Badge variant="secondary">Cloud Computing</Badge>
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">Database Optimization</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* GitHub Activity Section */}
      <Card className="p-8 bg-card border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 mt-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">GitHub Activity</h3>
              <p className="text-muted-foreground">
                Suraj's coding journey over the past year
              </p>
            </div>
          </div>

          {/* Real GitHub Contributions Chart */}
          <div className="space-y-4">
            {/* GitHub Contribution Graph */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://ghchart.rshah.org/Suraj0791"
                alt="Suraj's GitHub Contribution Chart"
                className="w-full h-auto bg-transparent"
                loading="lazy"
              />
            </div>

            {/* Alternative: GitHub readme stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Suraj0791&show_icons=true&theme=transparent&hide_border=true&text_color=64748b&icon_color=3b82f6&title_color=0f172a"
                  alt="GitHub Stats"
                  className="w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Suraj0791&theme=transparent&hide_border=true&stroke=64748b&ring=3b82f6&fire=3b82f6&currStreakLabel=0f172a&sideLabels=0f172a&currStreakNum=0f172a&dates=64748b&sideNums=64748b"
                  alt="GitHub Streak"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="flex items-center justify-center pt-4 border-t border-border">
            <a
              href="https://github.com/Suraj0791"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
