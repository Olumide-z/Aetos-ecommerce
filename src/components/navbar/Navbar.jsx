import "./navbar.css";
import { useState } from "react";
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
  const { cartOpen } = useSelector((store) => store.cart)

  const [toggleMenu, setToggleMenu] = useState(false);


  const handleClick = () => setToggleMenu(!toggleMenu);
  

  return (
    <div className="navbar">
      <div className="navbar__nav">

        <div className="navbar__menubar" onClick={handleClick}>
          <div className="navbar__menubar-icons">
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
          <BsCartFill className="icons cartIcon" onClick={() => dispatch(openCart())}/>
        </div>
      </div>

      <div className="navbar__cart">
          <div className={cartOpen ? 'navbar__cart-container cart__active' : 'navbar__cart-container'}>
            <Cart />
          </div>
      </div>

      <div className={toggleMenu ? "navbar__menu active" : "navbar__menu"}>
        <div className="navbar__menu-links">
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
