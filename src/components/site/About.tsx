import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Coached, never crowded",
    body: "A private facility built for focused, one-on-one work — no waiting on equipment, no guesswork.",
  },
  {
    title: "Built around your body",
    body: "Programming starts with an assessment: how you move, what hurts, where you're strong, what you want.",
  },
  {
    title: "Training and nutrition together",
    body: "The plate matters as much as the platform. Guidance you can keep after the session ends.",
  },
];

export function About() {
  return (
    <section id="philosophy" className="relative py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-deep">
            <img
              src={aboutImage}
              alt="Coach guiding a client through kettlebell technique"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-full w-full object-cover"
            />
            <div className="veil absolute inset-0" />
          </div>
          <div className="surface-glass absolute -bottom-8 -right-4 rounded-2xl px-6 py-5 sm:right-8">
            <p className="text-display text-4xl text-ember-gradient">1:1</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Personal coaching
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">The philosophy</span>
            <h2 className="text-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
              A facility built for
              <span className="text-ember-gradient"> people who finish</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Latow's Fitness and Nutrition is a personal training facility in
              Orange City focused on one thing: helping people actually reach
              the goal they walked in with. Every session is coached in person,
              every program is written for the person in front of us, and
              progress is measured — not assumed.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="group flex gap-5 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/50">
                  <span className="text-display text-2xl text-primary/70">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
