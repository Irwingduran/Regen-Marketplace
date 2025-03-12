import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Github } from 'lucide-react'
import { SiFarcaster } from 'react-icons/si'

const footer = () => {
  return (
    <div>
      <footer className="mt-auto bg-white px-4 py-6 border-t">
        <Link href="/">
        <div className="flex justify-center mb-4">
          <Image
            src="/icon/logo.png"
            alt="Urbánika Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
        </Link>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://twitter.com/0xUrbanika" target="_blank" className="text-gray-600 hover:text-colorPrimary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://instagram.com/0xurbanika" target="_blank" className="text-gray-600 hover:text-colorPrimary transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://warpcast.com/urbanika" target="_blank" className="text-gray-600 hover:text-colorPrimary transition-colors">
            <SiFarcaster className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/urbanika" target="_blank" className="text-gray-600 hover:text-colorPrimary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        </div>
        <div className="text-center text-xs text-gray-500">© 2025 Urbánika. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default footer