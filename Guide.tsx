import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Fuel, 
  IndianRupee, 
  Leaf, 
  Clock, 
  Gauge, 
  Shield, 
  Wrench,
  TrendingUp,
  Battery,
  MapPin,
  AlertCircle
} from 'lucide-react';

const Guide: React.FC = () => {
  const comparisons = [
    {
      category: 'Running Costs',
      ev: {
        value: '₹1-2 per km',
        description: 'Electricity costs are significantly lower than fuel costs',
        icon: IndianRupee,
        color: 'text-primary-green'
      },
      fuel: {
        value: '₹6-8 per km',
        description: 'Petrol/Diesel costs fluctuate with global oil prices',
        icon: IndianRupee,
        color: 'text-red-500'
      }
    },
    {
      category: 'Environmental Impact',
      ev: {
        value: 'Zero Emissions',
        description: 'No direct emissions, cleaner with renewable energy',
        icon: Leaf,
        color: 'text-primary-green'
      },
      fuel: {
        value: 'CO2 Emissions',
        description: 'Direct emissions contribute to air pollution',
        icon: AlertCircle,
        color: 'text-red-500'
      }
    },
    {
      category: 'Maintenance',
      ev: {
        value: 'Low Maintenance',
        description: 'Fewer moving parts, no oil changes required',
        icon: Wrench,
        color: 'text-primary-green'
      },
      fuel: {
        value: 'Regular Service',
        description: 'Engine maintenance, oil changes, filter replacements',
        icon: Wrench,
        color: 'text-red-500'
      }
    },
    {
      category: 'Performance',
      ev: {
        value: 'Instant Torque',
        description: 'Immediate power delivery, quiet operation',
        icon: Zap,
        color: 'text-primary-green'
      },
      fuel: {
        value: 'Gradual Power',
        description: 'Power builds up through RPM range',
        icon: Gauge,
        color: 'text-orange-500'
      }
    }
  ];

  const evBenefits = [
    {
      title: 'Lower Operating Costs',
      description: 'Electricity is cheaper than petrol/diesel, reducing daily commute costs',
      icon: TrendingUp,
      stats: 'Save up to ₹50,000 annually'
    },
    {
      title: 'Zero Emissions',
      description: 'No direct emissions, contributing to cleaner air and environment',
      icon: Leaf,
      stats: 'Reduce CO2 by 1.5 tonnes/year'
    },
    {
      title: 'Government Incentives',
      description: 'FAME II subsidies, tax benefits, and reduced registration fees',
      icon: Shield,
      stats: 'Up to ₹1.5 lakh subsidy'
    },
    {
      title: 'Low Maintenance',
      description: 'Fewer moving parts mean less frequent servicing and repairs',
      icon: Wrench,
      stats: '50% lower maintenance costs'
    }
  ];

  const challenges = [
    {
      title: 'Charging Infrastructure',
      description: 'Growing network but still limited compared to fuel stations',
      icon: MapPin,
      solution: 'Government investing in rapid charging network expansion'
    },
    {
      title: 'Range Anxiety',
      description: 'Concern about battery running out during long trips',
      icon: Battery,
      solution: 'Modern EVs offer 300-500km range, suitable for daily use'
    },
    {
      title: 'Initial Cost',
      description: 'Higher upfront cost compared to conventional vehicles',
      icon: IndianRupee,
      solution: 'Government subsidies and lower running costs offset initial investment'
    },
    {
      title: 'Charging Time',
      description: 'Takes longer to charge compared to refueling',
      icon: Clock,
      solution: 'Fast charging technology reducing charging time to 30-60 minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-primary-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-green text-primary-white section-padding">
        <div className="container-max text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Electric vs Fuel Vehicles
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive guide to help you understand the differences and make an informed decision
          </motion.p>
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8" />
              <span className="text-lg font-semibold">Electric</span>
            </div>
            <div className="text-2xl font-bold">VS</div>
            <div className="flex items-center space-x-2">
              <Fuel className="w-8 h-8" />
              <span className="text-lg font-semibold">Fuel</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Head-to-Head Comparison
            </h2>
            <p className="text-lg text-primary-gray-600">
              See how electric and fuel vehicles compare across key factors
            </p>
          </div>

          <div className="space-y-8">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                className="bg-primary-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-primary-gray-900 mb-6 text-center">
                  {comparison.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Electric */}
                  <div className="bg-primary-white rounded-lg p-6 border-2 border-primary-green">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-green p-3 rounded-full mr-4">
                        <Zap className="w-6 h-6 text-primary-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary-gray-900">Electric</h4>
                        <p className={`text-xl font-bold ${comparison.ev.color}`}>
                          {comparison.ev.value}
                        </p>
                      </div>
                    </div>
                    <p className="text-primary-gray-600">{comparison.ev.description}</p>
                  </div>

                  {/* Fuel */}
                  <div className="bg-primary-white rounded-lg p-6 border-2 border-primary-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-gray-500 p-3 rounded-full mr-4">
                        <Fuel className="w-6 h-6 text-primary-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary-gray-900">Fuel</h4>
                        <p className={`text-xl font-bold ${comparison.fuel.color}`}>
                          {comparison.fuel.value}
                        </p>
                      </div>
                    </div>
                    <p className="text-primary-gray-600">{comparison.fuel.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-primary-green-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Why Choose Electric?
            </h2>
            <p className="text-lg text-primary-gray-600">
              Discover the advantages of electric vehicles for Indian consumers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-primary-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-primary-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-primary-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="bg-primary-green-accent text-primary-green px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Addressing Common Concerns
            </h2>
            <p className="text-lg text-primary-gray-600">
              Understanding the challenges and their solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-primary-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <challenge.icon className="w-6 h-6 text-primary-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-primary-gray-600 mb-3">
                      {challenge.description}
                    </p>
                    <div className="bg-primary-green-accent border-l-4 border-primary-green pl-4 py-2">
                      <p className="text-primary-green font-medium">
                        <strong>Solution:</strong> {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-primary-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our comprehensive vehicle catalog and find the perfect electric vehicle for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/catalog" className="btn-secondary bg-primary-white text-primary-green">
              Browse EVs
            </a>
            <a href="/compare" className="btn-secondary border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-green">
              Compare Vehicles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
