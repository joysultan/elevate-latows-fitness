import { Apple, Dumbbell, HeartPulse, Timer, UserRound, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const programs = [
  {
    icon: UserRound,
    title: "Personal Training",
    body: "One-on-one coaching with a plan written for your goal, your schedule and your starting point.",
    meta: "60 min · 1:1",
  },
  {
    icon: Dumbbell,
    title: "Strength",
    body: "Barbell and accessory work coached rep by rep — squat, hinge, press, pull, progressed on purpose.",
    meta: "Progressive load",
  },
  {
    icon: Timer,
    title: "Conditioning",
    body: "Engine work that builds real-world capacity without wrecking your recovery for the week.",
    meta: "Intervals · Engine",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    body: "Practical fueling habits built around how you actually eat, not a template meal plan.",
    meta: "Habit-based",
  },
  {
    icon: Users,
    title: "Partner Training",
    body: "Train with a partner or spouse and split the session — same coaching, shared accountability.",
    meta: "2:1 coaching",
  },
  {
    icon: HeartPulse,
    title: "Foundations",
    body: "New to lifting or coming back from a long break? Start with movement, posture and confidence.",
    meta: "Beginner-friendly",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Training programs</span>
          <h2 className="text-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
            Choose your <span className="text-ember-gradient">discipline</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Every program runs through the same coaching standard. The
            difference is where we point the effort.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-ember">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: "var(--gradient-ember)" }}
                />
                <p.icon className="size-8 text-primary" />
                <h3 className="text-display mt-6 text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <p className="mt-8 text-[0.68rem] uppercase tracking-[0.3em] text-primary/80">
                  {p.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
