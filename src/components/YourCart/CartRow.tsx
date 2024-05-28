import React from "react";

interface PropTypeProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  describle: string;
  quantity: number;
}

interface CartRowProps {
  product: PropTypeProduct;
  index: number;
}

export default function CartRow({ product, index }: CartRowProps) {
  return (
    <>
      <th scope="row">{index}</th>
      <td>{product.name}</td>
      <td>{product.price} USD</td>
      <td>
        <input
          name={`cart-item-quantity-${product.id}`}
          type="number"
          defaultValue={product.quantity}
        />
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          data-product={product.id}
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          data-product={product.id}
        >
          Delete
        </a>
      </td>
    </>
  );
}
