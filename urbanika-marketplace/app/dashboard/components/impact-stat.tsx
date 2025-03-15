import type { LucideIcon } from "lucide-react"

interface ImpactStatProps {
  value: string
  label: string
  icon: LucideIcon
}

export function ImpactStat({ value, label, icon: Icon }: ImpactStatProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="p-3 rounded-full bg-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <p className="text-white/80">{label}</p>
    </div>
  )
}

