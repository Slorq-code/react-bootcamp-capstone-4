import React, { useState, useEffect } from "react";
import SliderCard from '../Slider/SliderCard';
import './Slider.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductList from "../ProductList/ProductList";
import featuredProducts from '../../mocks/es-mx/featured-products.json';

function Slider( {products} ) {
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
    }, 1000000);
    return () => clearInterval (interval);
  }, [currentSlide, transitionsActive, length] );


      return (
              <div className="Slider-container">
               <div className="total-Card" key={products[currentSlide].id}>
               <SliderCard
               imgUrl={products[currentSlide].data.main_image.url}
               name={products[currentSlide].title}
               alt={products[currentSlide].data.main_image.alt}
               />
               </div>
               <div className="botonera">
                   <div className="total-nextSlide">
                     <button onClick={nextSlide}>
                      Next
                     </button>
                  </div>
                  <div className="total-prevSlide">
                     <button onClick={prevSlide}>
                      Prev
                    </button>
                 </div>
             </div>
           </div>
             )

}

export default Slider

