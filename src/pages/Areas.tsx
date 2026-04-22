import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, UsersThree, ChalkboardTeacher, Lifebuoy, Network } from "@phosphor-icons/react";

const areas = [
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Programas de capacitación profesional adaptados a las necesidades del mercado laboral actual.",
    details: [
      "Cursos de formación ocupacional",
      "Talleres de habilidades digitales",
      "Programas de alfabetización",
      "Formación en idiomas"
    ]
  },
  {
    icon: Briefcase,
    title: "Orientación Laboral",
    description: "Acompañamiento personalizado en la búsqueda de empleo y desarrollo profesional.",
    details: [
      "Asesoramiento individualizado",
      "Talleres de búsqueda de empleo",
      "Elaboración de CV y carta de presentación",
      "Preparación para entrevistas"
    ]
  },
  {
    icon: UsersThree,
    title: "Inserción Social",
    description: "Programas de apoyo para facilitar la integración social y comunitaria.",
    details: [
      "Grupos de apoyo mutuo",
      "Actividades comunitarias",
      "Mediación intercultural",
      "Acompañamiento social"
    ]
  },
  {
    icon: ChalkboardTeacher,
    title: "Educación",
    description: "Apoyo educativo y refuerzo escolar para niños, jóvenes y adultos.",
    details: [
      "Refuerzo escolar",
      "Alfabetización de adultos",
      "Apoyo a las familias",
      "Actividades extraescolares"
    ]
  },
  {
    icon: Lifebuoy,
    title: "Ayuda Directa",
    description: "Atención a necesidades básicas y emergencias sociales.",
    details: [
      "Banco de alimentos",
      "Ayudas de emergencia",
      "Asesoramiento en recursos sociales",
      "Gestión de ayudas públicas"
    ]
  },
  {
    icon: Network,
    title: "Red de Apoyo",
    description: "Construcción de redes de solidaridad y apoyo mutuo en la comunidad.",
    details: [
      "Voluntariado social",
      "Red de empresas colaboradoras",
      "Intercambio de conocimientos",
      "Eventos de networking"
    ]
  }
];

export function Areas() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              ÁREAS DE TRABAJO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabajamos desde múltiples frentes para ofrecer apoyo integral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon size={32} weight="fill" className="text-accent" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-primary">
                        {area.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Servicios:
                      </h4>
                      <ul className="space-y-2">
                        {area.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 lg:p-12 bg-primary text-primary-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                Atención Integral y Personalizada
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Nuestro enfoque multidisciplinar nos permite ofrecer una atención completa 
                que aborda todas las dimensiones de la inclusión social y laboral. Cada 
                persona recibe un plan de acompañamiento adaptado a sus necesidades y objetivos.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
