import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ShowCounter from './component/Count/Count';
import Login from './component/Login/login';
import ResetPassword from './component/ResetPassword/ResetPassword'
import ListOfProducts from './component/ProductsList/list';
import  NavScrollExample from './component/Navbar/Navbar';
import  { CartProvider } from './component/ProductsList/CartContext';
import { ProductCart } from './component/ProductsList/cart';
import Home from './component/home/home';
import Clock from './component/Clock/Clock';
import UnitConverter from './component/Converter/Convert';

function App() {
  return (
    <div className="App">
      
  <NavScrollExample/>
  <Clock/>
      <Router>
        <CartProvider>
        <Routes>   
          <Route path='/' element={<Home/>} />
        <Route path='/CharCounter' element={<ShowCounter/>}/>
          <Route path='/login' element={<Login/>}/>
<Route path='/ResetPassword' element={<ResetPassword/>}/>
        <Route path='/ListProducts' element={<ListOfProducts/>}/>
        <Route path='/Cart' element={<ProductCart/>}/>
        <Route path='/Converter' element={<UnitConverter/>}/>
        </Routes>
        </CartProvider>
      </Router>   
    </div>
  );
}

export default App;
