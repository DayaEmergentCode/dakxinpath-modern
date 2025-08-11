"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { availableProducts } from "@/data/products";
import { Product } from "@/shared/schema";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const categories = [
    { id: "all", label: "All Products" },
    { id: "grains", label: "Grains & Cereals" },
    { id: "fruits", label: "Fruits" },
    { id: "vegetables", label: "Vegetables" },
    { id: "spices", label: "Spices" },
];


export default function Products() {

    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState("all");

    const products = [] = availableProducts;

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "all") return products;
        return products.filter((product) => product.category === selectedCategory);
    }, [products, selectedCategory]);

    const handleProductClick = (product: Product) => {
        router.push(`/products/${product.id}`);
    };

    if (products === undefined || products === null || products.length === 0) {
        return (
            <div className="container py-20">
                <div className="text-center">
                    <div className="text-lg">{"Loading products..."}</div>
                </div>
            </div>
        );
    }

    return (
        <main className="py-20 bg-muted/50">
            <div className="container">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl font-bold text-foreground">Our Product Range</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover our extensive collection of premium agricultural products sourced from the finest farms worldwide
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category.id)}
                            className="font-medium"
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => handleProductClick(product)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-muted-foreground">
                            No products found in this category.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
