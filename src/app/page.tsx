'use client'

import { NavBar } from "@/components/navbar.component";
import { HeroSection } from "@/components/heroSection.component";
import { BioSection } from "@/components/bioSection.component";
import { Portfolio } from "@/components/portfolio.component";
import { Contact } from "@/components/contact.component";
import { Footer } from "@/components/footer.component";
import { BackToTop } from "@/components/backToTop.component";
import { useScrollHashUpdate } from "@/hooks/useScrollHashUpdate";

export default function Home() {
  useScrollHashUpdate();

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <BioSection />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
