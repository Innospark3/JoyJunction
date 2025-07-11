
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Gift, MapPin, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Impact = () => {
  const stats = [
    { icon: Users, label: "Children Helped", value: "15,847", color: "text-blue-600" },
    { icon: Gift, label: "Items Donated", value: "32,156", color: "text-green-600" },
    { icon: Heart, label: "Active Donors", value: "8,420", color: "text-red-600" },
    { icon: MapPin, label: "Cities Reached", value: "127", color: "text-purple-600" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Donor",
      image: "👩‍💼",
      content: "Gift of Hope made donating so easy! I donated my daughter's outgrown clothes and toys, and seeing the photos of children enjoying them brought tears of joy to my eyes. The tracking system is amazing!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Delivery Partner",
      image: "👨‍🚚",
      content: "Being a delivery partner has been the most rewarding experience. Every pickup and delivery reminds me of the power of community. The children's smiles make every mile worth it.",
      rating: 5,
    },
    {
      name: "Sister Mary",
      role: "Sunshine Orphanage",
      image: "👩‍🏫",
      content: "Gift of Hope has been a blessing for our children. The quality of donations and the care with which they're delivered shows the love behind each gift. Our children have never been happier!",
      rating: 5,
    },
    {
      name: "Ankit Patel",
      role: "Donor",
      image: "👨‍💻",
      content: "I was skeptical about online donation platforms, but Gift of Hope's transparency changed my mind. Being able to track where my items went and see their impact has made me a regular donor.",
      rating: 5,
    },
  ];

  const impactStories = [
    {
      title: "Rohan's Reading Revolution",
      location: "Mumbai, Maharashtra",
      description: "8-year-old Rohan received a collection of educational books through our platform. His reading skills improved dramatically, and he's now the top student in his class.",
      impact: "1 child's education transformed",
      image: "📚",
    },
    {
      title: "Winter Warmth Drive",
      location: "Delhi, India",
      description: "During the harsh Delhi winter, our donors provided warm clothes to 150 children at three orphanages, ensuring they stayed healthy and comfortable.",
      impact: "150 children kept warm",
      image: "🧥",
    },
    {
      title: "Creative Arts Program",
      location: "Bangalore, Karnataka",
      description: "Art supplies and stationery donations enabled a new creative arts program, giving 75 children a new way to express themselves and develop their talents.",
      impact: "75 children discovered new talents",
      image: "🎨",
    },
  ];

  const monthlyStats = [
    { month: "Jan", donations: 1200, children: 800 },
    { month: "Feb", donations: 1500, children: 950 },
    { month: "Mar", donations: 1800, children: 1100 },
    { month: "Apr", donations: 2100, children: 1300 },
    { month: "May", donations: 2400, children: 1500 },
    { month: "Jun", donations: 2700, children: 1700 },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Impact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation creates ripples of joy and hope. See how our community is transforming lives, one gift at a time.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover-scale transition-all duration-300">
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Monthly Growth Chart */}
        <Card className="p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Monthly Growth</h2>
          <div className="grid grid-cols-6 gap-4">
            {monthlyStats.map((month, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div 
                    className="bg-blue-500 rounded-t-lg mx-auto mb-1" 
                    style={{ height: `${(month.donations / 30)}px`, width: '20px' }}
                  ></div>
                  <div 
                    className="bg-green-500 rounded-b-lg mx-auto" 
                    style={{ height: `${(month.children / 20)}px`, width: '20px' }}
                  ></div>
                </div>
                <div className="text-sm font-medium">{month.month}</div>
                <div className="text-xs text-gray-500">{month.donations} items</div>
                <div className="text-xs text-gray-500">{month.children} children</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm">Items Donated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">Children Helped</span>
            </div>
          </div>
        </Card>

        {/* Impact Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Real Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="p-6 hover-scale transition-all duration-300">
                <div className="text-6xl mb-4 text-center">{story.image}</div>
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <div className="flex items-center gap-1 text-gray-500 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{story.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3">
                  <p className="font-semibold text-green-700">{story.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-scale transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="h-6 w-6 text-gray-300 mb-2" />
                  <p className="text-gray-700 italic">{testimonial.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsor Recognition */}
        <Card className="p-8 mb-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold text-center mb-6">Special Thanks to Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-bold text-purple-600">Hope Foundation</h3>
              <p className="text-sm text-gray-600">Major Sponsor</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-bold text-blue-600">Tech for Good</h3>
              <p className="text-sm text-gray-600">Platform Sponsor</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-bold text-green-600">Delivery Heroes</h3>
              <p className="text-sm text-gray-600">Logistics Partner</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-bold text-orange-600">Community First</h3>
              <p className="text-sm text-gray-600">Outreach Partner</p>
            </div>
          </div>
        </Card>

        {/* Regional Impact */}
        <Card className="p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Impact Across India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">North India</div>
              <div className="text-gray-600 mb-2">Delhi, Punjab, Haryana</div>
              <div className="text-sm">5,200 children helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">West India</div>
              <div className="text-gray-600 mb-2">Mumbai, Pune, Ahmedabad</div>
              <div className="text-sm">6,800 children helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">South India</div>
              <div className="text-gray-600 mb-2">Bangalore, Chennai, Hyderabad</div>
              <div className="text-sm">3,847 children helped</div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Be Part of This Amazing Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Every donation, no matter how small, creates a lasting impact. Join thousands of others in spreading joy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Start Donating
              </Button>
            </Link>
            <Link to="/partner">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
