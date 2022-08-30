import React, { useState } from "react";
import "./options.css";
import Tab from "./tab/Tab";

//CartSLice
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const Options = ({ singleProduct }) => {
  const [color, setColor] = useState('black');

  const dispatch = useDispatch();

  const variant = singleProduct.variants.find((variant) => variant.color === color)
  // console.log(singleProduct);

  return (
    <div className="options">
      <div className="options__images">
        <img
          src={`${
            variant?.image1
          }`}
          alt="shirt"
        />
        <img
          src={`${
           variant?.image2
          }`}
          alt="shirt"
        />
      </div>

      <div className="options__select">
        <h2>{singleProduct.title}</h2>
        <p>${singleProduct.price}.00</p>

        <div className="options__select--sizes">
          <p>Size</p>
          <div className="options__select--sizes-options"></div>
        </div>

        <div className="options__select--colors">
          <p>Color</p>
          <div>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark black"
                onClick={() => setColor('black')}
              ></span>
            </label>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark blue"
                onClick={() => setColor('blue')}
              ></span>
            </label>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark grey"
                onClick={() => setColor('grey')}
              ></span>
            </label>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark white"
                onClick={() => setColor('white')}
              ></span>
            </label>
          </div>
        </div>

        <div className="options__select--btn">
          <button
              onClick={() => {
                dispatch(addToCart({productId: singleProduct.id, variantId: variant.id, amount: singleProduct.amount, price: singleProduct.price}));
              }}
              className="options__select--btn-add"
            >
              Add to cart
            </button>
        </div>

        <Tab singleProduct={singleProduct} />
      </div>
    </div>
  );
};

export default Options;
