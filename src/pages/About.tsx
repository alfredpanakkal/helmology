import { Globe, Linkedin, Ship } from "lucide-react";

export function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          About the developer
        </h1>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4 sm:p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Alfred Panakkal Jose is a full-stack developer and a serving Third
            Officer with a tanker background. He writes software for the
            problems he actually meets at sea — the Helm series exists because
            the tools were missing on the chart table, not because a roadmap
            asked for them.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Helm.Warning came from checking NAVAREA warnings across dozens of
            national websites. Helm.Ports came from wanting the NGA World Port
            Index to be searchable, filterable and connected to tides and
            weather. Every app in the series follows the same rule: build for
            the watch keeper first.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Helmology is the home of the series. Recruiters and collaborators
            are welcome to reach out via the links beside this story.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-foreground/10 text-accent-foreground">
                <Ship className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Alfred Panakkal Jose
                </p>
                <p className="text-xs text-muted-foreground">
                  Third Officer on ocean-going tankers &middot; Full-Stack
                  Developer
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://alfred-panakkal.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent-foreground/30"
          >
            <Globe className="h-5 w-5 shrink-0 text-accent-foreground" aria-hidden />
            <div>
              <p className="text-sm font-medium text-foreground">Portfolio</p>
              <p className="text-xs text-muted-foreground">
                alfred-panakkal.vercel.app
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/alfredpanakkal/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent-foreground/30"
          >
            <Linkedin className="h-5 w-5 shrink-0 text-accent-foreground" aria-hidden />
            <div>
              <p className="text-sm font-medium text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">
                linkedin.com/in/alfredpanakkal
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
