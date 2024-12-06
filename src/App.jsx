/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import HowItHelps from "./component/HowItHelps/HowItHelps";
import Uses from "./component/Uses/Uses.jsx";
import Trust from "./component/Trust/Trust.jsx";
import Footer from "./component/Footer/Footer.jsx";
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