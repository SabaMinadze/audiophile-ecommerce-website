import "./EarphonesPage.css"
import headphoneImageMark2 from "../assets/category-earphones/desktop/image-yx1-earphones.jpg"
import SubContent from "../../components/SubContent/SubContent"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">EARPHONES</h1></center></div>
    <div>
      <img src={headphoneImageMark2} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
    </div>
    </>
  )
}

export default HeadphonesPage