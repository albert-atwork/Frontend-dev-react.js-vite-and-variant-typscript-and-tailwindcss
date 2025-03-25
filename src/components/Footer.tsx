import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-10 mt-16">
      <div className="container mx-auto">
        <p className="text-lg">© 2025 Albcloth.Shop. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-xl hover:text-blue-400 transition">📘</a>
          <a href="#" className="text-xl hover:text-pink-400 transition">📷</a>
          <a href="#" className="text-xl hover:text-blue-300 transition">🐦</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
