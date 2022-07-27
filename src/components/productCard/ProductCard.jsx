import "./product-card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {BsArrowLeft} from 'react-icons/bs';

const ProductCard = ({ card }) => {
  const [color, setColor] = useState(false);

  const quickAdd = () => {
    setColor(true)
  }

  const goBack = () => {
    setColor(false)
  }

  return (
      <div className="productCard">
        <Link to={`/collection/${card.id}`} className="productCard__link">
          <img src={card.image1} alt="shirt" />
        </Link>
        <div className="productCard__top">
          <Link to={`/collection/${card.id}`}>
          <img src={card.image2} alt="shirt" className="productCard__img2" />
          </Link>
          <button className="productCard__btn" onClick={quickAdd}>QUICK ADD</button>
          {color && (
          <div className="productCard__color">
            <BsArrowLeft onClick={goBack}/>
            <h5>SELECT COLOR</h5>
            <ul>
              <li className="productCard__color-item" id="blue"></li>
              <li className="productCard__color-item" id="grey"></li>
              <li className="productCard__color-item" id="white"></li>
              <li className="productCard__color-item" id="black"></li>
              <li className="productCard__color-item" id="green"></li>
            </ul>
          </div>
          )}
        </div>
        <Link to={`/collection/${card.id}`} className="productCard__link">
        <div className="productCard__info">
          <h4>{card.title}</h4>
          <p>${card.price}.00</p>
        </div>
        </Link>
      </div>
  );
};

export default ProductCard;
