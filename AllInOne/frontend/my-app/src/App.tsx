import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ShowCounter from './component/Count';
import Login from './component/login';
import ResetPassword from './component/ResetPassword'
import ListOfProducts from './component/list';
import  NavScrollExample from './component/Navbar';
import  { CartProvider } from './component/CartContext';
import { ProductCart } from './component/cart';

function App() {
  return (
    <div className="App">
      
  <NavScrollExample/>
      <Router>
        <CartProvider>
        <Routes>   
        <Route path='/CharCounter' element={<ShowCounter/>}/>
          <Route path='/login' element={<Login/>}/>
<Route path='/ResetPassword' element={<ResetPassword/>}/>
        <Route path='/ListProducts' element={<ListOfProducts/>}/>
        <Route path='/Cart' element={<ProductCart/>}/>
        </Routes>
        </CartProvider>
      </Router>   
    </div>
  );
}

export default App;
