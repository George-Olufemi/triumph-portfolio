import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedFilm from './pages/AnimatedFilm';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import TwoDimensionAnimation from './pages/TwoDimensionAnimation';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="animated-film" element={<AnimatedFilm />} />
            <Route path="twodimensionanimation" element={<TwoDimensionAnimation />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
