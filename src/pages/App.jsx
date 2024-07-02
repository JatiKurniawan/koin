import About from "../component/about"
import Banner from "../component/banner"
import Benefit from "../component/benefit"
import Download from "../component/download"
import Footer from "../component/footer"
import Recap from "../component/recap"
import Review from "../component/review"
import Services from "../component/services"

function App() {
  return (
    <div className="scrollbar-hide overflow-auto">
      <Banner/>
      <Recap/>
      <About/>
      <Services/>
      <Download/>
      <Benefit/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
