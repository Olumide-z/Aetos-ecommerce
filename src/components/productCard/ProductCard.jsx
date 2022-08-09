import "./product-card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const ProductCard = ({ card }) => {
  return (
    <div className="productCard">
      <Link to={`/collection/${card.id}`} className="productCard__link">
        <img src={card.image1} alt="shirt" />
      </Link>
      <Link to={`/collection/${card.id}`}>
        <button className="productCard__btn productCard__btn-1">View Details</button>
      </Link>
      <div className="productCard__top">
        <Link to={`/collection/${card.id}`}>
          <img src={card.image2} alt="shirt" className="productCard__img2" />
        </Link>
        <Link to={`/collection/${card.id}`}>
          <button className="productCard__btn">View Details</button>
        </Link>
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
