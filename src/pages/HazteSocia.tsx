import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, CheckCircle } from "@phosphor-icons/react";

const beneficios = [
  "Acceso prioritario a todos nuestros programas de formación",
  "Descuentos en actividades y talleres especializados",
  "Participación en la toma de decisiones de la asociación",
  "Invitaciones exclusivas a eventos de networking",
  "Boletín mensual con novedades y oportunidades",
  "Asesoramiento personalizado en tu desarrollo profesional",
  "Conexión con nuestra red de empresas colaboradoras",
  "Certificado de socio/a de XARELA Asociación"
];

export function HazteSocia() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Heart size={48} weight="fill" className="text-accent" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              HAZTE SOCIA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a nuestra comunidad y forma parte del cambio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 lg:p-12 bg-primary text-primary-foreground rounded-3xl shadow-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    ¿Por qué asociarte?
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Como socio/a de XARELA, no solo recibes beneficios personales, 
                    también contribuyes activamente a transformar vidas y construir 
                    una sociedad más inclusiva y justa.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Beneficios de ser socio/a:</h3>
                  <ul className="space-y-3">
                    {beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={24} weight="fill" className="flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-primary-foreground/10 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3">Cuota anual</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold">30€</span>
                    <span className="text-lg">/año</span>
                  </div>
                  <p className="mt-3 text-sm">
                    Cuota reducida de 15€/año para estudiantes y personas desempleadas
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 bg-card rounded-3xl shadow-lg">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">
                  Formulario de inscripción
                </h2>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input id="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellidos">Apellidos *</Label>
                      <Input id="apellidos" placeholder="Tus apellidos" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI/NIE *</Label>
                    <Input id="dni" placeholder="12345678A" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" type="tel" placeholder="600 123 456" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input id="direccion" placeholder="Calle, número, piso" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ciudad">Ciudad</Label>
                      <Input id="ciudad" placeholder="A Coruña" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cp">Código Postal</Label>
                      <Input id="cp" placeholder="15001" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivacion">¿Por qué quieres ser socio/a?</Label>
                    <Textarea 
                      id="motivacion" 
                      placeholder="Cuéntanos tu motivación para unirte a XARELA..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-start gap-3">
                      <Checkbox id="cuota-reducida" />
                      <div className="space-y-1">
                        <label htmlFor="cuota-reducida" className="text-sm font-medium cursor-pointer">
                          Solicito cuota reducida (15€/año)
                        </label>
                        <p className="text-xs text-muted-foreground">
                          Para estudiantes o personas en situación de desempleo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="acepto-politica" required />
                      <label htmlFor="acepto-politica" className="text-sm cursor-pointer">
                        Acepto la política de privacidad y el tratamiento de mis datos *
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="acepto-estatutos" required />
                      <label htmlFor="acepto-estatutos" className="text-sm cursor-pointer">
                        Acepto los estatutos de XARELA Asociación *
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    ENVIAR SOLICITUD
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Recibirás un email con los detalles para completar el pago de la cuota
                  </p>
                </form>
              </div>
            </Card>
          </div>

          <Card className="p-8 lg:p-12 bg-accent text-accent-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                ¿Tienes dudas?
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Si tienes cualquier pregunta sobre el proceso de asociación, beneficios 
                o cuotas, no dudes en contactarnos. Estaremos encantados de ayudarte.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-accent-foreground text-primary hover:bg-accent-foreground/90 font-semibold rounded-full px-8 shadow-lg"
              >
                CONTACTAR
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
