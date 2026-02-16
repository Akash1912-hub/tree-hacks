import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import EverydayDishes from './components/EverydayDishes'
import Preorder from './components/Preorder'
import Footer from './components/Footer'
import LiquidEther from './components/ui/LiquidEther'

function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-800 bg-[#fbfbf9]">
      {/* Fluid Background */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <LiquidEther
          colors={["#d76609", "#da5a16", "#e16d0e"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Demo />
        <EverydayDishes />
        <Preorder />
        <Footer />
      </div>
    </div>
  )
}

export default App
