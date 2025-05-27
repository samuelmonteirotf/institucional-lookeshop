import { Smartphone, Heart, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#0033CC] rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Look Shop</h3>
                <p className="text-gray-400">Especialistas em iPhone</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Uma empresa cristã especializada em serviços para iPhone, com atendimento humano, transparente e
              confiável, guiada por princípios bíblicos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#FF0000]" />
                <span className="text-gray-300">(13) 98201-6096</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-[#FF0000]" />
                <span className="text-gray-300">@lookeshop.ihelpi</span>
              </div>
              <p className="text-gray-300">Atendimento com amor cristão</p>
            </div>
          </div>
        </div>

        {/* Bible Verse Section */}
        <div className="border-t border-gray-800 pt-12">
          <div className="bg-[#0033CC] rounded-2xl p-8 mb-8 text-center">
            <p className="text-xl font-semibold mb-3 text-white">
              {'"Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens."'}
            </p>
            <p className="text-blue-200">— Colossenses 3:23</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <span>© 2024 Look Shop. Feito com</span>
              <Heart className="w-5 h-5 text-[#FF0000]" />
              <span>e fé em Cristo.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
