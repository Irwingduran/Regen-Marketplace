"use client"

import { ArrowLeft, ShoppingCart, Menu } from "lucide-react"
import MenuPrincipal from "@/components/menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function OrderSummary() {
  const router = useRouter();
  return (
    <>
    <MenuPrincipal/>
    <div className=" mx-auto bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Button onClick={() => router.back()} className="mr-3">
            <ArrowLeft size={24} className="text-gray-700" />
          </Button>
          <h1 className="text-xl font-medium text-gray-800">Order Summary</h1>
        </div>
        <div className="flex items-center">
          <Link href="#" className="mr-4">
            <ShoppingCart size={24} className="text-gray-700" />
          </Link>
          <button>
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 p-5">
        {/* My Order Section */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-2">My order</h2>
          <p className="text-gray-600 mb-1">1 Item(s)</p>
          <div className="flex items-center">
            <p className="text-gray-500">
              Order Amount: <span className="line-through">$100</span> <span className="text-gray-700">$140</span>
            </p>
            <span className="ml-2 text-blue-400 flex items-center">
              applied 60 <span className="ml-1 text-blue-400">🔥</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        {/* Bill Details */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-600 mb-4">Bill Details</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-600">Sediment Filter x1</p>
              <div className="text-right">
                <p className="text-gray-500 line-through text-sm">₹100</p>
                <p className="text-gray-700">₹90.00</p>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600">Netflix Subscription x1</p>
              <div className="text-right">
                <p className="text-gray-500 line-through text-sm">₹400</p>
                <p className="text-gray-700">₹350.00</p>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600">Alkaline Water x2</p>
              <p className="text-gray-700">₹1000.00</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        {/* Cart Total */}
        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <p className="text-gray-600">Cart Total</p>
            <p className="text-gray-700">₹1440.00</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">Discount Applied using Karma</p>
            <p className="text-green-600">-₹60.00</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">Delivery Charges</p>
            <p className="text-gray-700">₹100.00</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        {/* Total Payable */}
        <div className="flex justify-between mb-4">
          <p className="text-gray-700 font-medium">Total Payable Amount</p>
          <p className="text-gray-700 font-medium">₹1540.00</p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        {/* Delivery Address */}
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Delivered To</p>
          <p className="text-gray-700 text-right">Home, 5600..</p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        {/* T&C Link */}
        <div className="mb-6">
          <Link href="#" className="text-gray-500 underline">
            Read T&C and Cancellation Policy
          </Link>
        </div>

        {/* Confirm Button */}
        <div className="py-16">
        <button className="w-full bg-colorPrimary hover:bg-accountPrimary text-white py-3 rounded-md font-medium transition-colors">
          Confirm and Pay
        </button>
        </div>
      </div>
    </div>
    </>
  )
}

