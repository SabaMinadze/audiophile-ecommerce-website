import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/headphone">HEADPHONES</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar