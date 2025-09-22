import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EditProfileModal } from "@/components/modals/EditProfileModal";
import { OrderDetailsModal } from "@/components/modals/OrderDetailsModal";
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

// Mock data for demonstration
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 Garden Street, Green Valley, CA 90210",
  joinDate: "March 2024",
  avatar: "/placeholder.svg"
};

const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: "$45.99",
    items: 3,
    plants: ["Monstera Deliciosa", "Snake Plant", "Peace Lily"]
  },
  {
    id: "ORD-002", 
    date: "2024-01-10",
    status: "Shipped",
    total: "$29.99",
    items: 1,
    plants: ["Fiddle Leaf Fig"]
  },
  {
    id: "ORD-003",
    date: "2024-01-05", 
    status: "Processing",
    total: "$67.50",
    items: 2,
    plants: ["Rubber Plant", "Boston Fern"]
  }
];

const mockFavorites = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: "$24.99",
    image: "/placeholder.svg",
    inStock: true
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig", 
    price: "$39.99",
    image: "/placeholder.svg",
    inStock: false
  },
  {
    id: 3,
    name: "Snake Plant",
    price: "$18.99", 
    image: "/placeholder.svg",
    inStock: true
  }
];

const Dashboard = () => {
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
    setOrderDetailsOpen(true);
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      "Delivered": "default",
      "Shipped": "secondary", 
      "Processing": "outline"
    };
    return statusMap[status as keyof typeof statusMap] || "outline";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Manage your account, orders, and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Favorites</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Profile Information</span>
                  <Button variant="outline" onClick={() => setEditProfileOpen(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                    <AvatarFallback className="text-lg">
                      {mockUser.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold">{mockUser.name}</h3>
                    <p className="text-muted-foreground">Plant enthusiast since {mockUser.joinDate}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">{mockUser.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{mockUser.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:col-span-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">{mockUser.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Track your plant purchases and deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <p className="font-semibold">{order.id}</p>
                          <Badge variant={getStatusBadge(order.status) as any}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {order.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <ShoppingCart className="h-4 w-4" />
                            {order.items} items
                          </span>
                          <span className="font-medium text-foreground">{order.total}</span>
                        </div>
                      </div>
                      <Button variant="outline" onClick={() => handleViewOrder(order)}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Plants</CardTitle>
                <CardDescription>Your saved plants for future purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {mockFavorites.map((plant) => (
                    <Card key={plant.id} className="overflow-hidden">
                      <div className="aspect-square bg-muted">
                        <img 
                          src={plant.image} 
                          alt={plant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{plant.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{plant.price}</span>
                          <Badge variant={plant.inStock ? "default" : "secondary"}>
                            {plant.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" disabled={!plant.inStock} className="flex-1">
                            Add to Cart
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about orders</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Privacy Settings</p>
                      <p className="text-sm text-muted-foreground">Control your data sharing</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-muted-foreground">Permanently delete your account</p>
                    </div>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Keep your account secure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Change Password</p>
                      <p className="text-sm text-muted-foreground">Update your password</p>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add extra security</p>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Login History</p>
                      <p className="text-sm text-muted-foreground">View recent activity</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
      
      <EditProfileModal 
        open={editProfileOpen} 
        onOpenChange={setEditProfileOpen}
        user={mockUser}
      />
      
      <OrderDetailsModal
        open={orderDetailsOpen}
        onOpenChange={setOrderDetailsOpen}
        order={selectedOrder}
      />
    </div>
  );
};

export default Dashboard;