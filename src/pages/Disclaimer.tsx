export function Disclaimer() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Maritime safety disclaimer
        </h1>
      </div>

      <div className="mt-6 max-w-3xl space-y-4 rounded-xl border border-border bg-card p-4 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          The apps in the Helmology series, including Helm.Warning and
          Helm.Ports, are informational tools intended to support situational
          awareness. They do not replace any official source of maritime
          safety information.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Under the International Convention for the Safety of Life at Sea
          (SOLAS) Chapter V, the master&rsquo;s obligation to consult official
          navigational warnings remains with official channels: Notices to
          Mariners, NAVTEX, SafetyNET, ECDIS updates and the relevant national
          hydrographic offices. Warnings displayed by these apps may be
          incomplete, delayed or out of date. Always verify against official
          publications before making any operational decision.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          All data is provided &ldquo;as is&rdquo;, without warranty of any
          kind. The author accepts no liability for any loss, damage or injury
          arising from the use or misuse of these applications.
        </p>
      </div>
    </section>
  );
}
