
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Truck, Users, Clock, Star, Shield, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Partner = () => {
  const [formData, setFormData] = useState({
    partnerType: "",
    name: "",
    organization: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    experience: "",
    availability: "",
    vehicleType: "",
    motivation: "",
    references: "",
    agreedToTerms: false,
    agreedToBackground: false,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms || !formData.agreedToBackground) {
      toast({
        title: "Agreement Required",
        description: "Please agree to all terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest! We'll review your application and contact you within 3-5 business days.",
    });
    
    // Reset form
    setFormData({
      partnerType: "",
      name: "",
      organization: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      experience: "",
      availability: "",
      vehicleType: "",
      motivation: "",
      references: "",
      agreedToTerms: false,
      agreedToBackground: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Truck className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Delivery Partner</h1>
          <p className="text-xl text-gray-600">
            Join our network of compassionate volunteers who help bridge the gap between donors and children in need.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover-scale transition-all duration-300">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Make a Difference</h3>
            <p className="text-gray-600 text-sm">Be the bridge that connects generosity with need</p>
          </Card>
          <Card className="p-6 text-center hover-scale transition-all duration-300">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-gray-600 text-sm">Work on your own schedule, help when you can</p>
          </Card>
          <Card className="p-6 text-center hover-scale transition-all duration-300">
            <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Community Impact</h3>
            <p className="text-gray-600 text-sm">Join a network of like-minded individuals</p>
          </Card>
        </div>

        {/* Sponsor Banner */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Partner Program sponsored by:</p>
            <div className="flex justify-center items-center gap-4">
              <span className="bg-white px-4 py-2 rounded-lg font-semibold text-purple-600">Delivery Heroes</span>
              <span className="bg-white px-4 py-2 rounded-lg font-semibold text-pink-600">Community Connect</span>
            </div>
          </div>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Partner Type */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Partnership Type</h2>
              <div>
                <Label htmlFor="partnerType">I want to join as: *</Label>
                <Select value={formData.partnerType} onValueChange={(value) => handleInputChange("partnerType", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Volunteer</SelectItem>
                    <SelectItem value="organization">Organization/NGO</SelectItem>
                    <SelectItem value="business">Business/Company</SelectItem>
                    <SelectItem value="student">Student Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Personal/Organization Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">{formData.partnerType === "individual" ? "Full Name" : "Contact Person Name"} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                {formData.partnerType !== "individual" && (
                  <div>
                    <Label htmlFor="organization">Organization/Company Name *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                )}
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Service Area</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Address/Service Area *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter the area where you can provide pickup and delivery services"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                    className="mt-1"
                    rows={2}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Availability */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Experience & Availability</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No previous experience</SelectItem>
                      <SelectItem value="some">Some volunteer experience</SelectItem>
                      <SelectItem value="extensive">Extensive volunteer experience</SelectItem>
                      <SelectItem value="professional">Professional in this field</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="evenings">Weekday evenings</SelectItem>
                      <SelectItem value="flexible">Flexible schedule</SelectItem>
                      <SelectItem value="full-time">Full-time availability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vehicleType">Transportation Method *</Label>
                  <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange("vehicleType", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select transportation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Personal Car</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="bicycle">Bicycle</SelectItem>
                      <SelectItem value="van">Van/Truck</SelectItem>
                      <SelectItem value="public">Public Transportation</SelectItem>
                      <SelectItem value="walking">Walking (local area only)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div>
              <Label htmlFor="motivation">Why do you want to become a delivery partner? *</Label>
              <Textarea
                id="motivation"
                placeholder="Tell us about your motivation to help children in need..."
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                required
                className="mt-1"
                rows={4}
              />
            </div>

            {/* References */}
            <div>
              <Label htmlFor="references">References (Optional)</Label>
              <Textarea
                id="references"
                placeholder="Please provide contact information for 2 references who can vouch for your character"
                value={formData.references}
                onChange={(e) => handleInputChange("references", e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions of the Gift of Hope delivery partner program. I understand that I will be responsible for safe handling and timely delivery of donated items. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="background"
                  checked={formData.agreedToBackground}
                  onCheckedChange={(checked) => handleInputChange("agreedToBackground", checked as boolean)}
                />
                <Label htmlFor="background" className="text-sm">
                  I consent to a background verification check as part of the partner approval process. I understand this is necessary to ensure the safety of donated items and recipients. *
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 py-3">
                Submit Application
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                We'll review your application and contact you within 3-5 business days
              </p>
            </div>
          </form>
        </Card>

        {/* Additional Info */}
        <Card className="p-6 mt-8 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold">What Happens Next?</h3>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>• Application review (3-5 business days)</p>
            <p>• Background verification check</p>
            <p>• Virtual orientation session</p>
            <p>• Welcome kit and partner ID</p>
            <p>• Start making a difference!</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Partner;
