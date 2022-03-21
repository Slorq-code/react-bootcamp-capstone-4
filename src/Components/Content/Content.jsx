import React from 'react';
import './Content.css'
import Grid from '../Grid/Grid';
import CarouselField from './Carousel/Carousel';
import ProductList from "../ProductList/ProductList"
import featuredProducts from '../../mocks/es-mx/featured-products.json';
import banners from '../../mocks/es-mx/featured-banners.json';
import productsCategories from '../../mocks/es-mx/product-categories.json';
import Slider from "../Slider/Slider"

const Content = (props) => {
    const products = featuredProducts.results;
    const carouselProducts = banners.results;
    const carouselCategories= productsCategories.results;

    
    return ( 
<div>
        {props.allProducts?

          <Grid 
          products ={products}
          />
          :
          <div className='content-container'>
              <div className='vertical-carousel'>
               <Slider 
                  products ={carouselProducts}
               />
              </div>
          <div className='grid-container'>
              <div className='grid-title'>
                  Productos de temporada
              </div>
              <div className='grid-content'>
                  <Grid
                      products ={products}
                  />
              </div>   
              <button className="Content-btn" onClick={props.handlerAllProducts()}>
              View all products
              </button>             
          </div>
          <div className='final-carousel'>
              <Slider
                  products={carouselCategories}
              />
          </div>

      </div>
        }
  </div>
     );
}
 
export default Content;
