import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Eye, Palette, Settings, Clock, Award, Heart } from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'Control Visual Completo',
    description: 'Exámenes oftalmológicos precisos con tecnología de última generación para cuidar tu salud visual.',
    features: ['Topografía corneal', 'Campo visual', 'Presión ocular', 'Fondo de ojo']
  },
  {
    icon: Settings,
    title: 'Adaptación de Lentes',
    description: 'Ajuste personalizado de marcos y calibración precisa de lentes para máximo confort y visión.',
    features: ['Centrado óptico', 'Ajuste anatómico', 'Calibración digital', 'Seguimiento post-entrega']
  },
  {
    icon: Palette,
    title: 'Asesoramiento Estético',
    description: 'Consultoría personalizada para encontrar el marco perfecto que realce tu estilo y personalidad.',
    features: ['Análisis facial', 'Colorimetría', 'Tendencias actuales', 'Lifestyle matching']
  },
  {
    icon: Clock,
    title: 'Servicio Express',
    description: 'Reparaciones y ajustes rápidos para que nunca estés sin tus anteojos cuando los necesites.',
    features: ['Reparaciones menores', 'Cambio de cristales', 'Ajustes inmediatos', 'Servicio en el día']
  },
  {
    icon: Award,
    title: 'Garantía Extendida',
    description: 'Protección completa para tu inversión con garantías que cubren materiales y mano de obra.',
    features: ['2 años en marcos', '1 año en cristales', 'Reposición por rotura', 'Mantenimiento gratuito']
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Cada cliente recibe un trato único y especializado, porque entendemos que cada visión es diferente.',
    features: ['Consulta uno a uno', 'Seguimiento personalizado', 'Historial visual', 'Recordatorios de control']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una experiencia integral en salud visual, combinando tecnología de vanguardia 
            con la calidez del trato personal que nos caracteriza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="bg-background border-border/50 hover:shadow-soft transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {service.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
            ¿Necesitás asesoramiento personalizado?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestros especialistas están listos para ayudarte a encontrar la solución perfecta 
            para tu salud visual y estilo personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#appointment" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-cream-hover text-accent-foreground font-medium rounded-md transition-colors"
            >
              Agendar Consulta
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-md transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}