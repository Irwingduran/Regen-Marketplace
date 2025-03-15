import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
}

export function FeatureCard({ icon: Icon, title, description, iconColor }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-[#F2F6FF]">
          <Icon className="h-8 w-8" style={{ color: iconColor }} />
        </div>
        <h3 className="text-xl font-bold" style={{ color: "#007168" }}>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

