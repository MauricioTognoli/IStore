'use client';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { UserContext } from '@/context/userContext';

export default function Navbar() {
  const { isLogged, logOut } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-neutral-800 fixed h-20 w-full z-20 top-0 start-0 border-b border-blue-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="mb-2 text-2xl font-bold leading-none tracking-tight text-white md:text-2xl lg:text-4xl">Istore</h1>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={logOut}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
            Log Out
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto bg-neutral-800 md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/home"
                className="block py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="block py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Cart
              </Link>
            </li>
            <li>
              {isLogged ? (
                <Link
                  href="/user-dashboard"
                  className="block py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/auth-page/signin"
                  className="block py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Log in
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
