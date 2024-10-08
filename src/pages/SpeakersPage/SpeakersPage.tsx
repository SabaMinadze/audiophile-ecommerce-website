import "./SpeakersPage.css"
import headphoneImageMark2 from "../assets/category-speakers/desktop/image-zx9.jpg"
import headphoneImageMark1 from "../assets/category-speakers/desktop/image-zx7.jpg"
import SubContent from "../../components/SubContent/SubContent"
import Button from "../../components/Button/Button"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">SPEAKERS</h1></center></div>
    <div>
      <img src={headphoneImageMark2} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
        <Button title="SEE PRODUCT"/>
    </div>
    <div className="content"><SubContent/>
    <Button title="SEE PRODUCT"/>
    </div>
    <img src={headphoneImageMark1} alt="error" width="550px" height="590px" className="img2"/>
    </>
  )
}

export default HeadphonesPage