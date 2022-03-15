import React, { useState, useEffect } from "react";
import Card from '../Card/Card.js';
import './GridYO.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function GridYO(products) {

  // const { results : resultsBanner } = featuredBanners;
  const [ transitionsActive, setTransitionActive] = useState(true);
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const length = products.length;

  const onsetTransitionActive = () => {
       setTransitionActive (!transitionsActive)
  }

  const nextSlide = () => {
    setCurrentSlide (currentSlide === (length - 1) ? 0 : (currentSlide +1) );
  }

  const prevSlide = () => {
    setCurrentSlide (currentSlide === 0 ? (length - 1) : (currentSlide -1));
  }

  useEffect(()=>{
    const interval = setInterval (()=>{
      if (transitionsActive) {
        setCurrentSlide ( currentSlide === length - 1 ? 0 : currentSlide +1);
      }
    }, 2000);
    return () => clearInterval (interval);
  }, [currentSlide, transitionsActive, length] );

  return (
    <div className="gridYO-container">
      <div>
        {
          products.map( ({ data })=>{
             return (
               <Card

               />
             )
          })
        }
      </div>
    </div>
  )
}

export default GridYO

