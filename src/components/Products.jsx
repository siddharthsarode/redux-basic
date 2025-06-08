import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  console.log(products);

  const addToCart = (product) => {
    console.log(product);

    dispatch(addItem(product.id));
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-60 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            <div className="mt-auto">
              <p className="text-lg font-bold text-blue-600 mb-4">
                ${product.price}
              </p>
              <div className="flex gap-4 text-sm">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex items-center justify-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-100 transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
