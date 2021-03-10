import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiPhotoshop,
} from 'react-icons/di';

const Works: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-2/5">
        <p className="text-6xl w-96 mb-5 ">Works</p>
        <p className="text-gray-400 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 mt-5 flex flex-col ">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9b8ff468195687.5b54c76210dc2.jpg"
              alt="Flores"
            />
            <div className="w-48 h-48 absolute bg-gradient-to-b from-transparent via-transparent to-black opacity-80">
              <div className="flex absolute bottom-2 left-2">
                <DiHtml5 className="mr-1 hover:py-0.5 duration-200" size="26" />
                <DiCss3 className="mr-1 hover:py-0.5 duration-200" size="26" />
                <DiJsBadge
                  className="mr-1 hover:py-0.5 duration-200"
                  size="24"
                />
                <DiReact className="mr-1 hover:py-0.5 duration-200" size="26" />
                <DiPhotoshop
                  className="mr-1 hover:py-0.5 duration-200"
                  size="26"
                />
              </div>
            </div>
          </div>
          <p className="group text-white hover:text-blue-550 duration-200">
            <span className="hidden mx-2 group-hover:inline">&lt;</span>
            Flores
            <span className="hidden mx-2 group-hover:inline">&gt;</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Works;
