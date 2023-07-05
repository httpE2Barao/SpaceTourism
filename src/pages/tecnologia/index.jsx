import React, { useState, useMemo } from "react";

const Tecnologia = () => {
  const [currentElement, setCurrentElement] = useState('Veiculo')
  const elementos = useMemo(
    () => ["", "Veiculo", "Base", "Capsula"], [])

  const handleElementChange = (element) => {
    setCurrentElement(element)
  }

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const imageName = isMobile
    ? `elemento_${currentElement}-mobile.png`
    : `elemento_${currentElement}.png`;

  return (
    <section className="font-secondary text-branco
    flex flex-col items-center p-4 pb-10 gap-8 
    md:gap-2 md:pb-0 lg:items-start
    ">
      <div className="order-0 tracking-widest md:mr-auto md:mt-8 md:ml-8">
        <h2 className="uppercase text-xl md:mr-auto md:mb-8">
          <aside className="mr-2 inline text-cinza">03</aside>
          Tecnologia de Lançamento
        </h2>
      </div>

      <img src={`./images/${imageName}`} alt="Tecnologia"
        className="w-screen"
      />

      <ul className="flex gap-10 font-main">
        {elementos.map((element, index) => (
          <li
            key={index}
            onClick={() => handleElementChange(element)}
            className={`${index === 0 ? 'hidden' : ''}
                ${currentElement === element ? 'bg-branco text-black' : 'border'}
                flex items-center justify-center
                w-14 h-14 rounded-full hover:cursor-pointer
              `}
          >{index}</li>
        ))}
      </ul>

      <div className="text-center">
        <h3 className="font-main text-cinza 
          font-semibold uppercase text-lg lg:ml-20 lg:mt-8">
          Tecnologia{currentElement === 'Veiculo'
            ? ' do' : ' da'}
        </h3>
        <h2 className="font-main uppercase text-5xl pt-2 tracking-widest
      ">{currentElement}</h2>
      </div>

      { currentElement === 'Veiculo' && 
        <p className="mx-2 mb-8 text-center font-secondary text-lg tracking-wide">
          Um veículo de lançamento, também conhecido como foguete lançador, é um veículo impulsionado por foguetes utilizado para transportar vocês da superfície da Terra ao espaço. O nosso foguete lançador WEB-X é o mais poderoso em operação. Com impressionantes 150 metros de altura, ele é uma visão de tirar o fôlego quando está na plataforma de lançamento!
        </p>
      }
      { currentElement === 'Base' && 
        <p className="mx-2 mb-8 text-center font-secondary text-lg tracking-wide">
          Um porto espacial ou cosmodromo é um local destinado ao lançamento (ou recebimento) de espaçonaves, fazendo uma analogia ao porto marítimo para navios ou ao aeroporto para aeronaves. Situado no famoso Cabo Canaveral, nosso porto espacial está estrategicamente posicionado para aproveitar a rotação da Terra durante os lançamentos.
        </p>
      }
      { currentElement === 'Capsula' && 
        <p className="mx-2 mb-8 text-center font-secondary text-lg tracking-wide">
          Uma cápsula espacial é uma espaçonave tripulada que utiliza uma cápsula de reentrada com corpo rombudo para retornar à atmosfera da Terra sem asas. Nossa cápsula é onde você passará o seu tempo durante o voo. Ela inclui uma academia espacial, cinema e diversas outras atividades para mantê-lo entretido.
        </p>
      }

    </section>
  )
}
export default Tecnologia;