import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div>  {/* Footer */}
    <footer className="mt-auto bg-white px-4 py-6 border-t">
      <div className="flex justify-center mb-4">
        <Image
          src="/icon/logo.png"
          alt="Urbánika Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </div>
      <div className="text-center text-xs text-gray-500">© 2025 Urbánika. All rights reserved.</div>
    </footer></div>
  )
}

export default footer