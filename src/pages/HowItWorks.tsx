
import { ArrowDown, User, Package, Truck, MapPin, Camera, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Sign Up & List Items",
      description: "Create an account and list the toys, clothes, books, or stationery you'd like to donate.",
      color: "text-blue-500 bg-blue-50",
    },
    {
      icon: Package,
      title: "Schedule Pickup",
      description: "Choose a convenient time for our verified delivery partners to collect your items.",
      color: "text-green-500 bg-green-50",
    },
    {
      icon: Truck,
      title: "Items Collected",
      description: "Our delivery agents carefully collect your donations and verify their condition.",
      color: "text-orange-500 bg-orange-50",
    },
    {
      icon: MapPin,
      title: "Smart Distribution",
      description: "We match your donations with children in need based on age, location, and requirements.",
      color: "text-purple-500 bg-purple-50",
    },
    {
      icon: Camera,
      title: "Delivery Confirmation",
      description: "Receive photos and feedback showing your items reaching happy children.",
      color: "text-red-500 bg-red-50",
    },
    {
      icon: Heart,
      title: "Track Your Impact",
      description: "Monitor your donation history and see the cumulative impact you've made.",
      color: "text-pink-500 bg-pink-50",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How Gift of Hope Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 6-step process makes donating easy, transparent, and impactful. From your doorstep to a child's smile.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8">
              <Card className="p-8 w-full max-w-md hover-scale transition-all duration-300 mb-4">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-500 mb-2">STEP {index + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-4">
                  <ArrowDown className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Gift of Hope?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">100% Transparency</h3>
              <p className="text-gray-600">Track every step of your donation journey with real-time updates.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Verified Partners</h3>
              <p className="text-gray-600">All delivery agents and organizations are thoroughly vetted.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Direct Impact</h3>
              <p className="text-gray-600">Your donations reach children directly, no middlemen involved.</p>
            </div>
          </div>
        </div>

        {/* Sponsor Banner */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-16">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Featured Donation Centers</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-lg">
                <span className="font-medium text-blue-800">Metro Children's Home</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-lg">
                <span className="font-medium text-green-800">Sunshine Orphanage</span>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-lg">
                <span className="font-medium text-purple-800">Hope Learning Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Giving Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of donors making a difference in children's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Start Donating
              </Button>
            </Link>
            <Link to="/partner">
              <Button size="lg" variant="outline" className="px-8 py-3">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
