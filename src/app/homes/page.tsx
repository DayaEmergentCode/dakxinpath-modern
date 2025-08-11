"use client";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { availableProducts } from "@/data/products";
import { Product } from "@/shared/schema";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    // Get featured products (first 3 products)
    const featuredProducts = availableProducts.slice(0, 3);

    const handleProductClick = (product: Product) => {
        router.push(`/products/${product.id}`);
    };

    const handleViewProducts = () => {
        router.push("/products");
    };

    const handleContactUs = () => {
        router.push("/contact");
    };

    return (
        <main>
            <Hero
                featuredProducts={featuredProducts}
                onProductClick={handleProductClick}
                onViewProducts={handleViewProducts}
                onContactUs={handleContactUs}
            />
            <Services />
            <About />
            <Contact />
        </main>
    );
}
