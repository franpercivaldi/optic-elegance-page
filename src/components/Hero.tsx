import { Button } from '@/components/ui/button'
import { Calendar, Eye } from 'lucide-react'
import GlassesModel3D from './GlassesModel3D'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Ver bien,{' '}
              <span className="text-primary">verse mejor</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Óptica boutique con atención personalizada. Encontrá el equilibrio perfecto entre 
              estilo, comodidad y salud visual con nuestros especialistas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-cream-hover text-accent-foreground font-medium px-8 py-6 text-lg shadow-soft"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservar Turno
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-serif font-semibold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-semibold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-semibold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Marcos disponibles</div>
              </div>
            </div>
          </div>

          {/* 3D Model */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <GlassesModel3D />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Interactuá con el modelo 3D
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}