'use client'
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function Footer() {
  const { isLogged, logOut } = useContext(UserContext);

  return (
    <footer className="bg-neutral-800 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <h1 className="mb-2 text-2xl font-bold leading-none tracking-tight text-white md:text-2xl lg:text-4xl">
              Istore
            </h1>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <Link href="/home" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            {isLogged && (
              <>
                <li>
                  <Link href="/cart" className="hover:underline me-4 md:me-6">Cart</Link>
                </li>
                <li>
                  <Link href="/user-dashboard" className="hover:underline me-4 md:me-6">Dashboard</Link>
                </li>
                <li>
                  <button onClick={logOut} className="hover:underline me-4 md:me-6">Log Out</button> 
                </li>
              </>
            )}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024 <Link href="/home" className="hover:underline">Istore™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

