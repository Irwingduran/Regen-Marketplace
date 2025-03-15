import type { ReactNode } from "react"

interface CategoryCardProps {
  name: string
  description: string
  icon: ReactNode
  color: string
}

export function CategoryCard({ name, description, icon, color }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="font-semibold text-[#3EB57F]">{name}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  )
}

