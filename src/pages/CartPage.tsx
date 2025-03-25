import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty. <Link to="/products" className="text-blue-600">Shop Now</Link></p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-4">
              <span>{item.name} - ${item.price} x {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
            </div>
          ))}

          <p className="text-lg font-bold mt-4">Total: ${totalAmount.toFixed(2)}</p>
          
          <div className="flex justify-between mt-6">
            <button onClick={clearCart} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">Clear Cart</button>
            <Link to="/checkout" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
