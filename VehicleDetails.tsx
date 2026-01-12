import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { vehicles } from '../data/vehicles';
import { 
  ArrowLeft, 
  Battery, 
  Gauge, 
  Clock, 
  IndianRupee, 
  Zap, 
  Fuel,
  Star,
  Share2,
  Heart,
  Calculator,
  MapPin,
  Shield,
  Users,
  Settings,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  
  const vehicle = vehicles.find(v => v.id === id);
  
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-primary-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-gray-900 mb-4">Vehicle Not Found</h1>
          <Link to="/catalog" className="btn-primary">
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  };

  const images = [
    vehicle.image,
    vehicle.image, // In real app, these would be different angles
    vehicle.image,
    vehicle.image
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'calculator', label: 'EMI Calculator' }
  ];

  return (
    <div className="min-h-screen bg-primary-gray-50">
      <div className="container-max">
        {/* Breadcrumb */}
        <div className="py-4 border-b border-primary-gray-200 bg-primary-white">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary-gray-500 hover:text-primary-green">Home</Link>
            <span className="text-primary-gray-300">/</span>
            <Link to="/catalog" className="text-primary-gray-500 hover:text-primary-green">Catalog</Link>
            <span className="text-primary-gray-300">/</span>
            <span className="text-primary-green font-medium">{vehicle.name}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="section-padding">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/catalog" className="flex items-center text-primary-gray-600 hover:text-primary-green transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Catalog
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg border border-primary-gray-200 hover:bg-primary-green-accent transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg border border-primary-gray-200 hover:bg-primary-green-accent transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Vehicle Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Images */}
            <div>
              <div className="mb-4">
                <img 
                  src={images[selectedImage]} 
                  alt={vehicle.name}
                  className="w-full h-96 object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-car.svg';
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary-green' : 'border-primary-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${vehicle.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-primary-gray-900 mb-2">{vehicle.name}</h1>
                  <p className="text-lg text-primary-gray-600">{vehicle.brand} • {vehicle.bodyType}</p>
                </div>
                {vehicle.isElectric ? (
                  <div className="bg-primary-green text-primary-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Electric
                  </div>
                ) : (
                  <div className="bg-primary-gray-500 text-primary-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Fuel className="w-4 h-4 mr-1" />
                    {vehicle.fuelType}
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-primary-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-primary-gray-600">(4.2) • 156 reviews</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-green mb-2">
                  {formatPrice(vehicle.price)}
                </div>
                <p className="text-primary-gray-600">Ex-showroom price</p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {vehicle.isElectric ? (
                  <>
                    <div className="bg-primary-white p-4 rounded-lg border border-primary-gray-100">
                      <div className="flex items-center text-primary-green mb-2">
                        <Battery className="w-5 h-5 mr-2" />
                        <span className="font-medium">Range</span>
                      </div>
                      <p className="text-2xl font-bold text-primary-gray-900">{vehicle.range} km</p>
                    </div>
                    <div className="bg-primary-white p-4 rounded-lg border border-primary-gray-100">
                      <div className="flex items-center text-primary-green mb-2">
                        <Clock className="w-5 h-5 mr-2" />
                        <span className="font-medium">Charging</span>
                      </div>
                      <p className="text-2xl font-bold text-primary-gray-900">{vehicle.chargingTime}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-primary-white p-4 rounded-lg border border-primary-gray-100">
                      <div className="flex items-center text-primary-green mb-2">
                        <Gauge className="w-5 h-5 mr-2" />
                        <span className="font-medium">Mileage</span>
                      </div>
                      <p className="text-2xl font-bold text-primary-gray-900">{vehicle.mileage} km/l</p>
                    </div>
                    <div className="bg-primary-white p-4 rounded-lg border border-primary-gray-100">
                      <div className="flex items-center text-primary-green mb-2">
                        <Fuel className="w-5 h-5 mr-2" />
                        <span className="font-medium">Tank Capacity</span>
                      </div>
                      <p className="text-2xl font-bold text-primary-gray-900">{vehicle.fuelTankCapacity}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="btn-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Best Price
                </button>
                <button className="btn-secondary flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Test Drive
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-primary-white rounded-xl shadow-lg">
            <div className="flex border-b border-primary-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-primary-green text-primary-green'
                      : 'text-primary-gray-600 hover:text-primary-green'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-gray-900 mb-4">About {vehicle.name}</h3>
                    <p className="text-primary-gray-600 leading-relaxed">
                      The {vehicle.name} represents the pinnacle of {vehicle.isElectric ? 'electric' : 'automotive'} engineering 
                      from {vehicle.brand}. Designed for the modern Indian consumer, it combines cutting-edge technology 
                      with practical efficiency and style.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary-gray-900 mb-4">Key Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary-green-accent p-2 rounded-lg">
                          <IndianRupee className="w-5 h-5 text-primary-green" />
                        </div>
                        <div>
                          <p className="font-medium text-primary-gray-900">Running Cost</p>
                          <p className="text-sm text-primary-gray-600">₹{vehicle.costPerKm}/km</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary-green-accent p-2 rounded-lg">
                          <Users className="w-5 h-5 text-primary-green" />
                        </div>
                        <div>
                          <p className="font-medium text-primary-gray-900">Seating</p>
                          <p className="text-sm text-primary-gray-600">{vehicle.specifications.seatingCapacity} seats</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary-green-accent p-2 rounded-lg">
                          <Shield className="w-5 h-5 text-primary-green" />
                        </div>
                        <div>
                          <p className="font-medium text-primary-gray-900">Warranty</p>
                          <p className="text-sm text-primary-gray-600">{vehicle.specifications.warranty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-gray-900 mb-4">Performance</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-primary-gray-100">
                          <span className="text-primary-gray-600">Motor Power</span>
                          <span className="font-medium">{vehicle.specifications.motorPower}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-primary-gray-100">
                          <span className="text-primary-gray-600">Top Speed</span>
                          <span className="font-medium">{vehicle.specifications.topSpeed}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-primary-gray-100">
                          <span className="text-primary-gray-600">Acceleration</span>
                          <span className="font-medium">{vehicle.specifications.acceleration}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-gray-900 mb-4">Battery & Charging</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-primary-gray-100">
                          <span className="text-primary-gray-600">Battery Capacity</span>
                          <span className="font-medium">{vehicle.specifications.batteryCapacity}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-primary-gray-100">
                          <span className="text-primary-gray-600">Charging Port</span>
                          <span className="font-medium">{vehicle.specifications.chargingPort}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-primary-gray-100">
                          <span className="text-primary-gray-600">Charging Time</span>
                          <span className="font-medium">{vehicle.chargingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">Features & Equipment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-primary-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                        <span className="text-primary-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b border-primary-gray-100 pb-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h5 className="font-semibold text-primary-gray-900">John Doe</h5>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-primary-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-primary-gray-500">2 days ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-primary-gray-600">
                          Excellent {vehicle.isElectric ? 'electric' : ''} vehicle! Great performance and very economical. 
                          Highly recommended for city driving.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'calculator' && (
                <div>
                  <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">EMI Calculator</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-gray-700 mb-2">Vehicle Price</label>
                        <input 
                          type="text" 
                          value={formatPrice(vehicle.price)}
                          readOnly
                          className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg bg-primary-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-gray-700 mb-2">Down Payment</label>
                        <input 
                          type="number" 
                          placeholder="Enter down payment"
                          className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-gray-700 mb-2">Loan Tenure (Years)</label>
                        <select className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green">
                          <option>3 Years</option>
                          <option>5 Years</option>
                          <option>7 Years</option>
                        </select>
                      </div>
                      <button className="btn-primary w-full">Calculate EMI</button>
                    </div>
                    <div className="bg-primary-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary-gray-900 mb-4">EMI Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-primary-gray-600">Monthly EMI</span>
                          <span className="font-semibold">₹25,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-primary-gray-600">Total Interest</span>
                          <span className="font-semibold">₹3,50,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-primary-gray-600">Total Amount</span>
                          <span className="font-semibold">₹18,50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
