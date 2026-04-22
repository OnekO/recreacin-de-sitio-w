import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarBlank, Clock, MapPin, ArrowRight } from "@phosphor-icons/react";

const convocatorias = [
  {
    title: "Curso de Competencias Digitales Básicas",
    category: "Formación",
    status: "Abierta",
    deadline: "15 de Mayo, 2024",
    duration: "60 horas",
    location: "Presencial - A Coruña",
    description: "Aprende las habilidades digitales esenciales para el mundo laboral actual. Incluye ofimática, navegación web, correo electrónico y herramientas colaborativas.",
    requirements: [
      "Estar en situación de desempleo",
      "Mayores de 18 años",
      "Nivel básico de lectoescritura"
    ]
  },
  {
    title: "Programa de Orientación Laboral",
    category: "Empleo",
    status: "Abierta",
    deadline: "Inscripción continua",
    duration: "40 horas",
    location: "Presencial y Online",
    description: "Acompañamiento personalizado en tu búsqueda de empleo. Técnicas de entrevista, elaboración de CV, y estrategias de búsqueda activa.",
    requirements: [
      "Residencia en A Coruña",
      "Compromiso de asistencia",
      "Estar buscando empleo activamente"
    ]
  },
  {
    title: "Taller de Alfabetización Digital para Mayores",
    category: "Formación",
    status: "Abierta",
    deadline: "30 de Abril, 2024",
    duration: "30 horas",
    location: "Presencial - A Coruña",
    description: "Programa específico para personas mayores que desean aprender a usar dispositivos digitales, aplicaciones móviles y servicios online.",
    requirements: [
      "Mayores de 55 años",
      "Sin requisitos previos de conocimientos"
    ]
  },
  {
    title: "Curso de Atención Sociosanitaria",
    category: "Formación Profesional",
    status: "Próximamente",
    deadline: "Junio 2024",
    duration: "370 horas",
    location: "Presencial - A Coruña",
    description: "Certificado de profesionalidad en atención sociosanitaria a personas dependientes en instituciones sociales. Con prácticas en centros colaboradores.",
    requirements: [
      "Título de ESO o equivalente",
      "Certificado de delitos sexuales",
      "Aptitud física para el desempeño"
    ]
  },
  {
    title: "Programa de Acompañamiento para el Emprendimiento",
    category: "Empleo",
    status: "Próximamente",
    deadline: "Mayo 2024",
    duration: "80 horas",
    location: "Híbrido",
    description: "Apoyo integral para personas que desean iniciar su propio negocio. Desde la idea inicial hasta la puesta en marcha.",
    requirements: [
      "Tener una idea de negocio",
      "Compromiso con el proyecto",
      "Disponibilidad horaria"
    ]
  }
];

export function Convocatorias() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              CONVOCATORIAS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oportunidades de formación y empleo disponibles
            </p>
          </div>

          <div className="space-y-6">
            {convocatorias.map((convocatoria, index) => (
              <Card key={index} className="p-8 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start gap-3 flex-wrap">
                        <Badge 
                          variant={convocatoria.status === "Abierta" ? "default" : "secondary"}
                          className={`text-xs font-semibold px-3 py-1 ${
                            convocatoria.status === "Abierta" 
                              ? "bg-accent text-accent-foreground" 
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {convocatoria.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-medium">
                          {convocatoria.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                        {convocatoria.title}
                      </h3>
                      
                      <p className="text-foreground leading-relaxed">
                        {convocatoria.description}
                      </p>
                    </div>

                    {convocatoria.status === "Abierta" && (
                      <Button 
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6 shadow-lg transition-all hover:scale-105"
                      >
                        INSCRIBIRSE
                        <ArrowRight size={20} weight="bold" className="ml-2" />
                      </Button>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <CalendarBlank size={24} className="text-accent" weight="fill" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase">Plazo</p>
                        <p className="text-sm font-semibold text-foreground">{convocatoria.deadline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock size={24} className="text-accent" weight="fill" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase">Duración</p>
                        <p className="text-sm font-semibold text-foreground">{convocatoria.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin size={24} className="text-accent" weight="fill" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase">Modalidad</p>
                        <p className="text-sm font-semibold text-foreground">{convocatoria.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                      Requisitos:
                    </h4>
                    <ul className="space-y-2">
                      {convocatoria.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 lg:p-12 bg-primary text-primary-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Contáctanos y te informaremos sobre próximas convocatorias y programas 
                que se ajusten a tus necesidades y objetivos profesionales.
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
