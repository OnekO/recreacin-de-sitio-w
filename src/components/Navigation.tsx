import { Sun } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Sobre nosotros", href: "#" },
  { label: "Áreas", href: "#" },
  { label: "Convocatorias", href: "#" },
  { label: "Avisos", href: "#" },
  { label: "Eventos", href: "#" },
  { label: "Recursos", href: "#" },
  { label: "Hazte socia", href: "#" },
  { label: "Contacto", href: "#" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sun size={32} weight="fill" className="text-accent" />
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-foreground text-lg tracking-tight">XARELA</span>
              <span className="font-medium text-foreground text-[10px] tracking-wide">ASOCIACIÓN</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-2 text-xs font-semibold">
              <button className="text-foreground hover:text-accent transition-colors">GL</button>
              <span className="text-muted-foreground">|</span>
              <button className="text-foreground hover:text-accent transition-colors">ES</button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-4 py-2 text-sm font-semibold">
              <button className="text-foreground hover:text-accent transition-colors">GL</button>
              <span className="text-muted-foreground">|</span>
              <button className="text-foreground hover:text-accent transition-colors">ES</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
