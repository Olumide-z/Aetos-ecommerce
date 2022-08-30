import React from "react";
import { useState } from "react";

import './tab.css';

const Tab = ({singleProduct}) => {
  const [toggleTab, setToggletab] = useState(1);

  const handleToggle = (index) => {
    setToggletab(index);
  };

  return (
    <>
      <div className="options__select--tab">
        <button
          className={toggleTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleToggle(1)}
        >
          Description
        </button>
        <button
          className={toggleTab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleToggle(2)}
        >
          Materials & Care
        </button>
        <button
          className={toggleTab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleToggle(3)}
        >
          Size & Fit
        </button>
      </div>
      <div className="div">
        <div>
          <div
            className={toggleTab === 1 ? "content  active-content" : "content"}
          >
            {singleProduct && <p>{singleProduct.desc}</p>}
          </div>
          <div
            className={toggleTab === 2 ? "content  active-content" : "content"}
          >
            {singleProduct && singleProduct.material.map((item) => (
              <ul key={item.id}>
                <li>{item.item}</li>
              </ul>
            ))}
          </div>
          <div
            className={toggleTab === 3 ? "content  active-content" : "content"}
          >
            {singleProduct && <p>{singleProduct.size}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
