import React from "react"
import './App.css';
import Furniture from "./components/Furniture";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Electronics from "./components/Electronics";
import DeviceContext from "./context/DeviceContext";

function App() {
  return (
    <div >
      <>
      <Furniture/>
      <Login/>
      <Signup/>
      <Cart/>
      <DeviceContext/>
      </>
      
    </div>
  );
}

export default App;
