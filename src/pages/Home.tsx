import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const categories = ["All", "Noir Art", "Crimson Etching", "Blueprint Dreams"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-offwhite py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Art that speaks in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">lines and shadows.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Discover our collection of hand-drawn illustrations, meticulously crafted to bring character to your space.
              </p>
              <a href="#shop" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-gray-900 bg-brand-pink hover:bg-pink-300 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Explore Illustrations
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/heroillustration/1000/1000" 
                  alt="Featured Illustration" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-sage/40 to-transparent mix-blend-multiply"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Browse our curated selection of unique art styles.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-brand-sage text-gray-900 shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-sage/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group bg-brand-offwhite rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">{product.category}</p>
                          <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                        </div>
                        <p className="text-lg font-medium text-gray-900">${product.price}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
