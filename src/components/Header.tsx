import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Anteojos', href: '#products' },
    { label: 'Servicios', href: '#services' },
    { label: 'Turnos', href: '#appointment' },
    { label: 'Contacto', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-semibold text-foreground">
              Visión Clara
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Llamar
            </Button>
            <Button size="sm" className="bg-accent hover:bg-cream-hover">
              Reservar Turno
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Llamar
                </Button>
                <Button size="sm" className="w-full bg-accent hover:bg-cream-hover">
                  Reservar Turno
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}