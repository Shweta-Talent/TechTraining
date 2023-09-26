import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ShowCounter from "./component/Count/Count";
import Login from "./component/Login/login";
import ResetPassword from "./component/ResetPassword/ResetPassword";
import ListOfProducts from "./component/ProductsList/list";
import NavScrollExample from "./component/Navbar/Navbar";
import { CartProvider } from "./component/ProductsList/CartContext";
import { ProductCart } from "./component/ProductsList/cart";
import Home from "./component/home/home";
import Clock from "./component/Clock/Clock";
import UnitConverter from "./component/Converter/Convert";
import { AuthFunction } from "./component/validate/isAuth";
import { UnAuthorized } from "./component/validate/unauthorized";
import IsLogin from "./component/validate/isLogin";
import Blog from "./component/Blog/BLog";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Clock />
      <Router>
        <AuthFunction>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CharCounter" element={<ShowCounter />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/Cart"
                element={
                  <IsLogin>
                    <ProductCart />
                  </IsLogin>
                }
              />
              <Route
                path="/ListProducts"
                element={
                  <IsLogin>
                    <ListOfProducts />
                  </IsLogin>
                }
              />
               <Route
                path="/Blog"
                element={
                  <IsLogin>
                    <Blog />
                  </IsLogin>
                }
              />

              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route path="/Converter" element={<UnitConverter />} />
              <Route path="/Unauthorized" element={<UnAuthorized />} />
            </Routes>
          </CartProvider>
        </AuthFunction>
      </Router>
    </div>
  );
}

export default App;
