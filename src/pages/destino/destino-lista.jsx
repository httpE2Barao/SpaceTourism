import React from 'react';

const DestinoLista = ({ selected, onOrbChange }) => {
  const orbs = ['Lua', 'Marte', 'Europa', 'Titan'];

  return (
    <>
      <ul className='flex uppercase gap-10 text-lg font-semibold tracking-widest'>
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
      <section className='flex flex-col items-center text-center'>
        {selected === 'Lua' &&
        <>
          <h2 className='font-main text-5xl uppercase'>Lua</h2>
          <p className='font-secondary text-lg p-4 tracking-wider'>
          Veja o nosso planeta como nunca antes. Uma viagem relaxante para recuperar a perspectiva e voltar renovado. Conheça os locais de pouso da Luna 2 e da Apollo 11, marcos importantes da exploração espacial. Explore as maravilhas da Terra e mergulhe na grandeza de nossas conquistas espaciais.
          </p>
          <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>
          <h5>Distância</h5>
          <h3 className='uppercase font-main'>384,400 KM</h3>
          <h5>Tempo estimado</h5>
          <h3 className='uppercase font-main'>3 Dias</h3>
        </>
        }
        {selected === 'Marte' &&
        <>
          <h2 className='font-main text-5xl uppercase'>Marte</h2>
          <p className='font-secondary text-lg p-4 tracking-wider'>
          Esta majestosa formação geológica é um verdadeiro desafio para os aventureiros espaciais, oferecendo uma oportunidade única de explorar paisagens marcianas fascinantes enquanto desfruta de vistas panorâmicas deslumbrantes.
          </p>
          <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>
          <h5>Distância</h5>
          <h3 className='uppercase font-main'>225 MIL. KM</h3>
          <h5>Tempo estimado</h5>
          <h3 className='uppercase font-main'>9 Meses</h3>
        </>
        }
        {selected === 'Europa' &&
        <>
          <h2 className='font-main text-5xl uppercase'>Europa</h2>
          <p className='font-secondary text-lg p-4 tracking-wider'>
            Europa, a menor das quatro luas galileanas que orbitam Júpiter, é um paraíso para os amantes do inverno. Com sua superfície gelada, oferece o cenário perfeito para a prática de patinação no gelo, curling, hóquei ou simplesmente relaxar em uma cabana aconchegante.    
          </p>
          <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>
          <h5>Distância</h5>
          <h3 className='uppercase font-main'>628 MIL. KM</h3>
          <h5>Tempo estimado</h5>
          <h3 className='uppercase font-main'>3 Anos</h3>
        </>
        }
        {selected === 'Titan' &&
        <>
          <h2 className='font-main text-5xl uppercase'>Titan</h2>
          <p className='font-secondary text-lg p-4 tracking-wider'>
            Titã, a lua com uma atmosfera densa, é um verdadeiro lar longe de casa (só que bem mais frio!). Além disso, você terá vistas deslumbrantes dos maravilhosos Anéis de Saturno. Explore a atmosfera única e conheça os segredos dessa lua e desse planeta incríveis!
          </p>
          <div className="bg-cinza/20 xl:block h-0.5 w-10/12 my-8"></div>
          <h5>Distância</h5>
          <h3 className='uppercase font-main'>1.6 BIL. KM</h3>
          <h5>Tempo estimado</h5>
          <h3 className='uppercase font-main'>7 Anos</h3>
        </>
        }
      </section>
    </>
  );
};

export default DestinoLista;
