import "./HeadphonesPage.css"
import headphoneImage from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"
import Button from "../../components/Button/Button"

function HeadphonesPage() {
  return (
    <>
    <div className="mainBox"><center><h1 className="h1">HEADPHONES</h1></center></div>
    <div>
      <img src={headphoneImage} alt="error" width="550px" height="590px" className="img1"/>
        <div className="box3">
        <p className="txt7">NEW PRODUCT</p>
            <h1 className="h112">XX99 Mark II Headphones</h1>
            <p className="txt22">The new XX99 Mark II headphones is the pinnacle
               of pristine audio. It redefines your premium headphone experience
                by reproducing the balanced depth and precision of studio-quality sound.</p>
            <Button title="SEE PRODUCT"/>
        </div>
    </div>

    </>
  )
}

export default HeadphonesPage