import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Download from "./components/Download";
import Partners from "./components/Partner";

import About from "./pages/About";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
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
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;