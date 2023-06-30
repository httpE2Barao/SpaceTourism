import React, { useState } from "react";

const Tripulacao = () => {
  const [currentOne, setCurrentOne] = useState("Comandante");
  const tripulacao = ["Comandante", "Organizador", "Piloto", "Engenheira"];

  const handleCrewChange = (crew) => {
    setCurrentOne(crew);
  };

  return (
    <>
      <section className="font-secondary text-branco flex flex-col items-center p-4 gap-8">
        <div className="tracking-widest">
          <h2 className="uppercase text-xl md:mr-auto md:mb-6">
            <aside className="mr-2 inline text-cinza">02</aside>
            Conheça a Tripulação
          </h2>
        </div>

        <img src={`./images/grupo_${currentOne}.png`} alt="Foto dele(a)" className="w-96" />

        <ul className="flex items-center gap-4
        ">
          {tripulacao.map((pessoa, index) => (
            <li
              key={index}
              onClick={() => handleCrewChange(pessoa)}
              className={ currentOne !== pessoa ? "bg-cinza/30 w-5 h-5 rounded-full cursor-pointer" : "bg-branco w-5 h-5 rounded-full cursor-pointer"}
            >
            </li>
          ))}
        </ul>
        <div>{currentOne}</div>
      </section>
    </>
  );
};

export default Tripulacao;
