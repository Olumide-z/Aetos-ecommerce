import "./shop.css";
import { HeroSection, Product } from "../../components";

const Shop = () => {
  return (
    <div className="shop">
      <HeroSection bgImage="bg-hero.webp" title="Core Collection" />
      <div className="shop__image-overlay"></div>
      <div className="shop__collections">
        <Product />
      </div>
    </div>
  );
};

export default Shop;
