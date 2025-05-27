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
    const whatsappMessage = `Olá! Vim pelo site da Look Shop.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`
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
                  Fale conosco diretamente pelo WhatsApp e receba atendimento personalizado com amor e dedicação cristã.
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
                  Siga-nos no Instagram para ver nossos trabalhos, dicas e acompanhar nossa jornada de fé e excelência.
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
                    <strong>Segunda a Sexta:</strong> 8h às 18h
                  </p>
                  <p>
                    <strong>Sábado:</strong> 8h às 12h
                  </p>
                  <p>
                    <strong>Domingo:</strong> Fechado (Dia do Senhor)
                  </p>
                </div>
                <p className="mt-6 text-blue-100 text-sm">
                  Respeitamos o dia do Senhor conforme os ensinamentos bíblicos.
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-47.8789!3d-24.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ0LjMiUyA0N8KwNTInNDQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Look Shop - Pariquera-Açu"
                  ></iframe>
                </div>

                <a
                  href="https://maps.google.com/?q=Av.+Dr.+Carlos+Botelho,+265+-+Centro,+Pariquera-Açu+-+SP,+11930-000"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.456789012!2d-48.1234!3d-24.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM0JzA0LjEiUyA0OMKwMDcnMjQuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567891"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Look Shop - Eldorado"
                  ></iframe>
                </div>

                <a
                  href="https://maps.google.com/?q=Av.+Caraitá,+311+-+Centro,+Eldorado+-+SP,+11960-000"
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
