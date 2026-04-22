import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, EnvelopeSimple, Clock } from "@phosphor-icons/react";

export function Contacto() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              CONTACTO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="p-8 bg-card rounded-3xl shadow-lg">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">
                    Envíanos un mensaje
                  </h2>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-nombre">Nombre *</Label>
                        <Input id="contact-nombre" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-apellidos">Apellidos *</Label>
                        <Input id="contact-apellidos" placeholder="Tus apellidos" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-telefono">Teléfono</Label>
                      <Input id="contact-telefono" type="tel" placeholder="600 123 456" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-asunto">Asunto *</Label>
                      <Input id="contact-asunto" placeholder="¿Sobre qué quieres consultarnos?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-mensaje">Mensaje *</Label>
                      <Textarea 
                        id="contact-mensaje" 
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-lg transition-all hover:scale-105"
                    >
                      ENVIAR MENSAJE
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Responderemos a tu consulta en un plazo máximo de 48 horas
                    </p>
                  </form>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-primary text-primary-foreground rounded-3xl shadow-lg">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    Información de contacto
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Dirección</h3>
                        <p className="leading-relaxed">
                          Calle Ejemplo, 123<br />
                          15001 A Coruña<br />
                          Galicia, España
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Teléfono</h3>
                        <p className="leading-relaxed">
                          +34 981 123 456<br />
                          +34 600 123 456
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <EnvelopeSimple size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="leading-relaxed">
                          info@xarela.org<br />
                          formacion@xarela.org
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Clock size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Horario de atención</h3>
                        <p className="leading-relaxed">
                          Lunes a Viernes: 9:00 - 14:00 y 16:00 - 19:00<br />
                          Sábados: 10:00 - 13:00<br />
                          Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card rounded-3xl shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">
                    Síguenos en redes sociales
                  </h3>
                  <p className="text-foreground">
                    Mantente al día con nuestras actividades y novedades a través 
                    de nuestras redes sociales.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="flex-1 font-semibold"
                    >
                      Facebook
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="flex-1 font-semibold"
                    >
                      Instagram
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="flex-1 font-semibold"
                    >
                      Twitter
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 lg:p-12 bg-muted/50 rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary text-center">
                Ubicación
              </h2>
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-3">
                  <MapPin size={64} className="text-accent mx-auto" weight="fill" />
                  <p className="text-lg font-semibold text-foreground">
                    Mapa de ubicación
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Integración de mapa disponible
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
