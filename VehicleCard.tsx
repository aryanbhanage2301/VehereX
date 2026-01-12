import React from 'react';
import { motion } from 'framer-motion';
import { Vehicle } from '../data/vehicles';
import { Battery, Gauge, Clock, IndianRupee, Zap, Fuel } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  onCompare?: (vehicle: Vehicle) => void;
  showCompareButton?: boolean;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ 
  vehicle, 
  onCompare, 
  showCompareButton = true 
}) => {
  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  };

  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      {/* Vehicle Image */}
      <div className="relative mb-4 h-48 bg-primary-gray-100 rounded-lg overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-car.jpg';
          }}
        />
        <div className="absolute top-2 right-2">
          {vehicle.isElectric ? (
            <div className="bg-primary-green text-primary-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Electric
            </div>
          ) : (
            <div className="bg-primary-gray-500 text-primary-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Fuel className="w-3 h-3 mr-1" />
              {vehicle.fuelType}
            </div>
          )}
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary-gray-900 mb-2">
          {vehicle.name}
        </h3>
        <p className="text-primary-gray-600 mb-4 font-medium">
          {vehicle.brand} • {vehicle.bodyType}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-primary-gray-700">
            <IndianRupee className="w-4 h-4 mr-2 text-primary-green" />
            <span>{formatPrice(vehicle.price)}</span>
          </div>
          
          {vehicle.isElectric ? (
            <>
              <div className="flex items-center text-sm text-primary-gray-700">
                <Battery className="w-4 h-4 mr-2 text-primary-green" />
                <span>{vehicle.range} km</span>
              </div>
              <div className="flex items-center text-sm text-primary-gray-700">
                <Clock className="w-4 h-4 mr-2 text-primary-green" />
                <span>{vehicle.chargingTime}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center text-sm text-primary-gray-700">
                <Gauge className="w-4 h-4 mr-2 text-primary-green" />
                <span>{vehicle.mileage} km/l</span>
              </div>
              <div className="flex items-center text-sm text-primary-gray-700">
                <Fuel className="w-4 h-4 mr-2 text-primary-green" />
                <span>{vehicle.fuelTankCapacity}</span>
              </div>
            </>
          )}
          
          <div className="flex items-center text-sm text-primary-gray-700">
            <span className="font-medium">₹{vehicle.costPerKm}/km</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-primary-gray-900 mb-2">Key Features</h4>
          <div className="flex flex-wrap gap-1">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-primary-green-accent text-primary-green text-xs px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
            {vehicle.features.length > 3 && (
              <span className="text-xs text-primary-gray-500 px-2 py-1">
                +{vehicle.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-primary-gray-100 text-primary-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-primary-gray-900 hover:text-primary-white transition-colors duration-300">
          View Details
        </button>
        {showCompareButton && onCompare && (
          <button 
            onClick={() => onCompare(vehicle)}
            className="flex-1 btn-primary"
          >
            Compare
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default VehicleCard;
