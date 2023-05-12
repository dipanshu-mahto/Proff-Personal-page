import React from "react"

function publications(props){
    return (
        <>
        <h1 id="heading"> PUBLICATIONS</h1>
        <div>
             <p id="head1" class="name-style">Journal Publications</p>
        </div>
        <div id="content-style">
            <ul>
                <li>
                    <p>
                        <span class="name-style">({props.name1})</span> and <span class="name-style">({props.name2}) </span>,{props.description}<span class="name-style">({props.name3})</span>
                    </p>
    
                </li>

    
            </ul>
        </div>
        
    </>
    )
    
}
export default publications
