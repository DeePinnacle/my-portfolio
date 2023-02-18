import Header from '../app/comps/Header'
import HeroPage from '../app/heroPage/page'
import About from '../app/about/page'
import Skills from '../app/skills/page'
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
        <About />
      </div> 

       {/*  */}
      <div className='w-full'>
        <Skills />
      </div>
    </main>
  )
}
