"use client"

import { useEffect, useState } from "react"
import { Leaf, Settings, ArrowRight } from "lucide-react"

export default function SupplierDashboard() {
  return (
    <div className="mx-auto bg-gray-50 ">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-medium text-gray-800">Supplier Dashboard</h1>
        <button className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
          <Settings className="w-5 h-5 text-green-600" />
        </button>
      </header>

      <div className="p-4 space-y-6">
        {/* Regen Score */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Regen Score</h2>
          <div className="flex flex-col items-center">
            <CircularProgress value={92} size={120} strokeWidth={10} />
            <p className="text-green-500 font-medium mt-2">Good Performance</p>
            <p className="text-sm text-gray-600">Top 15% Of Suppliers</p>
          </div>
        </div>

        {/* NFT Evolution */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-700 mb-4">NFT Evolution</h2>
          <div className="flex justify-between">
            <StageIndicator stage={1} active={true} />
            <StageIndicator stage={2} active={true} />
            <StageIndicator stage={3} active={true} />
            <StageIndicator stage={4} active={false} />
          </div>
        </div>

        {/* Criteria Fulfilled */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-700">Criteria Fulfilled</h2>
            <span className="text-green-500 font-medium">75%</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-3 mb-2">
            <div className="bg-green-400 h-3 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <p className="text-sm text-gray-600">6 of 8 Criteria Fulfilled</p>
        </div>

        {/* Certifications */}
        <h2 className="text-xl font-medium text-gray-800 pt-2">Certifications</h2>
        <div className="grid grid-cols-2 gap-4">
          <CertificationCard title="ISO 14001" status="Verified" verified={true} />
          <CertificationCard title="Fair Trade" status="Pending" verified={false} />
          <CertificationCard title="Green Seal" status="Verified" verified={true} />
          <CertificationCard title="Carbon Trust" status="Pending" verified={false} />
        </div>

        {/* Improve Your Score */}
        <h2 className="text-xl font-medium text-gray-800 pt-2">Improve Your Score</h2>
        <div className="space-y-4">
          <ActionItem
            title="Complete Carbon Footprint Report"
            priority="High Priority"
            priorityColor="text-red-500"
            steps="0/3 Steps"
          />
          <ActionItem
            title="Update Sustainability Policy"
            priority="Medium Priority"
            priorityColor="text-yellow-500"
            steps="2/4 Steps"
          />
          <ActionItem
            title="Submit Water Usage Data"
            priority="Low Priority"
            priorityColor="text-green-500"
            steps="2/3 Steps"
          />
        </div>
      </div>
    </div>
  )
}

// Internal components defined within the same file

interface CircularProgressProps {
  value: number
  size: number
  strokeWidth: number
}

function CircularProgress({ value, size, strokeWidth }: CircularProgressProps) {
  const [progress, setProgress] = useState(0)

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value)
    }, 100)

    return () => clearTimeout(timer)
  }, [value])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke="#e6f7ef" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#4ade80"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
        />
      </svg>
      <div className="absolute text-4xl font-semibold text-green-400">{progress}</div>
    </div>
  )
}

interface StageIndicatorProps {
  stage: number
  active: boolean
}

function StageIndicator({ stage, active }: StageIndicatorProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
          active ? "bg-green-200" : "bg-green-100"
        }`}
      >
        {active && <div className="w-8 h-8 rounded-full bg-green-400"></div>}
      </div>
      <span className="text-sm text-gray-600">Stage {stage}</span>
    </div>
  )
}

interface CertificationCardProps {
  title: string
  status: string
  verified: boolean
}

function CertificationCard({ title, status, verified }: CertificationCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div
        className={`w-8 h-8 rounded-full ${verified ? "bg-green-100" : "bg-gray-100"} flex items-center justify-center mb-2`}
      >
        <Leaf className={`w-5 h-5 ${verified ? "text-green-500" : "text-gray-300"}`} />
      </div>
      <h3 className={`font-medium ${verified ? "text-gray-800" : "text-gray-400"}`}>{title}</h3>
      <p className={`text-sm ${verified ? "text-green-500" : "text-gray-400"}`}>{status}</p>
    </div>
  )
}

interface ActionItemProps {
  title: string
  priority: string
  priorityColor: string
  steps: string
}

function ActionItem({ title, priority, priorityColor, steps }: ActionItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className={`text-sm ${priorityColor}`}>{priority}</p>
        <p className="text-xs text-gray-500">{steps}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-gray-400" />
    </div>
  )
}

