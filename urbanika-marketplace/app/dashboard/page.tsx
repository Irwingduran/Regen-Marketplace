"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Globe,
  Monitor,
  Star,
  Tag,
  Leaf,
  Building,
  Shield,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CategoryCard } from "./category-card"
import { Carousel } from "./carousel"
import Menu from "@/components/menu"

const dashboard = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const categories = [
      {
        id: 1,
        name: "PHYSICAL",
        description: "Products",
        icon: <Globe className="h-6 w-6 text-[#3EB57F]" />,
        color: "#d4f7e2",
      },
      {
        id: 2,
        name: "DIGITAL",
        description: "Products",
        icon: <Monitor className="h-6 w-6 text-[#3EB57F]" />,
        color: "#d4f7e2",
      },
      {
        id: 3,
        name: "EXPERT",
        description: "Services",
        icon: <Star className="h-6 w-6 text-[#3EB57F]" />,
        color: "#d4f7e2",
      },
      {
        id: 4,
        name: "DEALS",
        description: "Offers",
        icon: <Tag className="h-6 w-6 text-[#3EB57F]" />,
        color: "#d4f7e2",
      },
    ]
  
    const trendingItems = [
      {
        id: 1,
        title: "Unlock the best price with your regen score",
        description: "get up to 75% OFF",
        color: "bg-gradient-to-r from-[#3EB57F] to-[#4BCC91]",
      },
      {
        id: 2,
        title: "Sustainable construction materials",
        description: "Eco-friendly options for your projects",
        color: "bg-gradient-to-r from-[#0038AE] to-[#6E28DD]",
      },
      {
        id: 3,
        title: "Verified Impact Suppliers",
        description: "Top-rated sustainable partners",
        color: "bg-gradient-to-r from-[#007168] to-[#00DBC6]",
      },
    ]
  
    const impactMetrics = [
      { value: "2.5M", label: "Kg CO₂ Saved", icon: Leaf },
      { value: "1.2M", label: "L Water Preserved", icon: Shield },
      { value: "500K+", label: "Active Users", icon: Users },
      { value: "850+", label: "Sustainable Projects", icon: Building },
    ]
  
    return (
      <div className="flex flex-col min-h-screen bg-white">
       <Menu/>
        {/* Search */}
        <div className="px-4 py-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products & services"
              className="w-full py-2 pl-10 pr-4 border border-[#4BCC91] rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3EB57F]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
  
        {/* Marketplace Header */}
        <div className="px-4 py-3 flex items-center">
          <div className="w-12 h-12 mr-3 flex-shrink-0">
          <Image
              src="/Logo.png"
              alt="Urbanika Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Regen Marketplace</h2>
            <p className="text-sm text-gray-500">
              A market dedicated to green tech products and services, building the green cities of the future.
            </p>
          </div>
        </div>
  
        {/* Trending Section */}
        <section className="px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Trending</h3>
          <Carousel items={trendingItems} />
        </section>
  
        {/* Categories */}
        <section className="px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Browse by Category</h3>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                description={category.description}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </section>
  
        {/* Impact Metrics */}
        <section className="px-4 py-3 bg-[#F2F6FF] mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Collective Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="bg-white rounded-lg p-3 flex items-center shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#d4f7e2] flex items-center justify-center mr-3">
                    <Icon className="h-5 w-5 text-[#3EB57F]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-[#007168]">{metric.value}</div>
                    <div className="text-xs text-gray-500">{metric.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
  
        {/* Impact Brand */}
        <section className="px-4 py-6 mt-4">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Are you an Impact Brand?</h3>
          <p className="text-gray-600 mb-6">
            Urbánika's Regen Marketplace brings the finest of humans to exchange resources. Think you run a business with
            impact? Join the movement
          </p>
          <Button className="w-full py-6 text-white font-medium rounded-full bg-[#3EB57F] hover:bg-[#35a06f]">
            Become a Seller
          </Button>
        </section>
  
        {/* Featured Suppliers */}
        <section className="px-4 py-6 bg-[#F2F6FF]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Top Rated Suppliers</h3>
            <Link href="#" className="text-[#3EB57F] text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {[
              {
                name: "EcoTimber Solutions",
                category: "Sustainable Wood",
                rating: 4.9,
                impact: "High Positive Impact",
              },
              {
                name: "GreenCrete Innovations",
                category: "Low-Carbon Concrete",
                rating: 4.8,
                impact: "Very High Positive Impact",
              },
            ].map((supplier, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-[#007168]">{supplier.name}</h4>
                    <p className="text-xs text-gray-500">{supplier.category}</p>
                  </div>
                  <div className="flex items-center bg-[#d4f7e2] px-2 py-1 rounded-full">
                    <span className="text-xs font-bold text-[#007168] mr-1">{supplier.rating}</span>
                    <Leaf className="h-3 w-3 text-[#3EB57F]" />
                  </div>
                </div>
                <div className="text-xs inline-block bg-[#F2F6FF] text-[#007168] px-2 py-1 rounded-full">
                  {supplier.impact}
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* How It Works */}
        <section className="px-4 py-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Search",
                description: "Browse our extensive catalog of sustainable construction materials and suppliers.",
                color: "#0038AE",
              },
              {
                step: "2",
                title: "Compare",
                description: "Review sustainability ratings and detailed impact assessments for each supplier.",
                color: "#6E28DD",
              },
              {
                step: "3",
                title: "Connect",
                description: "Directly connect with suppliers that meet your sustainability requirements.",
                color: "#00DBC6",
              },
              {
                step: "4",
                title: "Build",
                description: "Create sustainable projects with confidence in your material choices.",
                color: "#3EB57F",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-[#007168]">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
      </div>
    )
}
export default dashboard