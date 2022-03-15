import React, { useState, useEffect} from 'react'
import "./HomePage.css"
import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"
import GridYO from "../GridYO/GridYO"


function HomePage() {

    const [allProduct, setallProduct] = useState(false);
    const handler = () => {
        setallProduct(!allProduct)
    } 



    return (
        <div className="HomePage-container">


        <GridYO/>

        {//<Header
         //   handler = {() => handler}
        ///>
        //<Content
         //   allProduct = {allProduct}
         //   handler = {() => handler} 
        ///>
        //<Footer/>
         }
        </div>
    )
}

export default HomePage
