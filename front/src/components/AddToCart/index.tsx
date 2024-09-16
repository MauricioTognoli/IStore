'use client';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '@/context/cartContext';
import { UserContext } from '@/context/userContext';

export default function AddToCart({ id }: { id: number }) {
  const { addToCart, cartItems } = useContext(CartContext);
  const { isLogged } = useContext(UserContext);
  const [showMessage, setShowMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // Verifica si el producto ya está en el carrito
  useEffect(() => {
    setIsDisabled(cartItems.some(item => item.id === id));
  }, [cartItems, id]);

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (!isLogged) {
      
      alert('You must be logged in to add items to the cart.');
      return;
    }
    if (isDisabled) return; 
    await addToCart(id);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={!isLogged || isDisabled}
        className={`text-neutral-800 mt-5 ${!isLogged ? 'bg-gray-400 cursor-not-allowed' : (isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800')} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        {!isLogged ? 'Log in to Add' : (isDisabled ? 'Already in Cart' : 'Add To Cart')}
      </button>
      {showMessage && (
        <div className="mt-3 text-green-700 bg-green-100 border border-green-400 rounded-lg px-4 py-3">
          Product added to cart!
        </div>
      )}
    </div>
  );
}
