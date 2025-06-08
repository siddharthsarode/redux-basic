// Navbar.jsx
import React from "react";
import { ShoppingCart } from "lucide-react"; // Optional: lucide-react for icon
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-xl font-bold text-gray-800"
      >
        MyShop
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleCartClick}
        className="text-sm flex cursor-pointer items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>0</span>
      </button>
    </nav>
  );
};

export default Navbar;
