import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Products } from "@/components/sections/products";
import { PharveoShowcase } from "@/components/sections/pharveo-showcase";
import { Stats } from "@/components/sections/stats";
import { Approach } from "@/components/sections/approach";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Stats />
        <PharveoShowcase />
        <Approach />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
