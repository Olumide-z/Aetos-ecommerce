import "./header.css";
import Fade  from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <video src='/videos/Header_video.mp4' autoPlay muted playsInline loop />
      <div className="header__title">
        <Fade bottom>
        <h2 className="header__title-heading">Core Collection</h2>
        <p className="header__title-text">Designed for the Modern Man</p>
        <Link to='/collections'><button className="header__title-button">SHOP NOW</button></Link>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
