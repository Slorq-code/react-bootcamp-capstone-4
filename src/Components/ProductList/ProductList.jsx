import SideBar from "./SideBar/SideBar";
import Grid from "../Grid/Grid";
import './ProductList.css'; 
import { useState } from "react";
import products from '../../mocks/es-mx/products.json';

const ProductList = (props) => {
  const [totalProducts, setTotalProducts] = useState(products.results);

  const handlerSelectCategory = (value) =>{
    let pr=[];
    products.results.map(product=>{
      if(value === product.data.category.id){
        pr.push(product);
      }
    })
    setTotalProducts(pr);
  };
  
    return (
      <div className="product-list-container">
        <div className="side-bar">
          <SideBar
            categories={props.categories}
            selectCategory = {handlerSelectCategory}
          />
        </div>
        <div className="content">
          <Grid
            products={totalProducts}
          />
        </div>        
      </div>
        
      );
}
 
export default ProductList;