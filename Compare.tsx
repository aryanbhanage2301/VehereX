import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { vehicles, Vehicle } from '../data/vehicles';
import { 
  Battery, 
  Gauge, 
  Clock, 
  IndianRupee, 
  Zap, 
  Fuel, 
  Car,
  Shield,
  Users,
  Settings,
  X
} from 'lucide-react';

const Compare: React.FC = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([]);
  const [showVehicleSelector, setShowVehicleSelector] = useState(false);

  const addVehicle = (vehicle: Vehicle) => {
    if (selectedVehicles.length < 3 && !selectedVehicles.find(v => v.id === vehicle.id)) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  const removeVehicle = (vehicleId: string) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId));
  };

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  };

  const comparisonCategories = [
    {
      title: 'Basic Information',
      items: [
        { key: 'name', label: 'Model', icon: Car },
        { key: 'brand', label: 'Brand', icon: Shield },
        { key: 'bodyType', label: 'Body Type', icon: Car },
        { key: 'price', label: 'Price', icon: IndianRupee, format: formatPrice },
        { key: 'costPerKm', label: 'Cost per km', icon: IndianRupee, format: (v: number) => `₹${v}` },
      ]
    },
    {
      title: 'Performance',
      items: [
        { key: 'range', label: 'Range', icon: Battery, format: (v: number) => v > 0 ? `${v} km` : 'N/A' },
        { key: 'chargingTime', label: 'Charging Time', icon: Clock },
        { key: 'mileage', label: 'Mileage', icon: Gauge, format: (v: number) => v ? `${v} km/l` : 'N/A' },
        { key: 'specifications.topSpeed', label: 'Top Speed', icon: Zap },
        { key: 'specifications.acceleration', label: 'Acceleration', icon: Zap },
      ]
    },
    {
      title: 'Technical Specifications',
      items: [
        { key: 'specifications.motorPower', label: 'Motor Power', icon: Settings },
        { key: 'specifications.batteryCapacity', label: 'Battery Capacity', icon: Battery },
        { key: 'specifications.seatingCapacity', label: 'Seating', icon: Users, format: (v: number) => `${v} seats` },
        { key: 'specifications.chargingPort', label: 'Charging Port', icon: Zap },
        { key: 'specifications.warranty', label: 'Warranty', icon: Shield },
      ]
    }
  ];

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  return (
    <div className="min-h-screen bg-primary-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gray-900 mb-4">
            Vehicle Comparison
          </h1>
          <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
            Compare electric vehicles side by side to make an informed decision
          </p>
        </div>

        {/* Vehicle Selection */}
        <div className="bg-primary-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-primary-gray-900">
              Selected Vehicles ({selectedVehicles.length}/3)
            </h2>
            <button
              onClick={() => setShowVehicleSelector(!showVehicleSelector)}
              className="btn-primary"
            >
              {showVehicleSelector ? 'Hide' : 'Add'} Vehicles
            </button>
          </div>

          {/* Selected Vehicles */}
          {selectedVehicles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {selectedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="relative bg-primary-gray-50 rounded-lg p-4">
                  <button
                    onClick={() => removeVehicle(vehicle.id)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-primary-gray-200 rounded-lg flex items-center justify-center">
                      {vehicle.isElectric ? (
                        <Zap className="w-8 h-8 text-primary-green" />
                      ) : (
                        <Fuel className="w-8 h-8 text-primary-gray-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-gray-900">{vehicle.name}</h3>
                      <p className="text-sm text-primary-gray-600">{vehicle.brand}</p>
                      <p className="text-sm font-medium text-primary-green">{formatPrice(vehicle.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vehicle Selector */}
          {showVehicleSelector && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-primary-gray-200 pt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicles.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => addVehicle(vehicle)}
                    disabled={selectedVehicles.length >= 3 || selectedVehicles.find(v => v.id === vehicle.id) !== undefined}
                    className="flex items-center space-x-3 p-4 bg-primary-gray-50 rounded-lg hover:bg-primary-green-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left"
                  >
                    <div className="w-12 h-12 bg-primary-gray-200 rounded-lg flex items-center justify-center">
                      {vehicle.isElectric ? (
                        <Zap className="w-6 h-6 text-primary-green" />
                      ) : (
                        <Fuel className="w-6 h-6 text-primary-gray-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-gray-900">{vehicle.name}</h4>
                      <p className="text-sm text-primary-gray-600">{vehicle.brand}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedVehicles.length >= 2 && (
          <div className="bg-primary-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary-gray-900 mb-6">
                Detailed Comparison
              </h2>
              
              {comparisonCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h3 className="text-xl font-semibold text-primary-gray-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-primary-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-primary-gray-700">
                            Specification
                          </th>
                          {selectedVehicles.map((vehicle) => (
                            <th key={vehicle.id} className="text-left py-3 px-4 font-medium text-primary-gray-700">
                              {vehicle.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr key={itemIndex} className="border-b border-primary-gray-100">
                            <td className="py-3 px-4 font-medium text-primary-gray-900 flex items-center">
                              <item.icon className="w-5 h-5 mr-2 text-primary-green" />
                              {item.label}
                            </td>
                            {selectedVehicles.map((vehicle) => {
                              const value = getNestedValue(vehicle, item.key);
                              const formattedValue = item.format ? item.format(value) : value;
                              return (
                                <td key={vehicle.id} className="py-3 px-4 text-primary-gray-700">
                                  {formattedValue || 'N/A'}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedVehicles.length < 2 && (
          <div className="text-center py-12">
            <Car className="w-16 h-16 text-primary-gray-400 mx-auto mb-4" />
            <p className="text-xl text-primary-gray-600 mb-4">
              Select at least 2 vehicles to start comparing
            </p>
            <p className="text-primary-gray-500">
              Choose from our extensive database of electric and fuel vehicles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
