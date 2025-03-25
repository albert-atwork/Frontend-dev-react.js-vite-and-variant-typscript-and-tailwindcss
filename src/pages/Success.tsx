import React from "react";

const Success: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-green-500 mb-6">🎉 Order Placed Successfully!</h2>
      <p className="text-lg">Thank you for your order! You will receive a confirmation email shortly.</p>
      <a href="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
        Return to Home
      </a>
    </div>
  );
};

export default Success;
