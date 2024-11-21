import Categories from "../components/Home/Categories";
import Contact from "../components/Home/Contact";
import FAQs from "../components/Home/FAQs";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
