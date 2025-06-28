"use client"
import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import FeaturedCarousel from "@/components/sections/featured-carousel"
import ImpactSection from "@/components/sections/impact-section"
import SearchSection from "@/components/sections/search-section"
import BenefitsSection from "@/components/sections/benefits-section"
import CTASection from "@/components/sections/cta-section"
import Footer from "@/components/layout/footer"

import { useEffect, useState } from "react"

export default function HomePage() {
  const [apiMessage, setApiMessage] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(() => setApiMessage("Could not connect to backend"))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SearchSection />
      <FeaturedCarousel />
      <ImpactSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
      {/* Show backend message */}
      <div className="text-center py-4 text-gray-700">
        FastAPI backend says: <b>{apiMessage}</b>
      </div>
    </div>
  )
}
