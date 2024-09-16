"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context/userContext";
import SigninAlert from "@/components/SigninAlert";
import Link from "next/link";

export default function UserDashboard() {
  const { isLogged } = useContext(UserContext);

  return (
    <>
      {!isLogged ? (
        SigninAlert
      ) : (
        <main className="min-h-screen p-8 m-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                <p className="text-gray-400 mb-4">
                  View and edit your profile information.
                </p>
                <Link href="/user-dashboard/profile">
                  <span className="text-blue-600 hover:underline">
                    Go to Profile
                  </span>
                </Link>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Orders</h2>
                <p className="text-gray-400 mb-4">
                  View your order history and status.
                </p>
                <Link href="/user-dashboard/orders">
                  <span className="text-blue-600 hover:underline">
                    View Orders
                  </span>
                </Link>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Cart</h2>
                <p className="text-gray-400 mb-4">
                  Manage your products in the cart.
                </p>
                <Link href="/cart">
                  <span className="text-blue-600 hover:underline">
                    Cart Products
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
