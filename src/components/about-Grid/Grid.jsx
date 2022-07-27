import "./grid.css";

import Fade from "react-reveal/Fade";

const Grid = ({ title, text, image, imgStart }) => {
  return (
    <div
      className="grid"
      style={{ flexDirection: imgStart === "start" ? "row-reverse" : "row" }}
    >
      <div className="grid_text">
        <Fade bottom>
          <h2>{title}</h2>
          <p>{text}</p>
        </Fade>
      </div>
      <div className="grid_image">
        <img src={`/images/${image}`} alt="profile" />
      </div>
    </div>
  );
};

export default Grid;
