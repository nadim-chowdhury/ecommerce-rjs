import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../store/cartSlice";

const Product = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="flex px-20 py-10">
      <img src={product.image} alt={product.title} className="w-80" />

      <div className="m-10">
        <h3 className="font-bold text-3xl">{product.title}</h3>
        <h3 className="text-xl my-4">${product.price}</h3>
        <h5 className="text-gray-600 my-2">{product.category}</h5>
        <p>{product.description}</p>
        <button
          onClick={() => dispatch(add(product))}
          className="mt-6 bg-gray-800 text-gray-100 px-6 py-1"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
