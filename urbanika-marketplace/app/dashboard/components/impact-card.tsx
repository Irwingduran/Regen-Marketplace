import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface ImpactCardProps {
  value: string
  unit: string
  label: string
  bgColor: string
  icon: ReactNode
}

export function ImpactCard({ value, unit, label, bgColor, icon }: ImpactCardProps) {
  return (
    <Card className={`${bgColor} p-3 flex flex-col items-center justify-center text-center`}>
      <div className="mb-1">{icon}</div>
      <div className="font-bold text-lg leading-tight">{value}</div>
      <div className="text-xs text-gray-700 leading-tight">{unit}</div>
      <div className="text-xs text-gray-700 leading-tight">{label}</div>
    </Card>
  )
}

