import "./HeaphoneXx9.css"
import headphoneImageMark2 from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg"
import SubContent from "../../components/SubContent/SubContent"
import Button from "../../components/Button/Button"
import { useState } from "react"
function HeaphoneXx9() {
  const [price, setPrice] = useState(0)
  const [info, setInfo] = useState(0)
  return (
    <>
    <div>
      <div className="mainBox2"><h1 className="priceshow">{info <= 0 ? null : info}</h1><center><h1 className="h1"></h1></center></div>
      <img src={headphoneImageMark2} alt="error" width="550px" height="590px" className="img1"/>
        <SubContent/>
        <div className="contentBox1">
          <div className="priceBox">
            <div className="addtocartbox">
            <button className="decrease" onClick={() => {
                if (price > 1) {
                  setPrice(price - 1);
                }
              }}>
                <h3>-</h3>
              </button>     
              <h3 className="priceisshow">{price <= 0 ? 1 : price}</h3>
              <button className="increase" onClick={() => {setPrice(price + 1)
              }}><h3>+</h3></button>
            </div>
          </div>
          <div className="left"><Button title="ADD TO CART" onClick={() => {
            setInfo(info + price)
          }}/></div>
        </div>
    </div>
    </>
  )
}

export default HeaphoneXx9