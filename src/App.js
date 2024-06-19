import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Analytics } from "./components/Analytics";
import { Newslatter } from "./components/Newslatter";
import { Cards } from "./components/Cards";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newslatter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
