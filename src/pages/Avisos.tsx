import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, WarningCircle, Info, CheckCircle } from "@phosphor-icons/react";

const avisos = [
  {
    type: "importante",
    icon: WarningCircle,
    title: "Cambio de horario de atención",
    date: "20 de Marzo, 2024",
    content: "Durante el mes de abril, el horario de atención al público será de 9:00 a 14:00. Agradecemos su comprensión.",
    color: "text-destructive bg-destructive/10"
  },
  {
    type: "novedad",
    icon: CheckCircle,
    title: "Nuevo programa de formación digital",
    date: "15 de Marzo, 2024",
    content: "Hemos lanzado un nuevo programa de formación en competencias digitales. Las inscripciones están abiertas hasta el 30 de abril.",
    color: "text-accent bg-accent/10"
  },
  {
    type: "información",
    icon: Info,
    title: "Documentación necesaria para inscripciones",
    date: "10 de Marzo, 2024",
    content: "Recuerda traer DNI, certificado de empadronamiento y documentación de situación laboral para las inscripciones en nuestros programas.",
    color: "text-primary bg-primary/10"
  },
  {
    type: "novedad",
    icon: CheckCircle,
    title: "Nuevo convenio con empresas locales",
    date: "5 de Marzo, 2024",
    content: "XARELA firma nuevos convenios con 15 empresas de A Coruña para facilitar la inserción laboral de nuestros beneficiarios.",
    color: "text-accent bg-accent/10"
  },
  {
    type: "información",
    icon: Info,
    title: "Cierre por festivo",
    date: "28 de Febrero, 2024",
    content: "Nuestras oficinas permanecerán cerradas los días 1 y 2 de mayo con motivo de los festivos. Retomaremos la actividad el día 3.",
    color: "text-primary bg-primary/10"
  },
  {
    type: "importante",
    icon: WarningCircle,
    title: "Actualización de datos personales",
    date: "20 de Febrero, 2024",
    content: "Es imprescindible mantener actualizados tus datos de contacto. Si has cambiado de domicilio o teléfono, notifícalo en recepción.",
    color: "text-destructive bg-destructive/10"
  }
];

export function Avisos() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Bell size={48} weight="fill" className="text-accent" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              AVISOS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mantente informado sobre novedades y comunicados importantes
            </p>
          </div>

          <div className="space-y-6">
            {avisos.map((aviso, index) => {
              const Icon = aviso.icon;
              return (
                <Card key={index} className="p-8 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${aviso.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={28} weight="fill" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <h3 className="text-2xl font-bold text-primary">
                            {aviso.title}
                          </h3>
                          <Badge variant="outline" className="text-xs font-medium whitespace-nowrap">
                            {aviso.date}
                          </Badge>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          {aviso.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 lg:p-12 bg-primary text-primary-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                Suscríbete a Notificaciones
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Recibe los avisos más importantes directamente en tu correo electrónico. 
                Mantente siempre informado sobre las novedades de XARELA.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
