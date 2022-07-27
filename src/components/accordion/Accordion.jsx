import { useState, useEffect } from "react";
import { accordionData } from "./data";
import "./accordion.css";

import {FiChevronRight} from 'react-icons/fi';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  

  const toggleAccordion = index => {
    if(clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }
  
  return (
    <div className="accordion">
      {
        accordionData.map((item, index) => (
          <div key={item.id} className='accordion__container'>

            <div className='accordion__button-wrapper' onClick={() => toggleAccordion(index)}>
                <p>{item.title}</p>
                {/* <span>{clicked === index ? '-' : '+'}</span> */}
                <FiChevronRight className={clicked === index ? `accordion__icon rotate` : `accordion__icon`}/>
            </div>

            <div className={clicked === index ? `accordion__content show` : `accordion__content`}>
                {item.content && <p>{item.content}</p> }
                <div className="accordion__subContent">
                  {item.subContent && (
                    item.subContent.map((subItem) => (
                      <div key={subItem.id} className='accordion__subContent--items'>
                        <div>
                          <h4>{subItem.name}</h4>
                          <p>{subItem.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
            </div>

          </div>
        ))
      }
    </div>
  );
};

export default Accordion;
