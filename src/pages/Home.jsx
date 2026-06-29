import Hero from "../components/Hero/Hero";
import TrustSection from "../components/TrustSection/TrustSection";
import Categories from "../components/Categories/Categories";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import FetureBar from "../components/FeatureBar";


const Home = () => {
  return (
    <>
      <Hero />

      <FetureBar/>
      <TrustSection />

      <Categories />

      <WhyChoose />

      <FeaturedProducts />

         <Process />

      <Testimonials />

      <FAQ />

      <CTA />

    </>
  );
};

export default Home;