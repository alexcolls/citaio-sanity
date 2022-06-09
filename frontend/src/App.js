import React from 'react';
import CookieConsent from 'react-cookie-consent';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <About />
      <Testimonial />
      <Footer />


      <CookieConsent style={{ background: '#72C6D6' }} buttonStyle={{ background: "fff" }} buttonText="Entendido" debug={true} >Este sitio web utiliza Cookies propias y de terceros, para recopilar información con la finalidad de mejorar nuestros servicios, para mostrarle publicidad relacionada con sus preferencias, así como analizar sus hábitos de navegación. </CookieConsent>

    </div>
  );
}

export default App;