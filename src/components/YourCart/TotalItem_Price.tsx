import React, { useState } from "react";

interface Props {
  cartLen: number;
}
export default function TotalItem_Price(props: Props) {
  let [lenCart, setLenCart] = useState<number>(props.cartLen);

  return (
    <tr>
      <td colSpan={4}>
        There are <b>{lenCart}</b> items in your shopping cart.
      </td>
      <td colSpan={2} className="total-price text-left">
        630 USD
      </td>
    </tr>
  );
}
