import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselField = ({products}) => {
    return (
      <div className="carousel-container">
        <Carousel>
          {            
            products.map(product =>{
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