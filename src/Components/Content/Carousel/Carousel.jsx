import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselField = ({products}) => {
  console.log(products);
    return (
      <div className="carousel-container">
        <Carousel>
          {            
            products.map(product =>{
              console.log(product.data);
              return(
                <div key={product.id}>
                    <img src={product.data.main_image.url} />
                    <p className="legend">{product.data.title}</p>
                </div>
              )
            })
          }
        </Carousel>
      </div>
      
    );
}
 
export default CarouselField;