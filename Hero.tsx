import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="section-padding bg-primary-green-accent">
      <div className="container-max text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Veherex
        </motion.h1>
        <p className="text-lg md:text-xl mb-8">
          Compare electric vehicles and make the smart choice for a sustainable future.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0">
          <Link to="/compare" className="btn-primary">
            Compare Vehicles
          </Link>
          <Link to="/brands" className="btn-secondary">
            Browse by Brand
          </Link>
          <Link to="/guide" className="btn-secondary">
            EV vs Fuel Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
