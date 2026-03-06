import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-brand-pink hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-96 md:h-full min-h-[500px]"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-brand-sage/10"
            >
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-brand-sage text-gray-800 text-xs font-semibold rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-2xl font-medium text-gray-900 mb-6">${product.price}</p>
              
              <div className="prose prose-sm text-gray-600 mb-8">
                <p className="leading-relaxed">{product.description}</p>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-4 px-8 rounded-full font-medium text-lg flex items-center justify-center transition-all duration-300 ${
                  isAdded 
                    ? 'bg-green-500 text-white' 
                    : 'bg-brand-pink text-gray-900 hover:bg-pink-300 shadow-md hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-6 h-6 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Add to Cart
                  </>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
