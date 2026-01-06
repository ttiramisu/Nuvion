import "./App.css";

import { Routes, Route } from "react-router-dom";

import Nav from "./shared/Navigation";
import CTA from "./shared/CTA";
import Footer from "./shared/Footer";

import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Download from "./components/Download";
import Partners from "./components/Partner";

import About from "./pages/About";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Feature />
              <Download />
              <Partners />
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <CTA />
      <Footer />
    </>
  );
}

export default App;
