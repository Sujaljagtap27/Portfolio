import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import Projects from "./Component/Projects"


function App() {


  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
