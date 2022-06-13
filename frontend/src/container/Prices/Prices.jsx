import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Prices.scss';
import { urlFor, client } from '../../client';

import { FaCheck } from 'react-icons/fa';


const About = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "prices"]';

    client.fetch(query).then((data) => {
      setPrices(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Nuestras <span>tarifas</span></h2>
      <div className="app__prices">
        {prices.map((price, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__prices-item"
            key={price.title.es + index}
          >
            <img src={urlFor(price.imgUrl)} alt={price.title.es} />
            <div className="app__card-price">
              <h3 className="bold-text" style={{ marginTop: 20 }}>{price.title}</h3>
              <h4>{price.price}/mes</h4>
            </div>

            <div className="option">
              <ul>
                {price.feature.map((fet) => (

                  <li><FaCheck /> {fet} </li>
                ))}
              </ul>
            </div>
            <a href="#contacto">Subscríbete </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'tarifas',
  'app__primarybg',
);