"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface FilterBadgeProps {
  label: string
  onRemove: (label: string) => void
}

export function FilterBadge({ label, onRemove }: FilterBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Badge
        variant="outline"
        className={`px-4 py-1.5 rounded-full bg-green-400 text-white border-none transition-all duration-300 ${isHovered ? "bg-green-500" : ""}`}
      >
        {label}
        <button
          onClick={() => onRemove(label)}
          className={`ml-2 transition-transform duration-300 ${isHovered ? "rotate-90" : ""}`}
          aria-label={`Remove ${label} filter`}
        >
          ×
        </button>
      </Badge>
    </motion.div>
  )
}

