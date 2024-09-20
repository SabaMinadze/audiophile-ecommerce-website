import "./SubFooter.css"
import subFooter from "../../pages/assets/shared/desktop/image-best-gear.jpg"

function SubFooter() {
  return (
    <>
    <div className="subFooter">
        <img src={subFooter} alt="error" className="img7"/>
    </div>
    <div className="subFooter2">
        <h1 className="txt11">Bringing you the <span className="txt112">best</span> audio gear</h1>
    </div>
    </>
  )
}

export default SubFooter