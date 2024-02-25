import "./styles/style.css"
import "./styles/home.css"
import "./styles/aboutStyle.css"
import "./styles/CVStyle.css"
import "./styles/contactStyle.css"
import "./styles/portfolioStyle.css"
import "./styles/guidelines.css"
import './App.css';

import { Route, Routes } from "react-router-dom";
import { useState } from "react"


import Header from "./components/Header";
import Navbar from './components/Navbar.js';
import Footer from "./components/Footer";
import Home from './pages/Home.js';
import About from './pages/About.js';
import CV from "./pages/CV.js";
import Portfolios from "./pages/Portfolio.js"
import Guidlines from "./pages/Guidlines.js"
import EliteModal from "./components/EliteModal.js"
import { Elite } from "./components/EasterEggs.js"

function App() {
 
  //used to open easter egg modal
  const[openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <Header />
      <Navbar />
     
      <Routes>
        <Route path="/Labb_2_Dynamisk_CV/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/portfolio' element={<Portfolios />} />
        <Route path='/guidelines' element={<Guidlines />} />

      </Routes>

      <Footer />
      
      <Elite modal = {setOpenModal}/>
      {openModal && <EliteModal closeModal = {setOpenModal} />}

    </div>
    
  );

  
}

export default App;
