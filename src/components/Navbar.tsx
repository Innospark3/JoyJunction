
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
    <nav className="bg-card/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-turquoise/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand with increased spacing */}
          <Link to="/" className="flex items-center space-x-6 mr-12" onClick={() => handleNavigation("/")}>
            <img 
              src="/lovable-uploads/73cb4187-0169-4334-9da4-980a06779f1f.png" 
              alt="JoyJunction Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-turquoise">JoyJunction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-3 text-sm font-medium transition-all duration-200 leading-tight text-center max-w-[120px] rounded-lg min-h-[48px] flex items-center justify-center ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-turquoise to-turquoise/90 shadow-lg transform scale-105"
                    : "text-foreground hover:text-turquoise hover:bg-gradient-to-r hover:from-lime/30 hover:to-turquoise/20 hover:shadow-md hover:scale-102"
                }`}
                style={{
                  lineHeight: "1.2",
                  wordWrap: "break-word",
                  hyphens: "auto"
                }}
              >
                <span className="block text-center">
                  {item.name}
                </span>
              </button>
            ))}
            
            {user && (
              <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-turquoise/30">
                <span className="text-sm text-muted-foreground">
                  {user.email} {user.isAdmin && "(Admin)"}
                </span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1 border-turquoise/50 text-turquoise hover:bg-turquoise hover:text-white transition-all duration-200"
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
                className={`px-3 py-2 text-xs font-medium transition-all duration-200 leading-tight text-center max-w-[90px] rounded-md min-h-[40px] flex items-center justify-center ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-turquoise to-turquoise/90 shadow-md"
                    : "text-foreground hover:text-turquoise hover:bg-gradient-to-r hover:from-lime/30 hover:to-turquoise/20"
                }`}
                style={{
                  lineHeight: "1.1",
                  wordWrap: "break-word"
                }}
              >
                <span className="block text-center text-xs">
                  {item.name}
                </span>
              </button>
            ))}
            
            {user && (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-turquoise/30">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1 border-turquoise/50 text-turquoise hover:bg-turquoise hover:text-white"
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
              className="text-turquoise hover:text-purple focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-200 text-left rounded-lg ${
                    isActive(item.path)
                      ? "text-white bg-gradient-to-r from-turquoise to-turquoise/90"
                      : "text-foreground hover:text-turquoise hover:bg-gradient-to-r hover:from-lime/30 hover:to-turquoise/20"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {user && (
                <div className="border-t border-turquoise/30 pt-4 mt-4">
                  <div className="px-4 py-2 text-sm text-muted-foreground">
                    {user.email} {user.isAdmin && "(Admin)"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-turquoise hover:bg-gradient-to-r hover:from-lime/30 hover:to-turquoise/20 flex items-center space-x-2 rounded-lg transition-all duration-200"
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
