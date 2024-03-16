import { ArrowRight } from "react-bootstrap-icons"
import HeroBg from './assets/hero-bg.png'

function App() {
  return (
    <div>
      <h1 className="text-3xl bg-red-200">TryRecipes</h1>
      <p>hello there <ArrowRight/> </p>
      <img src={HeroBg} alt="" />
    </div>
  )
}

export default App
