"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type CoverflowItem = {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  href?: string;
};

type Props = {
  items: CoverflowItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
};

export function CoverflowCarousel({
  items,
  autoplay = true,
  autoplayDelay = 4200,
  className,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const count = items.length;

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (!autoplay || paused || count < 2) return;
    const t = setInterval(() => go(1), autoplayDelay);
    return () => clearInterval(t);
  }, [autoplay, autoplayDelay, paused, go, count]);

  const offsetOf = (index: number) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  const onDragEnd = (x: number) => {
    if (dragStart.current === null) return;
    const dx = x - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      className={cn("relative w-full select-none", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative mx-auto h-[420px] w-full max-w-5xl sm:h-[520px]"
        style={{ perspective: "1600px" }}
        onPointerDown={(e) => {
          dragStart.current = e.clientX;
          setPaused(true);
        }}
        onPointerUp={(e) => {
          onDragEnd(e.clientX);
          setPaused(false);
        }}
        onPointerLeave={() => (dragStart.current = null)}
      >
        {items.map((item, i) => {
          const offset = offsetOf(i);
          const abs = Math.abs(offset);
          const visible = abs <= 2;
          const content = (
            <>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="veil pointer-events-none absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                {item.subtitle ? (
                  <span className="eyebrow">{item.subtitle}</span>
                ) : null}
                <h3 className="text-display mt-1 text-2xl text-foreground sm:text-3xl">
                  {item.title}
                </h3>
              </div>
              {offset === 0 ? (
                <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 fill-primary text-primary" />
                </span>
              ) : null}
            </>
          );

          const cardClass =
            "group absolute left-1/2 top-1/2 block h-[380px] w-[240px] overflow-hidden rounded-2xl border border-border shadow-deep sm:h-[470px] sm:w-[300px]";
          const style: React.CSSProperties = {
            transform: `translate(-50%, -50%) translateX(${offset * 58}%) translateZ(${-abs * 180}px) rotateY(${offset * -32}deg) scale(${1 - abs * 0.06})`,
            opacity: visible ? 1 - abs * 0.25 : 0,
            zIndex: 20 - abs,
            transition: "transform 700ms cubic-bezier(.22,1,.36,1), opacity 500ms ease",
            pointerEvents: visible ? "auto" : "none",
          };

          return item.href ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={cardClass}
              style={style}
              onClick={(e) => {
                if (offset !== 0) {
                  e.preventDefault();
                  setActive(i);
                }
              }}
            >
              {content}
            </a>
          ) : (
            <button
              key={item.id}
              type="button"
              className={cardClass}
              style={style}
              onClick={() => setActive(i)}
            >
              {content}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous reel"
          onClick={() => go(-1)}
          className="surface-glass flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next reel"
          onClick={() => go(1)}
          className="surface-glass flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default CoverflowCarousel;
