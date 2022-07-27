import React, { useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import { data } from '../productCard/data'
import './product.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const [cardData, setCardData] = useState(data)
  console.log(data)

  
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
    <div className="product">
       <Slider {...settings}>
      {
        cardData.map((card) => (
            <ProductCard card={card} key={card.id}/>
        ))
      }
      </Slider>
    </div>
  )
}

export default Product