import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import skills from "../data/skills";

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
}

 const Nav: React.FC<NavProps> = ({ darkMode, toggleDarkMode, navOpen, setNavOpen }) => {
  return (
    <section className="scroll-smooth">
      <nav className="md:py-10 py-4 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">Nwanne</h1>
        <ul className="flex items-center">
          <li>
            <button className="focus:outline-none" onClick={toggleDarkMode}>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </button>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="https://drive.google.com/file/d/1GYPXBTMNX5xgiShKTQZd08YE3ODI25L0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume 
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center px-4 sm:px-10">
        <h2 className="text-4xl py-2 text-indigo-600 font-medium dark:text-indigo-400 md:text-6xl">
          Nwanne Nnamani
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl hidden md:block">
          Frontend Web Developer
        </h3>
        <h3 className="text-xl py-2 dark:text-white md:text-3xl md:hidden">
          Full-stack Developer Software Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I'm a web developer from Nigeria with a passion for Full-stack
          Development and Artificial Intelligence. I really enjoy building
          digital products that are innovative, performant, scalable, and
          globally accessible.
        </p>
        <div className="text-5xl flex justify-center gap-10 md:gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/Nwanne-san"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:text-indigo-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />
          </a>
          <a
            href="https://linkedin.com/in/nwanne-nnamani-1b0a03273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hover:text-indigo-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />
          </a>
          <a
            href="https://twitter.com/nwabunwannnee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle className="hover:text-indigo-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nav;
