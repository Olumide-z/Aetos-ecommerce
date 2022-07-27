import './productDetails.css';
import {useParams} from 'react-router-dom';
import { Accordion, Reviews } from '../../components';

const ProductDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="product-details">
      <Accordion />
      <Reviews />
    </div>
  )
}

export default ProductDetails