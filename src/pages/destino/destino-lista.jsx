import React, { useEffect, useMemo } from 'react';

const DestinoLista = ({ selected, onOrbChange }) => {
  const orbs = useMemo(() => ['Lua', 'Marte', 'Europa', 'Titan'], []);

  useEffect(() => {
    // Mapeia os nomes dos orbs para as URLs das imagens correspondentes
    const orbImages = orbs.map((orb) => `/images/orb_${orb}.svg`);
    const imageInstances = [];

    // Função para pré-carregar as imagens
    const preLoadImages = () => {
      orbImages.forEach((image) => {
        const img = new Image();
        img.src = image;
        imageInstances.push(img);
      });
    };

    preLoadImages();

    // Cleanup function
    return () => {
      imageInstances.forEach((img) => {
        img.src = '';
      });
    };
  }, [orbs]);
  
  return (
    <>
      <ul className='flex uppercase gap-10 text-lg font-semibold tracking-widest 
      md:p-6 md:pb-0 md:mt-7 2xl:text-2xl 2xl:gap-14
      '>
        {orbs.map((orb, index) => (
          <li
            key={index}
            className={selected === orb ? 'text-branco pb-2 border-b-4 cursor-pointer' : 'text-cinza pb-2 cursor-pointer'}
            onClick={() => onOrbChange(orb)}
          >
            {orb}
          </li>
        ))}
      </ul>

      <section className='flex flex-col items-center text-center 
        md:items-start md:p-6 md:gap-4 md:pr-10 2xl:gap-10'>
        {selected === 'Lua' &&
          <>
            <h2 className='font-main text-7xl uppercase 2xl:text-9xl'>Lua</h2>
            <p className='font-secondary text-lg p-4 tracking-wider md:p-0 md:text-base md:text-justify 2xl:text-2xl'>
              Veja o nosso planeta como nunca antes. Uma viagem relaxante para recuperar a perspectiva e voltar renovado. Conheça os locais de pouso da Luna 2 e da Apollo 11, marcos importantes da exploração espacial. Explore as maravilhas da Terra e mergulhe na grandeza de nossas conquistas espaciais.
            </p>
            <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>

            <div className='md:flex gap-10'>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Distância</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>384,400 KM</h3>
              </div>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Tempo estimado</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>3 Dias</h3>
              </div>
            </div>
          </>
        }
        {selected === 'Marte' &&
          <>
            <h2 className='font-main text-7xl uppercase 2xl:text-9xl'>Marte</h2>
            <p className='font-secondary text-lg p-4 tracking-wider md:p-0 md:text-base md:text-justify 2xl:text-2xl'>
              Esta majestosa formação geológica é um verdadeiro desafio para os aventureiros espaciais, oferecendo uma oportunidade única de explorar paisagens marcianas fascinantes enquanto desfruta de vistas panorâmicas deslumbrantes.
            </p>
            <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>

            <div className='md:flex gap-10'>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Distância</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>225 MIL. KM</h3>
              </div>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Tempo estimado</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>9 Meses</h3>
              </div>
            </div>
          </>
        }
        {selected === 'Europa' &&
          <>
            <h2 className='font-main text-7xl uppercase 2xl:text-9xl'>Europa</h2>
            <p className='font-secondary text-lg p-4 tracking-wider md:p-0 md:text-base md:text-justify 2xl:text-2xl'>
              Europa, a menor das quatro luas galileanas que orbitam Júpiter, é um paraíso para os amantes do inverno. Com sua superfície gelada, oferece o cenário perfeito para a prática de patinação no gelo, curling, hóquei ou simplesmente relaxar em uma cabana aconchegante.
            </p>
            <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>

            <div className='md:flex gap-10'>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Distância</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>628 MIL. KM</h3>
              </div>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Tempo estimado</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>3 Anos</h3>
              </div>
            </div>
          </>
        }
        {selected === 'Titan' &&
          <>
            <h2 className='font-main text-7xl uppercase 2xl:text-9xl'>Titan</h2>
            <p className='font-secondary text-lg p-4 tracking-wider md:p-0 md:text-base md:text-justify 2xl:text-2xl'>
              Titã, a lua com uma atmosfera densa, é um verdadeiro lar longe de casa (só que bem mais frio!). Além disso, você terá vistas deslumbrantes dos maravilhosos Anéis de Saturno. Explore a atmosfera única e conheça os segredos dessa lua e desse planeta incríveis!
            </p>
            <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>
            <div className='md:flex gap-10'>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest 2xl:text-3xl'>Distância</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>1.6 BIL. KM</h3>
              </div>
              <div className='mb-5'>
                <h5 className='text-lg font-secondary uppercase tracking-widest'>Tempo estimado</h5>
                <h3 className='uppercase font-main text-4xl md:text-2xl 2xl:text-4xl'>7 Anos</h3>
              </div>
            </div>
          </>
        }
      </section>
    </>
  );
};

export default DestinoLista;
