import Header from '../app/comps/Header'
import Particles from '../app/comps/Particles'
export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen main-section">
      <section>
          <Header />
      </section>
      <div className="bg-red-500 p-5">
        <p className='text-2xl'>Hero Image</p>
      </div>
    </main>
  )
}
