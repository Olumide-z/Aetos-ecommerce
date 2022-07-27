import { useState } from "react";
import "./scroll.css";
import { MdKeyboardArrowUp } from "react-icons/md";

const Scroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    // console.log(window.pageXOffset);
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className={isScrolled ? "scroll" : "scroll scrolled"}>
      <div className="scroll__icon" onClick={handleClick}>
        <MdKeyboardArrowUp />
      </div>
    </div>
  );
};

export default Scroll;
