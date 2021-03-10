import React from 'react';
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-2/5">
        <p className="text-6xl mb-5 ">Ana Torres</p>
        <p className="bg-blue-550 text-gray-900 uppercase max-w-max px-5 py-1 rounded-lg text-xs font-semibold font-serif mb-10">
          Front-End Developer
        </p>
        <p className="text-gray-400 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-between w-3/5">
          <div className="group rounded-full w-10 h-10 p-2 cursor-pointer">
            <FiGithub
              size="24"
              className="group-hover:text-blue-550 duration-300"
            />
          </div>
          <div className="group rounded-full w-10 h-10 p-2 cursor-pointer">
            <FiLinkedin
              size="24"
              className="group-hover:text-blue-550 duration-300"
            />
          </div>
          <div className="group rounded-full w-10 h-10 p-2 cursor-pointer">
            <FiCodepen
              size="24"
              className="group-hover:text-blue-550 duration-300"
            />
          </div>
          <div className="group rounded-full w-10 h-10 p-2 cursor-pointer">
            <FiInstagram
              size="24"
              className="group-hover:text-blue-550 duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
