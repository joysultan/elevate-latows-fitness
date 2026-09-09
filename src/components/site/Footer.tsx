import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { business, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="text-display text-3xl text-ember-gradient">Latow's</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Fitness &amp; Nutrition
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Personal training facility in Orange City, Florida — helping people
            achieve their goals through coaching and nutrition guidance.
          </p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noreferrer"
            className="surface-glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            <Facebook className="size-4" /> Facebook
          </a>
        </div>

        <nav className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Explore</p>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <address className="space-y-3 not-italic">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit</p>
          <a
            href={business.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </span>
          </a>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4 text-primary" /> {business.phone}
          </a>
          <a
            href={business.emailHref}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4 text-primary" /> {business.email}
          </a>
        </address>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-2 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
        <p>Price range {business.priceRange} · Orange City, FL</p>
      </div>
    </footer>
  );
}
