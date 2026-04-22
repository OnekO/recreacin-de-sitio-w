import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Handshake } from "@phosphor-icons/react";

export function About() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              SOBRE NOSOTROS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde 2007, tejiendo redes de oportunidad en A Coruña
            </p>
          </div>

          <Card className="p-8 lg:p-12 bg-card rounded-3xl shadow-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Nuestra Historia
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  XARELA Asociación nace en 2007 con el objetivo de crear redes de apoyo 
                  para personas en situación de vulnerabilidad. Durante más de 15 años, 
                  hemos trabajado incansablemente para proporcionar oportunidades de 
                  formación, orientación laboral y acompañamiento social a quienes más 
                  lo necesitan en nuestra comunidad.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Promover la inclusión sociolaboral a través de programas de formación, 
                  orientación y apoyo integral. Creemos que toda persona merece la 
                  oportunidad de desarrollar su potencial y contribuir activamente a la 
                  sociedad.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users size={28} weight="fill" className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">Comunidad</h3>
                <p className="text-foreground">
                  Creamos espacios de encuentro y apoyo mutuo entre personas y organizaciones.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target size={28} weight="fill" className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">Objetivos</h3>
                <p className="text-foreground">
                  Metas claras enfocadas en la inclusión social y laboral efectiva.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart size={28} weight="fill" className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">Valores</h3>
                <p className="text-foreground">
                  Solidaridad, respeto, transparencia y compromiso con las personas.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Handshake size={28} weight="fill" className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">Colaboración</h3>
                <p className="text-foreground">
                  Trabajamos en red con instituciones, empresas y entidades sociales.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 lg:p-12 bg-accent text-accent-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                Nuestro Compromiso
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Cada persona que llega a XARELA encuentra un equipo comprometido con su 
                bienestar y desarrollo. No solo ofrecemos servicios, construimos relaciones 
                de confianza que permiten el crecimiento personal y profesional.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
