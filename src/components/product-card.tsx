import { Card, CardContent } from "@/components/core/card";
import { Badge } from "@/components/core/badge";
import { Product } from "@/shared/schema";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
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
    <Card
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="aspect-[4/2] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            {product.badge && (
              <Badge variant={getBadgeVariant(product.badge)} className="ml-2 shrink-0">
                {product.badge}
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <span className="text-xl font-semibold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">/{product.unit}</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Origin</p>
              <p className="text-sm font-medium">{product.origin}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
