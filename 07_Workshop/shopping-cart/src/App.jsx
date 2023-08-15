import React from "react";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <ToastContainer />
    </div>
  );
}

export default App;
