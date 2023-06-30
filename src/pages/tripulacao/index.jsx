import React, { useState, useEffect } from "react";

const Tripulacao = () => {
  const [currentOne, setCurrentOne] = useState("Comandante");
  const [isAutoSwitchEnabled, setIsAutoSwitchEnabled] = useState(true);
  const tripulacao = ["Comandante", "Organizador", "Piloto", "Engenheira"];

  const handleCrewChange = (crew) => {
    setCurrentOne(crew);
    setIsAutoSwitchEnabled(false);
  };

  useEffect(() => {
    let intervalId;

    if (isAutoSwitchEnabled) {
      intervalId = setInterval(() => {
        const currentIndex = tripulacao.indexOf(currentOne);
        const nextIndex = (currentIndex + 1) % tripulacao.length;
        setCurrentOne(tripulacao[nextIndex]);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentOne, isAutoSwitchEnabled, tripulacao]);

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

        <ul className="flex items-center gap-8">
          {tripulacao.map((pessoa, index) => (
            <li
              key={index}
              onClick={() => handleCrewChange(pessoa)}
              className={currentOne !== pessoa ? "bg-cinza/30 w-6 h-6 rounded-full cursor-pointer" : "bg-branco w-7 h-7 rounded-full cursor-pointer"}
            >
            </li>
          ))}
        </ul>
        <div className="tracking-wider text-center mb-6">
          <h3 className="font-main text-cinza font-semibold uppercase text-lg">
            {currentOne}
          </h3>
          {currentOne === 'Comandante' &&
            <>
              <h2 className="font-main uppercase text-3xl">
                Douglas Hurley
              </h2>
              <p className="py-6 text-lg">
                Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da missão Demo-2 da Crew Dragon.  
              </p>
            </>

          }
          {currentOne === 'Organizador' &&
            <>
              <h2 className="font-main uppercase text-3xl">
                Mark Shuttleworth
              </h2>
              <p className="py-6 px-4 text-lg">
                Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa responsável pelo sistema operacional Ubuntu, baseado em Linux. Ele conquistou o feito de se tornar o primeiro sul-africano a viajar para o espaço como turista espacial.
              </p>
            </>
          }
          {currentOne === 'Piloto' &&
            <>
              <h2 className="font-main uppercase text-3xl">
                Victor Glover
              </h2>
              <p className="py-6 text-lg">
                Victor Glover foi piloto no primeiro voo operacional da SpaceX Crew Dragon para a Estação Espacial Internacional. Além disso, Glover é comandante na Marinha dos Estados Unidos, onde pilota um F/A-18. Ele fez parte da tripulação da Expedição 64 e desempenhou o papel de engenheiro de sistemas de voo da estação.
              </p>
            </>
          }
          {currentOne === 'Engenheira' &&
            <>
              <h2 className="font-main uppercase text-3xl">
                Anousheh Ansari
              </h2>
              <p className="py-6 text-lg">
                Anousheh Ansari é uma engenheira iraniana-americana e co-fundadora da Prodea Systems. Ela foi a quarta turista espacial a financiar sua própria viagem, sendo a primeira mulher a fazê-lo para a Estação Espacial Internacional (ISS) e a primeira iraniana no espaço.
              </p>
            </>
          }

        </div>
      </section>
    </>
  );
};

export default Tripulacao;
