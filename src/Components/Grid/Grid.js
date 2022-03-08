import React, { Component } from 'react';
// import Card from '../Card/Card.js';

import featureProducts from '../../mocks/es-mx/featured-products.json';

import './Grid.css';

const Grid = () => {
    return ( 
        <div className='grid-container'>
            {Object.keys(featureProducts.results).map((key, index)=>{
                console.log(featureProducts.results[key].data.mainimage.url);
                <img src={featureProducts.results[key].data.mainimage.url} alt="" />
                {/*
                    <Card
                        key={index}
                        imgUrl = {featureProducts.results[key].data.mainimage.url}
                        alt={featureProducts.results[key].data.mainimage.alt}
                        text={featureProducts.results[key].data.name}
                    />
                    */
                }   
                
      
                
            })}
        </div>
     );
}
 
export default Grid;
