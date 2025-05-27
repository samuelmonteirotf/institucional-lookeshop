import { Target, Eye, Award, Heart, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-[#0033CC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Sobre a Look Shop</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Uma empresa cristã especializada em serviços para iPhone, combinando excelência técnica com atendimento
            humano baseado em princípios bíblicos.
          </p>
        </div>

        {/* Mission, Vision, Values - Symmetric Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-[#FF0000] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">Missão</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Atender com excelência técnica e espiritual, sendo instrumento de confiança e cuidado aos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-[#0033CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">Visão</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser referência nacional em serviços para iPhone, reconhecida pelo amor no atendimento e princípios
                cristãos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-[#FF0000] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">Valores</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fé, Honestidade, Responsabilidade, Qualidade, Empatia e Comprometimento.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Christian Principles - Symmetric Layout */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-[#0033CC] mb-12 text-center">Nossos Princípios Cristãos</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0033CC] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-black text-lg mb-2">Honestidade</h4>
              <p className="text-gray-600 text-sm">Provérbios 12:22</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF0000] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-black text-lg mb-2">Empatia</h4>
              <p className="text-gray-600 text-sm">Filipenses 2:3-4</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0033CC] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-black text-lg mb-2">Justiça</h4>
              <p className="text-gray-600 text-sm">Salmos 106:3</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF0000] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-black text-lg mb-2">Amor</h4>
              <p className="text-gray-600 text-sm">João 13:35</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
