import PropTypes from "prop-types";
import { GiShoppingCart } from "react-icons/gi";
const FeaturedProduct = ({ title, price, image }) => {
  return (
    <div className="border-2 w-72 h-96 m-4 box-border rounded-lg flex justify-center items-center flex-col p-2">
      <img
        src={image}
        alt={`image of ${title} product`}
        className="overflow-hidden transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-300"
      />
      <h2 className="my-1">{title}</h2>
      <p className="mb-1">TK{price}</p>
      <button className="btn btn-primary mb-1">
        Add to cart <GiShoppingCart />
      </button>
    </div>
  );
};

export default FeaturedProduct;

FeaturedProduct.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  image: PropTypes.string,
};
