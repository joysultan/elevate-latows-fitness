import { CoverflowCarousel } from "@/components/ui/3-d-coverflow-carousel";
import { reels } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Reels() {
  return (
    <section id="reels" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow">Inside the facility</span>
          <h2 className="text-display mx-auto mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Reels from <span className="text-ember-gradient">the floor</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Real sessions, real lifts. Swipe through the latest clips from our
            Facebook page.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <CoverflowCarousel items={reels} />
        </Reveal>
      </div>
    </section>
  );
}
