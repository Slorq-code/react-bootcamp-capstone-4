import React, { useState, useEffect } from "react";
import Card from '../Card/Card.js';
import './Grid.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Grid = ( {products} ) => {

  const [selectedScreenNex, setselectedScreenNex] = useState(0);
  const [selectedScreenBack, setselectedScreenBack] = useState(false);
  
  const tamaño = products.length
  const dataName = products.data.title

  const switchScreen = (tamaño, dataName) => {
    let screenEvent = document.getElementById(dataName);
    if (!screenEvent){return};
  }

 
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };


      const getCardItems = () => {
        return products.map((Screen, i) => (
          <div
            key={Screen.screen_name}
            className={getCardItemsClasses(i)}
            onClick={() => switchScreen(i, Screen)}
          >
            <span>{Screen.screen_name}</span>
          </div>
        ));
      };

      const getCardItemsClasses = (index) => {
        let classes = "Card-Items ";
        
        if (index < products.length - 1) {classes += "Card-Items-seperator "};
    
        if (selectedScreen === index) {classes += "selected-Card-option "};
    
        return classes;
      };


 return (
        <div className='grid-container'>
            <OwlCarousel
                  className="owl-carousel"
                  id="testimonial-carousel"
                  {...options}
                >
         <div
          className={
            showOptions
              ? "selectedScreenNex"
              : "selectedScreenBack"
          }
        >
          {getCardItems()}
        </div>
                      </OwlCarousel>
      <div
      className="button-next"
      onClick={() => setselectedScreenNex(!showOptions)}
      >
        prueba
      </div>
      <div
      className="button-back"
      onClick={() => setselectedScreenBack(!showOptions)}
      >
        prueba
      </div>

    </div>

     );
}
 
export default Grid;
