import { useEffect, useState } from "react";
import PantallaCarga from "./assets/components/PantallaCarga";
import CabeceraPrincipal from "./assets/components/CabeceraPrincipal";
import CarouselPrincipal from "./assets/components/CarouselPrincipal";

function App() {
  //PANTALLA DE CARGA
  const [carga, setCarga] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarga(true);
    }, 2000);
  }, []);

  if (carga) {
    <PantallaCarga />;
  }

  return (
    <>
      <header className="header">
        <CabeceraPrincipal />
      </header>
      <section className="hero">
        <CarouselPrincipal />
      </section>
    </>
  );
}

export default App;
