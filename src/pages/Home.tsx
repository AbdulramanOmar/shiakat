import { products } from "../assets/Data";
import Cards from "../components/Cards";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <div>
      <Hero />
      <Cards title="الأكثر مبيعاً" products={products} />
      <hr className="container border border-[#0000000f] "/>
      <Cards title="الأعلي تقييماً" products={products} />
    </div>
  );
};

export default Home;
