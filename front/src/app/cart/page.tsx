"use client";

import CartComponent from "@/components/CartComponent";

const Cart: React.FC = () => {
  return (
    <div className="mt-24 m-10 min-h-[90vh] flex items-center flex-col text-center">
      <CartComponent />
    </div>
  );
};

export default Cart;