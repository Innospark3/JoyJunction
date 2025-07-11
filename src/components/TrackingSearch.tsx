
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TrackingSearchProps {
  onSearch: (trackingId: string) => void;
}

export const TrackingSearch = ({ onSearch }: TrackingSearchProps) => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      onSearch(trackingId.trim());
    }
  };

  return (
    <Card className="p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Track Your Donation</h2>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="text"
          placeholder="Enter your tracking ID (e.g., DON001)"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Track
        </Button>
      </form>
    </Card>
  );
};
