"use client";

import Link from "next/link";
import { useState } from "react";
import { navConfig } from "./navConfig";
import { Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface NavbarProps {
  role?: keyof typeof navConfig;
  brand?: string;
  showSearch?: boolean;
  userName?: string;
}

export default function Navbar({ role = "guest", brand = "Urbanika", showSearch = true, userName }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = navConfig[role] || navConfig.guest;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">{brand}</span>
          </Link>

          {/* Search Bar - Desktop */}
          {showSearch && (
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="text" placeholder="Buscar productos sostenibles..." className="pl-10 pr-4 w-full" />
              </div>
            </div>
          )}

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Name (optional) */}
          {userName && (
            <div className="hidden md:block ml-4 text-gray-700 font-medium">
              Hola, {userName}
            </div>
          )}

          {/* Hamburger Menu - Mobile */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-2 flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {userName && (
              <div className="py-2 text-gray-700 font-medium">Hola, {userName}</div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
