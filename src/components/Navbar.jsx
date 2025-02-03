import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  function DarkModeHandle(){
    let custom_html = document.documentElement
    console.log(custom_html);
    custom_html.classList.toggle('dark')
  }
  return (
    <header className="text-gray-600 body-font bg-[#141414] dark:bg-gray-600">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="https://img.icons8.com/?size=100&id=8663&format=png&color=FFFFFF"className="w-8" alt="" />
        <span className="ml-3 text-xl">The Home of Football</span>
      </a>
      <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap gap-4 items-center text-base justify-center">
      <Link  className="text-white hover:text-cyan-600 duration-300 " to="/">Players</Link>
      <Link className="text-white hover:text-cyan-600 duration-300" to="/clubs">Trophies </Link>

      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={DarkModeHandle}>
        Light/Dark
      </button>
      <button className="ms-3 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  );
}

export default Navbar;
