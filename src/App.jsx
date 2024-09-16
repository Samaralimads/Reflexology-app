import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Benefices from "./Pages/Benefices/Benefices";
import Soins from "./Pages/Soins/Soins";
import Avis from "./Pages/Avis/Avis";
import Tarifs from "./Pages/Tarifs/Tarifs";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefices" element={<Benefices />} />
          <Route path="/soins" element={<Soins />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
