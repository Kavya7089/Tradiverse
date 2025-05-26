import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Search, User } from 'lucide-react';
import logo from '/src/assets/logo.png'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  const navItems = [
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Artisans', path: '/artisans' },
    { name: 'Knowledge Vault', path: '/knowledge' },
    { name: 'Impact', path: '/impact' },
   
    
  ];

  return (
    <nav className='fixed w-full z-50  bg-primary-900 transition-all duration-300 '>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Heritage Platform Logo" 
                className="h-10 w-10 mr-2 rounded-full" 
              />
              <span className={`font-display font-semibold text-lg ${
                scrollPosition > 50 ? 'text-neutral-50' : 'text-primary-700'
              }`}>
                Tradiverse
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrollPosition > 50 
                      ? 'text-neutral-50 hover:bg-primary-600' 
                      : 'text-primary-600 hover:bg-primary-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <button className={`p-2 rounded-full transition-colors ${
              scrollPosition > 50 
                ? 'text-neutral-50 hover:bg-primary-700' 
                : 'text-primary-800 hover:bg-primary-100'
            }`}>
              <Search size={20} />
            </button>
            <button className={`p-2 rounded-full transition-colors ${
              scrollPosition > 50 
                ? 'text-neutral-50 hover:bg-primary-700' 
                : 'text-primary-800 hover:bg-primary-100'
            }`}>
              <Globe size={20} />
            </button>
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  scrollPosition > 50 
                    ? 'text-neutral-50 hover:bg-primary-700' 
                    : 'text-primary-800 hover:bg-primary-100'
                }`}
              >
                <User size={20} />
              </button>

              {/* User menu dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link 
                      to="/signIn" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/signUp" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrollPosition > 50 
                  ? 'text-neutral-50 hover:bg-primary-700' 
                  : 'text-primary-800 hover:bg-primary-100'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-800 bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-primary-700">
            <div className="flex items-center justify-around px-5">
              <button className="p-2 rounded-full text-neutral-50 hover:bg-primary-700">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full text-neutral-50 hover:bg-primary-700">
                <Globe size={20} />
              </button>
              <button className="p-2 rounded-full text-neutral-50 hover:bg-primary-700">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;