import React from 'react';
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Skills: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-2/5">
        <p className="text-6xl w-96 mb-5 ">Skills & Experience</p>
        <p className="text-gray-400 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <a
          href="https://www.linkedin.com/in/anabrtorres/"
          target="blank"
          className="group flex justify-center items-center max-w-max rounded-full bg-blue-550 px-4 py-2 text-gray-900 cursor-pointer hover:bg-blue-450 duration-300 "
        >
          <FiLinkedin size="18" className="mr-3" />
          <p className="font-semibold text-sm uppercase">
            Ver perfil no LinkedIn
          </p>
        </a>
      </div>
    </>
  );
};

export default Skills;
