/**
 * Helmology — the Helm series hub. UI cloned from Helm.Ports
 * (header, theme system, hero-grid, cards, footer) with
 * Helmology content only.
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { Info, Sun, Moon } from "lucide-react";
import { InfoSheet } from "@/components/InfoSheet";
import { Home } from "@/pages/Home";
import { Apps } from "@/pages/Apps";
import { About } from "@/pages/About";
import { Disclaimer } from "@/pages/Disclaimer";

type Page = "home" | "apps" | "about" | "disclaimer";

const NAV: { page: Page; label: string; href: string }[] = [
  { page: "home", label: "Home", href: "/" },
  { page: "apps", label: "Apps", href: "/apps" },
  { page: "about", label: "About", href: "/about" },
  { page: "disclaimer", label: "Disclaimer", href: "/disclaimer" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 relative cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0 text-muted-foreground" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100 text-accent-foreground" />
    </Button>
  );
}

function Shell({ page }: { page: Page }) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent">
      {/* Header — same chrome as Helm.Ports, with nav links */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <a href="/" className="shrink-0" aria-label="Helmology home">
              <svg
                className="h-6 w-6 shrink-0 block text-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="2.4" />
                <path d="M12 2v3.6M12 18.4V22M2 12h3.6M18.4 12H22M4.9 4.9l2.6 2.6M16.5 16.5l2.6 2.6M19.1 4.9l-2.6 2.6M7.5 16.5l-2.6 2.6" />
              </svg>
            </a>
            <div>
              <p className="label-mono hidden text-foreground sm:block">
                HELMOLOGY
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <nav
              className="flex items-center gap-1 mr-1"
              aria-label="Main navigation"
            >
              {NAV.map(({ page: key, label, href }) => (
                <a
                  key={key}
                  href={href}
                  aria-current={page === key ? "page" : undefined}
                  className={[
                    "rounded-md px-2.5 py-1.5 text-xs sm:text-sm transition-colors",
                    page === key
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  ].join(" ")}
                >
                  {label}
                </a>
              ))}
            </nav>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 cursor-pointer"
              onClick={() => setInfoOpen(true)}
              aria-label="About, credits and theme"
            >
              <Info className="h-4 w-4" aria-hidden />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {page === "home" && <Home />}
        {page === "apps" && <Apps />}
        {page === "about" && <About />}
        {page === "disclaimer" && <Disclaimer />}
      </main>

      {/* Footer — same pattern as Helm.Ports */}
      <footer className="mt-auto border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground/70">
              Situational awareness only — always consult official notices.{" "}
              <a
                href="/disclaimer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Full disclaimer
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* About / credits / theme panel */}
      <InfoSheet open={infoOpen} onOpenChange={setInfoOpen} />
    </div>
  );
}

export default function App({ page }: { page: Page }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="helmology-theme">
      <Shell page={page} />
    </ThemeProvider>
  );
}
