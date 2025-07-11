
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, MapPin, Heart } from "lucide-react";

interface DonationStatusProps {
  trackingId: string;
}

export const DonationStatus = ({ trackingId }: DonationStatusProps) => {
  const getStatusInfo = (id: string) => {
    if (id === "DON001") {
      return {
        status: "Delivered",
        items: ["Toy Car", "Children's Book", "School Supplies"],
        recipient: "Sunshine Orphanage",
        deliveryDate: "2024-01-15",
        photos: ["/api/placeholder/300/200", "/api/placeholder/300/200"],
        feedback: "The children absolutely loved the toys and books! Thank you so much for your generosity."
      };
    } else if (id === "DON002") {
      return {
        status: "In Transit",
        items: ["Winter Clothes", "Storybooks"],
        recipient: "Hope Children's Home",
        deliveryDate: "Expected: 2024-01-20",
        photos: [],
        feedback: ""
      };
    }
    return null;
  };

  const donation = getStatusInfo(trackingId);

  if (!donation) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-600">No donation found with tracking ID: {trackingId}</p>
        <p className="text-sm text-gray-500 mt-2">Please check your tracking ID and try again.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">Tracking ID: {trackingId}</h3>
          <Badge variant={donation.status === "Delivered" ? "default" : "secondary"}>
            {donation.status}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <Package className="h-4 w-4 mr-2" />
              Items Donated
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {donation.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Recipient
            </h4>
            <p className="text-gray-600">{donation.recipient}</p>
            <p className="text-sm text-gray-500 mt-1">{donation.deliveryDate}</p>
          </div>
        </div>
      </Card>

      {donation.status === "Delivered" && (
        <>
          {donation.photos.length > 0 && (
            <Card className="p-6">
              <h4 className="font-medium mb-4">Delivery Photos</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donation.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Delivery photo ${index + 1}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </Card>
          )}
          
          {donation.feedback && (
            <Card className="p-6">
              <h4 className="font-medium mb-4 flex items-center">
                <Heart className="h-4 w-4 mr-2 text-red-500" />
                Feedback from Recipients
              </h4>
              <p className="text-gray-600 italic">"{donation.feedback}"</p>
            </Card>
          )}
        </>
      )}
    </div>
  );
};
