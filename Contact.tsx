import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Mumbai',
      address: '123 Business Park, Andheri East, Mumbai - 400069',
      phone: '+91 98765 43210',
      email: 'mumbai@veherex.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Delhi',
      address: '456 Corporate Hub, Connaught Place, New Delhi - 110001',
      phone: '+91 98765 43211',
      email: 'delhi@veherex.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Bangalore',
      address: '789 Tech Center, Koramangala, Bangalore - 560034',
      phone: '+91 98765 43212',
      email: 'bangalore@veherex.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our EV experts',
      contact: '+91 98765 43210',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed information',
      contact: 'support@veherex.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Headphones,
      title: 'Customer Care',
      description: 'For technical support',
      contact: '1800-123-VEHEREX',
      action: 'Call Toll-Free'
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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about electric vehicles? Our experts are here to help you make the right choice.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-primary-gray-600">Choose the best way to reach us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-green-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold text-primary-gray-900 mb-2">{method.title}</h3>
                <p className="text-primary-gray-600 mb-3">{method.description}</p>
                <p className="font-medium text-primary-green mb-4">{method.contact}</p>
                <button className="btn-primary text-sm px-4 py-2">{method.action}</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-primary-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="vehicle-inquiry">Vehicle Inquiry</option>
                      <option value="comparison-help">Comparison Help</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-primary-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">Our Locations</h3>
                <div className="bg-primary-gray-100 h-64 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-green mx-auto mb-2" />
                    <p className="text-primary-gray-600">Interactive Map</p>
                    <p className="text-sm text-primary-gray-500">Find us across India</p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-primary-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary-gray-900 mb-6">Office Locations</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-primary-gray-100 pb-6 last:border-b-0">
                      <h4 className="text-lg font-semibold text-primary-gray-900 mb-3">{office.city}</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary-green mt-0.5" />
                          <span className="text-primary-gray-600">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary-green" />
                          <span className="text-primary-gray-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary-green" />
                          <span className="text-primary-gray-600">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary-green" />
                          <span className="text-primary-gray-600">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-primary-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
                  How accurate are your vehicle comparisons?
                </h4>
                <p className="text-primary-gray-600">
                  Our data is sourced directly from manufacturers and updated regularly to ensure accuracy.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
                  Do you help with vehicle financing?
                </h4>
                <p className="text-primary-gray-600">
                  We provide EMI calculators and can connect you with our financing partners for the best deals.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
                  Can I book a test drive through Veherex?
                </h4>
                <p className="text-primary-gray-600">
                  Yes, we can arrange test drives with authorized dealers in your city.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
                  Is your service free to use?
                </h4>
                <p className="text-primary-gray-600">
                  Yes, all our comparison tools and resources are completely free for consumers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
                  Do you cover all EV brands in India?
                </h4>
                <p className="text-primary-gray-600">
                  We cover all major EV brands and continuously add new models as they launch.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-gray-900 mb-2">
                  How often is your pricing updated?
                </h4>
                <p className="text-primary-gray-600">
                  Prices are updated weekly to reflect the latest market conditions and offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
