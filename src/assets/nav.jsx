 import React from "react"
 import "./nav.css"
 import logo from "../assets/HomePage/National_Institute_of_Technology,_Patna_Logo.png"
 import AppRouter from "../AppRouter"
 function nav(){
    return(
        <>
        <nav className="navBar">

            {/* <img src="./react.svg"></img> */}
          <ul>
         <a href="https://www.nitp.ac.in/" target="_blank"><img src={logo} alt="logo" /></a>
        <li><a href="/main">Home</a></li>

        <li><a href="/administration">Administration</a></li>

        <li><a href="/members">Members</a></li>

        <li><a href="/projects">Projects</a></li>

        <li><a href="/publications">Publications</a></li>

        <li><a href="/contact">Contact me</a></li>

      </ul>
        </nav>
     <div className="approuter">  <AppRouter />
     </div> 
        </>
    )
 }
 export default nav