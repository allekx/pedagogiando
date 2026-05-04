"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Home, BookOpen, Info, Mail, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Início", href: "/", icon: Home },
  { name: "Materiais", href: "#materiais", icon: BookOpen },
  { name: "Sobre", href: "#sobre", icon: Info },
  { name: "Contato", href: "#contato", icon: Mail },
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
          <SheetContent side="right" className="bg-navy text-white border-l border-white/20 w-72 p-0">
            <div className="flex flex-col h-full">
              {/* Logo na parte superior do menu */}
              <div className="px-6 py-5 border-b border-white/10">
                <h2 className="text-2xl font-bold text-gold">Pedagogiando</h2>
              </div>

              {/* Menu Items */}
              <div className="flex-1 px-6 py-6">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-200 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-base">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>

                {/* Separador */}
                <div className="my-6 h-px bg-white/10" />

                {/* Botão Ver Produtos */}
                <Button
                  asChild
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-lg py-6 flex gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/produtos" className="flex items-center justify-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Ver produtos
                  </Link>
                </Button>
              </div>

              {/* Footer Info */}
              <div className="px-6 py-4 border-t border-white/10">
                <p className="text-xs text-white/60">
                  Educação que transforma, inclui e humaniza
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}