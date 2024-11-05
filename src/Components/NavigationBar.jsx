import React from 'react';

const NavigationBar = ({cartCount,openCart}) => {
    return (
        <div>
            <nav
  className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-[80px] py-[10px]">
    <div className='font-bold text-xl'>
        E-Commerce Project
    </div>
    <div className="relative flex items-center cursor-pointer" onClick={openCart}>
      <span className="ms-3 rounded-[50%] relative left-[70px] top-[-20px] bg-black px-[0.85em] py-[0.6em] text-[1 rem] font-bold leading-none text-white" >{cartCount}</span>
      {/* <!-- Cart Icon --> */}
      <a
        className=" flex   ms-1 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
        href="#">
        <span className="[&>svg]:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path
              d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </span>
      </a>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavigationBar;