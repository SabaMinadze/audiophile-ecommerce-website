import { Route, Routes} from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import HeadphonesPage from "./pages/HeadphonesPage/HeadphonesPage"
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage"
import EarphonesPage from "./pages/EarphonesPage/EarphonesPage"
import HomePage from "./pages/HomePage/HomePage"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="headphones" element={<HeadphonesPage/>}/>
      <Route path="speakers" element={<SpeakersPage/>}/>
      <Route path="eraphones" element={<EarphonesPage/>}/>
    </Routes>
    </>
  )
}

export default App
