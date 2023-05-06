 import React from "react"
 import AppRouter from "../AppRouter"
 function nav(){
    return(
        <>
        <nav>
            <img src="./react.svg"></img>
          
        <h3><a href="/main">Home</a></h3>

        <h4><a href="/administration">Administration</a></h4>

        <h4><a href="/members">Members</a></h4>

        <h4><a href="/projects">Projects</a></h4>

        <h4><a href="/publications">Publications</a></h4>

        <h4><a href="/contact">Contact me</a></h4>

      
        </nav>
        <AppRouter />
        </>
    )
 }
 export default nav