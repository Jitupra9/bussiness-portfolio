import React from "react";
import Home from './pages/Home/Home'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'


function App() {
  const lenis = new Lenis(
    {
      duration: 0.5,
    }
  );


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (
    <>
      <Home/>
    </>
  );
}

export default App;
