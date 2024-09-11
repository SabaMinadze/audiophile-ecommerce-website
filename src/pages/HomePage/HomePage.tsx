import "./HomePage.css"
import heroImage from "./imagehero.jpg"

function HomePage() {
  return (
    <>
    <div className="mainBox">
      <center><img src={heroImage} alt="error" height="609px" width="100%"/></center>
         <div className="box">
          <p className="txt">NEW PRODUCT</p>
          <h1 className="h11">XX99 Mark II Headphones</h1>
          <p className="txt2">Experience natural, lifelike audio and exceptional build quality
          made for the passionate music enthusiast.</p>
          <button className="btn">SEE PRODUCTS</button>

         </div>
    </div>
    </>
  )
}

export default HomePage