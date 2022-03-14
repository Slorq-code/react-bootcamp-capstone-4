import React from 'react';
import './Content.css'

import Grid from '../Grid/Grid';
import CarouselField from './Carousel/Carousel';

import featuredProducts from '../../mocks/es-mx/featured-products.json';
import banners from '../../mocks/es-mx/featured-banners.json';
import productsCategories from '../../mocks/es-mx/product-categories.json';

const Content = (props) => {
    const products = featuredProducts.results;
    const carouselProducts = banners.results;
    const carouselCategories= productsCategories.results;
    console.log(props);
    
    return ( 
        <div className='content-container'>
            <div className='welcome-container'>
                <div className='vertical-carousel'>
                    <CarouselField
                        products={carouselProducts}
                    />
                </div>
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
            </div>
            <div className='final-carousel'>
                <CarouselField
                    products={carouselCategories}
                />
            </div>

        </div>
     );
}
 
export default Content;
