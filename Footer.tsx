import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-gray-900 text-primary-white">
      <div className="container-max py-12 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-green p-2 rounded-lg">
                <Zap className="w-6 h-6 text-primary-white" />
              </div>
              <span className="text-2xl font-bold">Veherex</span>
            </Link>
            <p className="text-primary-gray-300 mb-4">
              Your trusted companion for electric vehicle comparison and decision-making in India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  EV Catalog
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guide" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  EV Guide
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  Charging Stations
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  Government Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  EV News
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-green" />
                <span className="text-primary-gray-300">info@veherex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-green" />
                <span className="text-primary-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-green" />
                <span className="text-primary-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-gray-300 text-sm">
            © 2024 Veherex. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-primary-gray-300 hover:text-primary-green transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
