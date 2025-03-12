"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, LayoutDashboard, User } from "lucide-react";


const Menu = () => {

    const pathname = usePathname();

    const navItems = [
      { href: "/search", icon: <Search />, label: "Buscar" },
      { href: "/cart", icon: <ShoppingCart />, label: "Carrito" },
      { href: "/home", icon: <Image src="/logobnw.png" alt="Menu" width={40} height={40} />, label: "Inicio" },
      { href: "/dashboard", icon: <LayoutDashboard />, label: "Dashboard" },
      { href: "/auth/login", icon: <User />, label: "Login" },
    ];
  
    return (
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className={`flex flex-col items-center text-gray-700 ${pathname === item.href ? "text-black font-bold" : ""}`}>
              <div className="w-6 h-6">{item.icon}</div>
            </Link>
          ))}
        </div>
      </nav>
    );
  };  

export default Menu