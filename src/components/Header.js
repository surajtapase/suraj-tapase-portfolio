import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white text-center">
      <h1 className="text-4xl font-bold">SURAJ TAPASE</h1>
      <nav className="mt-4">
        <ul className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 space-y-2 sm:space-y-0">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
