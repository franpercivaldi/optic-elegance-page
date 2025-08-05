import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const services = [
  'Control visual completo',
  'Adaptación de lentes',
  'Asesoramiento estético',
  'Reparación/ajuste',
  'Consulta general'
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
]

export default function AppointmentForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completá todos los campos obligatorios.",
        variant: "destructive"
      })
      return
    }

    // Simulate form submission
    toast({
      title: "¡Turno solicitado!",
      description: "Te contactaremos en las próximas horas para confirmar tu turno.",
    })

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="appointment" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
              Reservá tu Turno
            </h2>
            <p className="text-lg text-muted-foreground">
              Completá el formulario y nos contactaremos para confirmar tu cita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="bg-background border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  Solicitar Turno
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ingresá tu nombre completo"
                      required
                    />
                  </div>

                  {/* Contact Info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="11 1234-5678"
                        required
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <Label>Tipo de servicio *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccioná el servicio que necesitás" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Fecha preferida</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Horario preferido
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccioná horario" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Mensaje adicional
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Contanos si tenés alguna consulta específica..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-cream-hover text-accent-foreground font-medium py-6 text-lg"
                  >
                    Solicitar Turno
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Card */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Información importante
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Duración de consultas</div>
                        <div className="text-sm">Control visual: 45 minutos | Asesoramiento: 30 minutos</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Confirmación</div>
                        <div className="text-sm">Te contactaremos dentro de las 2 horas para confirmar</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Primera consulta</div>
                        <div className="text-sm">Incluye evaluación completa sin costo adicional</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    ¿Necesitás atención urgente?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Para emergencias o consultas inmediatas, contactanos directamente
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}