
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Package, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/73cb4187-0169-4334-9da4-980a06779f1f.png" 
              alt="JoyJunction Logo" 
              className="h-24 w-24 mx-auto mb-6 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Donate Love.<br />Deliver Hope
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform children's lives by donating toys and essentials. Track your donations from your doorstep to a child's smile, creating lasting joy in communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => handleNavigation("/donate")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Start Donating
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleNavigation("/how-it-works")}
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Making a Difference Together
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Join thousands of donors who are spreading joy and hope to children in need
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-foreground">Easy Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Simple process to donate toys, clothes, and essentials from your home
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-foreground">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Follow your donation's journey from pickup to delivery
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-foreground">Direct Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  See exactly how your donations bring joy to children
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-foreground">Community Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Join a network of caring individuals making a difference
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Spread Joy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your donation can bring a smile to a child's face. Start your journey of giving today.
          </p>
          <Button 
            size="lg"
            onClick={() => handleNavigation("/donate")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl shadow-lg"
          >
            <Heart className="mr-2 h-6 w-6" />
            Donate Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
