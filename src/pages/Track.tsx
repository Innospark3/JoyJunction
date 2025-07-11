
import { useState } from "react";
import { TrackingSearch } from "@/components/TrackingSearch";
import { DonationStatus } from "@/components/DonationStatus";
import { RecentDonations } from "@/components/RecentDonations";

const Track = () => {
  const [searchedTrackingId, setSearchedTrackingId] = useState("");

  const handleSearch = (trackingId: string) => {
    setSearchedTrackingId(trackingId);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Donations</h1>
          <p className="text-xl text-gray-600">
            Follow your items' journey from your home to a child's smile
          </p>
        </div>

        <TrackingSearch onSearch={handleSearch} />

        {searchedTrackingId && (
          <div className="mb-8">
            <DonationStatus trackingId={searchedTrackingId} />
          </div>
        )}

        <RecentDonations />
      </div>
    </div>
  );
};

export default Track;
