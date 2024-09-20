import "./HeaphoneXx9.css"
import headphoneImageMark2 from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"
import SubContent from "../../components/SubContent/SubContent"
import Button from "../../components/Button/Button"
import { useState } from "react"
function HeaphoneXx9() {
  const [price, setPrice] = useState(0)
  return (
    <>
    <div>
      <div className="mainBox2"><center><h1 className="h1"></h1></center></div>
      <img src={headphoneImageMark2} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
        <Button title="ADD TO CART" onClick={() => {
          console.log(setPrice(price + 1));
        }}/>
        <div className="priceBox">
          <div className="addtocartbox">
            <div className="increase"></div>
          </div>
          <h1>{price === 0 ? null : price}</h1>
        </div>
    </div>
    </>
  )
}

export default HeaphoneXx9