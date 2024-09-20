import { Route, Routes} from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import HeadphonesPage from "./pages/HeadphonesPage/HeadphonesPage"
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage"
import EarphonesPage from "./pages/EarphonesPage/EarphonesPage"
import HomePage from "./pages/HomePage/HomePage"
import SubFooter from "./components/SubFooter/SubFooter"
import HeaphoneXx9 from "./pages/HeaphoneXx9/HeaphoneXx9"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="headphones" element={<HeadphonesPage/>}/>
      <Route path="headphones/heaphoneXx9" element={<HeaphoneXx9/>}/>
      <Route path="speakers" element={<SpeakersPage/>}/>
      <Route path="eraphones" element={<EarphonesPage/>}/>
    </Routes>
    <SubFooter/>
    </>
  )
}

export default App
