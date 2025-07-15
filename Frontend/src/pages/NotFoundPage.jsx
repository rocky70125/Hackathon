// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-6">
      <div className="text-center bg-white p-10 rounded-lg shadow-xl max-w-md">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
        >
          <BsArrowLeft className="mr-2" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
