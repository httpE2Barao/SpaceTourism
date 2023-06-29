import React from 'react';

const DestinoLista = ({ selected, onOrbChange }) => {
  const orbs = ['Lua', 'Marte', 'Europa', 'Titan'];

  return (
    <>
      <ul className='flex uppercase gap-10 text-lg font-semibold tracking-widest'>
        {orbs.map((orb, index) => (
          <li
            key={index}
            className={selected === orb ? 'text-branco pb-2 border-b-2 cursor-pointer' : 'text-cinza pb-2 cursor-pointer'}
            onClick={() => onOrbChange(orb)}
          >
            {orb}
          </li>
        ))}
      </ul>
      {selected === 'Lua' && 
        <h2>Lua description</h2>
      }
      {selected === 'Marte' && 
        <h2>Marte description</h2>
      }
      {selected === 'Europa' && 
        <h2>Europa description</h2>
      }
      {selected === 'Titan' && 
        <h2>Titan description</h2>
      }
    </>
  );
};

export default DestinoLista;
