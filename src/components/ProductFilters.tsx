import React from "react";

interface ProductFiltersProps {
  onSearchChange: (searchTerm: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onSearchChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full max-w-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
};

export default ProductFilters;
