import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Welcome, {user?.username}!</h2>
      <p className="text-lg">Email: {user?.email}</p>
      <button onClick={() => { logout(); navigate("/"); }} className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
