import React from 'react';
import CookieConsent from 'react-cookie-consent';

import { Prices, Header, About, Testimonial, Product, Contact } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Product />
      <Testimonial />
      <Prices />
      <Contact />

      <CookieConsent style={{ background: '#72C6D6' }} buttonStyle={{ background: "fff", borderRadius: "7px" }} buttonText="Entendido" debug={true} >Este sitio web utiliza Cookies propias y de terceros, para recopilar información con la finalidad de mejorar nuestros servicios, para mostrarle publicidad relacionada con sus preferencias, así como analizar sus hábitos de navegación. </CookieConsent>

    </div>
  );
}

export default App;