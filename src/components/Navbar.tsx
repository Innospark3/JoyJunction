
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
    <nav className="bg-card/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-4 mr-8" onClick={() => handleNavigation("/")}>
            <img 
              src="/lovable-uploads/73cb4187-0169-4334-9da4-980a06779f1f.png" 
              alt="JoyJunction Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground">JoyJunction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2 text-sm font-medium transition-colors leading-tight text-center max-w-[140px] rounded-md ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {user && (
              <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
                <span className="text-sm text-muted-foreground">
                  {user.email} {user.isAdmin && "(Admin)"}
                </span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1 border-primary/30 hover:bg-primary/10"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            )}
          </div>

          {/* Medium screens navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-3 py-2 text-xs font-medium transition-colors leading-tight text-center max-w-[100px] rounded-md ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
            
            {user && (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1 border-primary/30 hover:bg-primary/10"
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
              className="text-foreground hover:text-primary focus:outline-none"
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
                  className={`px-3 py-3 text-sm font-medium transition-colors text-left rounded-md ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-accent/50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {user && (
                <div className="border-t border-border pt-4 mt-4">
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    {user.email} {user.isAdmin && "(Admin)"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 flex items-center space-x-2 rounded-md"
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
