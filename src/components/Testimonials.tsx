import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María Elena Rodríguez',
    role: 'Arquitecta',
    rating: 5,
    text: 'La atención fue excepcional. Me ayudaron a encontrar exactamente lo que necesitaba y el resultado superó mis expectativas. Mi visión nunca estuvo tan clara.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b60e0c49?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Empresario',
    text: 'Después de años usando anteojos incómodos, finalmente encontré mi lugar. El equipo es profesional y los productos son de primera calidad.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Ana Sofía Martín',
    role: 'Diseñadora',
    text: 'No solo mejoraron mi visión, sino que encontraron el marco perfecto para mi rostro. Me siento más segura y elegante. ¡Recomiendo totalmente!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Cada testimonio refleja nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 relative">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">2000+</div>
            <div className="text-sm text-muted-foreground">Clientes atendidos</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Años de experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">5★</div>
            <div className="text-sm text-muted-foreground">Calificación promedio</div>
          </div>
        </div>
      </div>
    </section>
  )
}