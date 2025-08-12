"use client"
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Contact } from "./contact";

const certifications = [
  "HACCP",
  "FSSAI",
  "APEDA",
  "Spices Board",
  "Tea Board",
  "MSME"
];

const stats = [
  { value: "50+", label: "Products capacity" },
  { value: "10+", label: "Countries reach" },
  { value: "3+", label: "Years experience" },
  { value: "100+", label: "Clients handling capacity" }
];

export function About() {
  return (
    <>
      <section className="py-20 bg-background relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 py-4">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto ">
            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">About DAKXINPATH®</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {"For over 3 years, we've been connecting global markets with premium agricultural products, building trust through quality and reliability."}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2023, DAKXINPATH® has grown from a small family business to agricultural export company, serving over 10+ countries worldwide. Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner for businesses across the globe.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We work directly with farmers and producers, ensuring fair trade practices while maintaining the highest standards of quality control. Our state-of-the-art facilities and logistics network guarantee that your products arrive fresh and on time.
                </p>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Image & Stats */}
            <div className="space-y-6 ">
              <Image
                src="/logo_light.png"
                alt="Modern Agricultural Facility"
                className="rounded-xl shadow-lg w-full bg-card"
                width={100}
                height={100}
              />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 ">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-primary/5 rounded-lg p-6 text-center border bg-card">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
