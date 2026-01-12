import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { accessories } from '../data/vehicles';
import { Search, ShoppingCart, Star } from 'lucide-react';

const Accessories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const categories = [...new Set(accessories.map(item => item.category))];

  const filteredAccessories = accessories
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || item.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const AccessoryCard = ({ accessory, index }: { accessory: any; index: number }) => (
    <motion.div
      className="card p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Product Image */}
      <div className="relative mb-4 h-48 bg-primary-gray-100 rounded-lg overflow-hidden">
        <img 
          src={accessory.image} 
          alt={accessory.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-accessory.jpg';
          }}
        />
        <div className="absolute top-2 left-2">
          <span className="bg-primary-green text-primary-white px-2 py-1 rounded-full text-xs font-medium">
            {accessory.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary-gray-900 mb-2">
          {accessory.name}
        </h3>
        <p className="text-primary-gray-600 mb-4">
          {accessory.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-primary-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-primary-gray-600 ml-2">(4.0)</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary-green">
            {formatPrice(accessory.price)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="flex-1 bg-primary-green-accent text-primary-green px-4 py-2 rounded-lg font-medium hover:bg-primary-green hover:text-primary-white transition-colors duration-300">
          View Details
        </button>
        <button className="flex-1 btn-primary flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-primary-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gray-900 mb-4">
            EV Accessories
          </h1>
          <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
            Essential accessories for your electric vehicle journey
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-primary-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search accessories..."
                className="w-full pl-10 pr-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex-1 w-full lg:max-w-xs">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex-1 w-full lg:max-w-xs">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-primary-gray-600">
            Showing {filteredAccessories.length} of {accessories.length} accessories
          </p>
        </div>

        {/* Accessories Grid */}
        {filteredAccessories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory, index) => (
              <AccessoryCard key={accessory.id} accessory={accessory} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-primary-gray-600 mb-4">
              No accessories found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSortBy('name');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Categories Section */}
        <section className="mt-16 bg-primary-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryItems = accessories.filter(item => item.category === category);
              const categoryIcons = {
                'Charging': '🔌',
                'Solar': '☀️',
                'Maintenance': '🔧',
                'Safety': '🛡️'
              };
              
              return (
                <motion.div
                  key={category}
                  className="text-center p-6 bg-primary-gray-50 rounded-xl hover:bg-primary-green-accent transition-colors duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="text-4xl mb-4">
                    {categoryIcons[category as keyof typeof categoryIcons] || '🔋'}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-gray-900 mb-2">
                    {category}
                  </h3>
                  <p className="text-primary-gray-600">
                    {categoryItems.length} item{categoryItems.length !== 1 ? 's' : ''}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Featured Benefits */}
        <section className="mt-16 bg-primary-green text-primary-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Accessories?
            </h2>
            <p className="text-lg">
              Quality products to enhance your EV experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p>All products tested and certified for safety and performance</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Quick delivery across India with installation support</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p>Professional installation and technical support available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accessories;
