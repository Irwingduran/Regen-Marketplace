import { useState, useCallback } from "react"

export interface VendorFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  website: string
  address: string
  description: string
  category: string
  certifications: string[]
  sustainabilityMetrics: {
    carbonReduction: string
    waterSaving: string
    renewableEnergy: string
    wasteReduction: string
  }
}

export const sections = [
  { title: "Información General", icon: "Store" },
  { title: "Ubicación y Contacto", icon: "MapPin" },
  { title: "Certificaciones", icon: "Award" },
  { title: "Métricas de Impacto", icon: "Leaf" },
]

export const certificationOptions = [
  "ISO 14001 (Gestión Ambiental)",
  "LEED (Construcción Sostenible)",
  "Energy Star",
  "Cradle to Cradle",
  "Fair Trade",
  "Organic Certification",
  "Carbon Neutral Certified",
  "B-Corp Certification",
]

export function useVendorForm(initialData?: Partial<VendorFormData>) {
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    description: "",
    category: "",
    certifications: [],
    sustainabilityMetrics: {
      carbonReduction: "",
      waterSaving: "",
      renewableEnergy: "",
      wasteReduction: "",
    },
    ...initialData,
  })

  const [currentSection, setCurrentSection] = useState(0)

  const handleInputChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  const handleMetricChange = useCallback((metric: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      sustainabilityMetrics: {
        ...prev.sustainabilityMetrics,
        [metric]: value,
      },
    }))
  }, [])

  const handleCertificationToggle = useCallback((cert: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }))
  }, [])

  const nextSection = useCallback(() => {
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1))
  }, [])

  const prevSection = useCallback(() => {
    setCurrentSection((prev) => Math.max(prev - 1, 0))
  }, [])

  return {
    formData,
    setFormData,
    currentSection,
    setCurrentSection,
    handleInputChange,
    handleMetricChange,
    handleCertificationToggle,
    nextSection,
    prevSection,
  }
}
