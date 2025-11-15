import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#050814]">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <FAQ />
      <footer className="relative border-t border-white/10 bg-black/40 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} BlueLanding — Criado com 💙</p>
      </footer>
    </div>
  )
}

export default App
