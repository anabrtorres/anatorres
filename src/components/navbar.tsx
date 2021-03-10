import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-900 fixed t-0 l-0 flex w-full justify-between py-4 px-20">
        <img src="logo/logo.svg" alt="Logo" className="h-10 w-10" />
        <div className="flex justify-between items-center ">
          <a
            href="/"
            className="group ml-10 flex flex-col items-center hover:text-blue-550 duration-300"
          >
            Home
            <div className="opacity-0 w-10 mt-8 absolute border-b-2 border-blue-550 group-hover:opacity-100 duration-500" />
          </a>
          <a
            href="/"
            className="group ml-10 flex flex-col items-center hover:text-blue-550 duration-300"
          >
            Work
            <div className="opacity-0 w-10 mt-8 absolute border-b-2 border-blue-550 group-hover:opacity-100 duration-500" />
          </a>
          <a
            href="/"
            className="group ml-10 flex flex-col items-center hover:text-blue-550 duration-300"
          >
            About
            <div className="opacity-0 w-10 mt-8 absolute border-b-2 border-blue-550 group-hover:opacity-100 duration-500" />
          </a>
          <a
            href="/"
            className="group ml-10 flex flex-col items-center hover:text-blue-550 duration-300"
          >
            Contact
            <div className="opacity-0 w-10 mt-8 absolute border-b-2 border-blue-550 group-hover:opacity-100 duration-500" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
