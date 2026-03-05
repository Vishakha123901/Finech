"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { IndustrySolutions } from "@/components/industry-solutions";
import { SecurityCompliance } from "@/components/security-compliance";
import { SuccessStories } from "@/components/success-stories";
import { PricingSection } from "@/components/pricing-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <IndustrySolutions />
      <SecurityCompliance />
      <SuccessStories />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
