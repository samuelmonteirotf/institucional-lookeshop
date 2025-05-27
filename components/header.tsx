"use client"

import { useState } from "react"
import { Menu, X, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-2 border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-[#0033CC] rounded-2xl flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Look Shop</h1>
              <p className="text-sm text-gray-600 font-medium">Especialistas em iPhone</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5513982016096?text=Olá,%20vim%20pelo%20site%20da%20Look%20Shop!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t pt-6">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-gray-700 hover:text-[#0033CC] transition-colors font-semibold text-lg"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5513982016096?text=Olá,%20vim%20pelo%20site%20da%20Look%20Shop!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-6 py-3 rounded-xl font-bold transition-colors text-center"
              >
                Fale Conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
