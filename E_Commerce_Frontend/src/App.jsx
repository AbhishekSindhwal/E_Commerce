import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import React from "react";
import { BrowserRouter as Router, Routes , Route , Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AllProducts from "./pages/AllProducts";

const App = () => {
  const user=useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:categories' element={<ProductList/>} />
       {/*   <Route path='/products/' element={<ProductList/>} /> */}
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/products' element={<AllProducts/>} />
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />
        <Route path='/register' element={user ? <Navigate to="/" /> : <Register/>} />
      </Routes>
    </Router>
  )
};

export default App;