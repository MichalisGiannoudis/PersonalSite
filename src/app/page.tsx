import { NavBar } from "@/components/navbar.component";
import { HeroSection } from "@/components/heroSection.component";
import { BioSection } from "@/components/bioSection.component";
import { Portfolio } from "@/components/portfolio.component";
import { Contact } from "@/components/contact.component";
import { Footer } from "@/components/footer.component";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <BioSection />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
