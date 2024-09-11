import "./HeadphonesPage.css"
import headphoneImage from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">HEADPHONES</h1></center></div>
    <div>
      <img src={headphoneImage} alt="error" width="550px" height="590px" className="img1"/>
    </div>

    </>
  )
}

export default HeadphonesPage