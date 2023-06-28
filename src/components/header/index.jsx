import '../../styles/header.css'

const Header = () => {
  return (
    <header className='relative flex items-center py-5 px-6 md:pl-10 justify-between'>
      {/* Logo */}
      <img src="./images/logo.svg" alt="Space Tourism Logo" className='cursor-pointer' />
      {/* Header Line */}
      <div className='hidden w-px h-0.5 bg-cinza/30'></div>
      {/* Nav Bar Desktop */}
      <input className='hidden' type="checkbox" name="menu" id="menu" />
      <label htmlFor="menu">
        <img src="./images/menu.svg" alt="Menu" className='w-8 h-8 cursor-pointer md:hidden' />
      </label>
      <ul className='
        hidden
        absolute top-0 right-0
        h-screen w-3/5 md:h-auto
        md:flex flex-col md:flex-row gap-7 md:gap-10 
        bg-cinza/10 backdrop-blur-md
        text-branco 
        pl-10 py-8 md:pr-20 
        '>
        <img src="./images/menu-fechar.svg" alt="Fechar" className='md:hidden w-6 h-6 mr-5 self-end cursor-pointer'/>
        <li className='cursor-pointer uppercase pr-100 hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4'>
          <b className='mr-2'>00</b> Home</li>
        <li className='cursor-pointer uppercase pr-100 hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4'>
          <b className='mr-2'>01</b> Destino</li>
        <li className='cursor-pointer uppercase pr-100 hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4'>
          <b className='mr-2'>02</b> Tripulação</li>
        <li className='cursor-pointer uppercase pr-100 hover:border-r-4 md:hover:border-r-0 md:hover:border-b-4'>
          <b className='mr-2'>03</b> Tecnologia</li>
      </ul>
    </header>
  )
}
export default Header;