import React from "react";
import {Routes,Route} from "react-router-dom";
import {Mockbee,MockMan,Homepage} from "pages";
const RoutesList=()=>{
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/mockbee" element={<Mockbee/>}/>
            <Route path="/mockman" element={<MockMan/>}/>
        </Routes>
    )
}
export {RoutesList}