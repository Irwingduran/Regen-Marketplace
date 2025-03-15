import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SupplierCardProps {
  name: string
  category: string
  rating: string
  description: string
  impact: string
  color: string
}

export function SupplierCard({ name, category, rating, description, impact, color }: SupplierCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-3" style={{ backgroundColor: color }}></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold" style={{ color: "#007168" }}>
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <div className="flex items-center bg-[#F2F6FF] px-2 py-1 rounded">
            <span className="text-sm font-bold" style={{ color: "#007168" }}>
              {rating}
            </span>
            <span className="text-yellow-500 ml-1">★</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="bg-[#F2F6FF] text-[#007168] border-none">
            {impact}
          </Badge>
          <Button variant="ghost" size="sm" className="text-[#0038AE]">
            View Profile <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

