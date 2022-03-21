import React from 'react';
import './Card.css';

const Card = ({imgUrl, alt, name, category, price}) => {


    return ( 
        <div className='card-container'>
            <div className='card-image'>
                <img src={imgUrl} alt={alt} />
            </div>
            <div className='card-text'>
                <div className='name'>{name}</div>
                <div className='category'>{`Categoría: ${category}`}</div>
                <div className='price'>{`Precio: $${price}`}</div>
            </div>
        </div>
     );
}
 
export default Card;