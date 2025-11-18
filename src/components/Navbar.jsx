import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userName, setUserName] = useState('User');
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'User';
    setUserName(name);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isUserMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-black font-bold hover:opacity-80 transition-opacity order-first sm:order-none"
          >
            <span className="font-bold text-2xl">Real root</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Our Projects', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}

            {/* Desktop User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-lg transition-shadow"
              >
                <UserIcon size={20} className="text-white" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                    <p className="font-semibold text-gray-900 text-sm">{userName}</p>
                    <p className="text-gray-600 text-xs truncate">{localStorage.getItem('userEmail')}</p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 transition-colors"
                  >
                    <UserIcon size={18} className="text-purple-600" />
                    <span className="font-medium">My Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors border-t border-gray-200"
                  >
                    <LogOut size={18} />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Our Projects', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md font-medium"
              >
                {item}
              </button>
            ))}

            <div className="border-t pt-2 mt-2">
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md font-medium"
              >
                <UserIcon size={18} />
                <div>
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-gray-600">{localStorage.getItem('userEmail')}</p>
                </div>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium mt-1"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;