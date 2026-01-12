import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  TrendingUp,
  Zap,
  Car,
  Leaf
} from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All News', icon: TrendingUp },
    { id: 'launches', label: 'New Launches', icon: Car },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'policy', label: 'Policy & Gov', icon: Tag },
    { id: 'environment', label: 'Environment', icon: Leaf }
  ];

  const featuredNews = {
    id: '1',
    title: 'Government Announces New EV Policy: ₹50,000 Subsidy for Electric Cars',
    excerpt: 'The Indian government has unveiled a comprehensive new policy to boost electric vehicle adoption, including increased subsidies and charging infrastructure development.',
    image: '/images/placeholder-news-1.jpg',
    category: 'policy',
    author: 'Rajesh Kumar',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true
  };

  const newsArticles = [
    {
      id: '2',
      title: 'Tata Motors Launches New Nexon EV with 500km Range',
      excerpt: 'The latest iteration of Tata Nexon EV promises industry-leading range and advanced features.',
      image: '/images/placeholder-news-2.jpg',
      category: 'launches',
      author: 'Priya Sharma',
      date: '2024-01-14',
      readTime: '3 min read'
    },
    {
      id: '3',
      title: 'India Crosses 2 Million EV Sales Milestone',
      excerpt: 'Electric vehicle sales in India have reached a historic milestone, showing accelerated adoption.',
      image: '/images/placeholder-news-3.jpg',
      category: 'technology',
      author: 'Arjun Patel',
      date: '2024-01-13',
      readTime: '4 min read'
    },
    {
      id: '4',
      title: 'Fast Charging Network Expansion: 10,000 New Stations Planned',
      excerpt: 'Major charging network operators announce ambitious expansion plans across Indian highways.',
      image: '/images/placeholder-news-4.jpg',
      category: 'technology',
      author: 'Sneha Reddy',
      date: '2024-01-12',
      readTime: '6 min read'
    },
    {
      id: '5',
      title: 'MG Motors Unveils Revolutionary Battery Technology',
      excerpt: 'New solid-state battery technology promises 15-minute charging and 800km range.',
      image: '/images/placeholder-news-5.jpg',
      category: 'technology',
      author: 'Vikram Singh',
      date: '2024-01-11',
      readTime: '7 min read'
    },
    {
      id: '6',
      title: 'Electric Vehicles Reduce Urban Air Pollution by 30%',
      excerpt: 'New study reveals significant environmental benefits of EV adoption in major Indian cities.',
      image: '/images/placeholder-news-6.jpg',
      category: 'environment',
      author: 'Dr. Meera Joshi',
      date: '2024-01-10',
      readTime: '5 min read'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const NewsCard = ({ article, featured = false }: { article: any; featured?: boolean }) => (
    <motion.article
      className={`card overflow-hidden cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 bg-primary-gray-100 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-car.svg';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-green text-primary-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`font-bold text-primary-gray-900 mb-3 line-clamp-2 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {article.title}
        </h3>
        
        <p className="text-primary-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-primary-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <ArrowRight className="w-5 h-5 text-primary-green" />
        </div>
      </div>
    </motion.article>
  );

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
            EV News & Updates
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay updated with the latest developments in India's electric vehicle industry
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                className="w-full pl-10 pr-4 py-3 border border-primary-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-green text-primary-white'
                      : 'bg-primary-gray-100 text-primary-gray-700 hover:bg-primary-green-accent'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-gray-900 mb-6">Featured Story</h2>
            <NewsCard article={featuredNews} featured={true} />
          </div>

          {/* Latest News */}
          <div>
            <h2 className="text-2xl font-bold text-primary-gray-900 mb-6">Latest News</h2>
            
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NewsCard article={article} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-primary-gray-600 mb-4">
                  No news found matching your criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-primary-green text-primary-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter for the latest EV news, reviews, and industry insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-primary-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-white"
                />
                <button className="btn-secondary bg-primary-white text-primary-green px-6 py-3">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm mt-4 opacity-90">
                Join 25,000+ EV enthusiasts. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="section-padding bg-primary-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-gray-900 mb-4">Industry Insights</h2>
            <p className="text-lg text-primary-gray-600">Key trends shaping India's EV market</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary-green-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-gray-900 mb-3">Market Growth</h3>
              <p className="text-3xl font-bold text-primary-green mb-2">300%</p>
              <p className="text-primary-gray-600">YoY EV sales growth in 2023</p>
            </motion.div>
            
            <motion.div
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-primary-green-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-gray-900 mb-3">Charging Stations</h3>
              <p className="text-3xl font-bold text-primary-green mb-2">5,000+</p>
              <p className="text-primary-gray-600">Public charging points nationwide</p>
            </motion.div>
            
            <motion.div
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-primary-green-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-gray-900 mb-3">CO₂ Reduction</h3>
              <p className="text-3xl font-bold text-primary-green mb-2">2.5M</p>
              <p className="text-primary-gray-600">Tons of CO₂ saved annually</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
