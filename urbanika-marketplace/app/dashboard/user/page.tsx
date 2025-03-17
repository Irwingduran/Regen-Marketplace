"use client"

import { Leaf, Droplets, Recycle, User, ChevronLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import Menu from "@/components/menu";
import { useRouter } from 'next/navigation'

export default function ImpactDashboard() {
  const router = useRouter();
  return (
    <>
    <Menu/>
    <div className="mx-auto bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
      <Button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        <h1 className="text-xl font-semibold text-gray-700">My Impact Dashboard</h1>
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <User className="h-5 w-5 text-green-500" />
        </div>
      </header>

      {/* Impact Stats */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <Leaf className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600">CO₂ Saved</p>
            <p className="text-2xl font-bold">245 Kg</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <Droplets className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-sm text-gray-600">Water Saved</p>
            <p className="text-2xl font-bold">1,890 L</p>
          </CardContent>
        </Card>
      </div>

      {/* Purchase History */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Purchase History</h2>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4 flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 relative overflow-hidden">
              <Image
                src="/img/water-bottle.webp"
                alt="Eco-Friendly Water Bottle"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Eco-Friendly Water Bottle</h3>
              <p className="text-xs text-gray-500">Today</p>
              <p className="text-xs text-green-500">2.5 Kg CO₂ Saved</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">My Achievements</h2>
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <Leaf className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-xs text-center font-medium">Early Adopter</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Droplets className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-xs text-center font-medium">Water Saver</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <Recycle className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-center font-medium text-gray-400">Zero Waste</p>
            </CardContent>
          </Card>
        </div>
      </div>

{/* Recommended Products */}
<div className="p-4 py-16">
  <h2 className="text-lg font-semibold text-gray-700 mb-3">Recommended For You</h2>
  <div className="grid grid-cols-2 gap-4">
    {[
      {
        id: 1,
        image: "/img/solar-panel.png", 
        name: "Solar Panel",
        description: "Green Energy",
        price: "$149.99",
      },
      {
        id: 2,
        image: "/img/water-filter.png",
        name: "Water Filter",
        description: "Reusable",
        price: "$29.99",
      },
    ].map((product) => (
      <div key={product.id} className="bg-green-50 rounded-lg overflow-hidden">
        <div className="h-32 relative">
          {/* Imagen del producto */}
          <Image
            src={product.image} // Usamos la ruta de la imagen definida en el objeto
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center">
            85
          </div>
        </div>
        <div className="p-2">
          <div className="flex space-x-1 mb-1">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Leaf className="h-3 w-3 text-green-500" />
            </div>
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Droplets className="h-3 w-3 text-green-500" />
            </div>
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Recycle className="h-3 w-3 text-green-500" />
            </div>
          </div>
          <h3 className="font-medium text-sm">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.description}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-green-500 font-medium">{product.price}</p>
            <button className="bg-green-500 text-white text-xs rounded-full px-3 py-1">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
    </>
  )
}

