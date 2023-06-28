import Header from "../header";
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col h-5/6 text-center px-2 py-4 pt-6 gap-6">
        <h2 className="text-text font-secondary uppercase text-sm">
          Então, você quer viajar para o</h2>
        <h1 className="text-branco font-main uppercase text-6xl">
          Espaço</h1>
        <p className="w-4/5 mx-auto text-text font-secondary text-sm">
          Vamos encarar; se você quer ir ao espaço, é melhor realmente ir para o espaço sideral e não pairar na borda. Prepare-se, sente e relaxe, porque vamos lhe dar uma experiência verdadeiramente fora deste mundo!</p>
        <div className="relative m-auto">
          <button className="peer bg-branco w-40 h-40 rounded-full uppercase text-xl">
            explore
          </button>
          <div className="
          botao_hover
          hidden
          absolute 
          bg-branco/40 w-60 h-60 rounded-full 
          peer-hover:block
          "></div>
        </div>
      </section>
    </>
  )
}
export default Home;