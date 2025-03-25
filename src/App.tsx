import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Wishlist from "./pages/Wishlist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// 💰 Donation Imports
import { getDonees, createDonation } from "./api/apiService";
import { Donee } from "./types/types";

// ✅ AppProviders Component
const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>
    <CartProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </CartProvider>
  </AuthProvider>
);

// ✅ Main App Component
const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 💰 Donation States
  const [donees, setDonees] = useState<Donee[]>([]);
  const [amount, setAmount] = useState("");
  const [selectedDonee, setSelectedDonee] = useState<number | null>(null);

  // 💰 Fetch Donees on Component Mount
  useEffect(() => {
    getDonees().then((data) => setDonees(data));
  }, []);

  // 💰 Handle Donation Submission
  const handleDonate = async () => {
    if (selectedDonee && amount) {
      await createDonation({ donee_id: selectedDonee, amount: parseFloat(amount) });
      alert("Donation Successful!");
      setAmount("");
    }
  };

  return (
    <AppProviders>
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}

      {/* 🔷 Routes for E-Commerce & Donation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* 💰 Donation Page */}
        <Route
          path="/donate"
          element={
            <div className="container mx-auto py-16 px-6">
              <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Donate to a Cause
              </h1>
              <select onChange={(e) => setSelectedDonee(Number(e.target.value))}>
                <option value="">Select Donee</option>
                {donees.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={handleDonate} className="bg-blue-500 text-white px-4 py-2 mt-4">
                Donate
              </button>
            </div>
          }
        />
      </Routes>

      <Footer />
    </AppProviders>
  );
};

export default App;

