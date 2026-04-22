import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarBlank, Clock, MapPin, Users } from "@phosphor-icons/react";

const eventos = [
  {
    title: "Jornada de Empleo y Formación",
    date: "15 de Mayo, 2024",
    time: "10:00 - 14:00",
    location: "Centro XARELA, A Coruña",
    attendees: "Abierto a todos",
    type: "Jornada",
    description: "Jornada informativa sobre oportunidades de empleo y programas de formación disponibles. Contaremos con la participación de empresas locales y expertos en orientación laboral.",
    image: true
  },
  {
    title: "Taller: Entrevistas de Trabajo Exitosas",
    date: "22 de Mayo, 2024",
    time: "17:00 - 19:00",
    location: "Sala de formación",
    attendees: "Aforo limitado (25 personas)",
    type: "Taller",
    description: "Aprende las técnicas más efectivas para preparar y afrontar entrevistas de trabajo. Práctica con casos reales y feedback personalizado.",
    image: false
  },
  {
    title: "Encuentro de Networking Profesional",
    date: "5 de Junio, 2024",
    time: "18:30 - 21:00",
    location: "Espacio colaborativo CoruñaTech",
    attendees: "Socios y empresas colaboradoras",
    type: "Networking",
    description: "Espacio de encuentro entre profesionales, empresarios y personas en búsqueda de empleo. Oportunidad única para ampliar tu red de contactos profesionales.",
    image: true
  },
  {
    title: "Charla: Derechos Laborales Básicos",
    date: "12 de Junio, 2024",
    time: "11:00 - 13:00",
    location: "Centro XARELA, A Coruña",
    attendees: "Abierto a todos",
    type: "Charla",
    description: "Charla informativa sobre derechos laborales fundamentales, contratos de trabajo, y recursos disponibles ante situaciones de vulneración de derechos.",
    image: false
  },
  {
    title: "Fiesta de Fin de Curso",
    date: "28 de Junio, 2024",
    time: "17:00 - 20:00",
    location: "Jardines del Centro",
    attendees: "Comunidad XARELA",
    type: "Celebración",
    description: "Celebración de fin de curso con entrega de diplomas a los participantes de nuestros programas de formación. Actividades, música y convivencia.",
    image: true
  }
];

export function Eventos() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              EVENTOS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a nuestras actividades y eventos comunitarios
            </p>
          </div>

          <div className="space-y-8">
            {eventos.map((evento, index) => (
              <Card key={index} className="overflow-hidden bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                <div className="grid lg:grid-cols-3">
                  {evento.image && (
                    <div className="lg:col-span-1 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 min-h-[200px] lg:min-h-full flex items-center justify-center">
                      <CalendarBlank size={80} weight="fill" className="text-accent/40" />
                    </div>
                  )}
                  
                  <div className={`${evento.image ? 'lg:col-span-2' : 'lg:col-span-3'} p-8 space-y-6`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="space-y-2">
                        <Badge className="bg-accent text-accent-foreground font-semibold">
                          {evento.type}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                          {evento.title}
                        </h3>
                      </div>
                      <Button 
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6 shadow-lg transition-all hover:scale-105"
                      >
                        INSCRIBIRSE
                      </Button>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {evento.description}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <CalendarBlank size={24} className="text-accent" weight="fill" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Fecha</p>
                          <p className="text-sm font-semibold text-foreground">{evento.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock size={24} className="text-accent" weight="fill" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Horario</p>
                          <p className="text-sm font-semibold text-foreground">{evento.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin size={24} className="text-accent" weight="fill" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Lugar</p>
                          <p className="text-sm font-semibold text-foreground">{evento.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Users size={24} className="text-accent" weight="fill" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Asistentes</p>
                          <p className="text-sm font-semibold text-foreground">{evento.attendees}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 lg:p-12 bg-accent text-accent-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                ¿Quieres proponer un evento?
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Si tienes ideas para talleres, charlas o actividades que puedan beneficiar a 
                nuestra comunidad, nos encantaría escucharte. Juntos construimos XARELA.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-accent-foreground text-primary hover:bg-accent-foreground/90 font-semibold rounded-full px-8 shadow-lg"
              >
                ENVIAR PROPUESTA
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
