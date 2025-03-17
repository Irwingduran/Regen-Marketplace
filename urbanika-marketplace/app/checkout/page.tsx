"use client"
import { ArrowLeft, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import MenuPrincipal from "@/components/menu"
import Link from "next/link"
import { useRouter } from 'next/navigation'

interface AddressProps {
  id: string
  type: string
  isDefault?: boolean
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pincode: string
}

export default function AddressManagement() {
  const router = useRouter();
  // Sample address data
  const addresses: AddressProps[] = [
    {
      id: "1",
      type: "Home",
      isDefault: true,
      addressLine1: "Address line 1",
      addressLine2: "Address line 2",
      city: "City",
      state: "State",
      pincode: "Pincode",
    },
    {
      id: "2",
      type: "Work",
      addressLine1: "Address line 1",
      addressLine2: "Address line 2",
      city: "City",
      state: "State",
      pincode: "Pincode",
    },
    {
      id: "3",
      type: "John Wick",
      addressLine1: "Address line 1",
      addressLine2: "Address line 2",
      city: "City",
      state: "State",
      pincode: "Pincode",
    },
  ]

  const defaultAddress = addresses.find((address) => address.isDefault)
  const otherAddresses = addresses.filter((address) => !address.isDefault)

  return (
    <>
    <MenuPrincipal/>
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center">
          <Button onClick={() => router.back()} className="mr-3">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Button>
          <h1 className="text-xl font-medium text-gray-700">Your Addresses</h1>
        </div>
        <div className="flex items-center">
          <Link href="#" className="mr-4">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </Link>
          <button>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4">
        {/* Current Default Address */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-600">Current Default Address</h2>
            <Button variant="ghost" className="text-blue-600 font-medium">
              + Add New
            </Button>
          </div>

          {defaultAddress && (
            <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
              <div className="flex items-start">
                <RadioGroup defaultValue={defaultAddress.id} className="mt-1">
                  <RadioGroupItem
                    value={defaultAddress.id}
                    id={defaultAddress.id}
                    className="text-blue-600 border-blue-600"
                    checked
                  />
                </RadioGroup>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-700">{defaultAddress.type}</h3>
                  <p className="text-gray-600 mt-1">
                    {defaultAddress.addressLine1}, {defaultAddress.addressLine2},<br />
                    {defaultAddress.city}, {defaultAddress.state}, {defaultAddress.pincode}
                  </p>
                  <div className="flex justify-end mt-2">
                    <Button variant="ghost" className="text-green-500 font-medium">
                      Edit
                    </Button>
                    <Button variant="ghost" className="text-green-500 font-medium">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Other Saved Addresses */}
        <div>
          <h2 className="text-xl text-gray-600 mb-4">Other Saved Addresses</h2>

          {otherAddresses.map((address) => (
            <div key={address.id} className="bg-white rounded-lg p-4 shadow-sm border mb-4">
              <div className="flex items-start">
                <RadioGroup defaultValue="" className="mt-1">
                  <RadioGroupItem value={address.id} id={address.id} className="border-gray-400" />
                </RadioGroup>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-700">{address.type}</h3>
                  <p className="text-gray-600 mt-1">
                    {address.addressLine1}, {address.addressLine2},<br />
                    {address.city}, {address.state}, {address.pincode}
                  </p>
                  <div className="flex justify-end mt-2">
                    <Button variant="ghost" className="text-green-500 font-medium">
                      Edit
                    </Button>
                    <Button variant="ghost" className="text-green-500 font-medium">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 py-16">
       <Link href="/checkout/pay"> <Button className="w-full py-6 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md">Next</Button></Link>
      </footer>
    </div>
    </>
  )
}

