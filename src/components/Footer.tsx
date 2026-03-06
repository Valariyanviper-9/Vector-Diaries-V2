import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-blue py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
              Vector Diaries
            </Link>
            <p className="mt-2 text-sm text-gray-700">Hand-drawn illustrations for your space.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors">Home</Link>
            <a href="/#shop" className="text-gray-800 hover:text-gray-600 transition-colors">Shop</a>
            <Link to="/cart" className="text-gray-800 hover:text-gray-600 transition-colors">Cart</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-200 pt-8 flex justify-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Vector Diaries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
