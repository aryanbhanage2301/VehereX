import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';
import { ArrowRight, Shield, Zap, TrendingUp, Leaf } from 'lucide-react';

const Home: React.FC = () => {
  const featuredVehicles = vehicles.filter(v => v.isElectric).slice(0, 3);

  const features = [
    {
      icon: Shield,
      title: 'Trusted Comparisons',
      description: 'Accurate and up-to-date vehicle specifications and pricing information'
    },
    {
      icon: Zap,
      title: 'EV Expertise',
      description: 'Specialized knowledge in electric vehicles and sustainable mobility'
    },
    {
      icon: TrendingUp,
      title: 'Cost Analysis',
      description: 'Detailed cost per km calculations and long-term savings insights'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Promoting sustainable transportation choices for a greener future'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Why Choose Veherex?
            </h2>
            <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
              Your trusted companion for making informed electric vehicle decisions in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-primary-gray-50 hover:bg-primary-green-accent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-primary-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section-padding bg-primary-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Featured Electric Vehicles
            </h2>
            <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
              Discover the best electric vehicles available in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VehicleCard vehicle={vehicle} showCompareButton={false} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/catalog" className="btn-primary inline-flex items-center">
              View All Vehicles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-primary-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Electric?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Compare vehicles, calculate costs, and make the smart choice for your next vehicle purchase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/compare" className="btn-secondary bg-primary-white text-primary-green">
              Start Comparing
            </Link>
            <Link to="/guide" className="btn-secondary border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-green">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
