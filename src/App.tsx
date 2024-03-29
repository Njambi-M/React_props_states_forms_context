import React from "react"
import './App.css';
import Furniture from "./components/Furniture";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div >
      <>
      <Furniture/>
      <Login/>
      <Signup/>
      <Cart/>
      </>
      
    </div>
  );
}

export default App;
