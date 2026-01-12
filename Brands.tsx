import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { brands, vehicles } from '../data/vehicles';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Brands: React.FC = () => {
  const getBrandVehicles = (brandName: string) => {
    return vehicles.filter(vehicle => vehicle.brand === brandName && vehicle.isElectric);
  };

  const BrandCard = ({ brand, index }: { brand: any; index: number }) => {
    const brandVehicles = getBrandVehicles(brand.name);
    
    return (
      <motion.div
        className="card p-6 h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {/* Brand Logo */}
        <div className="flex items-center justify-center mb-6 h-20">
          <img 
            src={brand.logo} 
            alt={`${brand.name} logo`}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder-brand.png';
            }}
          />
        </div>

        {/* Brand Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-primary-gray-900 mb-3 text-center">
            {brand.name}
          </h3>
          <p className="text-primary-gray-600 mb-4 text-center">
            {brand.description}
          </p>

          {/* Models Count */}
          <div className="bg-primary-green-accent rounded-lg p-4 mb-4">
            <div className="text-center">
              <span className="text-2xl font-bold text-primary-green">
                {brandVehicles.length}
              </span>
              <p className="text-primary-gray-700 text-sm">
                EV Model{brandVehicles.length !== 1 ? 's' : ''} Available
              </p>
            </div>
          </div>

          {/* Popular Models */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
              Popular Models
            </h4>
            <div className="space-y-2">
              {brandVehicles.slice(0, 3).map((vehicle, vehicleIndex) => (
                <div key={vehicleIndex} className="flex items-center justify-between py-2 border-b border-primary-gray-100 last:border-b-0">
                  <span className="text-primary-gray-700">{vehicle.name}</span>
                  <span className="text-primary-green font-medium">
                    ₹{(vehicle.price / 100000).toFixed(2)}L
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            to={`/catalog?brand=${brand.name}`}
            className="flex-1 btn-primary flex items-center justify-center"
          >
            View Models
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary-green-accent text-primary-green px-4 py-2 rounded-lg font-medium hover:bg-primary-green hover:text-primary-white transition-colors duration-300 flex items-center justify-center"
          >
            Visit Site
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-primary-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gray-900 mb-4">
            EV Brands in India
          </h1>
          <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
            Discover leading electric vehicle manufacturers and their innovative models
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        {/* Market Overview */}
        <section className="bg-primary-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">
              EV Market Overview
            </h2>
            <p className="text-lg text-primary-gray-600">
              The electric vehicle market in India is rapidly growing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary-green-accent rounded-xl">
              <div className="text-3xl font-bold text-primary-green mb-2">
                {brands.length}+
              </div>
              <p className="text-primary-gray-700">Active EV Brands</p>
            </div>
            <div className="text-center p-6 bg-primary-green-accent rounded-xl">
              <div className="text-3xl font-bold text-primary-green mb-2">
                {vehicles.filter(v => v.isElectric).length}+
              </div>
              <p className="text-primary-gray-700">EV Models</p>
            </div>
            <div className="text-center p-6 bg-primary-green-accent rounded-xl">
              <div className="text-3xl font-bold text-primary-green mb-2">
                300+
              </div>
              <p className="text-primary-gray-700">KM Average Range</p>
            </div>
            <div className="text-center p-6 bg-primary-green-accent rounded-xl">
              <div className="text-3xl font-bold text-primary-green mb-2">
                ₹1.5L
              </div>
              <p className="text-primary-gray-700">Max FAME Subsidy</p>
            </div>
          </div>
        </section>

        {/* Brand Comparison */}
        <section className="bg-primary-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">
              Brand Comparison
            </h2>
            <p className="text-lg text-primary-gray-600">
              Compare key aspects of different EV brands
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-primary-gray-900">Brand</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary-gray-900">Models</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary-gray-900">Price Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary-gray-900">Max Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary-gray-900">Popular Model</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand, index) => {
                  const brandVehicles = getBrandVehicles(brand.name);
                  const prices = brandVehicles.map(v => v.price);
                  const ranges = brandVehicles.map(v => v.range);
                  const popularModel = brandVehicles.sort((a, b) => b.range - a.range)[0];
                  
                  return (
                    <motion.tr
                      key={brand.id}
                      className="border-b border-primary-gray-100 hover:bg-primary-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="w-8 h-8 object-contain"
                          />
                          <span className="font-medium text-primary-gray-900">{brand.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-primary-gray-700">
                        {brandVehicles.length} model{brandVehicles.length !== 1 ? 's' : ''}
                      </td>
                      <td className="py-4 px-4 text-primary-gray-700">
                        {prices.length > 0 ? (
                          <>
                            ₹{(Math.min(...prices) / 100000).toFixed(1)}L - 
                            ₹{(Math.max(...prices) / 100000).toFixed(1)}L
                          </>
                        ) : 'N/A'}
                      </td>
                      <td className="py-4 px-4 text-primary-gray-700">
                        {ranges.length > 0 ? `${Math.max(...ranges)} km` : 'N/A'}
                      </td>
                      <td className="py-4 px-4 text-primary-gray-700">
                        {popularModel ? popularModel.name : 'N/A'}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-primary-green text-primary-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore EV Options?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Browse through our comprehensive vehicle catalog or compare different models to find your perfect EV
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog" className="btn-secondary bg-primary-white text-primary-green">
              Browse All Models
            </Link>
            <Link to="/compare" className="btn-secondary border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-green">
              Compare Vehicles
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brands;
