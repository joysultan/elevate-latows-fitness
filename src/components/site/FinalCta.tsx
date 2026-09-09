import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="start" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] border border-border bg-card/60 px-7 py-16 text-center sm:px-16 sm:py-24">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
              style={{ background: "var(--gradient-ember)" }}
            />
            <span className="eyebrow">Your first session</span>
            <h2 className="text-display mx-auto mt-5 max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)]">
              Stop planning.
              <br />
              <span className="text-ember-gradient">Start training.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Call or email and we'll set up a consultation: goals, movement
              screen, and a straight answer on what it will take.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-ember transition-transform hover:scale-[1.04]"
              >
                <Phone className="size-4" /> {business.phone}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={business.emailHref}
                className="surface-glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" /> Email us
              </a>
            </div>

            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <MapPin className="size-4 text-primary" />
              {business.address}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
