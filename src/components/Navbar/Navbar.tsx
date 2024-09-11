import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="headphones">HEADPHONES</Link></li>
            <li><Link to="speakers">SPEAKERS</Link></li>
            <li><Link to="eraphones">EARPHONES</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar