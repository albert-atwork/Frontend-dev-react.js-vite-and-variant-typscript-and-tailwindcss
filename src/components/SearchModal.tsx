import React, { useState } from "react";
import { products } from "./ProductList"; // ✅ Importing the product data

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative bg-white dark:bg-gray-900 w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-xl border-4 border-purple-500">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl text-gray-700 dark:text-white hover:text-red-500 transition-transform transform hover:scale-110"
          aria-label="Close Search"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
          Search Products
        </h2>

        {/* 🔍 Search Input */}
        <input
          type="text"
          className="w-full p-3 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 🔥 Search Results */}
        <div className="mt-4 max-h-64 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md border-2 border-pink-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center mt-4">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
