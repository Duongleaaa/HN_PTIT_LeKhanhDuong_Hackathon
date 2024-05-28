import React, { createContext, useEffect, useState } from "react";
import Product from "./Product";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  describle: string;
  quantity: number;
}

export default function ListProduct() {
  // Hàm để lấy dữ liệu từ localStorage
  const getData = () => {
    const data = localStorage.getItem("ProductList");
    return data ? JSON.parse(data) : [];
  };
  //mảng products
  let [products, setProduct] = useState<Product[]>(
    // [
    //   {
    //     id: Math.ceil(Math.random() * 12345),
    //     name: "Pizza",
    //     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
    //     price: 30,
    //     describle:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    //     quantity: 3,
    //   },
    //   {
    //     id: Math.ceil(Math.random() * 12345),
    //     name: "Bread",
    //     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true",
    //     price: 10,
    //     describle:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    //     quantity: 3,
    //   },
    //   {
    //     id: Math.ceil(Math.random() * 12345),
    //     name: "Cake",
    //     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true",
    //     price: 20,
    //     describle:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    //     quantity: 3,
    //   },
    //   {
    //     id: Math.ceil(Math.random() * 12345),
    //     name: "Hamburger",
    //     img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true",
    //     price: 15,
    //     describle:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    //     quantity: 3,
    //   },
    // ]
    getData()
  );
  //cập nhật

  useEffect(() => {
    localStorage.setItem("ProductList", JSON.stringify(products));
  }, [products]);
  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {products.map((product: Product) => {
              return (
                <div key={product.id}>
                  <Product product={product}></Product>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
