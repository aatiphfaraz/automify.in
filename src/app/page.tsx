import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Build & Scale MVPs | Enterprise-Grade Engineering for Startups",
  description: "From idea to launch, we build and scale digital products for startups. Senior engineers from Top MNCs, Amazon & Silicon Valley Startups. Custom software, AI solutions, and growth strategies.",
  keywords: "MVP development, startup development, custom software, AI solutions, web development, mobile apps, full-stack development",
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <TechStack />
          <ServicesSection />
          <ProcessSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppCTA />
      </div>
    </>
  );
}
