import { Navigation } from "@/components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Areas } from "@/pages/Areas";
import { Convocatorias } from "@/pages/Convocatorias";
import { Avisos } from "@/pages/Avisos";
import { Eventos } from "@/pages/Eventos";
import { Recursos } from "@/pages/Recursos";
import { HazteSocia } from "@/pages/HazteSocia";
import { Contacto } from "@/pages/Contacto";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/convocatorias" element={<Convocatorias />} />
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/hazte-socia" element={<HazteSocia />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;