import Header from '../app/comps/Header'
import HeroPage from '../app/heroPage/page'
import About from '../app/about/page'
import Skills from '../app/skills/page'
import Services from '../app/services/page'
import Work from '../app/work/page'
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

       {/* skills section */}
      <div className='w-full p-1 py-20'>
        <Skills />
      </div>

      {/* services section */}
      <div className='w-full p-1 py-20'> 
        <Services />
      </div>

      {/* work section  */}
      <div className='w-full p-1 py-20'>
        <Work />
      </div>
    </main>
  )
}
