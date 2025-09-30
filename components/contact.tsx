"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "suraj.sharma@example.com",
    href: "mailto:suraj.sharma@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Delhi, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/surajsharma",
    username: "@surajsharma",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/surajsharma",
    username: "Suraj Sharma",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/surajsharma",
    username: "@surajsharma",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        <p className="text-muted-foreground max-w-2xl">
          I'm always excited to work on new projects and collaborate with
          amazing people. Let's discuss how we can bring your ideas to life!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Let's Connect</h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="flex items-center gap-4 group-hover:text-primary transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Social Media</h3>

            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-4"
                  style={{
                    animationDelay: `${(index + contactInfo.length) * 100}ms`,
                  }}
                >
                  <div className="p-4">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group-hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <Card className="bg-card border-border animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="p-6 space-y-6">
              <h3 className="text-xl font-semibold">Send a Message</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" className="w-full rounded-md">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>

          {/* Availability Status */}
          <Card className="bg-card border-border animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400">
                  Available for Work
                </h4>
                <p className="text-sm text-muted-foreground">
                  Open to new opportunities and exciting projects
                </p>
              </div>
              <Badge
                variant="outline"
                className="border-green-200 text-green-600 dark:border-green-800 dark:text-green-400"
              >
                Accepting Projects
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
