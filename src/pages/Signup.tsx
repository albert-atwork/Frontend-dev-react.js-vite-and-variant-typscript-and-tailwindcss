import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = signup(userData.username, userData.email, userData.password);
    if (success) {
      alert("Signup successful! 🎉");
      navigate("/dashboard");
    } else {
      alert("User already exists! Try logging in.");
    }
  };

  return (
    <div className="container mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <input type="text" name="username" placeholder="Username" required className="input-style" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="input-style" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required className="input-style" onChange={handleChange} />
        <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
