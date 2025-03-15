"use client"

import { useState, useEffect } from "react"

interface CarouselItem {
  id: number
  title: string
  description: string
  color: string
}

interface CarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${index === activeIndex ? "block" : "hidden"} ${item.color} p-4 rounded-lg text-white`}
          >
            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
            <p className="text-white/90">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-3 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-[#3EB57F]" : "bg-gray-300"}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

