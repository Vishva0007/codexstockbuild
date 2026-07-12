import { ArrowRight, BarChart3, BrainCircuit, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { Brand } from "@/components/common/Brand";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BRAND } from "@/constants/branding";

const pillars = [
  {
    icon: BarChart3,
    title: "A clear research workspace",
    description: "A deliberate foundation for future market analysis and insight workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI-ready architecture",
    description:
      "Well-defined boundaries make future reasoning integrations dependable and testable.",
  },
  {
    icon: ShieldCheck,
    title: "Built for responsible scale",
    description: "Typed contracts, clean modules, and deployment-ready configuration from day one.",
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Brand />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" variant="ghost">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </header>
      <main>
        <section className="mx-auto max-w-4xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
          <p className="mb-5 text-sm font-medium text-primary">
            A considered market research platform
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Research markets with confidence, not noise.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            {BRAND.name} is laying the groundwork for a focused, intelligent investing research
            experience.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/register">
                Explore the platform <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dashboard">View workspace</Link>
            </Button>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-3 sm:px-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card className="p-6" key={title}>
              <Icon className="mb-5 size-5 text-primary" />
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
