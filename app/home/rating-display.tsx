import { Leaf } from "lucide-react"

interface RatingDisplayProps {
  rating: number
  maxRating: number
}

export default function RatingDisplay({ rating, maxRating }: RatingDisplayProps) {
  const filledLeaves = Math.floor(rating)
  const emptyLeaves = Math.floor(maxRating - rating)

  return (
    <div className="flex items-center gap-1">
      {[...Array(filledLeaves)].map((_, i) => (
        <Leaf key={`filled-${i}`} className="w-4 h-4 fill-green-500 text-green-500" />
      ))}
      {[...Array(emptyLeaves)].map((_, i) => (
        <Leaf key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="text-white text-sm ml-1">
        {rating.toFixed(1)}/{maxRating.toFixed(1)}
      </span>
    </div>
  )
}

