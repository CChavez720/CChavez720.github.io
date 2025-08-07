import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-techblue text-white font-sans">
      <Navbar />
      <Hero className="pt-20"/>
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;