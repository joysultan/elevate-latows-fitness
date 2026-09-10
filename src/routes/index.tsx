import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Results } from "@/components/site/Results";
import { Reels } from "@/components/site/Reels";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const title = "Latow's Fitness and Nutrition | Personal Training in Orange City, FL";
const description =
  "Private personal training, strength, conditioning and nutrition guidance in Orange City, FL. 100% recommended across 54 Facebook reviews. Book your first session.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Results />
        <Reels />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
