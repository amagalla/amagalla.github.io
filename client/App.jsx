import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Work from "./components/Work";
import Interest from "./components/Interest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/app.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Work />
      <Interest />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
