import { Heart, Users, Gift, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/73cb4187-0169-4334-9da4-980a06779f1f.png" 
                alt="JoyJunction Logo" 
                className="h-32 w-32 md:h-40 md:w-40 mr-6 object-contain"
              />
              <Heart className="h-20 w-20 md:h-24 md:w-24 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Donate Love. Deliver Hope.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Connect your generous heart with children in need. Your toys, clothes, books, and stationery can brighten a child's world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold shadow-lg"
                onClick={() => handleNavigation("/donate")}
              >
                Start Donating Today
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 border-2 border-white hover:border-gray-200 px-8 py-3 font-semibold shadow-lg"
                onClick={() => handleNavigation("/how-it-works")}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between generous donors and underprivileged children, ensuring every donation reaches those who need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-scale transition-all duration-300 border-2 hover:border-blue-200">
              <Gift className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Easy Donations</h3>
              <p className="text-gray-600">
                List your items in minutes. We handle pickup, verification, and delivery to children in need.
              </p>
            </Card>

            <Card className="p-8 text-center hover-scale transition-all duration-300 border-2 hover:border-green-200">
              <Truck className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reliable Delivery</h3>
              <p className="text-gray-600">
                Our network of verified delivery partners ensures your donations reach the right hands safely.
              </p>
            </Card>

            <Card className="p-8 text-center hover-scale transition-all duration-300 border-2 hover:border-orange-200">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Real Impact</h3>
              <p className="text-gray-600">
                Track your donations and see the smiles you create. Every item makes a difference in a child's life.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Making a Difference Together</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,847</div>
              <div className="text-gray-600">Children Helped</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-green-600 mb-2">32,156</div>
              <div className="text-gray-600">Items Donated</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-orange-600 mb-2">8,420</div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-purple-600 mb-2">245</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Banner */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-6">Proudly supported by our partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Hope Foundation</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Children First NGO</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Community Care Center</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Bright Future Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Ready to Make a Child Smile?</h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            Your unused items can become someone's treasure. Start your journey of giving today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 font-semibold shadow-lg"
            onClick={() => handleNavigation("/donate")}
          >
            Donate Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
