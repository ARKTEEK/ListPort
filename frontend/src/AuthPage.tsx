import { FaEye, FaEyeSlash, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-red-500 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center text-white p-6">
        <h1 className="text-5xl font-extrabold text-red-400">
          { isSignUp ? "Create an Account" : "Welcome Back" }
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          { isSignUp
            ? "Join for effortless playlist management."
            : "Sign in to continue managing your playlists." }
        </p>

        <div className="mt-6 w-96 space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-6 py-3 bg-transparent border-2 border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500"/>
          <div className="relative w-full">
            <input
              type={ showPassword ? "text" : "password" }
              placeholder="Password"
              className="w-full px-6 py-3 bg-transparent border-2 border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500"/>
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-400"
              onClick={ () => setShowPassword(!showPassword) }>
              { showPassword ? <FaEyeSlash/> : <FaEye/> }
            </button>
          </div>
        </div>

        <button
          className="mt-6 w-96 flex justify-center items-center space-x-3 bg-red-600 px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition text-white font-medium text-lg">
          { isSignUp ? (
            <>
              <FaUserPlus className="text-2xl"/>
              <span>Sign Up</span>
            </>
          ) : (
            <>
              <FaSignInAlt className="text-2xl"/>
              <span>Sign In</span>
            </>
          ) }
        </button>

        <p className="text-sm text-gray-400 mt-4">
          { isSignUp ? (
            <>
              Already have an account?{ " " }
              <button
                className="text-red-400 hover:underline"
                onClick={ () => setIsSignUp(false) }>
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{ " " }
              <button
                className="text-red-400 hover:underline"
                onClick={ () => setIsSignUp(true) }>
                Sign Up
              </button>
            </>
          ) }
        </p>

        <Link to="/" className="mt-6 text-gray-400 hover:text-gray-300 text-sm">
          &larr; Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
