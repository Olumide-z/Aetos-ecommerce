import './cart.css';
import {MdOutlineClose} from 'react-icons/md'

import { useDispatch } from 'react-redux';
import { closeCart } from '../../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  return (
   <div className="cart">
    <div className="cart__title">
        <h4>CART</h4>
        <MdOutlineClose className='cart__title-icon' onClick={() => dispatch((closeCart()))}/>
    </div>
        
   </div>
  )
}

export default Cart