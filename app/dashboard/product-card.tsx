import { Card } from "@/components/ui/card"
import { Leaf } from "lucide-react"

interface ProductCardProps {
  name: string
  rating: number
  price: number
 // image: string
}

export function ProductCard({ name, rating, price }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-[#d4f7e2] hover:bg-[#c5f0d6] transition-colors cursor-pointer">
      <div className="aspect-square relative">
        <div className="absolute top-2 left-2 flex items-center bg-white/80 rounded-full px-2 py-0.5">
          <Leaf className="h-3 w-3 fill-[#4BCC91] text-[#4BCC91] mr-1" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium text-gray-800 truncate">{name}</h3>
        <p className="text-[#3EB57F] font-bold">${price}</p>
      </div>
    </Card>
  )
}

