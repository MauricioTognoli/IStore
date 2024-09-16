"use client";
import Image from "next/image";
import { IProductCardProps } from "@/interfaces/interfaces";

export default function CartItem({ product, remove }: IProductCardProps) {
  return (
    <div className="flex w-full border border-blue-600 my-4 p-4 font-bold justify-between items-center rounded-lg shadow-md">
      <div className="w-1/3 flex items-center">
        <Image
          className="h-32 w-auto mr-6"
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
        />
        <span className="ml-3 text-lg">{product.name}</span>
      </div>
      <div className="w-1/3 text-center text-lg">${product.price.toFixed(2)}</div>
      <div className="w-1/3 text-center">
        <button
          type="button"
          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline focus:outline-none"
          onClick={remove}
        >
          <svg
            className="me-1.5 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
}
