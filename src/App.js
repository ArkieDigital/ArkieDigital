import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SubHero from "./components/SubHero";
import Services from "./components/Services";
import DotContainerTop from "./components/DotContainers";
import DotContainerBottom from "./components/DotContainers/bottom";
import ProcessCard from "./components/ProcessCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ width: "80%", margin: "auto" }}>
        <Hero />
        <SubHero />
        <Services />
        <DotContainerTop />
        <ProcessCard />
        <DotContainerBottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
