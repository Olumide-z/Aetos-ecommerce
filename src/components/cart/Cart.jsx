import "./cart.css";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { closeCart, removeFromCart, increase, decrease } from "../../features/cartSlice";
import { useEffect } from "react";


const Cart = () => {
  const { cartItems, subTotal } = useSelector((store) => store.cart);
  const { photo } = useSelector((store) => store.color);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div className="cart">

      <div className="cart__title">
        <h4>CART</h4>
        <MdOutlineClose
          className="cart__title-icon"
          onClick={() => dispatch(closeCart())}
        />
      </div>

      {cartItems.length > 0 ? (
      <>
      <div className="cart__items-container">
        {cartItems.map((item) => (
          <div className="cart__items-wrap">
            <div className="cart__items">

              <div className="cart__items--image">
                <img
                  src={`${
                    photo === "black"
                      ? item.blackImage1
                      : photo === "grey"
                      ? item.greyImage1
                      : photo === "white"
                      ? item.whiteImage1
                      : photo === "blue"
                      ? item.blueImage1
                      : item.image1
                  }`}
                  alt={item.title}
                />
              </div>

              <div className="cart__items--info">
                <h3>{item.title}</h3>
                <p>Size:</p>
                <p>Color:</p>
                <h5>${item.price}.00</h5>
                <div className="cart__items--info-btns">
                  <button
                    onClick={() => {
                      if(item.amount === 1){
                        dispatch(removeFromCart(item.id))
                      }else{
                        dispatch(decrease(item.id))
                      }
                    }}
                  ><AiOutlineMinus /></button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => dispatch(increase(item.id))}
                  ><AiOutlinePlus /></button>
                </div>
              </div>

              <div className="cart__items--remove" onClick={() => dispatch(removeFromCart(item.id))}>
                <p><MdOutlineClose /></p>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="cart__footer">
          <div className="cart__footer-total">
            <p>SUBTOTAL</p>
            <h3>${subTotal}.00</h3>
          </div>
          <p className="cart__footer-text">Shipping, taxes, and discount codes are calculated at checkout</p>
          <button>Check out</button>
      </div>
      </>
      ): (
        <div className="cart__empty">
          <p>Your cart is currently empty.</p>
        </div>
      )}

    </div>
  );
};

export default Cart;
