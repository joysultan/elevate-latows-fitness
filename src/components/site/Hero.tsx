"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { business } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 z-0 scale-110">
        <img
          src={heroImage}
          alt="Athlete lifting a loaded barbell in a dark private training studio"
          width={1920}
          height={1280}
          className="h-full w-full object-cover object-[50%_15%]"
        />
        <div className="veil absolute inset-0" />
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="surface-glass inline-flex items-center gap-2 rounded-full px-4 py-2"
        >
          <Star className="size-3.5 fill-primary text-primary" />
          <span className="text-xs tracking-[0.2em] text-foreground/90 uppercase">
            {business.recommendRate} recommended · {business.reviewCount} reviews
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display mt-6 max-w-4xl text-[clamp(3rem,11vw,8.5rem)]"
        >
          Train with
          <br />
          <span className="text-ember-gradient">intent.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80"
        >
          Private, coach-led personal training and nutrition guidance in Orange
          City. One plan, built around your body, your schedule and the goal you
          actually care about.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#start"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-ember transition-transform hover:scale-[1.04]"
          >
            Book your first session
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#programs"
            className="surface-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View programs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="size-4 text-primary" />
          {business.address}
        </motion.div>
      </motion.div>
    </section>
  );
}
