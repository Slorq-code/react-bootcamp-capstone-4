import React from 'react'
import "./Header.css"
import shopping from "../../Utilidades/Shopping.svg"
import hamburger from "../../Utilidades/Watermelon.svg"

function Header() {
    return ( 
        <div className='header-container'>
            <div className='header-parent'>
                <div className='left-header'>
                    <div className='header-logo'>
                        Rorro
                    </div>
                </div>                
                <div className='right-header'>
                    <div className='header-shoppingIcon'>
                        <img src={shopping} alt="Shopping logo" />
                    </div>
                    <div className='header-hamburger'>
                        <img src={hamburger} alt="Hamburger logo" />
                    </div>
                </div>               
              

            </div>
            
        </div>
        
     );
}
 
export default Header;
