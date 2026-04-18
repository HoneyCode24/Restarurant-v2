import Hero from "./Components/Hero"
import Experience_Section from "./Components/Experience_Section"
import Ambience_Section from "./Components/Ambience_Section"
import Menu from "./Components/Menu"
import Testimonial_Section from "./Components/Testimonial_Section"
import Reservation from "./Components/Reservation"
import Footer from "./Components/Footer"

function App(){
  return(
    <div>
      <Hero/>
      <Experience_Section/>
      <Ambience_Section />
      <Menu/>
      <Testimonial_Section/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default App