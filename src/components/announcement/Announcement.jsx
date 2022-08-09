// import { Link } from 'react-router-dom';
import './announcement.css';
import Marquee from 'react-fast-marquee';

import { Link } from 'react-router-dom';

const Announcement = () => {
  return (
    <div className="announcement">
      <Marquee pauseOnHover speed={60} gradient={false}>
     <div className="announcement__text text__1">
      <span>Spend $110 or more for free US shipping</span>
      <span>365 day risk-free guarantee. <Link to='/collections' className='announcement__link'>shop Now</Link></span>
     </div>
     <div className="announcement__text text__2">
      <span>Spend $110 or more for free US shipping</span>
      <span>365 day risk-free guarantee. <Link to='/collections' className='announcement__link'>shop Now</Link></span>
     </div>
     </Marquee>
    </div>
  )
}

export default Announcement