'use client';

import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import SigninAlert from "../SigninAlert";

export default function OrderList() {
  const { getOrders, orders, isLogged } = useContext(UserContext);

  useEffect(() => {
    if (isLogged) {
      getOrders();
    }
  }, []);

  return (
    <div className="mt-28">
      {!isLogged ? (
        <SigninAlert />
      ) : (
        <div>
          <h1 className="font-extrabold text-center text-4xl">Your Orders</h1>
          {orders.length > 0 ? (
            orders.map((order) => {
              const dateOrder = new Date(order.date);
              const date = dateOrder.toLocaleDateString(); 
              return (
                <div
                  className="py-10 flex justify-around rounded-lg border m-5 mt-10 border-blue-700"
                  key={order.id}
                >
                  <h1>Order</h1>
                  <ul>
                    <li>{date}</li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div className="mt-5 text-center">You have no orders.</div>
          )}
        </div>
      )}
    </div>
  );
}
