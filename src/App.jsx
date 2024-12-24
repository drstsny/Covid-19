/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./component/navbar/Navbar.jsx";
import Hero from "./component/hero/Hero.jsx";
import HowItHelps from "./component/howithelps/HowItHelps";
import Uses from "./component/uses/Uses.jsx";
import Trust from "./component/trust/Trust.jsx";
import Footer from "./component/footer/Footer.jsx";
const App = () => {
  return (
    <main className="overflow-x-hidden ">
      <Navbar /> 
      <Hero />
      <HowItHelps />
      <Uses />
      <Trust />
      <Footer />
    </main>
  );
};
export default App;