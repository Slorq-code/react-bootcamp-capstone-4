import React, { useState, useEffect} from 'react'
import "./HomePage.css"
import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"
import GridYO from "../GridYO/GridYO"


const HomePage = (props) => {

    const[allProducts, setAllProducts]= useState(false);

    const handlerAllProducts = () =>{
        setAllProducts(!allProducts);        
    };

    return ( 
        <div className='home-page'>
            <Header
                handlerAllProducts={()=>handlerAllProducts}
            />
            <Content
                allProducts={allProducts}
                handlerAllProducts={()=>handlerAllProducts}
            {...props}
            />
            <Footer/>
        </div>
        

     );
}
 
export default HomePage;
