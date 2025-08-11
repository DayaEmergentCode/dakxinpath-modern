"use client"

import { Shield, Truck, CheckCircle, Thermometer, DollarSign, Headphones } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensuring international standards compliance and customer satisfaction."
  },
  {
    icon: Truck,
    title: "Global Logistics",
    description: "Efficient shipping and logistics solutions with real-time tracking and timely delivery worldwide."
  },
  {
    icon: CheckCircle,
    title: "Certification Support",
    description: "Complete documentation and certification assistance for smooth customs clearance globally."
  },
  {
    icon: Thermometer,
    title: "Cold Chain Management",
    description: "Temperature-controlled storage and transportation to maintain product freshness and quality."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Market-competitive prices with transparent pricing structure and flexible payment terms."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support ensuring smooth communication and quick problem resolution."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Export Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive export solutions ensuring your products reach global markets efficiently and safely
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
