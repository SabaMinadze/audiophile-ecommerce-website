import "./SubFooter.css"
import subFooter from "../../pages/assets/shared/desktop/image-best-gear.jpg"

function SubFooter() {
  return (
    <>
    <br /><br /><br /><br />
    <div className="subFooter">
        <img src={subFooter} alt="error" className="img7"/>
    </div>
    <div className="subFooter2">
        <h1 className="txt11">Bringing you the <span className="txt112">best</span> audio gear</h1>
        <br /><br />
        <p className="txtt">Located at the heart of New York City,
             Audiophile is the premier store for
              high end headphones, earphones, speakers,
               and audio accessories. We have a large showroom
                and luxury demonstration rooms available for you
                 to browse and experience a wide range of our products.
                  Stop by our store to meet some of the fantastic people
                   who make Audiophile the best place to buy your portable
                    audio equipment.</p>
    </div>
    </>
  )
}

export default SubFooter