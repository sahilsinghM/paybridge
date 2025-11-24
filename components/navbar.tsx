"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/developers", label: "Developers" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="container-base flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">PB</span>
          PayBridge
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-secondary lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="text-sm font-medium text-secondary hover:text-primary">
            Merchant Login
          </Link>
          <Button size="sm">Talk to Sales</Button>
        </div>
        <div className="lg:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden bg-white shadow-sm ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-base flex flex-col gap-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link href="/login" className="text-sm font-medium text-secondary hover:text-primary" onClick={closeMenu}>
              Merchant Login
            </Link>
            <Button size="sm" onClick={closeMenu}>
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
