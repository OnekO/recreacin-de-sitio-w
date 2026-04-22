import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Link as LinkIcon, Folder } from "@phosphor-icons/react";

const recursos = [
  {
    category: "Guías de Empleo",
    icon: BookOpen,
    items: [
      { title: "Cómo crear un CV efectivo", type: "PDF", size: "2.3 MB" },
      { title: "Preparación para entrevistas", type: "PDF", size: "1.8 MB" },
      { title: "Búsqueda activa de empleo", type: "PDF", size: "3.1 MB" },
      { title: "Derechos laborales básicos", type: "PDF", size: "2.5 MB" }
    ]
  },
  {
    category: "Plantillas y Formularios",
    icon: FileText,
    items: [
      { title: "Plantilla de Curriculum Vitae", type: "DOCX", size: "145 KB" },
      { title: "Modelo de carta de presentación", type: "DOCX", size: "98 KB" },
      { title: "Formulario de inscripción programas", type: "PDF", size: "450 KB" },
      { title: "Solicitud de ayudas", type: "PDF", size: "380 KB" }
    ]
  },
  {
    category: "Material Formativo",
    icon: Folder,
    items: [
      { title: "Introducción a la informática", type: "PDF", size: "5.2 MB" },
      { title: "Manual de Microsoft Office", type: "PDF", size: "8.7 MB" },
      { title: "Competencias digitales básicas", type: "PDF", size: "4.3 MB" },
      { title: "Uso de herramientas online", type: "PDF", size: "3.9 MB" }
    ]
  }
];

const enlacesUtiles = [
  { title: "Servicio Público de Empleo Estatal", url: "https://www.sepe.es" },
  { title: "Xunta de Galicia - Empleo", url: "https://emprego.xunta.gal" },
  { title: "Ayuntamiento de A Coruña", url: "https://www.coruna.gal" },
  { title: "Portal de Formación Profesional", url: "https://www.todofp.es" },
  { title: "Red Euroguidance - Formación Europa", url: "https://www.euroguidance.eu" }
];

export function Recursos() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary">
              RECURSOS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Herramientas y materiales para tu desarrollo personal y profesional
            </p>
          </div>

          <div className="space-y-8">
            {recursos.map((categoria, index) => {
              const Icon = categoria.icon;
              return (
                <Card key={index} className="p-8 bg-card rounded-3xl shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <Icon size={28} weight="fill" className="text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold text-primary">
                        {categoria.category}
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {categoria.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <FileText size={24} className="text-accent" weight="fill" />
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-foreground truncate">
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {item.type} • {item.size}
                              </p>
                            </div>
                          </div>
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                          >
                            <Download size={18} weight="bold" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 lg:p-12 bg-card rounded-3xl shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <LinkIcon size={28} weight="fill" className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Enlaces de Interés
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {enlacesUtiles.map((enlace, index) => (
                  <a
                    key={index}
                    href={enlace.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all group"
                  >
                    <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {enlace.title}
                    </span>
                    <LinkIcon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" weight="bold" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 lg:p-12 bg-primary text-primary-foreground rounded-3xl shadow-lg">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                ¿Necesitas más recursos?
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Si no encuentras el material que necesitas o tienes sugerencias sobre recursos 
                que podríamos añadir, no dudes en contactarnos. Estamos aquí para ayudarte.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-full px-8 shadow-lg"
              >
                SOLICITAR RECURSOS
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
