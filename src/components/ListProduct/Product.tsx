import React, { createContext, useContext, useEffect, useState } from "react";
import YourCart from "../YourCart/YourCart";

interface PropTypeProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  describle: string;
  quantity: number;
}

export default function Product({ product }: { product: PropTypeProduct }) {
  let [stateF, setStateF] = useState<number>(0);
  // Hàm để lấy dữ liệu từ localStorage
  const getData = () => {
    const data = localStorage.getItem("Cart");
    return data ? JSON.parse(data) : [];
  };

  let [cart, setCart] = useState<PropTypeProduct[]>(getData());

  //cập nhật
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);
  let handleClick = () => {
    cart.map((e) => {
      if (e.name !== product.name) {
        setCart([...cart, product]);
        window.location.reload();
      } else {
      }
    });
  };
  return (
    // <div>
    //   <div className="media product">
    //     <div className="media-left">
    //       <a href="#">
    //         <img
    //           className="media-object"
    //           src="https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true"
    //           alt="pizza"
    //         />
    //       </a>
    //     </div>
    //     <div className="media-body">
    //       <h4 className="media-heading">Pizza</h4>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
    //         asperiores veniam repellat unde debitis quisquam magnam magni ut
    //         deleniti!
    //       </p>
    //       <span className="price"> 30 USD</span>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={product.img} alt="pizza" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.name}</h4>
          <p>{product.describle}</p>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={product.quantity}
          />
          <div>
            <a
              data-product={product.id}
              className="price"
              onClick={handleClick}
            >
              {product.price} USD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
