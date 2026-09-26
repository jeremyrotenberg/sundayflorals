// Central place for homepage copy & data. Edit this file to update the site
// without touching component markup — useful while the brand is still being
// worked out.

export const nav = [
  { label: "Shop", href: "#gallery" },
  { label: "Configurator", href: "#configurator" },
  { label: "Subscriptions", href: "#pricing" },
  { label: "For Business", href: "#pricing" },
  { label: "Journal", href: "#arrangement-of-the-month" },
];

export const valueProps = [
  {
    title: "Client-Driven Personalization",
    body: "Choose every stem, every color, every finishing touch. Nothing leaves our studio unless you designed it.",
    icon: "spark" as const,
  },
  {
    title: "The Configurator",
    body: "Our interactive bouquet builder makes ordering flowers feel less like a form and more like play.",
    icon: "wand" as const,
  },
];

export const arrangementOfTheMonth = {
  issue: "Vol. I — No. 9",
  name: "The Late September Stand",
  description:
    "Garden roses in dusty rose and clay, dried pampas, and trailing eucalyptus — a bouquet for the last warm week of the season. Hand-tied, wrapped in unbleached kraft, finished with cotton twine.",
  price: "$78",
  cta: "Reserve This Arrangement",
};

export const galleryItems = [
  {
    name: "The Editor's Pick",
    detail: "Peonies · Garden Rose · Ranunculus",
    price: "$96",
    palette: ["#C98A83", "#E7C9B7", "#6E7A54"] as const,
  },
  {
    name: "Sunday Standard",
    detail: "Tulip · Anemone · Olive Branch",
    price: "$64",
    palette: ["#B5495B", "#F2E4CF", "#4A5A40"] as const,
  },
  {
    name: "The Correspondent",
    detail: "Dahlia · Scabiosa · Smoke Bush",
    price: "$88",
    palette: ["#8A3A44", "#D9A05B", "#556B4E"] as const,
  },
  {
    name: "Weekend Edition",
    detail: "Lisianthus · Sweet Pea · Fern",
    price: "$72",
    palette: ["#C7A0A8", "#EFE3C8", "#3F4E36"] as const,
  },
  {
    name: "The Classifieds",
    detail: "Ranunculus · Freesia · Eucalyptus",
    price: "$58",
    palette: ["#D98E6C", "#F4EEDD", "#5C6B4F"] as const,
  },
];

export const pricingTiers = [
  {
    name: "À La Carte",
    price: "From $48",
    cadence: "per arrangement",
    description: "Build one bouquet, exactly as you want it, whenever the moment calls for it.",
    features: [
      "Full access to the Configurator",
      "Same-day delivery in your area",
      "One-time or gift orders",
    ],
    cta: "Start an Order",
    featured: false,
  },
  {
    name: "Sunday Subscription",
    price: "$62",
    cadence: "per week, cancel anytime",
    description: "A fresh, never-repeated arrangement delivered every week — our most popular way to shop.",
    features: [
      "New configuration every week",
      "Priority same-day delivery window",
      "Swap, skip, or pause anytime",
      "10% off all à la carte orders",
    ],
    cta: "Start a Subscription",
    featured: true,
  },
  {
    name: "For Business",
    price: "Custom",
    cadence: "volume pricing",
    description: "Recurring arrangements for offices, storefronts, events, and hospitality partners.",
    features: [
      "Dedicated account coordinator",
      "Standing weekly or biweekly orders",
      "Multi-location delivery",
      "Invoiced monthly billing",
    ],
    cta: "Talk to Our Team",
    featured: false,
  },
];

export const letters = [
  {
    quote:
      "I've never ordered flowers that felt like they were actually mine. The configurator alone is worth it.",
    name: "M. Alvarez",
    context: "Weekly Subscriber",
  },
  {
    quote:
      "We switched our whole lobby program to Sunday. Same-day, always fresh, never a repeat.",
    name: "Front Desk, Halden & Co.",
    context: "Business Account",
  },
  {
    quote:
      "It's the only bouquet I've ever gotten compliments on the wrapping, not just the flowers.",
    name: "J. Okafor",
    context: "First-Time Customer",
  },
];
