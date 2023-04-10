import React from "react";
import { useShoppingCart } from "../Context/shooppingCardContext";
import CartItem from "./CartItem";
export default function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      <div className="text-center font-mono text-6xl ">Cart Items</div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
