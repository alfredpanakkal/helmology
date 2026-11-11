import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

function AppDetail({
  name,
  status,
  problem,
  features,
  stack,
  href,
}: {
  name: string;
  status: string;
  problem: string;
  features: string[];
  stack: string;
  href: string;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-medium text-foreground sm:text-2xl">
          {name}
        </h2>
        <span className="label-mono rounded-full border border-accent-foreground/40 px-2.5 py-1 text-accent-foreground">
          {status}
        </span>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <p className="label-mono text-muted-foreground">The problem</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {problem}
          </p>
        </div>
        <div>
          <p className="label-mono text-muted-foreground">What it does</p>
          <ul className="mt-1.5 space-y-1.5">
            {features.map((f) => (
              <li
                key={f}
                className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-foreground"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono text-muted-foreground">Stack</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {stack}
          </p>
        </div>
        <Button asChild className="cursor-pointer">
          <a href={href} target="_blank" rel="noreferrer">
            Open {name}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </Button>
      </div>
    </section>
  );
}

export function Apps() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          The apps
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Each Helm app solves a problem the author met on watch. Live links
          point to the deployed apps.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AppDetail
          name="Helm.Warning"
          status="Live"
          problem="NAVAREA navigational warnings are published by 21 separate regional coordinators, each on its own national website, in different formats and update cycles. Getting the full picture means visiting dozens of sources."
          features={[
            "Plots in-force NAVAREA warnings on an interactive world map, updated daily by automated ingestion pipelines.",
            "Covers all 21 NAVAREA regions plus AUSCOAST coastal warnings, with a per-region source registry.",
            "Preserves full warning lifecycle: active, cancelled, expired and superseded warnings keep their audit trail.",
            "Never guesses ambiguous coordinates — they are flagged for human review instead of being plotted.",
          ]}
          stack="Vanilla JS public portal, React admin console, Supabase (PostGIS), Python ingestion pipelines on GitHub Actions, deployed on Vercel."
          href="https://navarea.helmology.com/"
        />
        <AppDetail
          name="Helm.Ports"
          status="Live"
          problem="The NGA World Port Index is a dense publication that is hard to search, filter or connect to live context like tides and weather."
          features={[
            "Free port directory and interactive map built on NGA Publication 150 data.",
            "Search and filter by name, country, size and facilities, with alternate port names matched.",
            "Port detail sheets include weather, tides, and sun-moon data for passage planning.",
            "Shows the full original NGA record for every port — nothing is hidden behind the UI.",
          ]}
          stack="React 19, Vite, MapLibre GL, Express/Vercel serverless functions. Data from NGA Publication 150."
          href="https://port.helmology.com/"
        />
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-4 sm:p-6">
        <p className="label-mono text-muted-foreground">In the series</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          Helm.Almanac, Helm.Productivity, Helm.Bond, Helm.Fasting and Helm.NRI
          are part of the Helm series. They will be linked here as each goes
          live.
        </p>
      </div>
    </section>
  );
}
