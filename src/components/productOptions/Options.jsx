import React, { useState } from "react";
import "./options.css";
import Tab from "./tab/Tab";

//CartSLice
import { addToCart, onChange } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../features/colorSlice";

const Options = ({ options }) => {
  const { photo } = useSelector((store) => store.color);
  const { cartItems, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <div className="options">
      <div className="options__images">
        <img
          src={`${
            photo === "black"
              ? options.blackImage1
              : photo === "grey"
              ? options.greyImage1
              : photo === "white"
              ? options.whiteImage1
              : photo === "blue"
              ? options.blueImage1
              : options.image1
          }`}
          alt="shirt"
        />
        <img
          src={`${
            photo === "black"
              ? options.blackImage2
              : photo === "grey"
              ? options.greyImage2
              : photo === "white"
              ? options.whiteImage2
              : photo === "blue"
              ? options.blueImage2
              : options.image2
          }`}
          alt="shirt"
        />
      </div>

      <div className="options__select">
        <h2>{options.title}</h2>
        <p>${options.price}.00</p>

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
                onClick={() => dispatch(changeColor("black"))}
              ></span>
            </label>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark blue"
                onClick={() => dispatch(changeColor("blue"))}
              ></span>
            </label>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark grey"
                onClick={() => dispatch(changeColor("grey"))}
              ></span>
            </label>
            <label className="container">
              <input type="radio" name="radio" />
              <span
                className="checkmark white"
                onClick={() => dispatch(changeColor("white"))}
              ></span>
            </label>
          </div>
        </div>

        <div className="options__select--btn">
          {cartItems.some((product) => product.id === options.id) ? (
            <button
            className="options__select--btn-add"
          >
            Added to cart
          </button>
          ) : (
            <button
              onClick={() => dispatch(addToCart(options))}
              className="options__select--btn-add"
            >
              Add to cart
            </button>
          )}
        </div>

        <Tab options={options} />
      </div>
    </div>
  );
};

export default Options;
