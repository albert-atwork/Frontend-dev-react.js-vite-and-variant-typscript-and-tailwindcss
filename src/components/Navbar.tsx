import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface NavbarProps {
  onSearchOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchOpen }) => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-white hover:scale-110 transition">
          AlbCloth.Shop
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</Link>
          <Link to="/products" className="text-white text-lg hover:text-yellow-300 transition">Products</Link>
          <Link to="/wishlist" className="text-white text-lg hover:text-yellow-300 transition">
            ❤️ Wishlist ({wishlist.length})
          </Link>
          <Link to="/cart" className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
            Cart ({cart.length})
          </Link>
          <button onClick={onSearchOpen} className="text-white text-xl hover:text-yellow-300 transition">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
