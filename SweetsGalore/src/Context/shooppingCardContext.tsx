import React, { createContext, useContext, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { id, quantity: 1 }];
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      } else {
        return currItems;
      }
    });
  }

  function removeCartItem(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  const contextValue: ShoppingCartContextType = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartItem,
    cartQuantity,
    openCart,
    closeCart,
    cartItems,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
