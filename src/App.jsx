import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./contexts/MyContext";
import NotFound from './views/NotFound'
import "./main.css";

export default function App() {
  const endpoint = "/fotos.json";
  const [data, setData] = useState([]);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.photos);
  };

  useEffect(() => {
    getData(endpoint);
  }, []);

  const allState = {data,setData};

  return (
    <MyContext.Provider value={allState}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}
