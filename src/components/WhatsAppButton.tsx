import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "5491123456789" // Replace with actual WhatsApp number
  const message = "Hola! Me interesa agendar un turno en Visión Clara."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}