import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Task Manager Pro
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Organize your tasks, boost productivity, and manage your time
        efficiently.
      </p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
