import React from 'react';
import './App.css';
import { Home, About, Contact, Journal, Lookbook, Shop, BlogDetails, ProductDetails } from './pages';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Announcement, Footer, Navbar, Scroll } from './components';


function App() {
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
      </Routes>
      <Footer />
      <Scroll />
    </div>
    </Router>
  );
}

export default App;
