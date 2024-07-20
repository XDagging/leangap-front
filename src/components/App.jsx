import React from "react"
import Index from "./Index"
import Login from "./Login"
import Signup from "./Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";




export default function App(props) {






    return (
        <>
        <BrowserRouter>
          <Routes>
            
            <Route index path="/" element={<Index />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/signup" element={<Signup />} />
            
            
        
          </Routes>
        </BrowserRouter>



        </>
    )
}

