import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-1/2 m-auto">
      <div className="my-6">
        <div className="flex justify-between">
          <h1 className="my-2 text-4xl">Cart 🛒</h1>
          <button
            className="p-3 rounded-lg bg-red-700 text-white hover:bg-red-800"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div>
        {cartItems.length === 0 && (
          <h1 className="text-center text-4xl my-10">Your cart is empty</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
