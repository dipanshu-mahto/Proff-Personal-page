import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./assets/main"

import Administration from "./assets/nav_content/administration"
import Member from "./assets/nav_content/members"
import Projects  from "./assets/nav_content/Projects"
import Publications from "./assets/nav_content/Publications"
import Contact from "./assets/nav_content/contact"
function AppRouter(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <Home />
            } />
           
             <Route path="/main" element={
                <Home />
            } />
             <Route path="/administration" element={
                <Administration />
            } />
             <Route path="/members" element={
                <Member />
            } />
             <Route path="/publications" element={
                <Publications />
            } />
             <Route path="/projects" element={
                <Projects />
            } />
             <Route path="/contact" element={
                <Contact />
            } />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter