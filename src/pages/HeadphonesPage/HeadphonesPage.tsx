import "./HeadphonesPage.css"
import headphoneImageMark2 from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"
import headphoneImageMark1 from "../assets/category-headphones/desktop/image-xx99-mark-one.jpg"
import headphoneImageXx59 from "../assets/category-headphones/desktop/image-xx59.jpg"
import SubContent from "../../components/SubContent/SubContent"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">HEADPHONES</h1></center></div>
    <div>
      <img src={headphoneImageMark2} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
        <Link to="heaphoneXx9"><Button title="SEE PRODUCT"/></Link>
    </div>
    <div className="content"><SubContent/>
    <Button title="SEE PRODUCT"/>
    </div>
    <img src={headphoneImageMark1} alt="error" width="550px" height="590px" className="img2"/>
    <div>
      <img src={headphoneImageXx59} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
        <Button title="SEE PRODUCT"/>
    </div>

    </>
  )
}

export default HeadphonesPage