import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// 🔥 Product Data (ID 1 to 20)
export const products: Product[] = [
  { id: 1, name: "Black Hoodie", price: 25, image: "/images/black-hoodie.jpg" },
  { id: 2, name: "Blue Jeans", price: 25, image: "/images/blue-jeans.jpg" },
  { id: 3, name: "Casual Blazer", price: 30, image: "/images/casual-blazer.jpg" },
  { id: 4, name: "Denim Jacket", price: 35, image: "/images/denim-jacket.jpg" },
  { id: 5, name: "Formal Shirt", price: 40, image: "/images/formal-shirt.jpg" },
  { id: 6, name: "Graphic Tee", price: 45, image: "/images/graphic-tee.jpg" },
  { id: 7, name: "Green Dress", price: 50, image: "/images/green-dress.jpg" },
  { id: 8, name: "Leather Jacket", price: 55, image: "/images/leather-jacket.jpg" },
  { id: 9, name: "Men's Belt", price: 60, image: "/images/men-belt.jpg" },
  { id: 10, name: "Oversized Hoodie", price: 65, image: "/images/oversized-hoodie.jpg" },
  { id: 11, name: "Red Shirt", price: 70, image: "/images/red-shirt.jpg" },
  { id: 12, name: "Sports Shoes", price: 75, image: "/images/sports-shoes.jpg" },
  { id: 13, name: "Striped T-Shirt", price: 80, image: "/images/striped-tshirt.jpg" },
  { id: 14, name: "Summer Shorts", price: 85, image: "/images/summer-shorts.jpg" },
  { id: 15, name: "Sunglasses", price: 90, image: "/images/sunglasses.jpg" },
  { id: 16, name: "Sweatpants", price: 95, image: "/images/sweatpants.jpg" },
  { id: 17, name: "White Sneakers", price: 100, image: "/images/white-sneakers.jpg" },
  { id: 18, name: "Winter Coat", price: 105, image: "/images/winter-coat.jpg" },
  { id: 19, name: "Women's Handbag", price: 110, image: "/images/women-handbag.jpg" },
  { id: 20, name: "Woolen Scarf", price: 115, image: "/images/woolen-scarf.jpg" },
];

const ProductList: React.FC = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
        Trending Products
      </h2>

      {/* 🔥 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            {/* 🖼 Product Image */}
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />

            {/* 🏷 Product Details */}
            <h3 className="text-2xl font-bold mt-4 text-gray-800">{product.name}</h3>
            <p className="text-xl font-semibold text-gray-600 mt-2">${product.price}</p>

            {/* 🛒 Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition"
                
              >
                Add to Cart
              </button>

              <button
                onClick={() =>
                  addToWishlist({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })
                }
                className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
