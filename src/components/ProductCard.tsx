import { Link } from "react-router-dom";
import star from "../assets/star.png";
import halfStar from "../assets/half-star.png";
import riyal from "../assets/riyal.svg";
interface ProductCard {
  id: string;
  title: string;
  price: number;
  image: string;
  review: number;
  discount?: number;
}
const ProductCard = ({
  id,
  title,
  price,
  image,
  review,
  discount,
}: ProductCard) => {
  let stars = Array.from({ length: Math.floor(review) }, (_, i) => i);
  let halfStars = review % 1 !== 0;
  let discountPrice = discount ? price - (price * discount) / 100 : 0;
  return (
    <div className="min-w-[200px] ">
      <Link to={`/product/${id}`}>
        <div className="mb-2">
          <img src={image} className="w-[300px] rounded-[20px]" alt={title} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center gap-2 my-1">
          {stars.map((_, index) => (
            <img src={star} alt="" key={index} />
          ))}
          {halfStars && <img src={halfStar} alt="" />}
          <p className="text-gray"> {review}/5</p>
        </div>

        {discount ? (
          <div className="flex items-center ">
            <span className="text-2xl font-bold">{discountPrice}</span>
            <img src={riyal} className="w-6" alt="riyal" />
            <span className="text-2xl font-bold mx-2 text-gray line-through">
              {price}
            </span>
            <span className="text-[#FF3333] px-3 rounded-3xl py-[2px] bg-[#ff33331b]">
              %{discount}
            </span>
          </div>
        ) : (
          <p className="flex items-center ">
            <span className="text-2xl font-bold">{price}</span>
            <img src={riyal} className="w-6" alt="riyal" />
          </p>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
