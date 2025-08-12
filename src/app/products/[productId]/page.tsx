import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { availableProducts } from "@/data/products";
import { Product } from "@/shared/schema";
import { ArrowLeft, Globe, Package, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export async function generateStaticParams() {
    const posts: Product[] = await fetch('https://raw.githubusercontent.com/DayaEmergentCode/temp-data/refs/heads/main/products.json').then((res) => res.json())

    return posts.map((post) => ({
        productId: post.id,
    }))
}

export default async function ProductDetail({ params, }: { params: Promise<{ productId: string }> }) {

    const { productId } = await params;

    const product: Product = availableProducts.find((p) => p.id === productId)!;

    product.image = "../" + product.image;

    if (!product) {
        return (
            <div className="container py-20">
                <div className="text-center">
                    <div className="text-lg">Loading product...</div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container py-20">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">{"Product Not Found"}</h1>
                    <p className="text-muted-foreground">{"The product you're looking for doesn't exist."}</p>
                    <Link href="/products">
                        <Button>View All Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const getBadgeVariant = (badge: string) => {
        switch (badge.toLowerCase()) {
            case "premium":
                return "default";
            case "organic":
                return "secondary";
            case "seasonal":
                return "outline";
            case "fresh":
                return "secondary";
            case "spice":
                return "outline";
            case "protein":
                return "secondary";
            default:
                return "default";
        }
    };

    return (
        <main className="py-20">
            <div className="container">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/products">
                        <Button variant="ghost" className="mb-4">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-lg border">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
                                    <p className="text-muted-foreground">{product.description}</p>
                                </div>
                                {product.badge && (
                                    <Badge variant={getBadgeVariant(product.badge)} className="ml-4">
                                        {product.badge}
                                    </Badge>
                                )}
                            </div>

                            <div className="flex items-baseline space-x-2">
                                <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
                                <span className="text-xl text-muted-foreground">per {product.unit}</span>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                    <Globe className="h-4 w-4" />
                                    <span>Origin: {product.origin}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Package className="h-4 w-4" />
                                    <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                                        {product.inStock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <Button size="lg" className="w-full" disabled={!product.inStock}>
                                Request Quote
                            </Button>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="w-full">
                                    Contact for More Info
                                </Button>
                            </Link>
                        </div>

                        {/* Specifications */}
                        {product.specifications && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Shield className="h-5 w-5" />
                                        <span>Specifications</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {product.specifications.moisture && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Moisture Content:</span>
                                            <span>{product.specifications.moisture}</span>
                                        </div>
                                    )}
                                    {product.specifications.purity && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Purity:</span>
                                            <span>{product.specifications.purity}</span>
                                        </div>
                                    )}
                                    {product.specifications.shelfLife && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Shelf Life:</span>
                                            <span>{product.specifications.shelfLife}</span>
                                        </div>
                                    )}
                                    {product.specifications.packaging && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Packaging:</span>
                                            <span>{product.specifications.packaging}</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* Nutritional Information */}
                        {product.nutritionalInfo && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Nutritional Information (per 100g)</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {product.nutritionalInfo.calories && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Calories:</span>
                                            <span>{product.nutritionalInfo.calories}</span>
                                        </div>
                                    )}
                                    {product.nutritionalInfo.protein && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Protein:</span>
                                            <span>{product.nutritionalInfo.protein}</span>
                                        </div>
                                    )}
                                    {product.nutritionalInfo.carbohydrates && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Carbohydrates:</span>
                                            <span>{product.nutritionalInfo.carbohydrates}</span>
                                        </div>
                                    )}
                                    {product.nutritionalInfo.fiber && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Fiber:</span>
                                            <span>{product.nutritionalInfo.fiber}</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* Certifications */}
                        {product.specifications?.certifications && product.specifications.certifications.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Certifications</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {product.specifications.certifications.map((cert) => (
                                            <Badge key={cert} variant="secondary">
                                                {cert}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
