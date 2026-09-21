# Latow's Elevated Fitness

Build a **premium, high-end fitness website** for **Latow's Fitness and Nutrition**.

**Business info**

* Personal training facility focused on helping people achieve their goals
* 155 West Blue Springs Avenue, Orange City, FL
* +1 319-333-4612
* [latowsfandn@gmail.com](mailto:latowsfandn@gmail.com)
* Facebook: 100% recommend, 54 reviews
* Price: $$

### Overall Design

Create a **luxury modern fitness aesthetic**, not a generic AI/template website. Use bold typography, cinematic imagery, strong contrast, premium gradients, glass effects, smooth scrolling, subtle Framer Motion-style animations and excellent mobile responsiveness.

### Sections

1. **Hero** — make this the strongest section. Use a powerful full-screen fitness image/video, bold headline, short conversion-focused copy and strong CTA buttons. Add premium motion/parallax effects.
2. **About / Philosophy** — concise story-focused section explaining the facility and personal-training approach.
3. **Training Programs** — premium cards for personal training, strength, conditioning, nutrition/guidance, etc.
4. **Results / Transformation** — visually impressive section with large imagery and animated statistics.
5. **Reels** — use the provided **3D Coverflow Carousel component** from `/components/ui/3-d-coverflow-carousel.tsx`. Adapt its data for Latow's Fitness and Nutrition and use the **4 Facebook Reels I provide**. Keep the 3D card movement, autoplay, swipe, arrows and premium visual treatment. Do not redesign it into a normal grid.
6. **Testimonials** — use the provided **Glass Testimonial Stack component** from `/components/ui/glass-testimonial-swiper.tsx`. Keep the stacked glass-card interaction, drag/swipe navigation, pagination and responsive behavior. Style it to match the fitness site's visual identity. **Do not invent fake customer testimonials**; use real review content if available, otherwise keep clearly marked placeholders for me to replace.
7. **Final CTA** — strong conversion section encouraging visitors to start training/contact the facility.
8. **Footer** — business contact details, location, Facebook and clean navigation.

### Component Integration

Create `/components/ui/glass-testimonial-swiper.tsx` and integrate the supplied `TestimonialStack` component. Install required dependencies such as `lucide-react` if missing. Ensure the project supports **TypeScript, Tailwind CSS and shadcn structure**. If `/components/ui` doesn't exist, create it.

Use the supplied Tailwind CSS variables only where compatible with the existing project; **do not break the current design system**.

For images, use high-quality fitness imagery and avoid generic-looking stock compositions. Prioritize a **premium, editorial, performance-focused visual direction**.

**Important:** Preserve existing working functionality, keep the implementation responsive, and focus the credits on actually building the complete polished website rather than explaining the implementation.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elevate-latows-fitness.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/811c4c1e-3f25-46bd-8359-411cb99ca101).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
