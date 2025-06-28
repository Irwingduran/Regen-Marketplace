"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Leaf, Users, Store, Award, Lightbulb } from "lucide-react"
import UserTypeSelection from "@/components/onboarding/user-type-selection"
import VendorForm from "@/components/onboarding/vendor-form"
import UserForm from "@/components/onboarding/user-form"
import NFTEducation from "@/components/onboarding/nft-education"
import Completion from "@/components/onboarding/completion"
import { VendorFormData } from "@/components/onboarding/useVendorForm"

const steps = [
  { id: "type", title: "Tipo de Usuario", icon: Users },
  { id: "form", title: "Información", icon: Store },
  { id: "education", title: "Educación NFT", icon: Award },
  { id: "completion", title: "Completado", icon: CheckCircle },
]

interface UserFormData {
  firstName: string
  lastName: string
  email: string
  location: string
  interests: string[]
  sustainabilityGoals: string[]
  monthlyBudget: string
}

type OnboardingFormData = VendorFormData | UserFormData;

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userType, setUserType] = useState<"vendor" | "user" | null>(null)
  const [formData, setFormData] = useState<OnboardingFormData | null>(null)

  const currentStepId = steps[currentStep].id
  const progress = ((currentStep + 1) / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleUserTypeSelect = (type: "vendor" | "user") => {
    setUserType(type)
    nextStep()
  }

  const handleFormSubmit = (data: OnboardingFormData) => {
    setFormData(data)
    nextStep()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">EcoTech</span>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Registro Guiado
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Bienvenido a EcoTech</h1>
                  <p className="text-gray-600">Te guiaremos paso a paso para crear tu cuenta</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">
                    Paso {currentStep + 1} de {steps.length}
                  </div>
                  <div className="text-lg font-semibold text-green-600">{Math.round(progress)}% completado</div>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
          </Card>

          {/* Steps Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === currentStep
                const isCompleted = index < currentStep
                return (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-green-100 text-green-700"
                          : isCompleted
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Step Content */}
          <Card>
            <CardContent className="p-8">
              {currentStepId === "type" && <UserTypeSelection onSelect={handleUserTypeSelect} />}
              {currentStepId === "form" && userType === "vendor" && <VendorForm onSubmit={handleFormSubmit} />}
              {currentStepId === "form" && userType === "user" && <UserForm onSubmit={handleFormSubmit} />}
              {currentStepId === "education" && <NFTEducation userType={userType} onComplete={nextStep} />}
              {currentStepId === "completion" && <Completion userType={userType} formData={formData ?? {}} />}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          {currentStepId !== "completion" && (
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Anterior</span>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Lightbulb className="w-4 h-4" />
                <span>¿Necesitas ayuda? Chatea con nosotros</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}