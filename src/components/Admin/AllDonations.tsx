
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export const AllDonations = () => {
  const donations = [
    {
      id: 'DON001',
      donorName: 'John Smith',
      donorEmail: 'john.smith@email.com',
      items: ['Toy Car', 'Children\'s Book'],
      recipient: 'Sunshine Orphanage',
      amount: 'N/A',
      status: 'Delivered',
      date: '2024-01-15',
      pickupAddress: '123 Main St, City'
    },
    {
      id: 'DON002',
      donorName: 'Sarah Johnson',
      donorEmail: 'sarah.j@email.com',
      items: ['Winter Clothes', 'Storybooks'],
      recipient: 'Hope Children\'s Home',
      amount: 'N/A',
      status: 'In Transit',
      date: '2024-01-18',
      pickupAddress: '456 Oak Ave, Town'
    },
    {
      id: 'DON003',
      donorName: 'Mike Davis',
      donorEmail: 'mike.davis@email.com',
      items: ['Educational Books', 'Art Supplies'],
      recipient: 'Learning Center',
      amount: 'N/A',
      status: 'Pending Pickup',
      date: '2024-01-20',
      pickupAddress: '789 Pine St, Village'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
      case 'In Transit':
        return <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>;
      case 'Pending Pickup':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Pickup</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Donations Dashboard</h1>
          <p className="text-gray-600">Complete overview of all donations and their status</p>
        </div>

        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Donation Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Total Donations</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">Delivered</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-sm text-gray-600">In Transit</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">1</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donation ID</TableHead>
                  <TableHead>Donor Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Pickup Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="font-medium">{donation.id}</TableCell>
                    <TableCell>{donation.donorName}</TableCell>
                    <TableCell>{donation.donorEmail}</TableCell>
                    <TableCell>{donation.items.join(', ')}</TableCell>
                    <TableCell>{donation.recipient}</TableCell>
                    <TableCell>{getStatusBadge(donation.status)}</TableCell>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell>{donation.pickupAddress}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};
