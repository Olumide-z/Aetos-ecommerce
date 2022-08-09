import './hero-section.css';
import { BiRightArrow } from "react-icons/bi";

import 'animate.css';
import Fade from "react-reveal/Fade";

const HeroSection = ({ bgImage, title, text, big, button, overlay }) => {
  return (
    <div className="hero" style={{ height: `${big ? '85vh' : '55vh'}` }}>
      <div className="hero__background" style={{ backgroundImage: `url('/images/${bgImage}')`}}></div>
      <div className="hero__text">
      <Fade bottom>
        <h1>{title}</h1>
        <p>{text}</p>
        <button style={{ display: `${!button && 'none'}`}}><BiRightArrow /></button>
      </Fade>
      </div>
      <div className="hero__image-overlay" style={{ display: `${overlay ? 'block' : 'none'}`}}></div>
    </div>
  )
}

export default HeroSection