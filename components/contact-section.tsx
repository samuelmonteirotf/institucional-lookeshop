"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, Instagram, Send, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Vim pelo site da Look&Shop.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`
    window.open(`https://wa.me/5513982016096?text=${whatsappMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos aqui para ajudar você! Entre em contato conosco e experimente um atendimento baseado no amor e
            cuidado cristão com tecnologia de ponta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-[#0033CC] mb-8 text-center">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 border-2 border-gray-200 focus:border-[#0033CC] text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 border-2 border-gray-200 focus:border-[#0033CC] text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone (WhatsApp)"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-14 border-2 border-gray-200 focus:border-[#0033CC] text-lg"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva como podemos ajudar você..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-2 border-gray-200 focus:border-[#0033CC] text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white h-14 text-lg font-bold"
                  size="lg"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <Card className="shadow-xl border-0 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">WhatsApp</h3>
                    <p className="text-gray-600">Atendimento direto e humanizado</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Fale conosco diretamente pelo WhatsApp e receba atendimento personalizado.
                </p>
                <a
                  href="https://wa.me/5513982016096?text=Olá,%20vim%20pelo%20site%20da%20Look%20Shop!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Abrir WhatsApp
                </a>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card
              className="shadow-xl border-0"
              style={{
                background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Instagram</h3>
                    <p className="text-pink-100">Acompanhe nosso trabalho</p>
                  </div>
                </div>
                <p className="text-white mb-6 leading-relaxed">
                  Siga-nos no Instagram para ver nossos trabalhos, dicas e acompanhar nossa jornada.
                </p>
                <a
                  href="https://instagram.com/lookeshop.ihelpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-pink-50 transition-colors"
                >
                  @lookeshop.ihelpi
                </a>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl border-0 bg-[#0033CC]">
              <CardContent className="p-8 text-white">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[#0033CC]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Horário de Atendimento</h3>
                    <p className="text-blue-100">Sempre prontos para ajudar</p>
                  </div>
                </div>
                <div className="space-y-3 text-lg">
                  <p>
                    <strong>Segunda a Sexta:</strong> 9h às 18h
                  </p>
                  <p>
                    <strong>Sábado:</strong> 8h às 12h
                  </p>
                  <p>
                    <strong>Domingo:</strong> Fechado
                  </p>
                </div>
                <p className="mt-6 text-blue-100 text-sm">
                  
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Store Locations Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">Nossas Lojas</h3>
            <p className="text-xl text-gray-600">
              Visite uma de nossas unidades e conheça nosso atendimento pessoalmente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pariquera-Açu Store */}
            <Card className="shadow-xl border-0 bg-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-[#0033CC] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Pariquera-Açu</h4>
                    <p className="text-gray-600">Loja Principal</p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 font-semibold mb-2">Av. Dr. Carlos Botelho, 265</p>
                  <p className="text-gray-600">Centro, Pariquera-Açu - SP</p>
                  <p className="text-gray-600">CEP: 11930-000</p>
                </div>

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    src="https://www.google.com.br/maps/embed?pb=!1m18!1m12!1m3!1d3641.597924778391!2d-47.88256958525549!3d-24.71369948448937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dac57f4b1b9fd9%3A0xb85391796264ca5f!2sLookeshop+Pariquera+A%C3%A7u%2FSP!5e0!3m2!1spt-BR!2sbr!4v1716812739213!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Look&Shop - Pariquera-Açu"
                  ></iframe>
                </div>

                <a
                  href="https://www.google.com.br/maps/place/Lookeshop+Pariquera+A%C3%A7u%2FSP/@-24.7139092,-47.8829738,19.04z/data=!4m6!3m5!1s0x94dac57f4b1b9fd9:0xb85391796264ca5f!8m2!3d-24.7136995!4d-47.8825696!16s%2Fg%2F11cmdm2357?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0033CC] hover:bg-[#0033CC]/90 text-white px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Ver no Google Maps
                </a>
              </CardContent>
            </Card>

            {/* Eldorado Store */}
            <Card className="shadow-xl border-0 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Eldorado</h4>
                    <p className="text-gray-600">Segunda Unidade</p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 font-semibold mb-2">Av. Caraitá, 311</p>
                  <p className="text-gray-600">Centro, Eldorado - SP</p>
                  <p className="text-gray-600">CEP: 11960-000</p>
                </div>

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.834044399033!2d-48.10862168528227!3d-24.522377184572713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c4d64ff35d014d%3A0xbb9b37f760c0f625!2sLookeshop+Eldorado%2FSP!5e0!3m2!1spt-BR!2sbr!4v1716812837330!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Look&Shop - Eldorado"
                  ></iframe>
                </div>

                <a
                  href="https://www.google.com.br/maps/place/Lookeshop+Eldorado%2FSP/@-24.5223722,-48.1134926,17z/data=!3m1!4b1!4m6!3m5!1s0x94c4d64ff35d014d:0xbb9b37f760c0f625!8m2!3d-24.5223772!4d-48.1086217!16s%2Fg%2F11h4n1b6x9?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Ver no Google Maps
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
