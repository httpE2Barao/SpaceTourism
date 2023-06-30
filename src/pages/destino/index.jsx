import { useState } from "react";
import DestinoLista from "./destino-lista";

const Destino = () => {
  const [currentOrb, setCurrentOrb] = useState('Lua')

  const handleOrbChange = orb => {
    setCurrentOrb(orb)
  }

  return (
      <section className="font-secondary text-branco
        flex flex-col md:flex-row items-center tracking-wider
        h-full p-4 gap-6 md:gap-0 md:my-auto
        ">
        <div className="flex flex-col items-center tracking-widest md:mb-auto md:mt-8 md:pl-8 gap-6 md:w-2/5">
          <h2 className="uppercase text-xl md:mr-auto md:mb-6">
            <aside className="mr-2 inline text-cinza">01</aside>
            Escolha o seu destino</h2>
          <img src={`./images/orb_${currentOrb}.svg`} alt={currentOrb}
            className="w-72 md:w-80"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-0 md:w-3/5">
          <DestinoLista
            selected={currentOrb}
            onOrbChange={handleOrbChange}
          />
        </div>
      </section>
  )
}

export default Destino;
