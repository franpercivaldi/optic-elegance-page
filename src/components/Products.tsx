import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, Sun, Star, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Anteojos Recetados',
    description: 'Lentes oftálmicos con la máxima precisión y estilo personalizado.',
    features: ['Multifocales', 'Antirreflex', 'Filtro azul', 'Garantía 2 años'],
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop&crop=center',
    badge: 'Recomendado'
  },
  {
    id: 2,
    name: 'Anteojos de Sol',
    description: 'Protección UV total con diseños exclusivos y materiales premium.',
    features: ['UV 400', 'Polarizados', 'Marcos livianos', 'Diseño italiano'],
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop&crop=center',
    badge: 'Tendencia'
  },
  {
    id: 3,
    name: 'Línea Premium',
    description: 'Colección exclusiva de marcas internacionales de lujo.',
    features: ['Materiales exclusivos', 'Edición limitada', 'Servicio VIP', 'Estuche premium'],
    icon: Star,
    image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&h=300&fit=crop&crop=center',
    badge: 'Exclusivo'
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
            Nuestra Colección
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada par de anteojos es cuidadosamente seleccionado para combinar funcionalidad, 
            estilo y la más alta calidad en materiales.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card 
                key={product.id} 
                className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Ver Modelos
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-cream-hover px-8">
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  )
}