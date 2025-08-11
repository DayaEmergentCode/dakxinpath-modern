"use client"

import { Button } from "@/components/ui/button";
import { ProductCarousel } from "@/components/ui/product-carousel";
import { Product } from "@/shared/schema";

interface HeroProps {
  featuredProducts: Product[];
  onProductClick: (product: Product) => void;
  onViewProducts: () => void;
  onContactUs: () => void;
}

export function Hero({ featuredProducts, onProductClick, onViewProducts, onContactUs }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 py-4">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                <span className="text-foreground">Premium</span>{" "}
                <span className="text-primary">Agricultural</span>{" "}
                <span className="text-foreground">Exports</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connecting global markets with the finest agricultural products. Quality assured, internationally certified, sustainably sourced.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={onViewProducts} className="font-semibold">
                View Products
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onContactUs}
                className="font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div> */}
          </div>

          {/* Featured Products Carousel */}
          <div className="space-y-1">
            <span className="text-2xl font-bold text-foreground"></span>
            <ProductCarousel
              products={featuredProducts}
              onProductClick={onProductClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
