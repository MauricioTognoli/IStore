"use client";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartItem from "../CartItem";
import { IProduct } from "@/interfaces/interfaces";
import { UserContext } from "@/context/userContext";
import SigninAlert from "../SigninAlert";

export default function CartComponent() {
  const { cartItems, removeFormatCart, total, proceedToCheckout } = useContext(CartContext);
  const { isLogged } = useContext(UserContext);

  return (
    <div className="flex flex-col text-center justify-between w-full">
      {isLogged ? (
        <>
          <div className="w-full py-10 flex justify-around border-b border-blue-700">
            <div className="capitalize font-extrabold text-2xl ">
              <span>Product</span>
            </div>
            <div className="w-[8%] font-extrabold capitalize text-2xl">
              <span>Price</span>
            </div>
            <div className="w-[8%] font-extrabold capitalize text-2xl">
              <span>Remove</span>
            </div>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item: IProduct) => (
              <div key={item.id}>
                <CartItem product={item} remove={() => removeFormatCart(item.id)}/>
              </div>
            ))
          ) : (
            <div className="mt-5">Your cart is empty</div>
          )}

          {total > 0 && (
            <div>
              <div className="flex items-center justify-between gap-4 border-t border-blue-700 pt-2">
                <h2 className="text-lg font-bold">Total</h2>
                <p className="text-lg font-bold">${total}</p>
              </div>
              <button
                type="button"
                onClick={proceedToCheckout}
                className="mt-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Place Order
              </button>
            </div>
          )}
        </>
      ) : (
        <SigninAlert />
      )}
    </div>
  );
}
