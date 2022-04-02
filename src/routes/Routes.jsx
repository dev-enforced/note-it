import React from "react";
import { Routes, Route } from "react-router-dom";
import { Mockbee, MockMan, Homepage, Login, Signup, NoteDisplay } from "pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mockbee" element={<Mockbee />} />
            <Route path="/mockman" element={<MockMan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/noteshome" element={<ProtectedRoutes specificPart={<NoteDisplay />}></ProtectedRoutes>} ></Route>
            <Route path="/noteslabels" element={<ProtectedRoutes specificPart={<></>}></ProtectedRoutes>} ></Route>
            <Route path="/notesarchives" element={<ProtectedRoutes specificPart={<></>}></ProtectedRoutes>} ></Route>
            <Route path="/notestrash" element={<ProtectedRoutes specificPart={<></>}></ProtectedRoutes>} ></Route>
        </Routes>
    )
}
export { RoutesList }