import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "./components/Navbar";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import MyContext from "./contexts/MyContext";
import NotFound from "./views/NotFound";
import Pokedex from "./views/Pokedex";

function App() {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const Pokemons = data.results;
      setData(Pokemons);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData('https://pokeapi.co/api/v2/pokemon?limit=2000');
  }, []);

  return (
    <MyContext.Provider value={{ data }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;