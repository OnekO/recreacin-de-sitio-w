import { DecorativeBars } from "@/components/DecorativeBars";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="relative bg-primary min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <DecorativeBars />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-card p-8 lg:p-12 rounded-3xl shadow-2xl">
            <div className="space-y-6">
              <p className="text-xs lg:text-sm font-semibold tracking-[0.15em] uppercase text-accent">
                Asociación · A Coruña · Desde 2007
              </p>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-[0.95] tracking-tight">
                <span className="text-accent">TEJIENDO</span>
                <br />
                <span className="text-primary">REDES DE</span>
                <br />
                <span className="text-accent">OPORTUNIDAD</span>
              </h1>
              
              <p className="text-base lg:text-lg text-foreground leading-relaxed max-w-xl">
                Trabajamos por la inclusión sociolaboral y el acompañamiento a 
                personas en situación de vulnerabilidad. Formación, orientación, 
                ayudas y red.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/convocatorias">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base rounded-full px-8 shadow-lg transition-all hover:scale-105"
                  >
                    CONVOCATORIAS ABIERTAS
                    <ArrowRight size={20} weight="bold" className="ml-2" />
                  </Button>
                </Link>
                
                <Link to="/areas">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold text-base rounded-full px-8 transition-all hover:scale-105"
                  >
                    QUÉ HACEMOS
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
          
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
