import Carousel from 'react-bootstrap/Carousel';
import {useProduct} from "../fetch/ProductsFetch"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


    function CardSlider() {
        useProduct();
        const products = useSelector((state) => state.product.value);
        const navigate = useNavigate();
      return (
        products[1]||products[2]||products[3]?
        <div className='flex flex-1 justift-center items-center my-5'>
        <Carousel data-bs-theme="dark" className='flex'>
          <Carousel.Item className='flex'>
            <img
               className="flex flex-1 w-150 h-64 object-cover"
              src={products[0].image}
              alt="First slide"
              onClick={() => navigate(`/product?query=${products[0]._id}`)}
            />
            <Carousel.Caption className='flex'>
            </Carousel.Caption>
            <p>{products[0].name}</p>
            <p>{products[0].price}₺</p>
          </Carousel.Item>
          <Carousel.Item className='flex'>
            <img
               className="flex flex-1 w-150 h-64 object-cover"
              src={products[1].image}
              alt="Second slide"
              onClick={() => navigate(`/product?query=${products[1]._id}`)}
            />
            <Carousel.Caption>
            </Carousel.Caption>
            <p>{products[1].name}</p>
            <p>{products[1].price}₺</p>
          </Carousel.Item>
          <Carousel.Item className='flex'>
            <img
               className="flex flex-1 w-150     h-64 object-cover"
              src={products[2].image}
              alt="Third slide"
              onClick={() => navigate(`/product?query=${products[2]._id}`)}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
            <p>{products[2].name}</p>
            <p>{products[2].price}₺</p>
          </Carousel.Item>
        </Carousel>
        </div>
    :<div></div> );
}
    
    export default CardSlider;