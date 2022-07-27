import { Header, Newsletter, Product } from "../../components";
import "./home.css";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <Header />

      <div className="home__heading">
        <Fade bottom>
          <p className="home__heading-text">
            Perfected essentials that serve as the foundation to every <br />{" "}
            man's wardrobe.
          </p>
        </Fade>
      </div>

      <div className="home__products">
        <Product />
      </div>

      <div className="home__collection">
        <div className="home__collection-image image1">
          <img src="/images/henley.webp" alt="henley" />
          <div className="home__collection-image-text">
            <h2>Henleys</h2>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="home__collection-image image2">
          <img src="/images/t-shirt.webp" alt="shirt" />
          <div className="home__collection-image-text">
            <h2>T-Shirts</h2>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div className="home__heading-2">
        <Fade bottom>
          <h2>
            Augmented Essentials: The Next Evolution of <br /> Men's Clothing
          </h2>
          <p>It's time to transform the way we think about men's essentials.</p>
        </Fade>
      </div>

      <div className="home__pictures">
        <Slider {...settings}>
          <div className="home__pictures-picture">
            <Pulse>
              <img src="/images/side-seam.webp" alt="product" />
            </Pulse>
            <h3>Physique Complimenting Seam</h3>
            <p>
              What sets us apart. We believe this subtle touch helps accentuate
              the male physique.
            </p>
          </div>
          <div className="home__pictures-picture">
            <Pulse>
              <img src="/images/asf-fabric.webp" alt="product" />
            </Pulse>
            <h3>ASF Fabric</h3>
            <p>
              Our custom modal, spandex, cotton blend. Buttery soft. You'll
              never want to take it off.
            </p>
          </div>
          <div className="home__pictures-picture">
            <Pulse>
              <img src="/images/ellipse-hem.webp" alt="product" />
            </Pulse>
            <h3>Ellipse Hem</h3>
            <p>
              Modern, functional fit. Suitable for all activities. Who wears
              deep scoop cuts anymore?
            </p>
          </div>
        </Slider>
      </div>

      <div className="home__look">
        <h6 className="home__look-heading">SHOP THE LOOK</h6>
        <div className="home__look-image">
          <img src="/images/double.webp" alt="double" />
        </div>
        <div className="home__look-image-2">
          <h6>SHOP THE LOOK</h6>
          <p>hi</p>
        </div>
      </div>

      <div className="home__newsletter">
        <Fade bottom>
          <Newsletter />
        </Fade>
      </div>

     
    </div>
  );
};

export default Home;
