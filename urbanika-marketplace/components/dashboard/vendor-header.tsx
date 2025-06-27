"use client"

import { Badge, Star, Bell, Settings, LogOut, Mail, Calendar } from "lucide-react";
import Navbar from "../layout/Navbar";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

interface VendorHeaderProps {
  vendorData: {
    name: string;
    contactName: string;
    email: string;
    memberSince: string;
    regenScore: number;
    nftLevel: string;
  };
}

export default function VendorHeader({ vendorData }: VendorHeaderProps) {
  return (
    <header className="bg-white shadow p-4 rounded-lg">
      <Navbar role="vendor" userName={vendorData.name} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
        {/* Navigation Links */}
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/dashboard/vendor/inventory" className="text-gray-600 hover:text-green-600">
            Inventario
          </Link>
          <Link href="/dashboard/vendor/orders" className="text-gray-600 hover:text-green-600">
            Pedidos
          </Link>
          <Link href="/dashboard/vendor/analytics" className="text-gray-600 hover:text-green-600">
            Analíticas
          </Link>
        </nav>
        {/* User Info & Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{vendorData.name}</p>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800 text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  REGEN {vendorData.regenScore}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 text-xs">{vendorData.nftLevel}</Badge>
              </div>
            </div>
            <Avatar>
              <AvatarFallback className="bg-green-100 text-green-700">
                {vendorData.contactName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* Vendor Info Bar */}
      <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{vendorData.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">
                Miembro desde {new Date(vendorData.memberSince).toLocaleDateString()}
              </span>
            </div>
          </div>
          <Badge className="bg-yellow-100 text-yellow-800">Proveedor Verificado ✓</Badge>
        </div>
      </div>
    </header>
  );
}
