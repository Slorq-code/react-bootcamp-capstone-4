import React from 'react';
import './SliderCard.css';

const SliderCard = ({imgUrl, alt, name }) => {
    return ( 
        <div className='card-container'>
            <div className='card-image'>
                <img src={imgUrl} alt={alt} />
            </div>
        </div>
     );
}
 
export default SliderCard;