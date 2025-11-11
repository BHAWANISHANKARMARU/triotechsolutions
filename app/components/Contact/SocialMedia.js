"use client";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    description: "Follow us for IT hiring trends and job updates.",
    href: "#",
    cta: "Follow on LinkedIn",
    icon: <Linkedin className="h-8 w-8" />,
  },
  {
    name: "Twitter",
    description: "Industry insights and company news.",
    href: "#",
    cta: "Follow on Twitter",
    icon: <Twitter className="h-8 w-8" />,
  },
  {
    name: "Facebook",
    description: "Company updates and career tips.",
    href: "#",
    cta: "Like on Facebook",
    icon: <Facebook className="h-8 w-8" />,
  },
  {
    name: "Instagram",
    description: "Company culture and team highlights.",
    href: "#",
    cta: "Follow on Instagram",
    icon: <Instagram className="h-8 w-8" />,
  },
];

export default function SocialMedia() {
  return (
    <section id="social-media" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay in the loop with our latest news, insights, and opportunities
            on your favorite platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social) => (
            <div
              key={social.name}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-card-shadow hover-lift"
            >
              <div className="text-primary">{social.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-2">
                {social.name}
              </h3>
              <p className="text-muted-foreground flex-grow mb-6">
                {social.description}
              </p>
              <a
                href={social.href}
                className="mt-auto inline-block rounded-md bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-primary/20 transition-colors"
              >
                {social.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
