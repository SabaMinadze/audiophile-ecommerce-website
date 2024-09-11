import "./HeadphonesPage.css"
import headphoneImage from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"
import Button from "../../components/Button/Button"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">HEADPHONES</h1></center></div>
    <div>
      <img src={headphoneImage} alt="error" width="550px" height="590px" className="img1"/>
        <div className="box">
        <p className="txt">NEW PRODUCT</p>
            <h1 className="h11">XX99 Mark II Headphones</h1>
            <p className="txt2">Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.</p>
            <Button title="hi"/>
        </div>
    </div>

    </>
  )
}

export default HeadphonesPage