import "./HomePage.css"
import heroImage from "./imagehero.jpg"

function HomePage() {
  return (
    <>
    <div className="mainBox">
      <img src={heroImage} alt="error" height="609px" width="100%"/>
      <p className="txt">Experience natural, lifelike audio and exceptional build quality
         made for the passionate music enthusiast.</p>
    </div>
    </>
  )
}

export default HomePage