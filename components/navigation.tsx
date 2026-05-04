"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Início", href: "/" },
  { name: "Materiais", href: "#materiais" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-navy shadow-lg">
      <div className="site-container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-gold transition-colors">
          Pedagogiando
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gold transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-6">
            <Link href="/produtos">Ver produtos</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy text-white border-l border-white/20">
            <div className="flex flex-col space-y-6 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg hover:text-gold transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full w-full">
                <Link href="/produtos" onClick={() => setIsOpen(false)}>Ver produtos</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}