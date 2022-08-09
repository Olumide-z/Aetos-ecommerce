import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { openCart } from "../../features/cartSlice";

import {
  FaSearch,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler =  (e) => {
      if(!domNode.current?.contains(e.target)){
        handler();
      }
    }
    document.addEventListener('mousedown', maybeHandler);

    return() => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  }, [])

}


const Menu = () => {
  return (
    <>
      <Link to="/collections" className="navbar__link">
        <p>Shop</p>
      </Link>
      <Link to="/about" className="navbar__link">
        <p>About</p>
      </Link>
      <Link to="/lookbook" className="navbar__link">
        <p>Lookbook</p>
      </Link>
      <Link to="/journal" className="navbar__link">
        <p>Journal</p>
      </Link>
      <Link to="/contact" className="navbar__link">
        <p>Contact</p>
      </Link>
    </>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartOpen, itemsNumber } = useSelector((store) => store.cart)
  
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => setToggleMenu(!toggleMenu);

  let domNode = useClickOutside(() => {
    setToggleMenu(false)
  })

  return (
    <div className="navbar">
      <div className="navbar__nav" ref={domNode}>

        <div className="navbar__menubar">
          <div className="navbar__menubar-icons" onClick={handleClick}>
            <div className={toggleMenu && "line1"}></div>
            <div className={toggleMenu && "line2"}></div>
            <div className={toggleMenu && "line3"}></div>
          </div>
          <FaSearch className="icons" />
        </div>

        <div className="navbar__logo">
          <Link to="/">
            <img src='/images/logo.webp' alt="logo" />
          </Link>
        </div>

        <div className="navbar__links">
          <Menu />
        </div>

        <div className="navbar__icons">
          <FaSearch className="icons search" />
          <div className="navbar__icons--cart" onClick={() => dispatch(openCart())}>
            <BsCartFill className="icons cartIcon"/>
            {itemsNumber > 0 ? <p>{itemsNumber}</p> : null}
          </div>
        </div>
      </div>

      <div className="navbar__cart">
          <div className={cartOpen ? 'navbar__cart-container cart__active' : 'navbar__cart-container'}>
            <Cart />
          </div>
      </div>

      <div className={toggleMenu ? "navbar__menu active" : "navbar__menu"}>
        <div className="navbar__menu-links">
          <Link to="/" className="navbar__link">
            <p>Home</p>
          </Link>
          <Menu />
        </div>

        <div className="navbar__menu-contact">
          <a href="#" className="navbar__menu-contact_icons">
            <FaInstagram />
          </a>
          <a href="#" className="navbar__menu-contact_icons">
            <FaFacebookSquare />
          </a>
          <a href="#" className="navbar__menu-contact_icons">
            <FaYoutube />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
