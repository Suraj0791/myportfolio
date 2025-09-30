import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { AboutMe } from "@/components/about-me";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <AboutMe />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
