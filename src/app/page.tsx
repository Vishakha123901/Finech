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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe only card elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
