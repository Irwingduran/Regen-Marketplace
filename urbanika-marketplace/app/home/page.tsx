import ImpactMetric from "./impact-metric"
import CategoryCard from "./category-card"
import HeroCarousel from "./hero-carousel"
import ProductsCarousel from "./products-carousel"
import Menu from "@/components/menu"

export default function Home() {
  const topProducts = [
    {
      id: 1,
      title: "Water Bottle",
      price: 9.99,
      rating: 4.9,
      image: "/img/water-bottle.webp",
    },
    {
      id: 2,
      title: "Water Filter",
      price: 29.99,
      rating: 4.8,
      image: "/img/water-filter.png",
    },
    {
      id: 3,
      title: "Solar Panel",
      price: 149.99,
      rating: 4.7,
      image: "/img/solar-panel.png",
    },
    
  ]

  return (

    <main className="min-h-screen mx-auto bg-white">
      <Menu/>
      <HeroCarousel />

      <section className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Our Global Impact</h2>
        <div className="grid grid-cols-3 gap-2">
          <ImpactMetric icon="leaf" value="2.5M" label="kg CO₂ Saved" bgColor="bg-green-100" />
          <ImpactMetric icon="droplet" value="1.2M" label="L Water Preserved" bgColor="bg-blue-100" />
          <ImpactMetric icon="user" value="500K+" label="Active Users" bgColor="bg-pink-100" />
        </div>
      </section>

      <section className="py-4 p-4">
        <h2 className="text-lg font-semibold text-textColor mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          <CategoryCard title="Solar solutions" />
          <CategoryCard title="Water conservation" />
        </div>
      </section>

      <section className="py-16 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-textColor">Top Rated Solutions</h2>
          <a href="/search" className="text-green-600 text-sm">
            View all
          </a>
        </div>
        <ProductsCarousel products={topProducts} />
      </section>
    </main>
  )
}

