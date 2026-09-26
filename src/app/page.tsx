import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { ArrangementOfMonth } from "@/components/ArrangementOfMonth";
import { Configurator } from "@/components/Configurator";
import { Gallery } from "@/components/Gallery";
import { PricingTiers } from "@/components/PricingTiers";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <ArrangementOfMonth />
        <Configurator />
        <Gallery />
        <PricingTiers />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
