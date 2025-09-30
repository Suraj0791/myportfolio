import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Button variant="ghost" className="mb-4 p-0 h-auto" asChild>
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore my complete collection of projects showcasing modern web
            development, full-stack applications, and innovative solutions.
          </p>
        </div>
        <Projects showAll={true} />
      </div>
      <Footer />
    </main>
  );
}
