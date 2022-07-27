import "./lookbook.css";
import { HeroSection, ImageGrid } from "../../components";


const Lookbook = () => {
  return (
    <div className="lookbook">
      <HeroSection
        bgImage="lookbook.webp"
        title="Core Collection 2022"
        text="LOOKBOOK"
        big={true}
        button={true}
      />
      <div className="lookbook__image-overlay"></div>

      <div className="lookbook__image-grid">
          <ImageGrid img1='1.webp' img2='2.webp'/>
          <div className="lookbook__image-grid-col">
            <div className="lookbook__image-grid_wrapper">
            <img src="/images/lookbook.webp" alt='grid' />
            </div>
          </div>
          <ImageGrid img1='3.webp' img2='4.webp'/>
          <ImageGrid img1='5.webp' img2='6.webp'/>
      </div>

    </div>
  );
};

export default Lookbook;
