import { Route, Routes} from "react-router-dom"

import "./App.css"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
