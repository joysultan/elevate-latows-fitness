import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

export const business = {
  name: "Latow's Fitness and Nutrition",
  short: "Latow's",
  address: "155 West Blue Springs Avenue, Orange City, FL",
  addressLine1: "155 West Blue Springs Avenue",
  addressLine2: "Orange City, FL",
  phone: "+1 319-333-4612",
  phoneHref: "tel:+13193334612",
  email: "latowsfandn@gmail.com",
  emailHref: "mailto:latowsfandn@gmail.com",
  // Replace with the exact Facebook page URL when available.
  facebook: "https://www.facebook.com/search/top?q=Latow%27s%20Fitness%20and%20Nutrition",
  mapsHref:
    "https://maps.google.com/?q=155+West+Blue+Springs+Avenue,+Orange+City,+FL",
  priceRange: "$$",
  recommendRate: "100%",
  reviewCount: 54,
};

export const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Reels", href: "#reels" },
  { label: "Reviews", href: "#reviews" },
];

export const reels = [
  {
    id: "reel-1",
    title: "Strength Day",
    subtitle: "Facebook Reel",
    image: reel1,
    href: business.facebook,
  },
  {
    id: "reel-2",
    title: "Grip & Grind",
    subtitle: "Facebook Reel",
    image: reel2,
    href: business.facebook,
  },
  {
    id: "reel-3",
    title: "Conditioning",
    subtitle: "Facebook Reel",
    image: reel3,
    href: business.facebook,
  },
  {
    id: "reel-4",
    title: "Fuel & Nutrition",
    subtitle: "Facebook Reel",
    image: reel4,
    href: business.facebook,
  },
];

// No invented reviews. These are clearly marked placeholders until the real
// Facebook review text is supplied.
export const testimonials = [
  {
    id: "t1",
    quote:
      "Add a real Facebook review here. Latow's is recommended by 100% of 54 reviewers — paste the reviewer's own words in place of this text.",
    name: "Reviewer name",
    role: "Facebook review",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t2",
    quote:
      "Placeholder for a second real review. Keep the wording exactly as the client wrote it so nothing here is invented.",
    name: "Reviewer name",
    role: "Facebook review",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t3",
    quote:
      "Placeholder for a third real review, ideally one about a specific result: strength gained, weight lost, or a habit that finally stuck.",
    name: "Reviewer name",
    role: "Facebook review",
    rating: 5,
    placeholder: true,
  },
];
