import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-32 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold leading-tight">Discover Amazing Products</h2>
      <p className="mt-4 text-lg opacity-90">Best quality at unbeatable prices</p>

      <div className="mt-6 flex space-x-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Shop Now
        </button>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
