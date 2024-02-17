import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Card />} path="/card" />
        </Routes>
      </BrowserRouter>
    </>

  )
}
