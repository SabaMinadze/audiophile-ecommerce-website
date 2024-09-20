import "./HeadphonesPage.css"
import headphoneImageMark2 from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"
import headphoneImageMark1 from "../assets/category-headphones/desktop/image-xx99-mark-one.jpg"
import headphoneImageXx59 from "../assets/category-headphones/desktop/image-xx59.jpg"
import SubContent from "../../components/SubContent/SubContent"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">HEADPHONES</h1></center></div>
    <div>
      <img src={headphoneImageMark2} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
        <button className="btnnn">Click me</button>
    </div>
    <div className="content"><SubContent/></div>
    <img src={headphoneImageMark1} alt="error" width="550px" height="590px" className="img2"/>
    <div>
      <img src={headphoneImageXx59} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
    </div>

    </>
  )
}

export default HeadphonesPage