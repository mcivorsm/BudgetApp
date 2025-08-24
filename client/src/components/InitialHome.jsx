import { useState } from "react";

import { Link } from "react-router-dom";

function InitialHome() {
  const [form, setForm] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo/Brand Section */}
        <div className="space-y-4">
          <div className="relative">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Budget Ally
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-500/20 rounded-lg blur-xl"></div>
          </div>
          <p className="text-xl text-gray-300 font-light">
            The perfect app for your budgeting needs!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pt-8">
          <Link to={"/signup"}>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
              Signup
            </button>
          </Link>
          
          <Link to={"/login"}>
            <button className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500 text-gray-200 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Login
            </button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-6 pt-8 opacity-60">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
}

export default InitialHome;