import React, { useEffect } from 'react';
import './App.css';
import { Home, About, Contact, Journal, Lookbook, Shop, BlogDetails, ProductDetails, Privacy, Refund, Terms, Faq } from './pages';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Announcement, Footer, Navbar, Scroll } from './components';

import { calculateTotal } from './features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])
  
  return (
    <Router>
    <div className="App">
      <Announcement />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/lookbook' element={<Lookbook />} />
        <Route path='/journal/:id' element={<BlogDetails />} />
        <Route path='/collection/:id' element={<ProductDetails />} />
        <Route path='/policies/privacy-policy' element={<Privacy />} />
        <Route path='/policies/refund-policy' element={<Refund />} />
        <Route path='/policies/terms-of-service' element={<Terms />} />
        <Route path='/faqs' element={<Faq />} />
      </Routes>
      <Footer />
      <Scroll />
    </div>
    </Router>
  );
}

export default App;
