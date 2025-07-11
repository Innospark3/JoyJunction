import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, Heart, MapPin, Calendar, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Track = () => {
  const [trackingId, setTrackingId] = useState("");
  const [donation, setDonation] = useState<any>(null);
  const { toast } = useToast();

  // Mock data for demonstration
  const mockDonations = {
    "DON001": {
      id: "DON001",
      items: "Educational Books (5 pieces)",
      status: "delivered",
      pickupDate: "2024-01-15",
      deliveryDate: "2024-01-18",
      recipient: "Sunshine Children's Home",
      location: "Mumbai, Maharashtra",
      deliveryAgent: "Rajesh Kumar",
      photos: [
        "Children reading the donated books",
        "Books being distributed in classroom"
      ],
      feedback: "The children were absolutely delighted with the books! Thank you so much for this wonderful donation. The books are perfect for their age group and will help improve their reading skills.",
      timeline: [
        { status: "submitted", date: "2024-01-14", description: "Donation request submitted" },
        { status: "confirmed", date: "2024-01-14", description: "Pickup scheduled" },
        { status: "collected", date: "2024-01-15", description: "Items collected from donor" },
        { status: "verified", date: "2024-01-16", description: "Items verified and sorted" },
        { status: "in-transit", date: "2024-01-17", description: "En route to recipient" },
        { status: "delivered", date: "2024-01-18", description: "Successfully delivered to children" },
      ]
    },
    "DON002": {
      id: "DON002",
      items: "Winter Clothes (8 pieces)",
      status: "in-transit",
      pickupDate: "2024-01-20",
      deliveryDate: null,
      recipient: "Hope Foundation",
      location: "Delhi, India",
      deliveryAgent: "Priya Sharma",
      photos: [],
      feedback: null,
      timeline: [
        { status: "submitted", date: "2024-01-19", description: "Donation request submitted" },
        { status: "confirmed", date: "2024-01-19", description: "Pickup scheduled" },
        { status: "collected", date: "2024-01-20", description: "Items collected from donor" },
        { status: "verified", date: "2024-01-21", description: "Items verified and sorted" },
        { status: "in-transit", date: "2024-01-22", description: "En route to recipient" },
      ]
    }
  };

  const handleTrack = () => {
    if (!trackingId.trim()) {
      toast({
        title: "Tracking ID Required",
        description: "Please enter a valid tracking ID to track your donation.",
        variant: "destructive",
      });
      return;
    }

    const foundDonation = mockDonations[trackingId as keyof typeof mockDonations];
    if (foundDonation) {
      setDonation(foundDonation);
    } else {
      toast({
        title: "Donation Not Found",
        description: "No donation found with this tracking ID. Please check and try again.",
        variant: "destructive",
      });
      setDonation(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "in-transit": return "bg-blue-500";
      case "verified": return "bg-yellow-500";
      case "collected": return "bg-orange-500";
      case "confirmed": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered": return "Delivered";
      case "in-transit": return "In Transit";
      case "verified": return "Verified";
      case "collected": return "Collected";
      case "confirmed": return "Confirmed";
      case "submitted": return "Submitted";
      default: return "Unknown";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Package className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Donation</h1>
          <p className="text-xl text-gray-600">
            Enter your tracking ID to see the journey of your donation and its impact.
          </p>
        </div>

        {/* Tracking Input */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="trackingId">Tracking ID</Label>
              <Input
                id="trackingId"
                placeholder="Enter your tracking ID (e.g., DON001)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                Try "DON001" or "DON002" for demo purposes
              </p>
            </div>
            <Button onClick={handleTrack} className="bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4 mr-2" />
              Track Donation
            </Button>
          </div>
        </Card>

        {/* Sponsor Banner */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Tracking powered by our logistics partners:</p>
            <div className="flex justify-center items-center gap-4">
              <span className="bg-white px-3 py-1 rounded-lg font-medium text-green-600">FastTrack Delivery</span>
              <span className="bg-white px-3 py-1 rounded-lg font-medium text-blue-600">CareLogistics</span>
            </div>
          </div>
        </div>

        {/* Donation Details */}
        {donation && (
          <div className="space-y-8">
            {/* Overview Card */}
            <Card className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Donation #{donation.id}</h2>
                  <p className="text-gray-600">{donation.items}</p>
                </div>
                <Badge className={`${getStatusColor(donation.status)} text-white`}>
                  {getStatusText(donation.status)}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Pickup Date</p>
                    <p className="font-medium">{donation.pickupDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500">Recipient</p>
                    <p className="font-medium">{donation.recipient}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500">Delivery Agent</p>
                    <p className="font-medium">{donation.deliveryAgent}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">Donation Timeline</h3>
              <div className="space-y-4">
                {donation.timeline.map((item: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(item.status)}`}></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="font-medium">{item.description}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Photos and Feedback */}
            {donation.status === "delivered" && (
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Camera className="h-6 w-6 text-purple-500" />
                  Delivery Confirmation
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Photos from Delivery</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {donation.photos.map((photo: string, index: number) => (
                      <div key={index} className="bg-gray-100 rounded-lg p-4 text-center">
                        <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">{photo}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Feedback from Recipients
                  </h4>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 italic">"{donation.feedback}"</p>
                    <p className="text-sm text-gray-500 mt-2">- {donation.recipient}</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Impact Summary */}
            <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50">
              <h3 className="text-xl font-bold mb-4">Your Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {donation.status === "delivered" ? "5" : "0"}
                  </div>
                  <div className="text-gray-600">Children Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">1</div>
                  <div className="text-gray-600">Donation Completed</div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Sample Tracking IDs */}
        {!donation && (
          <Card className="p-8">
            <h3 className="text-lg font-semibold mb-4">Don't have a tracking ID?</h3>
            <p className="text-gray-600 mb-4">
              Your tracking ID is sent to your email after successful donation submission. For demo purposes, try these sample IDs:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer" onClick={() => setTrackingId("DON001")}>
                DON001 (Delivered)
              </Badge>
              <Badge variant="outline" className="cursor-pointer" onClick={() => setTrackingId("DON002")}>
                DON002 (In Transit)
              </Badge>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Track;
