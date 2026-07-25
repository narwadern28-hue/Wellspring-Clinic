import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import ServicesBanner from "./components/ServicesBanner";
import HealthPackages from "./components/HealthPackages";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-cream">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Departments />
        <Doctors />
        <ServicesBanner />
        <HealthPackages />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
