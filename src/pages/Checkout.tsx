import { useForm } from 'react-hook-form';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

type CheckoutFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
};

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <Link to="/#shop" className="text-brand-pink hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Order data:', data);
    // Simulate redirect to external payment
    window.location.href = 'https://payment.example.com';
  };

  return (
    <div className="min-h-screen bg-brand-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/cart')} 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Cart
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Details</h2>
              
              <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('fullName', { required: 'Full name is required' })}
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('city', { required: 'City is required' })}
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode / ZIP</label>
                    <input
                      type="text"
                      id="postcode"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all ${errors.postcode ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('postcode', { required: 'Postcode is required' })}
                    />
                    {errors.postcode && <p className="mt-1 text-sm text-red-500">{errors.postcode.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      id="country"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all bg-white ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('country', { required: 'Country is required' })}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="EU">European Union</option>
                    </select>
                    {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full py-4 px-4 bg-brand-pink text-gray-900 font-medium rounded-full flex items-center justify-center hover:bg-pink-300 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Lock className="w-4 h-4 mr-2" />
                Pay Now
              </button>
              <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center">
                <Lock className="w-3 h-3 mr-1" /> Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
