"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

const blogs = [
  {
    title: "Next.JS Data Fetching: mistakes & security vulnerabilities",
    description: "A guide to Next.js data fetching mistakes, security vulnerabilities.",
    image: "/nextjs-code-illustration.jpg",
    date: "Nov 14, 2025",
    readTime: "5 min read",
    tags: ["frontend", "development", "nextjs"],
  },
  {
    title: "JavaScript for Frontend Development: A Beginner's Guide",
    description: "A guide to JavaScript for frontend development for beginners (part 1).",
    image: "/javascript-code-illustration.png",
    date: "April 18, 2025",
    readTime: "8 min read",
    tags: ["frontend", "development", "javascript"],
  },
]

export function Blogs() {
  return (
    <section id="blogs" className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">Featured</p>
        <h2 className="text-3xl md:text-4xl font-bold">Blogs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{blog.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{blog.description}</p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
          Read More →
        </button>
      </div>
    </section>
  )
}
