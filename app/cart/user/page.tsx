"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Menu, Trash2, Plus, Minus } from "lucide-react"
import MenuPrincipal from "@/components/menu"

interface CartQuantities {
    netflix: number;
    filter: number;
    water: number;
  }

export default function CartPage() {
  const [quantities, setQuantities] = useState({
    netflix: 1,
    filter: 1,
    water: 2,
  })

  const updateQuantity = (item: keyof CartQuantities, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(1, prev[item] + value),
    }))
  }

  return (
    <>
    <MenuPrincipal/>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b flex items-center justify-between p-4">
        <Link href="/" className="flex items-center text-gray-700">
          <ArrowLeft className="h-5 w-5" />
          <span className="ml-4 text-lg font-medium">Cart</span>
        </Link>
        <div className="flex items-center gap-4">
          <ShoppingCart className="h-5 w-5 text-gray-700" />
          <Menu className="h-5 w-5 text-gray-700" />
        </div>
      </header>

      {/* Cart Content */}
      <main className="px-4 py-5">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Items in Cart</h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {/* Netflix Subscription */}
          <div className="flex items-center border-b pb-4">
            <div className="h-14 w-14 bg-black flex items-center justify-center mr-3">
              <span className="text-red-600 font-bold text-xs">NETFLIX</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-gray-700 font-medium">Netflix Subscription</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-900 font-semibold text-lg">₹328</span>
                    <span className="text-gray-400 line-through ml-2">₹400</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full flex items-center">
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center text-green-600"
                      onClick={() => updateQuantity("netflix", -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center text-gray-800">
                      {quantities.netflix.toString().padStart(2, "0")}
                    </span>
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center text-green-600"
                      onClick={() => updateQuantity("netflix", 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="ml-2 text-gray-400">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="text-gray-500 text-xs flex items-center">
                  <span className="inline-block h-3 w-3 bg-gray-200 rounded-full mr-1"></span>
                  instant delivery to your inbox
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-600">
                  <span className="mr-1">○</span> 18% off using <span className="ml-1">⟁</span>
                </span>
              </div>
            </div>
          </div>

          {/* Sediment Filter */}
          <div className="flex items-center border-b pb-4">
            <div className="h-14 w-14 bg-gray-100 flex items-center justify-center mr-3">
              <Image
                src="/placeholder.svg?height=56&width=56"
                alt="Sediment Filter"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-gray-700 font-medium">Sediment Filter</h3>
                  <div className="text-gray-500 text-xs">XL Black</div>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-900 font-semibold text-lg">₹328</span>
                    <span className="text-gray-400 line-through ml-2">₹400</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full flex items-center">
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center text-green-600"
                      onClick={() => updateQuantity("filter", -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center text-gray-800">
                      {quantities.filter.toString().padStart(2, "0")}
                    </span>
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center text-green-600"
                      onClick={() => updateQuantity("filter", 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="ml-2 text-gray-400">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="text-gray-500 text-xs flex items-center">
                  <span className="inline-block h-3 w-3 bg-gray-200 rounded-full mr-1"></span>
                  delivery by 5th August
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-600">
                  <span className="mr-1">○</span> 11% off using <span className="ml-1">⟁</span>
                </span>
              </div>
            </div>
          </div>

          {/* Alkaline Water */}
          <div className="flex items-center border-b pb-4">
            <div className="h-14 w-14 bg-gray-100 flex items-center justify-center mr-3">
              <Image
                src="/placeholder.svg?height=56&width=56"
                alt="Alkaline Water"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-gray-700 font-medium">Alkaline Water</h3>
                  <div className="text-gray-500 text-xs">Pack of 15</div>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-900 font-semibold text-lg">₹910</span>
                    <span className="text-gray-400 line-through ml-2">₹1000</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full flex items-center">
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center text-green-600"
                      onClick={() => updateQuantity("water", -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center text-gray-800">
                      {quantities.water.toString().padStart(2, "0")}
                    </span>
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center text-green-600"
                      onClick={() => updateQuantity("water", 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="ml-2 text-gray-400">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="text-gray-500 text-xs flex items-center">
                  <span className="inline-block h-3 w-3 bg-gray-200 rounded-full mr-1"></span>
                  delivery by 20th August
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-600">
                  <span className="mr-1">○</span> 10% off using <span className="ml-1">⟁</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Discount Section */}
        <div className="mt-6 border-t border-b py-4">
          <h3 className="text-gray-800 font-medium mb-2">Apply discount using Karma</h3>
          <p className="text-gray-600 mb-2">Karma applied, you are saving ₹400 on this order.</p>
          <div className="flex items-center justify-between">
            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full flex items-center">
              <span className="mr-2">⟁</span>
              Discount Applied
            </button>
            <button className="text-gray-500">remove discount</button>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="mt-6">
          <h3 className="text-gray-800 font-medium mb-4">Delivery to</h3>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-800 font-medium">Home</p>
              <p className="text-gray-600 mt-1 text-sm">
                Address line 1, Address line 2,
                <br />
                City, State, Pincode
              </p>
            </div>
            <button className="text-gray-500">change &gt;</button>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-8 py-16">
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium">Checkout</button>
        </div>
      </main>
    </div>
    </>
  )
}

