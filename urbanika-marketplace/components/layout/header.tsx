"use client"

import Navbar from "./Navbar";
export default function Header() {
  // Use role="guest" or "buyer" depending on auth, here is guest for base
  return <Navbar role="guest" />;
}

