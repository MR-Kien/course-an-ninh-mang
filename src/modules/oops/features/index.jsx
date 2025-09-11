import Header from '../components/Header';
import PaywallContent from '../components/PaywallContent';
import FeaturesGrid from '../components/FeaturesGrid';
import CallToAction from '../components/CallToAction';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 md:px-8 py-12 md:py-16 lg:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Paywall Content */}
            <PaywallContent />

            {/* Features Grid */}
            <FeaturesGrid />

            {/* Call to Action */}
            <CallToAction />
          </div>
        </div>
      </main>
    </div>
  );
}
