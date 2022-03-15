import React from 'react'
import "./Header.css"
import shopping from "../../Utilidades/Shopping.svg"
import hamburger from "../../Utilidades/Watermelon.svg"
import logo from "../../Utilidades/Logo.PNG"

function Header(props) {
    return ( 
        <div className='header-container'>
            <div className='header-parent'>
                <div className='left-header'>
                    <button onClick={props.handler()}>
                    <div className='header-logo'>
                    <img src={logo} alt="Me" />
                    </div>
                    </button>
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
