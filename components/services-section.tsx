import { Smartphone, RefreshCw, Users, MessageCircle, Wrench, Clock, Shield, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const mainServices = [
    {
      icon: Smartphone,
      title: "Suporte Técnico e Diagnóstico",
      description:
        "Diagnóstico completo e preciso para identificar problemas em seu iPhone com rapidez e eficiência técnica.",
      features: ["Análise completa", "Diagnóstico preciso", "Relatório detalhado"],
    },
    {
      icon: RefreshCw,
      title: "Restauração de Sistema",
      description: "Restauração completa do sistema iOS, recuperando a performance original do seu dispositivo Apple.",
      features: ["Backup seguro", "Restauração iOS", "Otimização total"],
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Consultoria personalizada em iOS para otimizar o uso do seu iPhone e resolver dúvidas técnicas.",
      features: ["Consultoria 1:1", "Dicas personalizadas", "Suporte contínuo"],
    },
    {
      icon: MessageCircle,
      title: "Atendimento Humanizado",
      description:
        "Atendimento personalizado via WhatsApp com profissionais qualificados e comprometidos com excelência.",
      features: ["WhatsApp direto", "Atendimento 24h", "Suporte humano"],
    },
  ]

  const techFeatures = [
    { icon: Wrench, title: "Ferramentas Profissionais", desc: "Equipamentos de última geração" },
    { icon: Clock, title: "Atendimento Rápido", desc: "Resposta em até 30 minutos" },
    { icon: Shield, title: "Garantia Total", desc: "Segurança em todos os serviços" },
    { icon: Star, title: "5 Estrelas", desc: "Excelência reconhecida" },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluções completas para seu iPhone com tecnologia avançada e atendimento baseado em princípios cristãos de
            excelência e cuidado.
          </p>
        </div>

        {/* Main Services - Symmetric 2x2 Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-20 h-20 ${index % 2 === 0 ? "bg-[#0033CC]" : "bg-[#FF0000]"} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Features - Symmetric Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {techFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div
                className={`w-16 h-16 ${index % 2 === 0 ? "bg-[#0033CC]" : "bg-[#FF0000]"} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#0033CC] rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Atendimento com Amor e Dedicação</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Cada cliente é tratado com o amor e cuidado que Cristo nos ensinou. Nossa equipe está pronta para ajudar
            você com excelência técnica!
          </p>
          <a
            href="https://wa.me/5513982016096?text=Olá,%20vim%20pelo%20site%20da%20Look%20Shop!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  )
}
