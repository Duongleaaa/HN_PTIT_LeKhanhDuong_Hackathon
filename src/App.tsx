import React from "react";

//đã setup tailwin.
import "./Css/bootstrap.min.css";
import "./Css/style.css";
import ListProduct from "./components/ListProduct/ListProduct";
import YourCart from "./components/YourCart/YourCart";
export default function App() {
  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <ListProduct></ListProduct>
          <YourCart></YourCart>
        </div>
      </div>
    </div>
  );
}
