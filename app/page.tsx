import Header from '../app/comps/Header'
import HeroPage from '../app/heroPage/page'
import About from '../app/about/page'
// import Particles from '../app/comps/Particles'
export default function Home() {
  return (
    <main className="bg-zinc-900 h-screen w-full main-section overflow-y-scroll">
      {/* Header section */}
      <section>
          <Header />
      </section>

      {/* About section */}
      <div className='w-full box-border'>
        <h1 className="uppercase text-zinc-800 text-center text-7xl font-extralight mb-4">About</h1>
        <About />
      </div>  
    </main>
  )
}
