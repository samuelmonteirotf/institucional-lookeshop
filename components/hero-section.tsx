"use client"

import { Smartphone, Shield, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("servicos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#0033CC] rounded-2xl mb-8">
            <Smartphone className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-black">
            VOCÊ CONHECE,
            <br />
            <span className="text-[#0033CC]">VOCÊ CONFIA</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Especialistas em iPhone com atendimento humano, transparente e confiável.
            <br />
            Guiados por princípios cristãos de excelência e amor.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white font-semibold px-8 py-4 text-lg"
            >
              Fale Conosco Agora
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-2 border-[#0033CC] text-[#0033CC] hover:bg-[#0033CC] hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Tech Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-[#0033CC] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Confiança Total</h3>
            <p className="text-gray-600">Transparência e honestidade em cada atendimento</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-[#FF0000] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Rapidez</h3>
            <p className="text-gray-600">Diagnóstico e soluções ágeis para seu iPhone</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-[#0033CC] rounded-xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Qualidade</h3>
            <p className="text-gray-600">Excelência técnica com amor cristão</p>
          </div>
        </div>
      </div>
    </section>
  )
}
