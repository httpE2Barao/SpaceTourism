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

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const imageName = isMobile 
  ? `grupo_${currentOne}-mobile.png` 
  : `grupo_${currentOne}.png`;

  return (
    <>
      <section className="font-secondary text-branco
       flex flex-col items-center p-4 pb-10 gap-8 
       md:gap-2 md:pb-0
       ">
        <div className="order-0 tracking-widest md:mr-auto md:mt-8 md:ml-8">
          <h2 className="uppercase text-xl md:mr-auto md:mb-8">
            <aside className="mr-2 inline text-cinza">02</aside>
            Conheça a Tripulação
          </h2>
        </div>

        <img src={`./images/${imageName}`} alt="Foto dele(a)" 
        className="order-1 md:order-5 w-10/12 md:w-96 md:mt-6" />

        <ul className="order-3 md:order-4 flex items-center gap-8">
          {tripulacao.map((pessoa, index) => (
            <li
              key={index}
              onClick={() => handleCrewChange(pessoa)}
              className={currentOne !== pessoa
                ? "bg-cinza/30 w-6 h-6 md:w-4 md:h-4 rounded-full cursor-pointer"
                : "bg-branco w-7 h-7 md:w-5 md:h-5 rounded-full cursor-pointer"}
            >
            </li>
          ))}
        </ul>
        <h3 className="order-2 font-main text-cinza 
          font-semibold uppercase text-lg">
          {currentOne}
        </h3>
        {currentOne === 'Comandante' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl">
              Douglas Hurley
            </h2>
            <p className="order-3 pb-4 text-lg md:w-9/12 
              text-center md:text-xl leading-8">
              Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da missão Demo-2 da Crew Dragon.
            </p>
          </>
        }
        {currentOne === 'Organizador' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl">
              Mark Shuttleworth
            </h2>
            <p className="order-3 pb-4 text-lg md:w-9/12  
              text-center md:text-xl leading-8">
              Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa responsável pelo sistema operacional Ubuntu, baseado em Linux. Ele conquistou o feito de se tornar o primeiro sul-africano a viajar para o espaço como turista espacial.
            </p>
          </>
        }
        {currentOne === 'Piloto' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl">
              Victor Glover
            </h2>
            <p className="order-3 pb-4 text-lg md:w-9/12  
              text-center md:text-xl leading-8">
              Victor Glover foi piloto no primeiro voo operacional da SpaceX Crew Dragon para a Estação Espacial Internacional. Além disso, Glover é comandante na Marinha dos Estados Unidos, onde pilota um F/A-18. Ele fez parte da tripulação da Expedição 64 e desempenhou o papel de engenheiro de sistemas de voo da estação.
            </p>
          </>
        }
        {currentOne === 'Engenheira' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl">
              Anousheh Ansari
            </h2>
            <p className="order-3 pb-4 text-lg md:w-9/12  
              text-center md:text-xl leading-8">
              Anousheh Ansari é uma engenheira iraniana-americana e co-fundadora da Prodea Systems. Ela foi a quarta turista espacial a financiar sua própria viagem, sendo a primeira mulher a fazê-lo para a Estação Espacial Internacional (ISS) e a primeira iraniana no espaço.
            </p>
          </>
        }
      </section>
    </>
  );
};

export default Tripulacao;
