"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronLeft, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "./product-card"
import { FilterBadge } from "./filter-badge"
import { AnimatePresence } from "framer-motion"
import Menu from "@/components/menu"
import Link from "next/link"

interface Product {
  id: number
  name: string
  brand: string
  price: number
  score: number
  image: string
  tags: string[]
}

export default function SearchPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Eco-certified", "High Impact", "Organic"])
  const [searchQuery, setSearchQuery] = useState("sustainable products")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("Score")
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  // Simulate fetching products
  useEffect(() => {
    setIsLoading(true)

    // Simulate API delay
    const timer = setTimeout(() => {
      const dummyProducts: Product[] = Array(8)
        .fill(null)
        .map((_, index) => ({
          id: index + 1,
          name: "Biodegradable Plant Pots",
          brand: "Zero Waste",
          price: 19.99,
          score: 85,
          image: "/placeholder.svg?height=200&width=200",
          tags: ["recycled", "biodegradable", "plastic-free"],
        }))

      setProducts(dummyProducts)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSortChange = () => {
    const options = ["Score", "Price: Low to High", "Price: High to Low", "Newest"]
    const currentIndex = options.indexOf(sortBy)
    const nextIndex = (currentIndex + 1) % options.length
    setSortBy(options[nextIndex])
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-20">
        <Menu/>
      {/* Search Header */}
      <header className="p-4 sticky top-0 bg-gray-50 z-10 shadow-sm">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search sustainable products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 bg-white focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Filter"
          >
            <Filter className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 max-w-4xl mx-auto">
            <AnimatePresence>
              {activeFilters.map((filter) => (
                <FilterBadge key={filter} label={filter} onRemove={removeFilter} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      <Separator />

      {/* Results Header */}
      <div className="px-4 py-3 flex justify-between items-center max-w-4xl mx-auto w-full">
        <div className="font-medium">{products.length} Results</div>
        <Button variant="ghost" className="flex items-center gap-1 text-sm" onClick={handleSortChange}>
          <span>Sort by: {sortBy}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <Separator />

      {/* Product Grid */}
      <main className="flex-1 p-4">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                  <div className="bg-gray-200 aspect-square"></div>
                  <div className="p-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </main>

      {/* Pagination */}
      <div className="py-6 flex justify-center">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "ghost"}
              className={
                page === currentPage
                  ? "bg-green-400 hover:bg-green-500 text-white h-10 w-10 rounded-full p-0"
                  : "text-gray-600 h-10 w-10 rounded-full p-0 hover:bg-green-100 transition-colors"
              }
              onClick={() => handlePageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

