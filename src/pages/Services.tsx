import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Wash & Fold",
      description: "Perfect for everyday clothing",
      price: "₹99",
      icon: "👕",
      features: [
        "Professional washing",
        "Neatly folded",
        "Fresh scent",
        "24-hour turnaround",
      ],
      clothingTypes: ["Casual wear", "T-shirts", "Jeans", "Undergarments"],
    },
    {
      title: "Wash & Iron",
      description: "Complete care with ironing",
      price: "₹149",
      icon: "👔",
      features: [
        "Premium washing",
        "Professional ironing",
        "Wrinkle-free finish",
        "24-48 hour turnaround",
      ],
      clothingTypes: ["Shirts", "Trousers", "Formal wear", "Dresses"],
    },
    {
      title: "Dry Cleaning",
      description: "Special care for delicate items",
      price: "₹199",
      icon: "🧥",
      features: [
        "Eco-friendly solvents",
        "Stain treatment",
        "Shape retention",
        "48-hour turnaround",
      ],
      clothingTypes: ["Suits", "Jackets", "Silk garments", "Wedding dresses"],
      popular: true,
    },
    {
      title: "Iron Only",
      description: "Quick ironing service",
      price: "₹49",
      icon: "🔥",
      features: [
        "Quick service",
        "Crisp finish",
        "No washing",
        "Same-day available",
      ],
      clothingTypes: ["Pre-washed clothes", "Formal shirts", "Sarees", "Curtains"],
    },
  ];

  const addOnServices = [
    {
      name: "Bedsheets & Blankets",
      price: "₹199/piece",
      description: "Large item care",
    },
    {
      name: "Curtains",
      price: "₹299/piece",
      description: "Delicate fabric handling",
    },
    {
      name: "Express Service",
      price: "+₹100",
      description: "12-hour turnaround",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4 text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-primary-foreground mb-2">Our Services</h1>
          <p className="text-primary-foreground/90 text-lg">Professional laundry care tailored to your needs</p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all border-2 hover:border-primary/50">
                {service.popular && (
                  <Badge className="absolute -top-3 right-4 bg-accent">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">per kg</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-success" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Suitable for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.clothingTypes.map((type, idx) => (
                          <Badge key={idx} variant="secondary">{type}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4" onClick={() => navigate("/booking")}>
                      Book This Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Add-On Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <CardDescription>{addon.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-primary">{addon.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Time Slots Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Pickup Time Slots Available</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["8 AM - 10 AM", "10 AM - 12 PM", "12 PM - 2 PM", "2 PM - 4 PM", "4 PM - 6 PM", "6 PM - 8 PM"].map((slot) => (
                <Badge key={slot} variant="outline" className="text-sm px-4 py-2">{slot}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
