import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Wash & Fold",
      description: "Professional washing and folding service",
      price: "₹99",
      icon: "👕",
    },
    {
      title: "Wash & Iron",
      description: "Complete wash and iron service",
      price: "₹149",
      icon: "👔",
    },
    {
      title: "Dry Cleaning",
      description: "Premium dry cleaning for delicate items",
      price: "₹199",
      icon: "🧥",
    },
    {
      title: "Iron Only",
      description: "Quick ironing service",
      price: "₹49",
      icon: "🔥",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Same-day pickup and delivery available",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Professional care for all fabric types",
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service",
    },
    {
      icon: Sparkles,
      title: "Eco-Friendly",
      description: "Environment-conscious cleaning solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-2xl font-bold text-primary-foreground">CleanEase</h1>
            <Link to="/auth">
              <Button variant="secondary" size="lg">
                Login / Sign Up
              </Button>
            </Link>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Your Laundry, Our Priority
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Professional laundry service with free pickup and delivery. Book online in minutes.
            </p>
            <Link to="/services">
              <Button size="lg" variant="secondary" className="shadow-glow">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">Choose from our range of professional laundry services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 text-center">{service.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">Starting {service.price}</span>
                    <span className="text-muted-foreground text-sm">/kg</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience Hassle-Free Laundry?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust us with their laundry
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2025 CleanEase Laundry Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
