import { Leaf } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  title: string
  price: number
  rating: number
  image?: string
}

export default function ProductCard({
  title,
  price,
  rating,
  image = "/placeholder.svg?height=100&width=100",
}: ProductCardProps) {
  return (
    <a href="/product">
    <div className="bg-lightPrimary rounded-lg p-3 flex flex-col">
      <div className="bg-white rounded mb-3 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center gap-1 mb-1">
        <Leaf className="w-3 h-3 fill-green-600 text-accentPrimary" />
        <span className="text-xs text-accentPrimary">{rating.toFixed(1)}</span>
      </div>
      <h3 className="text-sm font-medium text-textColor">{title}</h3>
      <p className="text-sm text-textColor mt-1">${price}</p>
    </div>
      </a>
  )
}

