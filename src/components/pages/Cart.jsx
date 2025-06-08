import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice.jsx";

const Cart = () => {
  const dispatch = useDispatch();

  // Get the cart items from the Redux store
  // and map them to include product details
  const carts = useSelector(({ carts, products }) => {
    console.log("carts", carts);
    console.log("products", products);
    return carts.cartItems.map(({ productId, quantity }) => {
      const product = products.data.find((p) => p.id === productId);
      return {
        ...product,
        quantity,
      };
    });
  });

  console.log(carts);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {carts?.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 text-sm">
          {carts?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />
              <div className="flex-1 w-full">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: 0</h2>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
