import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/user', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/login';
  };

  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/logout';
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'About Us', path: '/references' },
    { name: 'Contact Us', path: '/booking' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
      scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="h-20 w-auto md:h-28 relative flex items-center justify-center text-xl font-bold text-white">
            AuthenTIX
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-green-400 transition-colors duration-300 text-sm font-medium tracking-wide',
                  isActive && 'text-green-500 after:w-full'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors focus:outline-none">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center border border-green-500">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.displayName} className="h-full w-full object-cover" />
                  ) : (
                    <User size={16} className="text-gray-600" />
                  )}
                </div>
                <span className="text-sm font-medium">{user.displayName}</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 border border-gray-700 text-white">
                <DropdownMenuItem
                  onClick={handleProfileClick}
                  className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button
              onClick={handleLogin}
              className="text-white hover:text-green-400 transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white hover:text-green-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-green-400 py-2 text-xl transition-colors duration-300',
                  isActive && 'text-green-500'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  cn(
                    'text-white hover:text-green-400 py-2 text-xl flex items-center transition-colors duration-300',
                    isActive && 'text-green-500'
                  )
                }
              >
                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center mr-3 border border-green-500">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.displayName} className="h-full w-full object-cover" />
                  ) : (
                    <User size={16} className="text-gray-600" />
                  )}
                </div>
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-400 py-2 text-xl transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="text-white hover:text-green-400 py-2 text-xl transition-colors duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
