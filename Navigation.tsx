import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/catalog', label: 'EV Catalog' },
    { path: '/compare', label: 'Compare' },
    { path: '/brands', label: 'Brands' },
    { path: '/accessories', label: 'Accessories' },
    { path: '/guide', label: 'EV Guide' },
  ];

  return (
    <nav className="bg-primary-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-green p-2 rounded-lg">
              <Zap className="w-6 h-6 text-primary-white" />
            </div>
            <span className="text-2xl font-bold text-primary-green">Veherex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-primary-green ${
                  location.pathname === item.path
                    ? 'text-primary-green border-b-2 border-primary-green'
                    : 'text-primary-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary-white border-t border-primary-gray-200 py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 font-medium transition-colors duration-300 hover:text-primary-green hover:bg-primary-green-accent ${
                  location.pathname === item.path
                    ? 'text-primary-green bg-primary-green-accent'
                    : 'text-primary-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
