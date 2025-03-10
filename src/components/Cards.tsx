import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  review: number;
  discount?: number;
}
interface CardProps {
  title: string;
  products: ProductCardProps[];
}

const Cards = ({ title, products }: CardProps) => {
  return (
    <section className="lg:container  overflow-x-scroll lg:overflow-hidden overflow-y-hidden py-10">
      <h1 className="lg:text-5xl text-3xl font-bold text-center my-5">
        {title}
      </h1>
      <div className="lg:grid flex items-center lg:mx-0 mx-5 lg:grid-cols-4 gap-4 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <button className="border  block lg:w-fit mx-auto  transition-all duration-300 hover:scale-110 text-gray font-bold  px-5 py-3 mt-10 text-center rounded-lg">
        <Link className="block w-full" to={"/shop"}>
          {" "}
          عرض المزيد{" "}
        </Link>
      </button>
    </section>
  );
};

export default Cards;
