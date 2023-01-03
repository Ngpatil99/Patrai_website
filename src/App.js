import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import Homepage from './components/Homepage'
import Aboutpages from "./components/Aboutpages"
import Servicepages from "./components/Servicepages"
import Projectpages from './components/Projectpages'
import MyFooter from './components/MyFooter'
import Contactpages from './components/Contactpages'
function App() {
  return (
    <>
      <Router>
        <MyNavBar />
        {/* <Slider /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='About' element={<Aboutpages />} />
          <Route path='Services' element={<Servicepages />} />
          <Route path='Project' element={<Projectpages />} />
          <Route path='Contact' element={<Contactpages />} />
        </Routes>
        <MyFooter />

      </Router>


    </>
  )
}

export default App
