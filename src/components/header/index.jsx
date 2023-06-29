import React, { useState } from 'react';
import '../../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex items-center py-5 px-6 md:pl-10 justify-between">
      {/* Logo */}
      <img src="./images/logo.svg" alt="Space Tourism Logo" className="cursor-pointer md:pt-5" />

      {/* Nav Bar Desktop */}
      <input className="hidden" type="checkbox" name="menu" id="menu" />
      <label htmlFor="menu" onClick={toggleMenu}>
        {isOpen && (
          <img src="./images/menu-fechar.svg" alt="Menu" className="botao_menu relative z-20 w-8 h-8 cursor-pointer md:hidden" />
        )}
        {!isOpen && (
          <img src="./images/menu.svg" alt="Menu" className="botao_menu relative z-20 w-8 h-8 cursor-pointer md:hidden" />
        )}
      </label>

      <ul
        id="menulist"
        className={`${isOpen ? 'flex' : 'hidden'} 
        absolute z-10 top-0 right-0 md:top-5 h-screen md:h-24 md:flex flex-col md:flex-row gap-7 md:gap-10 bg-cinza/10 backdrop-blur-md text-branco md:pr-20 transition-all`}
      >
        <li className="py-8">
          <div className="nav_line absolute bg-cinza/20 hidden xl:block h-0.5 w-9/12 -left-full translate-x-40 my-3"></div>
        </li>
        <li className="cursor-pointer uppercase px-16 py-3 md:px-0 md:py-8 w-72 md:w-max hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4">
          <b className="mr-2">00</b> Home
        </li>
        <li className="cursor-pointer uppercase px-16 py-3 md:px-0 md:py-8 w-72 md:w-max hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4">
          <b className="mr-2">01</b> Destino
        </li>
        <li className="cursor-pointer uppercase px-16 py-3 md:px-0 md:py-8 w-72 md:w-max hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4">
          <b className="mr-2">02</b> Tripulação
        </li>
        <li className="cursor-pointer uppercase px-16 py-3 md:px-0 md:py-8 w-72 md:w-max hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4">
          <b className="mr-2">03</b> Tecnologia
        </li>
      </ul>
    </header>
  );
};

export default Header;
