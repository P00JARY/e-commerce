import React from "react";
import storeitems from "../data/items.json";
import { useShoppingCart } from "../Context/shooppingCardContext";
import { formatcurrency } from "../utilities/formatCurrency";

type cardProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: cardProps) {
  const { removeCartItem } = useShoppingCart();
  const item = storeitems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <div className="flex my-5">
      <img className="w-52 h-52" src={item.imgURL} />
      <div className="ml-3 ">
        <div className="flex">
          <h1 className="text-3xl text-red-600 font-mono">Item : </h1>
          <div className="ml-2 text-2xl"> {item.name}</div>
        </div>
        <div className="flex">
          <h1 className="text-3xl text-red-600 font-mono">Price : </h1>
          <div className="ml-2 text-2xl"> {formatcurrency(item.price)}</div>
        </div>
        <div className="flex">
          <h1 className="text-3xl text-red-600 font-mono">Quantity : </h1>
          <div className="ml-2 text-2xl"> {quantity}</div>
        </div>
      </div>
    </div>
  );
}
