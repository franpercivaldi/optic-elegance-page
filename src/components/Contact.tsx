import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
            Visitanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te esperamos en nuestro local para brindarte la mejor atención personalizada. 
            Encontranos en el corazón de la ciudad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Dirección</div>
                      <div className="text-muted-foreground">
                        Av. Corrientes 1234, CABA<br />
                        Buenos Aires, Argentina
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Teléfono</div>
                      <div className="text-muted-foreground">
                        <a href="tel:+541123456789" className="hover:text-foreground transition-colors">
                          +54 11 2345-6789
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">
                        <a href="mailto:info@visionclara.com" className="hover:text-foreground transition-colors">
                          info@visionclara.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Horarios de Atención</div>
                      <div className="text-muted-foreground space-y-1">
                        <div>Lunes a Viernes: 9:00 - 18:00</div>
                        <div>Sábados: 9:00 - 13:00</div>
                        <div>Domingos: Cerrado</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Button className="flex-1 bg-accent hover:bg-cream-hover">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Seguinos en Redes
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Mirá nuestras últimas colecciones y tips de cuidado visual
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-full min-h-[400px]">
            <Card className="h-full border-border/50 overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-secondary/20 flex items-center justify-center relative">
                  {/* Placeholder for map - you can replace with actual map integration */}
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-foreground font-medium mb-2">Nuestra Ubicación</div>
                    <div className="text-muted-foreground text-sm">
                      Av. Corrientes 1234, CABA
                    </div>
                  </div>
                  
                  {/* You can replace this with Google Maps iframe or another map service */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016833583031!2d-58.39825418477003!3d-34.60373708045773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd0f8c6ce808c!2sAv.%20Corrientes%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1639999999999!5m2!1sen!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}