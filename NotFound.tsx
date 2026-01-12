import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-gray-300">404</h1>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary-gray-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-primary-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/"
            className="btn-primary"
          >
            Go Home
          </Link>
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/catalog" className="text-primary-gray-600 hover:text-primary-gray-800">
              View Catalog
            </Link>
            <Link to="/brands" className="text-primary-gray-600 hover:text-primary-gray-800">
              Browse Brands
            </Link>
            <Link to="/contact" className="text-primary-gray-600 hover:text-primary-gray-800">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
