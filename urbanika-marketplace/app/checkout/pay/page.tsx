"use client"

import { ArrowLeft, ShoppingCart, Menu } from "lucide-react"
import MenuPrincipal from "@/components/menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function OrderSummary() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirmAndPay = () => {
    setIsProcessing(true);

    // Simula el proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      // Simula el envío del correo
      setTimeout(() => {
        setIsSuccess(false);
        // Aquí podrías redirigir a otra página o hacer algo más
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <MenuPrincipal />
      <div className="mx-auto bg-gray-50 flex flex-col">
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
            <p className="text-gray-600 mb-1">12 Item(s)</p>
            <div className="flex items-center">
              <p className="text-gray-500">
                Order Amount: <span className="line-through">$119.88</span> <span className="text-gray-700">$70</span>
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

            <div className="flex justify-between">
              <p className="text-gray-600">Sustainable Water Bottle x12</p>
              <div className="text-right">
                <p className="text-gray-500 line-through text-sm">$119.88</p>
                <p className="text-gray-700">$70.00</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-4"></div>

          {/* Cart Total */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Cart Total</p>
              <p className="text-gray-700">$119.88</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600">Discount Applied</p>
              <p className="text-green-600">-$49.00</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600">Delivery Charges</p>
              <p className="text-gray-700">$20.00</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-4"></div>

          {/* Total Payable */}
          <div className="flex justify-between mb-4">
            <p className="text-gray-700 font-medium">Total Payable Amount</p>
            <p className="text-gray-700 font-medium">$79.00</p>
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
            <button
              onClick={handleConfirmAndPay}
              disabled={isProcessing || isSuccess}
              className="w-full bg-colorPrimary hover:bg-accountPrimary text-white py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : isSuccess ? 'Success!' : 'Confirm and Pay'}
            </button>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-medium text-gray-800 mb-4">Purchase Successful!</h2>
                <p className="text-gray-600">You will receive an email confirmation shortly.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}