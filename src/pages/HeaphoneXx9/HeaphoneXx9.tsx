import "./HeaphoneXx9.css";
import headphoneImageMark2 from "../assets/category-headphones/desktop/image-xx99-mark-two.jpg";
import SubContent from "../../components/SubContent/SubContent";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";

// Define the Listing type
interface Listing {
  info: number;
}

function HeaphoneXx9() {
  const [price, setPrice] = useState<number>(0);  // Explicit type for price
  const [info, setInfo] = useState<number>(0);    // Explicit type for info
  const [lists, setLists] = useState<Listing[]>([]);  // Explicit type for lists

  useEffect(() => {
    // Retrieve data from local storage and parse it as an array of Listing objects
    const data = JSON.parse(localStorage.getItem("formDataArray") || "[]") as Listing[];
    setLists(data);
  }, []);

  return (
    <>
      <div>
        <div className="mainBox2">
          <h1 className="priceshow">{info <= 0 ? null : info}</h1>
          <center>
            <h1 className="h1"></h1>
          </center>
        </div>
        <img
          src={headphoneImageMark2}
          alt="error"
          width="550px"
          height="590px"
          className="img1"
        />
        <SubContent />
        <div className="contentBox1">
          <div className="priceBox">
            <div className="addtocartbox">
              <button
                className="decrease"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (price > 1) {
                    setPrice(price - 1);
                    e.preventDefault();
                    const newData = { info };
                    const existingData = JSON.parse(localStorage.getItem("cart") || "[]");
                    localStorage.setItem("cart", JSON.stringify([...existingData, newData]));
                  }
                }}
              >
                <h3>-</h3>
              </button>
              <h3 className="priceisshow">{price <= 0 ? 1 : price}</h3>
              <div className="addBox">
                {lists.length > 0 ? (
                  lists.map((q, index) => (
                    <div className="card" key={index}>
                      <h1>{q.info}</h1>
                    </div>
                  ))
                ) : null}
              </div>
              <button className="increase" onClick={() => setPrice(price + 1)}>
                <h3>+</h3>
              </button>
            </div>
          </div>
          <div className="left">
            <Button
              title="ADD TO CART"
              onClick={() => {
                setInfo(info + price);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaphoneXx9;
