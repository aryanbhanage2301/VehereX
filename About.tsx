import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp, 
  Leaf, 
  Shield,
  Lightbulb,
  Globe,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '25+', label: 'EV Brands' },
    { number: '200+', label: 'Vehicle Models' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We provide honest, unbiased information to help you make informed decisions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly improving our platform with cutting-edge technology and features.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to promoting eco-friendly transportation for a greener future.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your needs and satisfaction are at the heart of everything we do.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/images/placeholder-person.jpg',
      bio: 'Former automotive engineer with 15+ years in the EV industry.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Product',
      image: '/images/placeholder-person.jpg',
      bio: 'Product strategist passionate about sustainable mobility solutions.'
    },
    {
      name: 'Arjun Patel',
      role: 'Head of Technology',
      image: '/images/placeholder-person.jpg',
      bio: 'Tech leader building scalable platforms for the automotive industry.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Operations',
      image: '/images/placeholder-person.jpg',
      bio: 'Operations expert ensuring seamless customer experiences.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to simplify EV adoption in India'
    },
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'Launched our first comparison platform with 5 EV models'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded to cover 50+ models and reached 10,000 users'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Won "Best EV Platform" award and crossed 25,000 users'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Became India\'s leading EV comparison platform'
    }
  ];

  return (
    <div className="min-h-screen bg-primary-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-green text-primary-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Driving India's Electric Future
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                We're on a mission to make electric vehicle adoption simple, transparent, 
                and accessible for every Indian family.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-primary-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-12 h-12 text-primary-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                  <p className="mb-6">Helping reduce carbon emissions by promoting EV adoption across India</p>
                  <div className="text-3xl font-bold">2.5M kg</div>
                  <div className="text-sm opacity-90">CO₂ Saved Annually</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <Target className="w-12 h-12 text-primary-green mb-6" />
              <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">Our Mission</h2>
              <p className="text-primary-gray-600 leading-relaxed">
                To democratize access to electric vehicle information and make EV adoption 
                seamless for Indian consumers. We believe every family deserves transparent, 
                comprehensive data to make the best vehicle choice for their needs and budget.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8"
            >
              <Eye className="w-12 h-12 text-primary-green mb-6" />
              <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">Our Vision</h2>
              <p className="text-primary-gray-600 leading-relaxed">
                To be India's most trusted platform for electric vehicle discovery and comparison, 
                accelerating the transition to sustainable mobility and contributing to a cleaner, 
                greener future for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="bg-primary-green-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold text-primary-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
              From a small startup to India's leading EV comparison platform
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-green-accent hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="card p-6">
                      <div className="bg-primary-green text-primary-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-primary-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center">
                    <div className="w-6 h-6 bg-primary-green rounded-full border-4 border-primary-white shadow-lg"></div>
                  </div>
                  
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    {/* Placeholder for alternating content */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-primary-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving Veherex forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 bg-primary-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder-car.svg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-green font-medium mb-3">{member.role}</p>
                <p className="text-sm text-primary-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-gray-900 mb-6">
                Why Choose Veherex?
              </h2>
              <div className="space-y-4">
                {[
                  'Comprehensive database of all EV models in India',
                  'Real-time pricing and specification updates',
                  'Unbiased comparisons and expert reviews',
                  'Free tools and calculators for informed decisions',
                  'Direct connections with authorized dealers',
                  'Expert support throughout your buying journey'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-green flex-shrink-0" />
                    <span className="text-primary-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="card p-6 text-center">
                <Award className="w-12 h-12 text-primary-green mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-gray-900 mb-2">Award Winning</div>
                <p className="text-sm text-primary-gray-600">Recognized industry leader</p>
              </div>
              <div className="card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary-green mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-gray-900 mb-2">Fast Growing</div>
                <p className="text-sm text-primary-gray-600">Expanding rapidly</p>
              </div>
              <div className="card p-6 text-center">
                <Globe className="w-12 h-12 text-primary-green mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-gray-900 mb-2">Pan India</div>
                <p className="text-sm text-primary-gray-600">Serving all major cities</p>
              </div>
              <div className="card p-6 text-center">
                <Heart className="w-12 h-12 text-primary-green mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary-gray-900 mb-2">Customer Love</div>
                <p className="text-sm text-primary-gray-600">99% satisfaction rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-primary-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Electric Revolution
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to make the switch to electric? Let us help you find the perfect EV for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-primary-white text-primary-green">
                Explore Vehicles
              </button>
              <button className="btn-secondary border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-green">
                Contact Our Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
