import React, { useState, useEffect, useMemo } from "react";

const Tripulacao = () => {
  const [currentOne, setCurrentOne] = useState("Comandante");
  const [isAutoSwitchEnabled, setIsAutoSwitchEnabled] = useState(true);
  const tripulacao = useMemo(
    () => ["Comandante", "Organizador", "Piloto", "Engenheira"],
    []
  );

  const [preloadedImagesDesktop, setPreloadedImagesDesktop] = useState({});
  const [preloadedImagesMobile, setPreloadedImagesMobile] = useState({});
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const imageName = isMobile
  ? `grupo_${currentOne}-mobile.png`
  : `grupo_${currentOne}.png`;

  // Pré renderizador das imagens
  useEffect(() => {
    const preloadImages = async () => {
      const desktopImages = await Promise.all(
        tripulacao.map((crew) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = `./images/grupo_${crew}.png`;
            img.onload = () => {
              resolve({ [crew]: img });
            };
            img.onerror = reject;
          });
        })
        );
        
        const desktopImagesMap = Object.assign(...desktopImages);
        setPreloadedImagesDesktop(desktopImagesMap);
      };
      
    const preloadImagesMobile = async () => {
      const mobileImages = await Promise.all(
        tripulacao.map((crew) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = `./images/grupo_${crew}-mobile.png`;
            img.onload = () => {
              resolve({ [crew]: img });
            };
            img.onerror = reject;
          });
        })
      );

      const mobileImagesMap = Object.assign(...mobileImages);
      setPreloadedImagesMobile(mobileImagesMap);
    };

    preloadImages();
    preloadImagesMobile();
  }, [tripulacao]);

  // Setter elemento atual
  const handleCrewChange = (crew) => {
    setCurrentOne(crew);
    setIsAutoSwitchEnabled(false);
  };

  // Trocador automatico a cada 3s
  useEffect(() => {
    let intervalId;
    if (isAutoSwitchEnabled) {
      intervalId = setInterval(() => {
        setCurrentOne((prevCurrentOne) => {
          const currentIndex = tripulacao.indexOf(prevCurrentOne);
          const nextIndex = (currentIndex + 1) % tripulacao.length;
          return tripulacao[nextIndex];
        });
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoSwitchEnabled, tripulacao]);

  // Atualizador caso tamanho mude
  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <section className="font-secondary text-branco
       flex flex-col items-center p-4 pb-10 gap-8 
       md:gap-2 md:pb-0
       lg:items-start
       ">
        <div className="order-0 tracking-widest md:mr-auto md:mt-8 md:ml-8">
          <h2 className="uppercase text-xl md:mr-auto md:mb-8">
            <aside className="mr-2 inline text-cinza">02</aside>
            Conheça a Tripulação
          </h2>
        </div>

        <img src={`./images/${imageName}`} alt="Foto dele(a)"
          className={`${currentOne === 'Organizador' ? 'img_ajust' : ''} 
          order-1 lg:self-end md:order-5 w-10/12 
          md:w-96 md:mt-6 lg:absolute lg:bottom-0 lg:right-40
          object-contain lg:max-w-xl`}
        />

        <ul className="order-3 md:order-4 flex items-center gap-8 
        lg:ml-20 lg:absolute lg:bottom-10
        ">
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
          font-semibold uppercase text-lg lg:ml-20 lg:mt-8">
          {currentOne}
        </h3>
        {currentOne === 'Comandante' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl
            lg:ml-20
            ">
              Douglas Hurley
            </h2>
            <p className="order-3 pb-8 text-lg md:w-9/12 
              text-center lg:text-left md:text-xl leading-8 lg:w-1/3 lg:ml-20">
              Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da missão Demo-2 da Crew Dragon.
            </p>
          </>
        }
        {currentOne === 'Organizador' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl
            lg:ml-20
            ">
              Mark Shuttleworth
            </h2>
            <p className="order-3 pb-8 text-lg md:w-9/12 
              text-center lg:text-left md:text-xl leading-8 lg:w-1/3 lg:ml-20">
              Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa responsável pelo sistema operacional Ubuntu, baseado em Linux. Ele conquistou o feito de se tornar o primeiro sul-africano a viajar para o espaço como turista espacial.
            </p>
          </>
        }
        {currentOne === 'Piloto' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl
            lg:ml-20
            ">
              Victor Glover
            </h2>
            <p className="order-3 pb-8 text-lg md:w-9/12 
              text-center lg:text-left md:text-xl leading-8 lg:w-1/3 lg:ml-20">
              Victor Glover foi piloto no primeiro voo operacional da SpaceX Crew Dragon para a Estação Espacial Internacional. Além disso, Glover é comandante na Marinha dos Estados Unidos, onde pilota um F/A-18. Ele fez parte da tripulação da Expedição 64 e desempenhou o papel de engenheiro de sistemas de voo da estação.
            </p>
          </>
        }
        {currentOne === 'Engenheira' &&
          <>
            <h2 className="order-3 font-main uppercase text-3xl md:text-5xl
            lg:ml-20
            ">
              Anousheh Ansari
            </h2>
            <p className="order-3 pb-8 text-lg md:w-9/12 
              text-center lg:text-left md:text-xl leading-8 lg:w-1/3 lg:ml-20">
              Anousheh Ansari é uma engenheira iraniana-americana e co-fundadora da Prodea Systems. Ela foi a quarta turista espacial a financiar sua própria viagem, sendo a primeira mulher a fazê-lo para a Estação Espacial Internacional (ISS) e a primeira iraniana no espaço.
            </p>
          </>
        }
      </section>
    </>
  );
};

export default Tripulacao;