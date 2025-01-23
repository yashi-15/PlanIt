import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Notes from "./components/Notes";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import NoteState from "./context/notes/noteState";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <NoteState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Home />} />
                        <Route path="mynotes" element={<Notes />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NoteState>
    );
}

export default App;
