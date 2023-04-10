import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between items-center px-10 py-5 text-gray-100 bg-gray-900">
      <div className="text-3xl font-bold">
        <Link to="/">eCommerce</Link>
      </div>

      <div className="text-xl">
        <Link to="/cart">
          Cart &nbsp;
          <span className="bg-gray-100 text-gray-900 p-2 rounded-lg">
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
