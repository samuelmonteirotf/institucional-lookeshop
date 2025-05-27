import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5513982016096?text=Olá,%20vim%20pelo%20site%20da%20Look%20Shop!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <div className="absolute -top-12 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale Conosco!
      </div>
    </a>
  )
}
