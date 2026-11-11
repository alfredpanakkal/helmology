import type { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Monitor, Ship, Globe, Linkedin } from "lucide-react";

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Color theme">
      {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          onClick={() => setTheme(value)}
          className={[
            "flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors cursor-pointer",
            theme === value
              ? "border-accent-foreground/60 bg-accent-foreground/10 font-medium text-accent-foreground"
              : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-accent-foreground/30",
          ].join(" ")}
        >
          <Icon className="h-4 w-4" aria-hidden />
          {label}
        </button>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function InfoSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>About Helmology</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 px-4 pb-8">
          <Section title="Theme">
            <ThemeSwitcher />
            <p className="text-xs text-muted-foreground/70">
              Light, dark or follow your device setting.
            </p>
          </Section>

          <Section title="About">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Helmology is the home of the Helm series — maritime-first tools
              built by a serving seafarer. Helm.Warning plots live NAVAREA
              navigational warnings from all 21 regions; Helm.Ports is a free
              world port directory built on the NGA World Port Index. Each app
              solves a problem met on watch, and works on the weak connections
              you often have at sea.
            </p>
          </Section>

          <Section title="Author">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-foreground/10 text-accent-foreground">
                <Ship className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">Alfred Jose</p>
                <p className="text-xs text-muted-foreground">
                  Third Officer on ocean-going tankers &middot; Full-Stack Developer
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground/70">
                  Builds software for real-world problems — at sea and beyond.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://alfred-panakkal.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-foreground/30 hover:text-foreground"
              >
                <Globe className="h-4 w-4" aria-hidden />
                Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/alfredpanakkal/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-foreground/30 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </div>
          </Section>

          <p className="border-t border-border pt-4 text-xs text-muted-foreground/70">
            Situational awareness only — always consult official notices.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
