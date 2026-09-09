"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  id: string | number;
  quote: string;
  name: string;
  role?: string;
  rating?: number;
  placeholder?: boolean;
};

type Props = {
  testimonials: Testimonial[];
  className?: string;
};

export function TestimonialStack({ testimonials, className }: Props) {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) next();
    else if (info.offset.x > 80) prev();
  };

  const visible = [0, 1, 2].map((o) => (index + o) % count);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative mx-auto h-[380px] w-full max-w-xl sm:h-[340px]">
        <AnimatePresence initial={false}>
          {visible.map((tIndex, depth) => {
            const t = testimonials[tIndex];
            return (
              <motion.article
                key={t.id}
                drag={depth === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={depth === 0 ? onDragEnd : undefined}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{
                  opacity: 1,
                  scale: 1 - depth * 0.05,
                  y: depth * 22,
                  zIndex: 10 - depth,
                  rotate: depth === 0 ? 0 : depth % 2 === 0 ? 1.5 : -1.5,
                }}
                exit={{ opacity: 0, scale: 0.9, x: -120 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className={cn(
                  "surface-glass absolute inset-x-0 top-0 rounded-3xl p-7 shadow-deep sm:p-9",
                  depth === 0 ? "cursor-grab active:cursor-grabbing" : "",
                )}
              >
                <Quote className="size-8 text-primary/70" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    {t.role ? (
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    ) : null}
                  </div>
                  {t.placeholder ? (
                    <span className="rounded-full border border-dashed border-primary/60 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-primary">
                      Placeholder
                    </span>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Show review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Drag or swipe the card
      </p>
    </div>
  );
}

export default TestimonialStack;
