import { Button } from "@/components/ui/button";
import { ArrowUpRight, TriangleAlert } from "lucide-react";

export function Home() {
  return (
    <>
      {/* Hero + app grid — same structure as the Helm.Ports hero */}
      <section className="relative border-b border-border bg-background">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="label-mono text-accent-foreground">Maritime-first software</p>
            <h1 className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              The Helmology Series
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tools for seafarers, built by a serving seafarer. The Helm series
              starts at the chart table, not the boardroom.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-2">
            <div className="rounded-xl border border-accent-foreground/40 bg-card p-4 sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="label-mono text-accent-foreground">Featured</p>
                <TriangleAlert className="h-4 w-4 text-muted-foreground" aria-hidden />
              </div>
              <h2 className="mt-2 text-xl font-medium text-foreground sm:text-2xl">
                Helm.Warning
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Live NAVAREA navigational warnings on an interactive world map.
                All 21 NAVAREA regions, ingested daily from official
                hydrographic sources.
              </p>
              <p className="label-mono mt-3 text-muted-foreground">
                21 regions <span className="text-muted-foreground/60">· daily ingestion</span>
              </p>
              <Button asChild className="mt-4 cursor-pointer">
                <a
                  href="https://navarea.helmology.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Helm.Warning
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
              <p className="label-mono text-muted-foreground">Directory</p>
              <h2 className="mt-2 text-xl font-medium text-foreground sm:text-2xl">
                Helm.Ports
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A free world port directory built on the NGA Publication 150
                World Port Index. Search, filter and explore ports with tide,
                weather and sun-moon data.
              </p>
              <p className="label-mono mt-3 text-muted-foreground">
                NGA Pub 150 <span className="text-muted-foreground/60">· free directory</span>
              </p>
              <Button asChild className="mt-4 cursor-pointer">
                <a
                  href="https://ports.helmology.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Helm.Ports
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <p className="label-mono mt-6 text-muted-foreground/70">
            Also in the series: Helm.Almanac · Helm.Productivity · Helm.Bond ·
            Helm.Fasting · Helm.NRI
          </p>
        </div>
      </section>

      {/* Route strip */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <p className="label-mono text-muted-foreground">For seafarers</p>
            <h2 className="mt-2 text-lg font-medium text-foreground">
              Go straight to the apps
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Warnings and port data, built to work on the weak connections you
              often have at sea.
            </p>
            <a
              href="/apps"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground underline-offset-4 hover:underline"
            >
              Browse the apps
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <p className="label-mono text-muted-foreground">For recruiters</p>
            <h2 className="mt-2 text-lg font-medium text-foreground">
              Meet the developer
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Full-stack developer and serving Third Officer with a tanker
              background. Portfolio and LinkedIn on the About page.
            </p>
            <a
              href="/about"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground underline-offset-4 hover:underline"
            >
              About the developer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <p className="label-mono text-muted-foreground">Safety first</p>
            <h2 className="mt-2 text-lg font-medium text-foreground">
              Read the disclaimer
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              These tools support situational awareness. Official notices always
              take precedence — SOLAS Chapter V.
            </p>
            <a
              href="/disclaimer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground underline-offset-4 hover:underline"
            >
              Full disclaimer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
