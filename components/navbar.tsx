import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="container-base flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">PB</span>
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
          <Button variant="outline" size="sm">Menu</Button>
        </div>
      </div>
    </header>
  );
}
