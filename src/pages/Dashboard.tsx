import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Package, Clock, CheckCircle2, User, LogOut, Plus } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const activeOrders = [
    {
      id: "ORD001",
      service: "Wash & Iron",
      items: "15 items",
      pickupDate: "2025-11-16",
      deliveryDate: "2025-11-18",
      status: "In Progress",
      amount: "₹2,235",
    },
    {
      id: "ORD002",
      service: "Dry Cleaning",
      items: "3 items",
      pickupDate: "2025-11-15",
      deliveryDate: "2025-11-17",
      status: "Picked Up",
      amount: "₹597",
    },
  ];

  const completedOrders = [
    {
      id: "ORD003",
      service: "Wash & Fold",
      items: "20 items",
      pickupDate: "2025-11-10",
      deliveryDate: "2025-11-12",
      status: "Delivered",
      amount: "₹1,980",
    },
    {
      id: "ORD004",
      service: "Iron Only",
      items: "10 items",
      pickupDate: "2025-11-08",
      deliveryDate: "2025-11-08",
      status: "Delivered",
      amount: "₹490",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Picked Up":
        return "bg-secondary";
      case "In Progress":
        return "bg-primary";
      case "Delivered":
        return "bg-success";
      default:
        return "bg-muted";
    }
  };

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground mb-1">My Dashboard</h1>
              <p className="text-primary-foreground/90">Manage your laundry orders</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => navigate("/booking")}>
                <Plus className="mr-2 h-4 w-4" />
                New Order
              </Button>
              <Button variant="ghost" onClick={handleLogout} className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeOrders.length}</div>
                <p className="text-xs text-muted-foreground">Currently being processed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedOrders.length}</div>
                <p className="text-xs text-muted-foreground">Successfully delivered</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <Clock className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹5,302</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
          </div>

          {/* Orders */}
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="mt-6">
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            Order #{order.id}
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </CardTitle>
                          <CardDescription>{order.service} • {order.items}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">{order.amount}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Pickup Date:</span>
                          <span className="ml-2 font-medium">{new Date(order.pickupDate).toLocaleDateString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Delivery Date:</span>
                          <span className="ml-2 font-medium">{new Date(order.deliveryDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">Track Order</Button>
                        <Button variant="ghost" size="sm">Reschedule</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <div className="space-y-4">
                {completedOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            Order #{order.id}
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </CardTitle>
                          <CardDescription>{order.service} • {order.items}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">{order.amount}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Pickup Date:</span>
                          <span className="ml-2 font-medium">{new Date(order.pickupDate).toLocaleDateString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Delivery Date:</span>
                          <span className="ml-2 font-medium">{new Date(order.deliveryDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">Reorder</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>Manage your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <p className="text-lg">John Doe</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="text-lg">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p className="text-lg">+91 98765 43210</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Default Address</label>
                    <p className="text-lg">123 Main Street, Kolkata - 700001</p>
                  </div>
                  <Button variant="outline" className="mt-4">Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
