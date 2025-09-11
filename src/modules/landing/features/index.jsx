import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
const Landing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Courses />
      <Testimonials />
      
      <Footer />
      {/* <NavColumns /> */}
    </div>
  );
};
export default Landing;
