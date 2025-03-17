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
import { useRouter } from 'next/navigation'

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
  const router = useRouter();
  const [activeFilters, setActiveFilters] = useState<string[]>(["Eco-certified", "High Impact", "Sustainable"])
  const [searchQuery, setSearchQuery] = useState("sustainable products")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("Score")
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])


  const productsData = [
    {
      id: 1,
      name: "Specialized Concrete",
      brand: "Ecological Concrete",
      price: 19.99,
      score: 85,
      image: "https://holcimsoluciones.com/media/catalog/product/h/o/holcim_cemento_gris_apasco_ecoplanet_50_kg_frente.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      tags: ["recycled", "sustainable", "plastic-free"],
    },
    {
      id: 2,
      name: "Resim8",
      brand: "Synthetic Hybrid Mineral-Polymer",
      price: 24.99,
      score: 90,
      image: "https://cdn.prod.website-files.com/6763c964d123d97fef0f8944/6763c964d123d97fef0f89e5_Our-Solution-Image-2-p-1080.png",
      tags: ["recycled", "sustainable", "eco-friendly"],
    },
    {
      id: 3,
      name: "EV Charging Stations",
      brand: "Electric Vehicle Charger",
      price: 45.99,
      score: 88,
      image: "https://blinkcharging.com/_ipx/w_2048,q_75/https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1016941%2F800x600%2F494f8c29bb%2Fblink-single-eco-pedestal.jpg%2Fm%2F1440x0?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1016941%2F800x600%2F494f8c29bb%2Fblink-single-eco-pedestal.jpg%2Fm%2F1440x0&w=2048&q=75",
      tags: ["green-energy", "sustainable", "eco-friendly"],
    },
    {
      id: 4,
      name: "Aluminum Foil",
      brand: "Thermal Insulation Covers",
      price: 15.99,
      score: 92,
      image: "https://www.shelter.mx/images/img-rpr6.jpg",
      tags: ["biodegradable", "plastic-free", "sustainable"],
    },
    {
      id: 5,
      name: "VIPAL",
      brand: "Organic Soil Stabilizer",
      price: 9.99,
      score: 84,
      image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/458965918_7957811400981037_5566549123005287347_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=8lAsIlp8hh4Q7kNvgGs1Vnu&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GQzHibv4KLpRXtQit6lEOA&oh=00_AYEjQliPexyMuSkmZ8fu_Wf_rGb7_NgNdESjB1V8jtoJZA&oe=67DDC565",
      tags: ["recycled", "tree-free", "eco-friendly"],
    },
    {
      id: 6,
      name: "Construction Wire Rod",
      brand: "Non-treated Carbon Steel Wire Rod",
      price: 12.99,
      score: 89,
      image: "https://www.deacero.com/images/thumbs/0000251_alambron-para-trefilar.jpeg",
      tags: ["organic", "reusable", "sustainable"],
    },
    {
      id: 7,
      name: "Biofilter",
      brand: "Bioconstruction",
      price: 4.99,
      score: 86,
      image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/470691243_8905797902791046_7311592442120738835_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HPRJJYyVK6IQ7kNvgEbanlI&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AmREDo9s9mt4ngYWWAD8Kg&oh=00_AYFqPKu4jye0ygfMHwFc-q_AvLQ-SbJ95XjjkQ6U0lJQ4Q&oe=67DDD1FE",
      tags: ["biodegradable", "plastic-free", "sustainable"],
    },
  
  ];
  // Simulate fetching products
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setProducts(productsData)
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
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Menu/>
      {/* Search Header */}
      <header className="p-4 sticky top-0 bg-gray-50 z-10 shadow-sm">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <Button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </Button>
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
          <Link href="/filter">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Filter"
          >
            <Filter className="h-6 w-6" />
          </Button>
          </Link>
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
      <div className="py-16 flex justify-center">
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

