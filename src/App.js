import { useState } from "react";
import NavBar from "./components/NavBar";
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact1 from "./components/Contact1";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";


function App() {

  const [pageState, setPageState] = useState({
    about: true,
    portfolio: false,
    contact: false
  })
  return (
    <>   
    <CssBaseline />
    <NavBar pageState={pageState} setPageState={setPageState} />

    {pageState.about? <About /> : "" }

    {pageState.portfolio? <Portfolio /> : ""}

    {pageState.contact? <Contact /> : ""}
    
    
    
    <Footer />
  
   
   
    
    </>
  );
}

export default App;
