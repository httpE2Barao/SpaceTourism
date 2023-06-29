import Header from "../header";
import '../../styles/home.css'

const Home = () => {
  return (
    <>
      <article className="home">
        <Header />
        <section className="flex flex-col h-5/6 text-center px-2 justify-evenly
          md:flex-row md:items-center 
        ">
          <div className="flex flex-col gap-4 md:w-1/2 md:text-left md:pl-20">
            <h2 className="text-text font-secondary uppercase text-sm lg:text-base md:pl-10 tracking-widest">
              pronto para viajar pelo</h2>
            <h1 className="text-branco font-main uppercase text-6xl md:text-7xl lg:text-9xl md:pl-10">
              Espaço</h1>
            <p className="mx-auto px-4 md:pl-10 text-text font-secondary text-xs md:text-sm lg:text-base tracking-widest">
              Vamos ser sinceros; se o seu objetivo é explorar o espaço, então por que não ir além e realmente adentrar o espaço sideral, em vez de apenas pairar à sua margem? Então prepare-se, sente-se confortavelmente e relaxe, pois estamos prestes a proporcionar-lhe uma experiência verdadeiramente extraordinária e fora deste mundo!
            </p>
          </div>

          <div className="relative mx-auto">
            <button className="peer bg-branco w-40 h-40 rounded-full uppercase font-main text-xl tracking-widest ">
              iniciar
            </button>
            <div className="
            botao_hover
            absolute 
            bg-transparent w-60 h-60 rounded-full
            peer-hover:bg-branco/30
            animate-pulse
            transition
          "></div>
          </div>
        </section>
      </article>
    </>
  )
}
export default Home;