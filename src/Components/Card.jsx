import React from 'react';

const Card = ({ product,addToCart }) => {
    return (
        
            <div className="relative m-10 flex w-[250px] h-[500px] max-w-xs justify-between flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md cursor-pointer">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl  justify-center hover:opacity-20" onClick={()=>addToCart(product)}>
                    <img className="object-cover" src={product.image} alt="product image" />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                        </p>
                        <div className="flex items-center">
                            <div>{product.rating.rate}</div>
                            
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                        </div>
                    </div>
                    <a onClick={()=>addToCart(product)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart</a>
                </div>
            </div>
        
    );
};

export default Card;