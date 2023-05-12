import React from "react";
import "./style.css"
import Pub from './pub'
import data from "./Publications/data";
const pub = data.map(item => {
  
    return (
        <Pub
            key={item.id}
            {...item}
            
        />
    )
})  
export default function (){
    return(
       pub
    )
}
