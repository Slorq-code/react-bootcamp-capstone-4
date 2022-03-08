import React from 'react'
import "./Card.css"

const Card = (imgUrl, text) => {
    return (
        <div className="card-container">
           <div className="card-photo">
                <img src={imgUrl} alt=""></img>
               </div>
           <div className="card-text">
               <span>{text}</span>
               </div>
        </div>
    )
}

export default Card
