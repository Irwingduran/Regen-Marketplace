import { Leaf, Droplet, User } from "lucide-react"

interface ImpactMetricProps {
  icon: "leaf" | "droplet" | "user"
  value: string
  label: string
  bgColor: string
}

export default function ImpactMetric({ icon, value, label, bgColor }: ImpactMetricProps) {
  return (
    <div className={`${bgColor} rounded-lg p-3 flex flex-col items-center justify-center text-center`}>
      {icon === "leaf" && <Leaf className="w-6 h-6 text-green-600 mb-1" />}
      {icon === "droplet" && <Droplet className="w-6 h-6 text-blue-600 mb-1" />}
      {icon === "user" && <User className="w-6 h-6 text-pink-600 mb-1" />}
      <span className="font-bold text-textColor">{value}</span>
      <span className="text-xs text-gray-600 mt-1">{label}</span>
    </div>
  )
}

