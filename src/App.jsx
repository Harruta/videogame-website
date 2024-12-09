import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden ">
      <Navbar/>
      <Hero />
      <About/>
    </main>
  )
}

export default App
