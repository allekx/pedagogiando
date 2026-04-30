import { HeroSection } from "@/components/hero-section"
import { AudienceSection } from "@/components/audience-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AudienceSection />
      <ProductsSection />
      <FeaturesSection />
      <WhyChooseSection />
      <AboutSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
