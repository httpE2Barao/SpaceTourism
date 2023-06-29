import { useState } from "react";
import DestinoLista from "./destino-lista";

const Destino = () => {
  const [currentOrb, setCurrentOrb] = useState('Lua')

  const handleOrbChange = orb => {
    setCurrentOrb(orb)
  }

  return (
    <article className="destino text-branco">
      <section className="font-secondary 
        flex flex-col items-center tracking-wider
        h-full p-4 gap-6
        ">
        <h2 className="uppercase text-lg">
          <aside className="mr-2 inline text-cinza">01</aside>
           Escolha o seu destino</h2>
        <img src={`./images/orb_${currentOrb}.svg`} alt={currentOrb}
          className="w-1/2"
        />
        <DestinoLista 
          selected={currentOrb} // Passa o estado atual como prop para DestinoLista
          onOrbChange={handleOrbChange} // Passa a função handleOrbChange como prop para DestinoLista
        />
      </section>

      <section className="">
        <h2></h2> {/* Exibe a informação do destino selecionado */}
      </section>
    </article>
  )
}

export default Destino;
