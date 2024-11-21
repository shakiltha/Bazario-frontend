import { useEffect, useState } from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("products.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {products.map((product) => (
        <FeaturedProduct
          key={product.id}
          title={product.title}
          description={product.description}
          category={product.category}
          price={product.price}
          stock={product.stock}
          image={product.imageURL}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;

// {
//     "id": 1,
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "isAdmin": false,
//     "skills": ["JavaScript", "React", "Node.js"],
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown",
//       "postalCode": "12345"
//     }
//   }
