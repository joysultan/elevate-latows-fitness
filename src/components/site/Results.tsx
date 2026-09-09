"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import resultsImage from "@/assets/results.jpg";
import { business } from "@/lib/site";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const p = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(to * p));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-display text-ember-gradient">
      {value}
      {suffix}
    </span>
  );
}

export function Results() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="results" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Results</span>
          <h2 className="text-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
            The work shows up
            <span className="text-ember-gradient"> in the mirror</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grain relative mt-12 h-[420px] overflow-hidden rounded-3xl border border-border shadow-deep sm:h-[540px]">
            <motion.img
              style={{ y }}
              src={resultsImage}
              alt="Backlit athlete flexing after a training session"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-[118%] w-full object-cover"
            />
            <div className="veil absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-12">
              <p className="max-w-lg text-lg leading-relaxed text-foreground/90 sm:text-xl">
                Consistent coaching, honest feedback and a plan that adapts as
                you get stronger. That's the whole formula.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: <Counter to={100} suffix="%" />,
              label: "Recommended on Facebook",
            },
            {
              value: <Counter to={business.reviewCount} />,
              label: "Community reviews",
            },
            {
              value: <span className="text-display text-ember-gradient">1:1</span>,
              label: "Coach-led every session",
            },
            {
              value: (
                <span className="text-display text-ember-gradient">
                  {business.priceRange}
                </span>
              ),
              label: "Approachable pricing",
            },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="surface-glass h-full rounded-2xl p-7">
                <p className="text-5xl sm:text-6xl">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
