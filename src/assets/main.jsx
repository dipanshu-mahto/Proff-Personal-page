import React from "react"

import "./HomePage/styles.css"
import dp from "./HomePage/c1-modified.png"
function main(){
    return (
        <>
    <div className="main">
  <div className="infoContainer">
    <div className="teacherInfo">
      <div className="name">Dr. Tasneem Parvin</div>
      <div className="info">Associate Professor</div>
      <div className="moreInfo">
        National Institute of Technology, Patna ( 2018 | Till date )
      </div>
      <div className="buttons">
        <a href="/main" >
          <button>About Me</button>
        </a>
        <a href="/contact">
          <button>Contact Me</button>
        </a>
      </div>
    </div>
    <div className="teacherPic">
      <img src={dp} id="pic" alt="" srcSet="" />
    </div>
  </div>
</div>

      </>
    )
    
}
 export default main