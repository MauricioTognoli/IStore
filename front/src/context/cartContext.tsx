'use client';
import { IProduct, ICartContextType } from "@/interfaces/interfaces";
import { fetchProductsById } from "@/lib/server/fetchProducts";
import { checkout } from "@/lib/server/fetchUsers";
import { createContext, useEffect, useState } from "react";

const addItem = async (
  cartItem: IProduct[],
  productId: number
): Promise<IProduct[]> => {
  if (cartItem.some((item) => item.id === productId)) {
    return cartItem;
  }

  const data = await fetchProductsById(productId.toString());
  return [...cartItem, data];
};

const removeItems = (cartItems: IProduct[], productId: number) => {
  return cartItems.filter((item) => item.id !== productId);
};

export const CartContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: async () => {},
  removeFormatCart: () => {},
  total: 0,
  proceedToCheckout: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = async (productId: number) => {
    const updatedCart = await addItem(cartItems, productId);
    setCartItems(updatedCart);
  };

  const removeFormatCart = (productId: number) => {
    setCartItems(removeItems(cartItems, productId));
  };

  const proceedToCheckout = () => {
    checkout(cartItems);
    setCartItems([]);
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFormatCart,
        total,
        proceedToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

