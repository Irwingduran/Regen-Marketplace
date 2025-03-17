"use client"

import { useState } from "react"
import { Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  brand: string
  price: number
  score: number
  image: string
  tags: string[]
}

export function ProductCard({ name, brand, price, score, image, tags }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    // Simulate API call
    setTimeout(() => {
      setIsAdding(false)
      // Show success message or update cart count
    }, 500)
  }

  return (
    <Card
      className="overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product`}>
        <div className="relative">
          <div className="absolute top-2 right-2 z-10">
            <div className="bg-green-400 text-white rounded-full h-10 w-10 flex items-center justify-center font-medium">
              {score}
            </div>
          </div>
          <div
            className={`bg-white aspect-square relative transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
          >
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover p-4" />
            <div className="absolute bottom-2 left-2 flex gap-1">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-green-400 rounded-full p-1.5 transition-transform duration-300 hover:scale-110"
                  title={tag}
                >
                  <Recycle className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <div className="p-3">
        <Link href={`/product`}>
          <h3 className="font-medium text-gray-800 hover:text-green-600 transition-colors">{name}</h3>
        </Link>
        <p className="text-sm text-gray-400">{brand}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-green-500 font-medium">${price.toFixed(2)}</span>
          <Button
            className={`bg-green-400 hover:bg-green-500 text-white rounded-full px-4 py-1 text-sm transition-all duration-300 ${isAdding ? "opacity-70" : ""}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to cart"}
          </Button>
        </div>
      </div>
    </Card>
  )
}

