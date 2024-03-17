import Navbar from "./comps/Navbar"
import Hero from "./comps/Hero"
import Recipes from "./comps/Recipes"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recipes />

      <footer className="bg-black text-gray-200 px-4 py-8 text-center">
        <p>Developed by <span className="font-bold text-green-300">Rahat Faruk</span></p>
      </footer>
    </div>
  )
}

export default App
