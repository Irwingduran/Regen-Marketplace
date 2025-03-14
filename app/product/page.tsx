"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Page = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slidesRef = useRef<HTMLDivElement>(null)
  
    const slides = [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ]
  
    const goToSlide = (index: number) => {
      setCurrentSlide(index)
      if (slidesRef.current) {
        slidesRef.current.scrollTo({
          left: slidesRef.current.clientWidth * index,
          behavior: "smooth",
        })
      }
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (slidesRef.current) {
          const scrollPosition = slidesRef.current.scrollLeft
          const slideWidth = slidesRef.current.clientWidth
          const newSlideIndex = Math.round(scrollPosition / slideWidth)
          if (newSlideIndex !== currentSlide) {
            setCurrentSlide(newSlideIndex)
          }
        }
      }
  
      const slidesElement = slidesRef.current
      if (slidesElement) {
        slidesElement.addEventListener("scroll", handleScroll)
        return () => slidesElement.removeEventListener("scroll", handleScroll)
      }
    }, [currentSlide])
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="flex items-center justify-between p-4 bg-white">
          <div className="flex items-center">
            <Link href="#" className="mr-4">
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </Link>
            <h1 className="text-lg font-medium text-gray-800">Product Details</h1>
          </div>
          <button className="p-1">
            <Share2 className="h-5 w-5 text-gray-700" />
          </button>
        </header>
  
        <main className="flex-1 pb-4">
          {/* Product Image Slider */}
          <div className="relative">
            <div
              ref={slidesRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-[300px] relative snap-center">
                  <Image
                    src={slide || "/placeholder.svg"}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover bg-gradient-to-b from-gray-200 to-gray-400"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-400 text-white text-xs px-3 py-1 rounded-full">Eco-certified</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
  
            {/* Slider Dots */}
            <div className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-center gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-green-500" : "bg-white bg-opacity-60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
  
          {/* Product Info */}
          <div className="px-4 pt-4">
            <h2 className="text-xl font-semibold text-gray-800">Sustainable Water Bottle</h2>
  
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "text-green-500 fill-green-500" : "text-gray-300 fill-gray-300"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-600">4.0 (10+ Reviews)</span>
            </div>
  
            <div className="flex items-center mt-2">
              <span className="text-xl font-bold text-green-500">$34.99</span>
              <span className="ml-2 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">20% For Rainforest</span>
            </div>
  
            <p className="mt-2 text-sm text-gray-600">
              Handcrafted from sustainable bamboo with a zero-waste manufacturing process. Each bottle helps reduce
              plastic waste and support local artisans.
            </p>
          </div>
  
          {/* Regen Score */}
          <div className="px-4 mt-6">
            <h3 className="text-lg font-medium text-gray-800">Regen Score</h3>
            <div className="flex items-center mt-2">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 36 36" className="w-16 h-16">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E6E6E6"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4ADE80"
                    strokeWidth="3"
                    strokeDasharray="92, 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-800">
                  92
                </div>
              </div>
  
              <div className="flex-1 grid grid-cols-3 gap-2 ml-4">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 21C4.79086 21 3 19.2091 3 17C3 15.8752 3.48884 14.8835 4.25 14.2C4.25 14.2 4.79203 13.7032 4.92652 13.1352C5.02968 12.6811 5 12 5 12C5 12 5.01943 9.50106 5.5 8C6.21336 5.85529 8 4 8 4C8 4 9.41176 6.05882 10 7C10.5882 7.94118 11 9 11 9H17C17 9 17.2143 10.7054 16.5 12C15.7857 13.2946 14 14 14 14H7.5C7.5 14 7 14.5 7 15C7 15.5 7.5 16 8 16H15.5C15.5 16 16.5 17 16.5 17.5C16.5 18 16 18.5 15.5 18.5H10.5C10.5 18.5 10 19 10 19.5C10 20 10.5 20.5 11 20.5H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs mt-1">Carbon Footprint</span>
                    <span className="text-sm font-semibold text-green-600">-82%</span>
                  </div>
                </div>
  
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 2 12 2C7.58172 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs mt-1">Water Usage</span>
                    <span className="text-sm font-semibold text-blue-600">-65%</span>
                  </div>
                </div>
  
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 3L21 8L8 21L3 16L16 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L16 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 16L3 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs mt-1">Recycling</span>
                    <span className="text-sm font-semibold text-purple-600">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Environmental Impact */}
          <div className="px-4 mt-6">
            <h3 className="text-lg font-medium text-gray-800">Environmental Impact</h3>
  
            <div className="mt-3 space-y-3">
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 21C4.79086 21 3 19.2091 3 17C3 15.8752 3.48884 14.8835 4.25 14.2C4.25 14.2 4.79203 13.7032 4.92652 13.1352C5.02968 12.6811 5 12 5 12C5 12 5.01943 9.50106 5.5 8C6.21336 5.85529 8 4 8 4C8 4 9.41176 6.05882 10 7C10.5882 7.94118 11 9 11 9H17C17 9 17.2143 10.7054 16.5 12C15.7857 13.2946 14 14 14 14H7.5C7.5 14 7 14.5 7 15C7 15.5 7.5 16 8 16H15.5C15.5 16 16.5 17 16.5 17.5C16.5 18 16 18.5 15.5 18.5H10.5C10.5 18.5 10 19 10 19.5C10 20 10.5 20.5 11 20.5H13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-800">Sustainable Materials</h4>
                  <p className="text-xs text-gray-600">100% biodegradable bamboo and recycled materials.</p>
                </div>
              </div>
  
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 2 12 2C7.58172 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-800">Water Conservation</h4>
                  <p className="text-xs text-gray-600">Saves 1000 L of water compared to plastic production.</p>
                </div>
              </div>
  
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3L21 8L8 21L3 16L16 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 3L16 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16L3 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-800">Carbon Reduction</h4>
                  <p className="text-xs text-gray-600">82% less carbon emission than traditional bottles.</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Certifications */}
          <div className="px-4 mt-6">
            <h3 className="text-lg font-medium text-gray-800">Certifications</h3>
            <div className="flex gap-2 mt-3">
              <div className="w-10 h-10 rounded-full bg-green-500"></div>
              <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              <div className="w-10 h-10 rounded-full bg-pink-400"></div>
              <div className="w-10 h-10 rounded-full bg-purple-600"></div>
              <div className="w-10 h-10 rounded-full bg-green-200"></div>
            </div>
          </div>
  
          {/* Customer Reviews */}
          <div className="px-4 mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">Customer Reviews</h3>
              <a href="#" className="text-sm text-green-600">
                View All
              </a>
            </div>
  
            <div className="mt-3 bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800">Sofia V</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-green-500 fill-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">It feels luxurious, great product!</p>
            </div>
          </div>
        </main>
  
        {/* Action Buttons */}
        <div className="px-4 py-3 bg-white">
          <button className="w-full bg-green-500 text-white font-medium py-3 rounded-lg mb-2">Add to cart</button>
          <button className="w-full bg-green-100 text-green-600 font-medium py-3 rounded-lg">Request a quote</button>
        </div>
      </div>
    )
  }

export default Page