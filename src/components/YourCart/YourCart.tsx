import React, { useContext, useEffect, useState } from "react";
import CartRow from "./CartRow";
import TotalItem_Price from "./TotalItem_Price";
import AlertAdd from "./AlertAdd";
interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  describle: string;
  quantity: number;
}

export default function YourCart() {
  let [render, setRender] = useState<number>(0);

  let getData = () => {
    const data = localStorage.getItem("Cart");
    return data ? JSON.parse(data) : [];
  };
  let [cartProduct, setCartProduct] = useState<Product[]>(getData());
  console.log(cartProduct);

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {cartProduct.map((product: Product, index: number) => {
                  return (
                    <tr key={product.id}>
                      <CartRow product={product} index={index + 1}></CartRow>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot id="my-cart-footer">
                <TotalItem_Price cartLen={cartProduct.length}></TotalItem_Price>
              </tfoot>
            </table>
          </div>
        </div>
        {/* <AlertAdd></AlertAdd> */}
      </div>
    </div>
  );
}
