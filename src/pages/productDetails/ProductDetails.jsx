import './productDetails.css';
import {useParams} from 'react-router-dom';
import { Accordion, Options, Reviews } from '../../components';
import { useState } from 'react';
import { data } from '../../components/productCard/data';

const ProductDetails = () => {
  const [productData, setProductData] = useState(data);
  const { id } = useParams();

  const singleProduct = productData.find((option) => option.id.toString() === id );
  console.log(singleProduct)
  
  return (
    <div className="product-details">
      {
        singleProduct && <Options singleProduct={singleProduct}/>
      }
      <Accordion />
      <Reviews />
    </div>
  )
}

export default ProductDetails