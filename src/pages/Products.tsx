import React from "react";
import ProductList from "../components/ProductList";

const Products: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
        Browse All Products
      </h2>

      {/* 🛍️ Product List (No Search or Filters) */}
      <ProductList />
    </div>
  );
};

export default Products;
