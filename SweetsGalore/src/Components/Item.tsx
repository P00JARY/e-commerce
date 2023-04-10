import React from "react";
import { formatcurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../Context/shooppingCardContext";
type itemProps = {
  id: number;
  name: string;
  imgURL: string;
  price: number;
};

export default function Item({ id, name, imgURL, price }: itemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartItem,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="max-w-sm  shadow-2xl mt-3 py-2 px-2 rounded-xl">
      <img className="w-full h-72" src={imgURL} alt={name} />
      <div className=" w-full px-6">
        <span className="ms-2 font-bold font-mono">Item : {name}</span>
        <span className="float-right font-thin   ">
          {formatcurrency(price)}
        </span>
      </div>
      <div className="w-full flex justify-center">
        {quantity === 0 ? (
          <button
            className="bg-blue-600  mt-2 text-white py-2 px-2 justify-center rounded-lg"
            onClick={() => {
              increaseCartQuantity(id);
            }}
          >
            + Add To Cart
          </button>
        ) : (
          <div className=" mt-2">
            <div className="flex space-x-3">
              <button
                className="px-4 text-2xl  bg-blue-500 rounded-lg"
                onClick={() => {
                  decreaseCartQuantity(id);
                }}
              >
                -
              </button>
              <div>
                <span className="font-mono  text-2xl  font-bold mx-1">
                  {quantity}
                </span>
                in Cart
              </div>
              <button
                className="px-4 text-2xl  bg-blue-500 rounded-lg"
                onClick={() => {
                  increaseCartQuantity(id);
                }}
              >
                +
              </button>
            </div>
            <div className="w-full justify-center items-center flex">
              <button
                className="rounded-lg bg-red-500 py-1 px-1"
                onClick={() => {
                  removeCartItem(id);
                }}
              >
                remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
