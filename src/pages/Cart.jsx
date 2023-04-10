import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (pId) => {
    dispatch(remove(pId));
  };

  return (
    <div>
      <h3 className="text-center mt-8 mb-2 text-4xl font-bold">Cart</h3>

      <div>
        {products.map((p) => (
          <div className="flex justify-between items-center m-6 p-6 rounded-md bg-white">
            <img src={p.image} alt={p.title} className="w-16" />

            <h5 className="font-bold text-lg m-6">{p.title}</h5>
            <h5 className="mr-6">${p.price}</h5>

            <button
              onClick={() => handleRemove(p.id)}
              className="bg-gray-900 text-gray-100 py-1 px-6 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
