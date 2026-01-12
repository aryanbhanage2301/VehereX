import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';
import { Filter, Search, X } from 'lucide-react';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [minRange, setMinRange] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const evVehicles = vehicles.filter(v => v.isElectric);

  const brands = [...new Set(evVehicles.map(v => v.brand))];
  const bodyTypes = [...new Set(evVehicles.map(v => v.bodyType))];

  const filteredVehicles = useMemo(() => {
    let filtered = evVehicles;

    if (searchTerm) {
      filtered = filtered.filter(v => 
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrand) {
      filtered = filtered.filter(v => v.brand === selectedBrand);
    }

    if (selectedBodyType) {
      filtered = filtered.filter(v => v.bodyType === selectedBodyType);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(v => v.price >= min && v.price <= max);
    }

    if (minRange) {
      filtered = filtered.filter(v => v.range >= Number(minRange));
    }

    return filtered;
  }, [evVehicles, searchTerm, selectedBrand, selectedBodyType, priceRange, minRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedBodyType('');
    setPriceRange('');
    setMinRange('');
  };

  const activeFiltersCount = [selectedBrand, selectedBodyType, priceRange, minRange].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-primary-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gray-900 mb-4">
            Electric Vehicle Catalog
          </h1>
          <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
            Explore the latest electric vehicles available in India
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-primary-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="w-full pl-10 pr-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-primary-green text-primary-white rounded-lg hover:bg-primary-green-dark transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-primary-white text-primary-green rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-primary-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Brand Filter */}
                <div>
                  <label className="block text-sm font-medium text-primary-gray-700 mb-2">
                    Brand
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Body Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-primary-gray-700 mb-2">
                    Body Type
                  </label>
                  <select
                    value={selectedBodyType}
                    onChange={(e) => setSelectedBodyType(e.target.value)}
                    className="w-full px-3 py-2 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  >
                    <option value="">All Types</option>
                    {bodyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-primary-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  >
                    <option value="">All Prices</option>
                    <option value="0-1500000">Under ₹15 Lakh</option>
                    <option value="1500000-2500000">₹15-25 Lakh</option>
                    <option value="2500000-3500000">₹25-35 Lakh</option>
                    <option value="3500000-5000000">Above ₹35 Lakh</option>
                  </select>
                </div>

                {/* Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-primary-gray-700 mb-2">
                    Min Range (km)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 300"
                    value={minRange}
                    onChange={(e) => setMinRange(e.target.value)}
                    className="w-full px-3 py-2 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-2 px-4 py-2 text-primary-gray-600 hover:text-primary-green transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear Filters</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-primary-gray-600">
            Showing {filteredVehicles.length} of {evVehicles.length} vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-primary-gray-600 mb-4">
              No vehicles found matching your criteria
            </p>
            <button
              onClick={clearFilters}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
