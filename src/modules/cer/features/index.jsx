import Header from "../../../components/Header/Header";
import { HeroSection } from "../components/HeroSection";
import { CertificateCards } from "../components/CertificateCards";
import { CertificateDetails } from "../components/CertificateDetails";
import { StatsSection } from "../components/StatsSection";
import { DecorativeElements } from "../components/DecorativeElements";

export default function Index() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      </div>
      
      {/* Decorative Elements */}
      <DecorativeElements />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <main className="px-4 sm:px-6 lg:px-48 py-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <HeroSection />
            <CertificateCards />
            <CertificateDetails />
            <StatsSection />
          </div>
        </main>
      </div>
    </div>
  );
}
