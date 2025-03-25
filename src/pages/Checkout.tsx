import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order Placed Successfully! 🎉");
    clearCart();
    navigate("/success");
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty. <a href="/products" className="text-blue-600">Shop Now</a></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-3">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <hr className="my-4" />
            <p className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</p>
          </div>

          {/* Shipping Information */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
            <input type="text" name="name" placeholder="Full Name" required className="input-style" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" required className="input-style" onChange={handleChange} />
            <input type="text" name="address" placeholder="Street Address" required className="input-style" onChange={handleChange} />
            <input type="text" name="city" placeholder="City" required className="input-style" onChange={handleChange} />
            <input type="text" name="zip" placeholder="ZIP Code" required className="input-style" onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" required className="input-style" onChange={handleChange} />
            <button type="submit" className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
