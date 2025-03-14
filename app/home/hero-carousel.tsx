"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import RatingDisplay from "./rating-display"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/img/water-filter.jpeg",
      title: "Smart water filter system",
      description: "Advanced filtration with eco-friendly materials",
    },
    {
        id: 2,
        image: "/img/water-filter.jpeg",
        title: "Smart water filter system",
        description: "Advanced filtration with eco-friendly materials",
      },
      {
        id: 3,
        image: "/img/water-filter.jpeg",
        title: "Smart water filter system",
        description: "Advanced filtration with eco-friendly materials",
      },
   
  ]

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-64"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 bg-colorPrimary text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              Green Star
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-teal-900/80 to-transparent text-white z-10">
              <h1 className="text-xl font-bold">{slide.title}</h1>
              <p className="text-sm opacity-90">{slide.description}</p>
              <div className="mt-2">
                <RatingDisplay rating={4.0} maxRating={5.0} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center">
        <div className="flex gap-1">
          {slides.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-white" : "bg-white/50"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

