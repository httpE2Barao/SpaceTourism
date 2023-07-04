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

      {/* { currentElement === 'Veiculo' && }
      { currentElement === 'Base' && }
      { currentElement === 'Capsula' && } */}

    </section>
  )
}
export default Tecnologia;