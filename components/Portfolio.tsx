// components/Portfolio.tsx
import { SiPolymerproject } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import portfolioData from "../data/portfoliodata";

export default function Portfolio() {
  return (
    <section className="flex flex-col text-center items-center justify-center">
      <div className="flex flex-col text-center items-center justify-center sm:mt-10 py-10">
        <SiPolymerproject className="text-teal-600 text-6xl " />
        <h3 className="text-teal-600 text-4xl mb-4 py-1 dark:text-white">
          Portfolio
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          This is a list of my personal web projects, they contain{" "}
          <span className="text-teal-500">dynamic features</span> and are{" "}
          <span className="text-teal-500">mobile responsive</span>. My
          professional projects within my previous jobs are non-public. You
          can find projects on other personal applications on my
          <a href="https://github.com/Nwanne-san" className="text-teal-500">
            {" "}
            Github{" "}
          </a>
          for example{" "}
          <span className="text-teal-500">
            {" "}
            Web Applications, Mobile Applications, Machine Learning Projects
            etc.{" "}
          </span>
          I work daily on new projects so feel free to contact me if you
          want a collaboration. &#128578;
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {portfolioData.map((project) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              src={project.imgSrc}
              alt={project.alt}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold">{project.title}</p>
              <span>{project.description}</span>
            </div>
          </a>
        ))}
      </div>
      <Link href="https://github.com/Nwanne-san" className="">
        <a className="text-teal-600 text-xl underline hidden mb-4 py-1 dark:text-white sm:flex items-center">
          View More Projects{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-5 ml-1 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </Link>
    </section>
  );
}
