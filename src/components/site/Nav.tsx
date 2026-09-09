"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "surface-glass py-3" : "border-b border-transparent py-5",
      )}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-display text-2xl text-ember-gradient">Latow's</span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground sm:inline">
            Fitness &amp; Nutrition
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4" /> {business.phone}
          </a>
          <a
            href="#start"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:scale-105"
          >
            Start Training
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="surface-glass flex size-10 items-center justify-center rounded-full lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="surface-glass mx-5 mt-3 space-y-1 rounded-2xl p-4 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-foreground/90 hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Start Training
          </a>
        </div>
      ) : null}
    </header>
  );
}
