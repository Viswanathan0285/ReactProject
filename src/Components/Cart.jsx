import React from 'react';

const Cart = ({cart, closeCart, removeFromCart, totalprice}) => {
    
             return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div>Total Purchase Amount : <span className=" font-bold text-xl ">${totalprice.toFixed(2)} </span> </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4 flex justify-between">
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-black text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={closeCart}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;