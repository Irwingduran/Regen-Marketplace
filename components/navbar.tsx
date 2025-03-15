import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white">
      <div className="flex items-center gap-2">
        <Image
          src="/icon/logo.png"
          alt="Urbánika Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <div className="text-2xl font-bold text-accentPrimary">Urbánika</div>
      </div>
      <div className="flex space-x-4">
        <Link href="/home" className="text-black hover:text-colorPrimary">Home</Link>
        <Link href="/#about" className="text-black hover:text-colorPrimary">About</Link>
        <Link href="/#docs" className="text-black hover:text-colorPrimary">Docs</Link>
      </div>
    </nav>
  )
}

export default navbar