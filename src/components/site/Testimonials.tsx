import { TestimonialStack } from "@/components/ui/glass-testimonial-swiper";
import { business, testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow">Reviews</span>
          <h2 className="text-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
            {business.recommendRate} recommend
            <span className="text-ember-gradient"> Latow's</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Based on {business.reviewCount} Facebook reviews. The cards here are
            placeholders — send us the review text you want featured and we'll
            drop it straight in.
          </p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
          >
            Read reviews on Facebook
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <TestimonialStack testimonials={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}
