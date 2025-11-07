"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
  {/* Logo */}
  <Link href="/" className="flex items-center gap-3">
    <div className="w-9 h-8 flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Creator Research Logo"
        width={35}   // reduced width
        height={35}  // reduced height
        className="rounded-lg"
      />
    </div>
    <span className="font-bold text-white text-sm sm:text-base hidden sm:inline">
      Creator Research Pvt. Ltd.
    </span>
  </Link>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-8">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className={`transition-colors font-medium ${
          pathname === link.href
            ? "text-blue-300 border-b-2 border-blue-300 pb-1"
            : "text-blue-100 hover:text-white"
        }`}
      >
        {link.name}
      </Link>
    ))}
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-white"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>


        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-800 pt-4 animate-slideDown space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium ${
                  pathname === link.href
                    ? "text-blue-300 font-semibold"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <button className="w-full mt-4 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
              Get Started
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
}
