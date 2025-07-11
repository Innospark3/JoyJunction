
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

export const RecentDonations = () => {
  const recentDonations = [
    {
      id: "DON003",
      items: ["Educational Books", "Art Supplies"],
      recipient: "Learning Center",
      status: "Pending Pickup",
      date: "2024-01-18"
    },
    {
      id: "DON004",
      items: ["Warm Clothes"],
      recipient: "Community Shelter",
      status: "In Transit",
      date: "2024-01-17"
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
      <div className="space-y-4">
        {recentDonations.map((donation) => (
          <div key={donation.id} className="border-l-4 border-blue-200 pl-4 py-2">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">{donation.id}</span>
              <Badge variant="secondary">{donation.status}</Badge>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              Items: {donation.items.join(", ")}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {donation.recipient}
              </span>
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {donation.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
