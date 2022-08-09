import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer__logo">
        <img src="/images/logo-white.webp" alt="logo" />
      </div>

      <div className="footer__info">
        <div className="footer__info-col-1">
          <h4>Shop</h4>
          <Link className='link' to='/'><p>Shirts</p></Link>
          <Link className='link' to='/'><p>Gift Cards</p></Link>
        </div>
        <div className="footer__info-col-2">
          <h4>#augmentedessentials</h4>
          <Link className='link' to='/'><p>Our Story</p></Link>
          <Link className='link' to='/'><p>FAQ</p></Link>
          <Link className='link' to='/'><p>Refund Policy</p></Link>
          <Link className='link' to='/'><p>Terms of Service</p></Link>
          <Link className='link' to='/'><p>Privacy Policy</p></Link>
        </div>
        <div className="footer__info-col-3">
          <h4>Social</h4>
          <p>Stay current with updates from our <br /> social channels.</p>
          <div className="footer__info-col-3_socials">
            <FaInstagram className='icon'/>
            <FaFacebookSquare className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
        <div className="footer__info-col-4">
          <h4>Newsletter</h4>
          <p>Subscribe to get special offers, free <br /> giveaways, and early access new <br /> pieces.</p>
          <div className="footer__info-col-4_form">
            <input type="text" placeholder='email@newsletter.com'/>
            <button>Join</button>
          </div>
        </div>
      </div>

      <div className="footer__links">
        <Link className='link' to='/'><p>&copy;OLUMIDE ILESANMI 2022</p></Link>
        <Link className='link' to='/collections'><p>OUR STORY</p></Link>
        <Link className='link' to='/faqs'><p>FAQ</p></Link>
        <Link className='link' to='/policies/refund-policy'><p>REFUND POLICY</p></Link>
        <Link className='link' to='/policies/terms-of-service'><p>TERMS OF SERVICE</p></Link>
        <Link className='link' to='/policies/privacy-policy'><p>PRIVACY POLICY</p></Link>
      </div>

    </div>
  )
}

export default Footer