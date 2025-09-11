import Header from "../components/Header";
import MainContent from "../components/MainContent";
export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-900/20 via-black to-rose-900/20">
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />
    </div>
  );
}
