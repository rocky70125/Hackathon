import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
                  <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Welcome Back
                  </h1>
                  <LoginForm />
                  <p className="text-center mt-6 text-sm text-gray-600">
                    Don’t have an account?
                    <Link to="/register" className="text-blue-600 hover:underline ml-1">
                      Register
                    </Link>
                  </p>   
        </div>
      </div>
  );
}
