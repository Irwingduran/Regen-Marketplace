"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload } from "lucide-react"
import Menu from "@/components/menu"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function SupplierRegistration() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    taxId: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <> 
    <Menu/>
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 border-b border-gray-200 flex items-center">
        <button className="mr-4">
          <Button onClick={() => router.back()}><ArrowLeft size={20} /></Button>
        </button>
        <h1 className="text-lg font-medium text-gray-800">Seller Registration</h1>
      </header>

      <div className="flex-1 p-4 pb-24 overflow-auto">
        <h2 className="text-xl font-medium mb-6">New Registration</h2>

        <form onSubmit={handleSubmit}>
          {/* Business Information */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-5">
            <h3 className="text-gray-700 font-medium mb-4">Business Information</h3>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Enter company name"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Registration Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                placeholder="Enter registration number"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-1">
                Tax ID<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="taxId"
                name="taxId"
                placeholder="Enter tax ID"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={formData.taxId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-5">
            <h3 className="text-gray-700 font-medium mb-4">Contact Information</h3>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                className="w-full p-2 border border-gray-300 rounded text-sm bg-blue-100"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Business Documents */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-5">
            <h3 className="text-gray-700 font-medium mb-4">Business Documents</h3>
            <p className="text-sm text-gray-600 mb-5">
              To determine if you qualify for the marketplace, please provide the following information:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-green-500 font-medium text-sm">Business License</p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Product/Service Description:</p>
                <p className="text-xs text-gray-600">Explain what you offer and its environmental benefits.</p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Certifications:</p>
                <p className="text-xs text-gray-600">
                  List any relevant environmental certifications (e.g. ISO 14001, Organic, Carbon Neutral).
                </p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Product Lifecycle:</p>
                <p className="text-xs text-gray-600">
                  Outline raw material sourcing, production, distribution, use, and disposal.
                </p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Materials & Sustainability:</p>
                <p className="text-xs text-gray-600">
                  Specify if materials are recyclable, biodegradable, renewable, or fair trade.
                </p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Resource Efficiency:</p>
                <p className="text-xs text-gray-600">
                  Share data on water usage, carbon emissions, and waste generation.
                </p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Ethical Practices:</p>
                <p className="text-xs text-gray-600">
                  Describe labor policies, employee relations, and community impact.
                </p>
              </div>

              <div>
                <p className="text-green-500 font-medium text-sm">Animal Welfare:</p>
                <p className="text-xs text-gray-600">Indicate any use of animals in testing or production.</p>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 mb-8 flex flex-col items-center justify-center">
            <Upload className="text-gray-400 mb-2" size={24} />
            <p className="text-sm text-gray-600 mb-1">Select a file or files from your device</p>
            <p className="text-xs text-gray-400">Supported formats: PDF, JPG, PNG (Max: 10 MB)</p>
          </div>

          {/* Submit Buttons */}
          <div className="space-y-3">
            <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-full font-medium">
              Submit
            </button>
            <button type="button" className="w-full py-3 text-gray-500 font-medium">
              Save for later
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

