import NavBar from "./components/NavBar";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
