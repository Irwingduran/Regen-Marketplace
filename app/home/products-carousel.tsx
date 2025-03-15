"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import ProductCard from "./product-card"


import "swiper/css"
import "swiper/css/free-mode"

interface ProductsCarouselProps {
  products: {
    id: number
    title: string
    price: number
    rating: number
    image: string
  }[]
}

export default function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <Swiper modules={[FreeMode]} spaceBetween={12} slidesPerView={2.2} freeMode={true} className="w-full">
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard title={product.title} price={product.price} rating={product.rating} image={product.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

