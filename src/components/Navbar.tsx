
import { useState } from "react";
import { Menu, X, Heart, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Donate", path: "/donate" },
    { name: "Track", path: "/track" },
    { name: "Join as Partner", path: "/partner" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  // Add admin-only tab if user is admin
  if (user?.isAdmin) {
    navItems.push({ name: "All Donations", path: "/admin/donations" });
  }

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3" onClick={() => handleNavigation("/")}>
            <img 
              src="/lovable-uploads/73cb4187-0169-4334-9da4-980a06779f1f.png" 
              alt="JoyJunction Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">JoyJunction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-3 py-2 text-sm font-medium transition-colors leading-tight text-center max-w-[120px] ${
                  isActive(item.path)
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {user && (
              <div className="flex items-center space-x-4 ml-6">
                <span className="text-sm text-gray-600">
                  {user.email} {user.isAdmin && "(Admin)"}
                </span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            )}
          </div>

          {/* Medium screens navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-2 py-2 text-xs font-medium transition-colors leading-tight text-center max-w-[90px] ${
                  isActive(item.path)
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
            
            {user && (
              <div className="flex items-center space-x-2 ml-3">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors text-left ${
                    isActive(item.path)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {user && (
                <div className="border-t pt-4 mt-4">
                  <div className="px-3 py-2 text-sm text-gray-600">
                    {user.email} {user.isAdmin && "(Admin)"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
