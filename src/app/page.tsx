import { BioSection } from "@/components/bioSection.component";
import { Footer } from "@/components/footer.component";
import { HeroSection } from "@/components/heroSection.component";
import { NavBar } from "@/components/navbar.component";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <BioSection />
      <Footer />
    </div>
  );
}
