import { useState } from "react";
import NavBar from "./components/NavBar";
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";

import './App.css'



function App() {

  const [pageState, setPageState] = useState({
    about: true,
    portfolio: false,
    resume: false,
    contact: false
  })
  return (
    <>   
    <CssBaseline />
    <NavBar pageState={pageState} setPageState={setPageState} />

    {pageState.about? <About /> : "" }

    {pageState.portfolio? <Portfolio /> : ""}

    {pageState.resume? <Resume /> : ""}

    {pageState.contact? <Contact /> : ""}    
    
    <Footer />
  
   
   
    
    </>
  );
}

export default App;
