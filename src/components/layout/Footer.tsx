import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import logo from '/src/assets/logo.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-neutral-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Heritage Platform Logo" className="h-10 w-10 mr-2 rounded-full" />
              <span className="font-display font-semibold text-xl text-neutral-50">Tradiverse</span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Preserving cultural heritage through technology, empowering artisans, and connecting traditions to the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-neutral-300 hover:text-neutral-50 transition-colors">Marketplace</Link></li>
              <li><Link to="/artisans" className="text-neutral-300 hover:text-neutral-50 transition-colors">Artisans</Link></li>
              <li><Link to="/knowledge" className="text-neutral-300 hover:text-neutral-50 transition-colors">Knowledge Vault</Link></li>
              <li><Link to="/impact" className="text-neutral-300 hover:text-neutral-50 transition-colors">Impact Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-300 hover:text-neutral-50 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-neutral-300 hover:text-neutral-50 transition-colors">Blog</Link></li>
              <li><Link to="/support" className="text-neutral-300 hover:text-neutral-50 transition-colors">Support</Link></li>
              <li><Link to="/faq" className="text-neutral-300 hover:text-neutral-50 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary-400" />
                <a href="mailto:info@heritageplatform.org" className="text-neutral-300 hover:text-neutral-50 transition-colors">
                  info@heritageplatform.org
                </a>
              </li>
              <li>
                <form className="mt-2">
                  <label htmlFor="email-input" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subscribe to our newsletter
                  </label>
                  <div className="flex">
                    <input
                      type="email"
                      id="email-input"
                      placeholder="Enter your email"
                      className="py-2 px-3 rounded-l-md bg-primary-700 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-primary-400 w-full"
                    />
                    <button
                      type="submit"
                      className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-r-md transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">&copy; 2025 Heritage Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;