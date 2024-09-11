import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div className="navBar">
        <ul className="ul">
            <li className="txt"><Link className="l" to="headphones">AUDIOPHILE</Link></li>
            <ul className="ul2">
            <li><Link className="lih" to="/">HOME</Link></li>
            <li><Link className="li" to="headphones">HEADPHONES</Link></li>
            <li><Link className="li" to="speakers">SPEAKERS</Link></li>
            <li><Link className="li" to="eraphones">EARPHONES</Link></li>
            </ul>
        </ul>
    </div>
    </>
  )
}

export default Navbar