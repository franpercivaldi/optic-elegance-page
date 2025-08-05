import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Visión Clara
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Óptica boutique con más de 15 años de experiencia, 
              dedicada a brindar la mejor atención personalizada en salud visual.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Control visual</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Adaptación de lentes</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Asesoramiento estético</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Reparaciones</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Servicio express</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#products" className="hover:text-foreground transition-colors">Anteojos recetados</a></li>
              <li><a href="#products" className="hover:text-foreground transition-colors">Anteojos de sol</a></li>
              <li><a href="#products" className="hover:text-foreground transition-colors">Línea premium</a></li>
              <li><a href="#products" className="hover:text-foreground transition-colors">Lentes de contacto</a></li>
              <li><a href="#products" className="hover:text-foreground transition-colors">Accesorios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  Av. Corrientes 1234<br />
                  CABA, Buenos Aires
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+541123456789" className="text-sm hover:text-foreground transition-colors">
                  +54 11 2345-6789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@visionclara.com" className="text-sm hover:text-foreground transition-colors">
                  info@visionclara.com
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Horarios</div>
                <div>Lun - Vie: 9:00 - 18:00</div>
                <div>Sáb: 9:00 - 13:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Visión Clara. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-foreground transition-colors">Garantías</a>
          </div>
        </div>
      </div>
    </footer>
  )
}