import { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // const handleAdd = (p) => {
  //   dispatch(add(p));
  // };

  return (
    <div className="flex justify-around flex-wrap">
      {products.map((p) => {
        return (
          <div
            key={p.id}
            className="bg-white w-96 m-6 rounded-md text-center flex flex-col justify-between"
          >
            <Link to={`/product/${p.id}`}>
              <img
                src={p.image}
                alt={p.title}
                className="w-20 h-20 mx-auto m-4"
              />

              <h4 className="mx-4 font-bold text-lg">{p.title}</h4>
            </Link>

            <h5 className="my-2 font-bold text-gray-600">${p.price}</h5>
            <button
              onClick={() => dispatch(add(p))}
              className="bg-gray-900 text-gray-100 p-1 rounded-lg w-40 mx-auto mb-4"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
