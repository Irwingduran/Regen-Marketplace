"use client"

import * as React from "react"
import { X, Filter, ShoppingCart, Menu } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import MenuPrincipal from "@/components/menu"
export default function FilterPanel() {
  const [priceRange, setPriceRange] = React.useState([600, 1400])
  const [selectedFilters, setSelectedFilters] = React.useState({
    preferences: ["Awareness", "Water sampling", "Digital"],
    categories: ["Awareness", "Water sampling"],
    productType: ["Digital"],
    payOnDelivery: "Available",
    discount: "",
    sortByCost: "",
    sortByCurrency: "India Rupee ₹"
  })

  const handleFilterClick = (category: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev }
      
      if (Array.isArray(newFilters[category as keyof typeof newFilters])) {
        const array = newFilters[category as keyof typeof newFilters] as string[]
        if (array.includes(value)) {
          // @ts-expect-error - We know this is an array
          newFilters[category] = array.filter(item => item !== value)
        } else {
          // @ts-expect-error - We know this is an array
          newFilters[category] = [...array, value]
        }
      } else {
        // @ts-expect-error - We know this is a string
        newFilters[category] = value === newFilters[category as keyof typeof newFilters] ? "" : value
      }
      
      return newFilters
    })
  }

  const clearAll = () => {
    setSelectedFilters({
      preferences: [],
      categories: [],
      productType: [],
      payOnDelivery: "",
      discount: "",
      sortByCost: "",
      sortByCurrency: "",
    })
    setPriceRange([600, 1400])
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const isSelected = (category: string, value: string) => {
    const categoryValue = selectedFilters[category as keyof typeof selectedFilters]
    if (Array.isArray(categoryValue)) {
      return categoryValue.includes(value)
    }
    return categoryValue === value
  }

  return (
    <>
    <MenuPrincipal/>
    <div className="w-full  mx-auto bg-white  flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="w-8"></div>
        <div></div>
        <div className="flex gap-4">
          <ShoppingCart className="h-6 w-6 text-gray-700" />
          <Menu className="h-6 w-6 text-gray-700" />
        </div>
      </div>
      
      {/* Filter Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <span className="text-lg font-medium">Filter</span>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            className="text-gray-500 text-sm"
            onClick={clearAll}
          >
            Clear All
          </Button>
          <a href="/home"><X className="h-5 w-5" /></a>
        </div>
      </div>

      {/* Filter Content - Scrollable */}
      <div className="flex-1 overflow-auto">
        {/* Selected Preferences */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Selected Preferences</span>
            <Button 
              className="text-gray-500 text-sm"
              onClick={clearAll}
            >
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.preferences.map((pref) => (
              <Badge 
                key={pref}
                variant="outline" 
                className={cn(
                  "rounded-full py-1 px-4 border border-green-500 bg-green-50 text-green-800 hover:bg-green-100"
                )}
                onClick={() => handleFilterClick('preferences', pref)}
              >
                {pref}
              </Badge>
            ))}
            {["Scout", "Validation"].map((item) => (
              <span 
                key={item}
                className="text-gray-500 py-1 px-2 text-sm cursor-pointer"
                onClick={() => handleFilterClick('preferences', item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Filter by Categories */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Filter by Categories</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Awareness", "Water sampling", "Field survey"].map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className={cn(
                  "rounded-full py-1 px-4 border",
                  isSelected('categories', category) 
                    ? "border-green-500 bg-green-50 text-green-800 hover:bg-green-100" 
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                )}
                onClick={() => handleFilterClick('categories', category)}
              >
                {category}
              </Badge>
            ))}
            {["Scout", "Validation"].map((item) => (
              <span 
                key={item}
                className="text-gray-500 py-1 px-2 text-sm cursor-pointer"
                onClick={() => handleFilterClick('categories', item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Filter by Product/Service Type */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Filter by Product/Service Type</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["Digital", "Physical", "Expert Services"].map((type) => (
              <Badge 
                key={type}
                variant="outline" 
                className={cn(
                  "rounded-full py-1 px-4 border",
                  isSelected('productType', type) 
                    ? "border-green-500 bg-green-50 text-green-800 hover:bg-green-100" 
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                )}
                onClick={() => handleFilterClick('productType', type)}
              >
                {type}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="rounded-full py-1 px-4 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
              onClick={() => handleFilterClick('productType', 'Deals & Offers')}
            >
              Deals & Offers
            </Badge>
          </div>
        </div>
        
        <Separator />
        
        {/* Pay on Delivery */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Pay on Delivery</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Available", "Unavailable"].map((option) => (
              <Badge 
                key={option}
                variant="outline" 
                className={cn(
                  "rounded-full py-1 px-4 border",
                  isSelected('payOnDelivery', option) 
                    ? "border-green-500 bg-green-50 text-green-800 hover:bg-green-100" 
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                )}
                onClick={() => handleFilterClick('payOnDelivery', option)}
              >
                {option}
              </Badge>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Discount using Regen Score */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Discount using Regen Score</span>
          </div>
          <div className="flex flex-col gap-2">
            {["Upto 10% OFF", "Upto 20% OFF", "Upto 30% OFF", "Upto 40% OFF"].map((discount) => (
              <span 
                key={discount}
                className={cn(
                  "py-1 cursor-pointer",
                  isSelected('discount', discount) ? "text-green-600 font-medium" : "text-gray-700"
                )}
                onClick={() => handleFilterClick('discount', discount)}
              >
                {discount}
              </span>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Sort by Cost */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Sort by Cost</span>
          </div>
          <div className="flex gap-4">
            <span 
              className={cn(
                "py-1 cursor-pointer",
                isSelected('sortByCost', 'Low to High') ? "text-green-600 font-medium" : "text-gray-700"
              )}
              onClick={() => handleFilterClick('sortByCost', 'Low to High')}
            >
              Low to High
            </span>
            <span 
              className={cn(
                "py-1 cursor-pointer",
                isSelected('sortByCost', 'High to Low') ? "text-green-600 font-medium" : "text-gray-700"
              )}
              onClick={() => handleFilterClick('sortByCost', 'High to Low')}
            >
              High to Low
            </span>
          </div>
        </div>
        
        <Separator />
        
        {/* Sort by Currency */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Sort by Currency</span>
          </div>
          <div className="flex gap-4">
            <span 
              className={cn(
                "py-1 cursor-pointer",
                isSelected('sortByCurrency', 'India Rupee ₹') ? "text-green-600 font-medium" : "text-gray-700"
              )}
              onClick={() => handleFilterClick('sortByCurrency', 'India Rupee ₹')}
            >
              India Rupee ₹
            </span>
            <span 
              className={cn(
                "py-1 cursor-pointer",
                isSelected('sortByCurrency', 'Solana SOL') ? "text-green-600 font-medium" : "text-gray-700"
              )}
              onClick={() => handleFilterClick('sortByCurrency', 'Solana SOL')}
            >
              Solana SOL
            </span>
          </div>
        </div>
        
        <Separator />
        
        {/* Sort by Price */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-gray-600">Sort by Price</span>
          </div>
          <div className="mb-6 px-2">
            <Slider
              defaultValue={[600, 1400]}
              value={priceRange}
              max={2000}
              min={0}
              step={100}
              onValueChange={handlePriceChange}
              className="my-4"
            />
          </div>
          <div className="flex justify-between">
            <div className="w-[120px]">
              <span className="text-sm text-gray-500">Minimum</span>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <span className="text-gray-700 mr-1">₹</span>
                <Input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => handlePriceChange([parseInt(e.target.value), priceRange[1]])}
                  className="border-0 p-0 h-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="w-[120px]">
              <span className="text-sm text-gray-500">Maximum</span>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <span className="text-gray-700 mr-1">₹</span>
                <Input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
                  className="border-0 p-0 h-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
