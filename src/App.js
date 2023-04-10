import React from 'react';
import './App.css';
import Home from './Components/Home/home.js';
import Navbar from './Components/Navbar/navbar.js';
import Main from './Components/Main/main.js';
import Footer from './Components/Footer/footer.js'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
    
  );
}

export default App;
