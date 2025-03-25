import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-lg">
          Your wishlist is empty. <a href="/products" className="text-blue-600">Browse Products</a>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="relative bg-white p-6 rounded-xl shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-lg" />
              <h3 className="text-2xl font-bold mt-4">{item.name}</h3>
              <p className="text-xl font-semibold text-gray-600 mt-2">${Number(item.price).toFixed(2)}</p>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: Number(item.price), // ✅ Ensuring it's a number
                      image: item.image,
                      quantity: 1,
                    })
                  }
                  className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                >
                  Add to Cart
                </button>

                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
